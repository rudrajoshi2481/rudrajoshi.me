"use client";

import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Nanum_Pen_Script } from "next/font/google";

const NanumFont = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] });

function Appbar() {
  const isLargerThan800 = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <div className="fixed top-0 w-full z-50 py-2 appbar">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div>
          <span
            className={`${NanumFont.className} text-3xl cursor-pointer`}
          >
            Rudhra Joshi .
          </span>
        </div>
        {isLargerThan800 ? (
          <div>
            <ul className="flex gap-6 list-none">
              <li>
                <Link href="https://blogs.rudhrajoshi.me" target="_blank">
                  <span className="cursor-pointer hover:underline">Blogs</span>
                </Link>
              </li>
              {/* <li className="cursor-pointer hover:underline">Projects</li>
              <li className="cursor-pointer hover:underline">About me</li> */}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Appbar;
