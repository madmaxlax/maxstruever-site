import { useState } from 'react';
import { useNavigationType, useSearchParams } from 'react-router';

// Filter text mirrored to ?q= so filtered views can be shared as links.
// Local state drives the input. Router 8 applies URL updates in a transition,
// so a controlled input bound straight to the URL drops keystrokes.
export function useQueryFilter() {
  const [params, setParams] = useSearchParams();
  const navigationType = useNavigationType();
  const urlValue = params.get('q') ?? '';
  const [value, setValue] = useState(urlValue);

  // Our own writes are REPLACE. Back/forward (POP) and links (PUSH) win over local state.
  const [seenUrlValue, setSeenUrlValue] = useState(urlValue);
  if (urlValue !== seenUrlValue) {
    setSeenUrlValue(urlValue);
    if (navigationType !== 'REPLACE') setValue(urlValue);
  }

  const update = (next: string) => {
    setValue(next);
    setParams(
      (prev) => {
        if (next) prev.set('q', next);
        else prev.delete('q');
        return prev;
      },
      { replace: true, preventScrollReset: true }
    );
  };

  return [value, update] as const;
}
