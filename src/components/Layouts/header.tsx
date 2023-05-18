import { useMemo, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
// import Logo from "@/assets/images/fourleaf.svg";
import { MenuHeader } from './header-menus';


export function Header() {
  const [classOn, setClassOn] = useState(false);
  const menusHeader = MenuHeader;

  const router = useRouter();
  const currentPath = useMemo(() => router?.pathname, [router]);

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full bg-primary-background border-b border-gray-800">
        <div className="flex items-center justify-between h-20 mx-auto max-w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8">
          <div className="flex items-center w-auto justify-center mr-5">
            {/* <Image className="w-10 h-10 mr-2" src={Logo} alt="Four Leaf" width={20} height={20} /> */}
            <div className="flex items-center justify-center flex-grow">
              <Link href="/">
                <span className="text-2xl sm:text-4xl md:text-4xl font-bold text-white items-baseline justify-center pr-2 md:pr-12">Template</span>
              </Link>
            </div>
          </div>


          <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
            <div className="menuToggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>

            <nav className="listItems hidden md:flex md:items-center md:justify-end md:flex-1" id="mobile-menu">
              <ul className="flex flex-col md:flex-row gap-12 md:gap-8">
                {menusHeader.map((item, index) =>
                  <li key={index}>
                    <Link href={item.href}>
                      <div
                        className={`flex items-center ${currentPath === `${item.href}`
                          ? "active-menu-header"
                          : "inactive-menu-header"
                          }`}
                      >
                        <span className="text-white-400 hover:text-white">
                          {item.menuTitle}
                        </span>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
              <div className='flex w-full mx-auto justify-center'>
                <Link href="/">
                  <div className="flex mt-10 md:mt-0 items-baseline w-auto sm:w-28 justify-center bg-green-200 rounded-md ml-0 md:ml-12">
                    <div className="flex items-baseline justify-center flex-grow  px-2 py-2">
                      <button className="p-2 md:p-0 md:py-1 text-2xl md:text-xl items-baseline place-items-start font-bold text-black-400">Lisbon</button>
                    </div>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header >
    </>
  )
}