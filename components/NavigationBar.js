"use client";

import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
// import logo from "@/data/images/logo.png";
import logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { siteMetaData } from '@/data/constants';
import { navigationLinks } from '@/data/utils/navigationLinks';

const navigation = navigationLinks;

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 justify-between">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-between md:rounded-md lg:rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigationLinks.map((links) => (
              <a key={links.title} target={links.target} href={links.href} className="text-sm font-semibold leading-6 text-white">
                {links.title}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed rounded-lg inset-y-0 right-0 z-50 w-full bg-gray-900 overflow-y-auto md:border-l-[0.5px] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="text-green-300 space-y-2 py-6 border-b-[0.5]">
                  {navigation.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="-mx-3 border-[1px] border-transparent text-center block rounded-md px-3 py-2 text-base font-semibold leading-7 text-[#1fff9e] hover:border-[#1fff9e]"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
                <hr />
                <div className="items-center justify-center flex text-[12px] gap-2 py-6 text-center text-gray-500">
                  <p>{siteMetaData.author}</p>
                  <h1 className='text-2xl'>·</h1>
                  <p>© {siteMetaData.copyRightYear}</p>
                  <h1 className='text-2xl'>·</h1>
                  <a href={siteMetaData.copyRightNameWrapperURL}>{siteMetaData.copyRightName}</a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}