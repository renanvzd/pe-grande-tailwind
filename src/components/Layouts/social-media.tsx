import FacebookIcon from "@/assets/images/Facebook.svg";
import YoutubeIcon from "@/assets/images/YouTube.svg";
import InstagramIcon from "@/assets/images/Instagram.svg";

type SocialMediaItems = {
  menuTitle: string;
  href: string;
  icon: string;
};

export const SocialMedia: SocialMediaItems[] = [
  {
    menuTitle: 'Facebook',
    href: '/',
    icon: FacebookIcon,
  },
  {
    menuTitle: 'YouTube',
    href: '/',
    icon: YoutubeIcon,
  },
  {
    menuTitle: 'Instagram',
    href: '/',
    icon: InstagramIcon,
  },
];
