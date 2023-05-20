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
        <div className="flex items-center justify-between h-20 pl-4 md:pl-4 xl:pl-6">
          <div className="flex items-center justify-center mr-5">
            {/* <Image className="w-10 h-10 mr-2" src={Logo} alt="Four Leaf" width={20} height={20} /> */}
            <div className="flex items-center justify-center">
              <Link href="/">
                <span className="text-xl sm md:text-2xl lg:text-xl font-bold text-black items-baseline justify-center pr-2 md:pr-0">Moradas do Pé Grande</span>
              </Link>
            </div>
          </div>


          <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
            <div className="menuToggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>

            <div className='flex md:pr-0 flex-row-reverse'>
              <nav className="listItems md:items-center md:justify-end pr-5" id="mobile-menu">
                <ul className="menu-header flex flex-row gap-3 lg:gap-8">
                  {menusHeader.map((item, index) =>
                    <li key={index} className='w-auto h-10 md:h-20 mx-auto items-center justify-center flex'>
                      <Link href={item.href}>
                        <div
                          className={`flex mx-auto items-center justify-center ${currentPath === `${item.href}`
                            ? "active-menu-header"
                            : "inactive-menu-header"
                            }`}
                        >
                          <span className="hover:text-header text-center md:text-base">
                            {item.menuTitle}
                          </span>
                        </div>
                      </Link>
                    </li>
                  )}
                </ul>


                <div className='flex mx-auto justify-center pl-8'>
                  <div className="flex items-baseline w-auto justify-center rounded-md ml-0 md:ml-0">
                    <div className="flex h-20 w-12 items-center justify-center px-2">
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
        </div>
      </header >
    </>
  )
}