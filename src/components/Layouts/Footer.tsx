import Image from 'next/image';
import { SocialMedia } from "./social-media";

export default function Footer() {
  const socialMedia = SocialMedia;

  return (
    <footer className="bg-header-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between py-12 lg:py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-x-6 md:order-2">
            <div>
              <p className='flex items-center text-center md:invisible md:text-base text-lg'>Visite nossas redes sociais</p>
            </div>
            <div className='flex flex-row gap-3 pt-4 md:pt-0'>
              {socialMedia.map((item, index) => (
                <a key={index} href={item.href}>
                  <Image className='h-9 w-9 md:h-7 md:w-7' src={item.icon} alt={item.menuTitle} />
                </a>
              ))}
            </div>
          </div>
          <p className="mt-8 text-base text-center text-black md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Moradas do Pé Grande, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
