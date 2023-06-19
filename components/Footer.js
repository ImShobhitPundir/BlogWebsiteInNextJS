import { motion } from "framer-motion";
import { useState } from "react";
import { navVariants } from "@/utils/motion";
import Link from "next/link";

export default function Footer() {
    const [isNav, setIsNav] = useState(true);

    function handleClick(e) {
      setIsNav(!isNav);
      let list = document.querySelector("ul");
      if (isNav) {
       // list.classList.add("top-[65px]");
        list.classList.add("opacity-100");
      } else {
       // list.classList.remove("top-[65px]");
        list.classList.remove("opacity-100");
      }
    }
  return (
    <div  className="flex border-t ">          

        <ul className="flex gap-4 m-auto">
          <li className="md:px-0 px-5 md:py-5 py-1 ">
          <Link href="/">
            Home
          </Link>
          </li>
          <li className="md:px-0 px-5 md:py-5 py-1"><Link href="/about">About</Link></li>
          <li className="md:px-0 px-5 md:py-5 py-1"><Link href="/contact">Contact</Link></li>
        </ul>

      </div>
  );
}
