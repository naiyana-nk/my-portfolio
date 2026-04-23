"use client";

import { use, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reusable classes for the floating effect
  const navLinkStyles =
    "text-sm/6 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:text-indigo-400 inline-block";

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 transition-transform duration-300 hover:scale-110"
          >
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className={navLinkStyles}>
            Home
          </a>
          <a href="/project" className={navLinkStyles}>
            Projects
          </a>
          <a href="#" className={navLinkStyles}>
            Contact
          </a>
        </PopoverGroup>

        {/* Desktop GitHub Link */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://github.com/naiyana-nk" target="_blank" className={`group ${navLinkStyles}`}>
            My GitHub{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6 flex flex-col">
                {/* Applied floating styles to mobile links as well */}
                <a href="/" className={`w-fit ${navLinkStyles} py-2`}>
                  Home
                </a>
                <a href="/project" className={`w-fit ${navLinkStyles} py-2`}>
                  Projects
                </a>
                <a href="#" className={`w-fit ${navLinkStyles} py-2`}>
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a href="https://github.com/naiyana-nk" target="_blank" className={`w-fit group ${navLinkStyles} py-2`}>
                  My GitHub{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
