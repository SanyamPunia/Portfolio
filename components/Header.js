import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Link from "next/link"

const Header = () => {
  const { theme, setTheme } = useTheme('dark')
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const navLinks = [
    {
      id: 1,
      routeName: 'Home',
      route: '/',
    },
    {
      id: 2,
      routeName: 'About',
      route: '/about',
    },
    {
      id: 3,
      routeName: 'Music',
      route: '/music',
    },
    {
      id: 4,
      routeName: 'Blogs',
      route: '/blogs'
    }
  ]

  useEffect(() => setMounted(true), []);

  return (
    <div className="items-center flex justify-between py-4 font-bold text-bgBlack dark:text-mainWhite border-b-1 border-lightLinkHover dark:border-divider">
      <div className="flex text-md md:hidden">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.route}>
            <a className={`${router.pathname === link.route ? "text-mainGreen" : 'null'} px-3 py-1 rounded font-mulish cursor-pointer transition hover:bg-lightLinkHover dark:hover:bg-divider`}>
              {link.routeName}
            </a>
          </Link>
        ))}
      </div>

      {mounted && (
        <>
          {theme === 'dark' ? (
            <div className='text-xl'>
              <FaSun className='p-1.5 w-9 h-9 rounded transition ring-mainGreen	 hover:ring cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </div>
          ) : (
            <div className='text-xl'>
              <FaMoon className='p-1.5 w-9 h-9 rounded transition ring-mainPurple hover:ring cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </div>
          )}
        </>
      )}

      <div className='hidden md:inline-block'>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border dark:border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
              <FaBars className='text-lg' />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className=" bg-lightCardHover dark:bg-bgBlack origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2 flex flex-col">
                <Menu.Item>
                  <Link href="/">
                    <a className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>Home</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/about">
                    <a className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>About</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/music">
                    <a className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>Music</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/blogs">
                    <a className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>Blogs</a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default Header