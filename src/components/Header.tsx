import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <ul className="flex space-x-6">
          <li><Link href="#about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link href="#skills" className="hover:text-blue-600 transition">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600 transition">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
