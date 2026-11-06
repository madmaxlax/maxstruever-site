import { useEffect, useState } from 'react';

// Portfolio and referral content lives on public Trello boards, read as JSON at runtime.
export const PORTFOLIO_BOARD = 'https://trello.com/b/bgLwimyQ/maxs-online-portfolio.json';
export const REFERRALS_BOARD = 'https://trello.com/b/sYeK1UkI/max-struever-referral-links.json';

export interface TrelloLabel {
  id: string;
  name: string;
  color: string;
}

export interface TrelloAttachment {
  id: string;
  name: string;
  url: string;
  previews?: { url: string; height: number; width: number }[];
}

export interface TrelloCard {
  id: string;
  name: string;
  desc: string;
  due: string | null;
  closed: boolean;
  labels: TrelloLabel[];
  attachments: TrelloAttachment[];
  idAttachmentCover: string | null;
}

export interface TrelloBoard {
  cards: TrelloCard[];
  labels: TrelloLabel[];
}

export function useTrelloBoard(url: string) {
  const [board, setBoard] = useState<TrelloBoard | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp.status)))
      .then((data: TrelloBoard) => setBoard({ ...data, cards: data.cards.filter((c) => !c.closed) }))
      .catch((err) => {
        if (!controller.signal.aborted) {
          console.error('Trello board failed to load', err);
          setError(true);
        }
      });
    return () => controller.abort();
  }, [url]);

  return { board, loading: !board && !error, error };
}

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

// Largest preview, or the raw URL for image attachments without previews.
export const attachmentImage = (att?: TrelloAttachment) => att?.previews?.at(-1)?.url ?? att?.url;

export const formatMonth = (iso: string, month: 'short' | 'long' = 'short') =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month });
