"use client";

import Link from "next/link";
import { SIDENAV_ITEMS } from "./constans";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <main className="fixed top-0 left-0 h-screen w-60 shadow-lg bg-slate-950 p-8">
      <nav>
        <div className="flex flex-col space-y-10 w-full text-white">
          <h1 className="text-4xl">Hello Stan</h1>
          <SearchBar />
          <div>
            <ul className="space-y-5">
              {SIDENAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="flex items-center space-x-3 p-3 hover:bg-slate-400 hover:text-black rounded-full"
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
