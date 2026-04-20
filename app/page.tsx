import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen pt-10">
      <h1 className="text-center text-2xl pb-3">Welcome to My Portfolio</h1>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="-m-1.5 p-1.5 block w-fit mx-auto"
        target="_blank"
      >
        <span className="sr-only">Your Company</span>
        <img
          alt=""
          src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          className="h-100 w-auto rounded-md"
        />
      </a>
    </div>
  );
}
