import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import userImg from "../assets/image/user2.jpg";
import logoImg from "../assets/image/logo.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InsNavbar() {
  const clToken = () => {
    window.localStorage.removeItem("token");
  };
  return (
    <Disclosure as="nav" className="bg-indigo-700 shadow-3xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-90f px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={logoImg}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      className="text-gray-300 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
                      to="/inspector">
                      Bosh sahifa
                    </NavLink>
                    <NavLink
                      className="text-gray-300 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to="/indicators">
                      Indicatorlar
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="/inspector"
                  className="relative rounded-full  p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Refresh</span>
                  <ArrowPathIcon className="h-7 w-7" aria-hidden="true" />
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={userImg}
                        alt="user"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/insprofile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Profile
                          </NavLink>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            onClick={clToken}
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Chiqish
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink
                className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                to="/inspector">
                Home
              </NavLink>
              <NavLink
                className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                to="/indicators">
                Samaradorlik
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
