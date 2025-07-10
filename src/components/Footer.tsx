export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <p>© {currentYear} My Portfolio. All rights reserved.</p>
        <p className="mt-2 text-gray-400 text-sm">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
