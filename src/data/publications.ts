// Publications, talks and featured links. Newest first.
// Add an item by adding one object here. The homepage shows the first few.

export type PublicationType = 'Article' | 'Paper' | 'Talk' | 'Project';

export interface Publication {
  title: string;
  url: string;
  outlet: string;
  date: string; // ISO yyyy-mm-dd
  type: PublicationType;
  authors?: string;
  summary: string;
  image: string;
  links?: { label: string; href: string }[];
}

export const publications: Publication[] = [
  {
    title: 'Strategy in Motion: How AI Is Supercharging War Gaming',
    url: 'https://www.bcg.com/publications/2026/ai-war-gaming-stress-test-strategy',
    outlet: 'BCG',
    date: '2026-11-03',
    type: 'Article',
    authors: "Elton Parker, Nick D'Intino, Amy MacDougall, Max Struever",
    summary:
      'How AI agents playing competitors, customers and regulators let leaders stress-test a strategy across dozens of scenarios before a live war game. Built on the multi-agent simulation tool I helped create.',
    image: '/img/publications/ai-war-gaming.webp',
  },
  {
    title: 'Testing the Tests: How to Measure RAG Evaluation Completeness',
    url: 'https://www.bcg.com/x/the-multiplier/how-measure-rag-evaluation-completeness',
    outlet: 'BCG X',
    date: '2025-10-01',
    type: 'Article',
    authors: 'Max Struever, Noah Broestl, Hersh Gupta, Adel Abdalla, Rajprakash Bale',
    summary:
      'RAG evals measure performance on the questions you have, not whether those questions cover what the model should know. Semantic test coverage closes that gap.',
    image: '/img/publications/rag-testing-tests.webp',
  },
  {
    title: 'From Dev Speed to Business Impact: The Case for AI-Assisted Coding and Generative Engineering',
    url: 'https://www.bcg.com/x/the-multiplier/ai-assisted-coding-generative-engineering',
    outlet: 'BCG X',
    date: '2025-08-12',
    type: 'Article',
    authors: 'Max Struever, Matthew Kropp, Julie Bedard',
    summary:
      'Why leaders should adopt GenAI coding tools early, with clear guardrails, a maturity framework and deliberate changes in engineering behavior.',
    image: '/img/publications/dev-speed.webp',
  },
  {
    title: 'Methodological Framework for Quantifying Semantic Test Coverage in RAG Systems',
    url: 'https://arxiv.org/abs/2510.00001',
    outlet: 'arXiv',
    date: '2025-08-13',
    type: 'Paper',
    authors: 'Noah Broestl, Adel Nasser Abdalla, Rajprakash Bale, Hersh Gupta, Max Struever',
    summary:
      'A method for measuring how well a test set covers the semantic space of a RAG knowledge base, to surface gaps before deployment.',
    image: '/img/publications/rag-coverage.svg',
  },
  {
    title: 'Strategizing with AI: How leaders can upgrade strategic planning with multi-agent platforms',
    url: 'https://fortune.com/2025/07/11/ai-artificial-intelligence-multi-agent-platforms-strategy-planning/',
    outlet: 'Fortune',
    date: '2025-07-11',
    type: 'Article',
    authors: 'François Candelon, Leonid Zhukov, Max Struever, Alan Iny, Elton Parker',
    summary:
      'Research with BCG Henderson Institute and BCG X on an LLM-powered multi-agent simulation platform for strategic planning and war gaming.',
    image: '/img/publications/fortune-strategizing.webp',
  },
  {
    title: 'Scaling GenAI Evaluation: BCG X Tech Talk at MIT CSAIL',
    url: 'https://l.maxstruever.com/T2NQYCi',
    outlet: 'MIT CSAIL',
    date: '2025-06-26',
    type: 'Talk',
    authors: 'Max Struever, Harnish Jani, Arun Ravindran',
    summary:
      'Smarter coverage metrics, application-specific benchmarks and LLM evaluation frameworks for taking RAG to enterprise scale. The link has the live demo, blog post and paper.',
    image: '/img/publications/mit-csail-talk.webp',
    links: [
      { label: 'LinkedIn post', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7344122379649867777/' },
    ],
  },
  {
    title: 'Stop chasing AI benchmarks—create your own',
    url: 'https://fortune.com/2025/04/04/artificial-intelligence-ai-performance-benchmarks-evaluation-frameworks/',
    outlet: 'Fortune',
    date: '2025-04-04',
    type: 'Article',
    authors: 'François Candelon, Theodoros Evgeniou, Max Struever, David Zuluaga Martínez',
    summary:
      'Public leaderboards mislead business decisions. Companies get more from evaluation frameworks built around their own use cases.',
    image: '/img/publications/fortune-benchmarks.webp',
  },
  {
    title: "Frederick's of Baltimore: Artifacts and Architectural Salvage",
    url: 'https://fredericks.studio',
    outlet: 'fredericks.studio',
    date: '2024-11-15',
    type: 'Project',
    summary: 'Website I made for a local Baltimore architectural salvage shop.',
    image: '/img/publications/fredericks.webp',
  },
  {
    title: 'Turning Ideas into Products Faster: The Minimum Viable Architecture Approach',
    url: 'https://www.bcg.com/x/the-multiplier/minimum-viable-architecture-in-product-development',
    outlet: 'BCG X',
    date: '2024-08-13',
    type: 'Article',
    authors: 'Max Struever, Mike Wzorek',
    summary:
      'Skip the long upfront architecture phase. Build only what the launch needs while keeping a path to the long-term target design.',
    image: '/img/publications/mva.webp',
  },
];

export const profileLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maxstruever/details/featured/' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=amXd960AAAAJ&hl=en' },
];

const byDateDesc = (a: Publication, b: Publication) => b.date.localeCompare(a.date);

export const writing = publications.filter((p) => p.type !== 'Project').sort(byDateDesc);
export const projects = publications.filter((p) => p.type === 'Project').sort(byDateDesc);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
