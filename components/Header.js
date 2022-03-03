import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="items-center flex justify-between py-4 font-bold text-bgBlack dark:text-mainWhite border-b-1 border-lightLinkHover dark:border-divider">
      <div className="flex text-md md:hidden">
        <a className="px-3 py-1 rounded font-mulish cursor-pointer transition hover:bg-lightLinkHover dark:hover:bg-divider" href="/about">About</a>
        <a className="px-3 py-1 rounded font-mulish cursor-pointer transition hover:bg-lightLinkHover dark:hover:bg-divider" href="/music">Music</a>
        <a className="px-3 py-1 rounded font-mulish cursor-pointer transition hover:bg-lightLinkHover dark:hover:bg-divider" href="/dashboard">Dashboard</a>
        <a className="px-3 py-1 rounded font-mulish cursor-pointer transition hover:bg-lightLinkHover dark:hover:bg-divider" href="/contact">Contact Me</a>
      </div>

      <div className='flex items-center'>
        {/* <a href="/" className="px-2 py-1 font-mulish text-lg cursor-pointer">Sanyam</a> */}
        <div className="switch_box box_3" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <div className="toggle_switch">
            <input type="checkbox" className="switch_3" />
            <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 80">
              <path className="outer-ring" d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z" fill="none" stroke="#233043" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3" />
              <path className="is_checked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z" />
              <path className="is_unchecked" d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z" />
            </svg>
          </div>
        </div>
      </div>

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
                  <a href="/about" className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>About</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="/music" className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>Music</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="/dashboard" className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>Dashboard</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="/contact" className='font-mulish p-3 text-lg transition rounded-md hover:bg-lightLinkHover dark:hover:bg-[#363636]'>Contact Me</a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div >
  )
}

export default Header
