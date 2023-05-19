import { useMemo, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import Facebook from "@/assets/images/Facebook.svg";
import Youtube from "@/assets/images/YouTube.svg";
import Instagram from "@/assets/images/Instagram.svg";
import { MenuHeader } from './header-menus';
import Image from 'next/image';


export function Header() {
  const [classOn, setClassOn] = useState(false);
  const menusHeader = MenuHeader;

  const router = useRouter();
  const currentPath = useMemo(() => router?.pathname, [router]);

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full bg-header-background border-b border-gray-800">
        <div className="flex items-center justify-between h-20 mx-auto max-w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8">
          <div className="flex items-center w-auto justify-center mr-5">
            {/* <Image className="w-10 h-10 mr-2" src={Logo} alt="Four Leaf" width={20} height={20} /> */}
            <div className="flex items-center justify-center flex-grow">
              <Link href="/">
                <span className="text-2xl sm:text-4xl md:text-4xl font-bold text-black items-baseline justify-center pr-2 md:pr-12">Moradas do Pé Grande</span>
              </Link>
            </div>
          </div>


          <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
            <div className="menuToggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>

            <nav className="listItems hidden md:flex md:items-center md:justify-end md:flex-1  max-w-[1000px]" id="mobile-menu">
              <ul className="flex flex-col md:flex-row gap-12 md:gap-8">
                {menusHeader.map((item, index) =>
                  <li key={index} className='w-28 h-20 mx-auto items-center justify-center flex'>
                    <Link href={item.href}>
                      <div
                        className={`flex mx-auto items-center justify-center ${currentPath === `${item.href}`
                          ? "active-menu-header"
                          : "inactive-menu-header"
                          }`}
                      >
                        <span className="hover:text-header text-center">
                          {item.menuTitle}
                        </span>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
              <div className='flex w-full mx-auto justify-center'>
                <div className="flex items-baseline w-auto justify-center rounded-md ml-0 md:ml-12">
                  <div className="flex h-20 w-12 items-center justify-center flex-grow px-2">
                    <Link href="https://www.facebook.com/pousadatramandai" target="_blank" title="Visite nosso Facebook"
                      rel="noreferrer">
                      <Image src={Facebook} alt="Facebook" />
                    </Link>
                  </div>
                  <div className="flex h-20 w-12 items-center justify-center flex-grow  px-2">
                    <Link href="https://www.youtube.com/channel/UCb8Jf1A0laXF7O-b6up1FJg" target="_blank" title="Visite nosso canal"
                      rel="noreferrer">
                      <Image src={Youtube} alt="YouTube" />
                    </Link>
                  </div>
                  <div className="flex h-20 w-12 items-center justify-center flex-grow  px-2">
                    <Link href="https://www.instagram.com/moradas_do_pe_grande_tramandai/" target="_blank" title="Visite nosso Instagram"
                      rel="noreferrer">
                      <Image src={Instagram} alt="Instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header >
    </>
  )
}