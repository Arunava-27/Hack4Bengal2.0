import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {BiSolidDownArrow} from 'react-icons/bi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#6527be] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-violet-900 hover:bg-violet-500">
          Today
            <BiSolidDownArrow className="text-white" size={20} />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#6527be] ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/app/dash-board"
                  className={classNames(
                    active ? 'bg-violet-100 text-violet-900' : 'text-violet-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {props.nameone}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/app/dash-board"
                  className={classNames(
                    active ? 'bg-violet-100 text-violet-900' : 'text-violet-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {props.nametwo}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/app/dash-board"
                  className={classNames(
                    active ? 'bg-violet-100 text-violet-900' : 'text-violet-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {props.namethree}
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-violet-100 text-violet-900' : 'text-violet-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {props.namefour}
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}