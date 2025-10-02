// Shared navigation data for header components

export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export interface SocialMediaLink {
  id: string;
  title: string;
  href: string;
  iconClass: string;
  ariaLabel?: string;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Download Resume',
    href: 'http://resume.maxstruever.com/',
    external: true,
    onClick: () => {
      alert("I don't have a resume I've updated in years, sorry! check out my portfolio");
    },
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'City Recommendations',
    href: '/city-recs',
  },
  {
    label: 'Referral Links',
    href: '/referrals',
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 'github',
    title: 'My Github',
    href: 'https://github.com/madmaxlax',
    iconClass: 'fab fa-github',
    ariaLabel: 'GitHub Profile',
  },
  {
    id: 'instagram',
    title: 'Follow me on instagram',
    href: 'https://www.instagram.com/dadmaxlax',
    iconClass: 'fab fa-instagram',
    ariaLabel: 'Instagram Profile',
  },
  {
    id: 'linkedin',
    title: 'Follow me on LinkedIn',
    href: 'https://www.linkedin.com/in/maxstruever/',
    iconClass: 'fab fa-linkedin',
    ariaLabel: 'LinkedIn Profile',
  },
];
