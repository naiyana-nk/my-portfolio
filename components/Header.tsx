import { PopoverGroup } from "@headlessui/react";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold text-white">
            Home
          </a>
          <a href="/project" className="text-sm/6 font-semibold text-white">
            Projects
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            About
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="group text-sm/6 font-semibold text-white">
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
              My GitHub{" "}
              &rarr;
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
