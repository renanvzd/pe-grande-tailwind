import Image from 'next/image';
import { SocialMedia } from "./social-media";
import Whatsapp from "@/assets/images/Whats.svg"

export default function Footer() {
  const socialMedia = SocialMedia;

  return (
    <footer className="bg-header-background" aria-labelledby="footer-heading">
      <div className="footerWhats">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5551984395416&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Morada%3A%20(diga%20qual%20opcao%20do%20site)%20_____%2C%20no%20per%C3%ADodo%20dd%2Fmm%2Faa%20%C3%A0%20dd%2Fmm%2Faa%20para%20o%20n%C3%BAmero%20de%20pessoas%3A%20xx.%20Obrigado!%20(Por%20favor%2C%20complete%20a%20msg%20acima%20antes%20de%20enviar)%20"
          title="Chama no zap"
          rel="noreferrer"

          id="whatsapp"
        >
          <Image src={Whatsapp} alt="Whatsapp" className="md:h-24 md:w-24 h-20 w-20" />
        </a>

      </div>
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
