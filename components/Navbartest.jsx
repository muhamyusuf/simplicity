import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold text-cyan-600 ">LOGO</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="text-gray-700 rounded-md focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src="/menu.svg"
                      alt="menu"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center h-screen md:h-auto md:flex ">
                <li className="py-2 pb-6 text-xl text-center text-white border-b-2 border-purple-900 md:px-6 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="px-6 py-2 pb-6 text-xl text-center text-white border-b-2 border-purple-900 md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="px-6 py-2 pb-6 text-xl text-center text-white border-b-2 border-purple-900 md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="px-6 py-2 pb-6 text-xl text-center text-white border-b-2 border-purple-900 md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
