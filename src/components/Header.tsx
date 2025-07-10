import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
      <nav className="container mx-auto px-10 py-4 flex justify-between items-center">
        <div className="flex text-xl font-bold text-blue-500"><p>Port</p><p>folio</p></div>
        <ul className="flex space-x-6">
          <li><Link href="#about" className="hover:text-blue-900 transition text-blue-500">About</Link></li>
          <li><Link href="#skills" className="hover:text-blue-900 transition text-blue-500">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-blue-900 transition text-blue-500">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-900 transition text-blue-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
