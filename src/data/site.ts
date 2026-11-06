import type { IconType } from 'react-icons';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpotify, FaXTwitter } from 'react-icons/fa6';
import { SiGooglescholar } from 'react-icons/si';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Order is priority. The header hides items from the end first when space runs out.
export const navItems: NavItem[] = [
  { label: 'Publications', href: '/publications' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'City Recs', href: '/city-recs' },
  { label: 'Referrals', href: '/referrals' },
  { label: 'Resume', href: 'https://www.linkedin.com/in/maxstruever/', external: true },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maxstruever/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/madmaxlax', icon: FaGithub },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=amXd960AAAAJ&hl=en',
    icon: SiGooglescholar,
  },
  { label: 'Instagram', href: 'https://www.instagram.com/dadmaxlax/', icon: FaInstagram },
  { label: 'X', href: 'https://x.com/dadmaxlax', icon: FaXTwitter },
  { label: 'Medium', href: 'https://medium.com/@madmaxlax', icon: FaMedium },
  { label: 'Spotify', href: 'https://open.spotify.com/user/126021708?si=oKlU_c_dSqKQi-zFbI5kvg', icon: FaSpotify },
  { label: 'Facebook', href: 'https://www.facebook.com/max.struever', icon: FaFacebook },
];

// Header shows only these; the rest live on the home page and footer.
export const headerSocialLinks = socialLinks.slice(0, 2);

// City photos in public/img as <name>.webp (1920px) and <name>-sm.webp (900px)
export const heroImages = ['nyc-bg', 'balt-bg', 'ams-bg', 'ams-bg2', 'ams-bg3'];
