import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { navVariants } from "@/utils/motion";
import Link from "next/link";

export default function Nav() {
  const [isNav, setIsNav] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestionBox, setIsSuggestionBox] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        getSuggestionResult();
      } else {
        setSuggestionData([]);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestionResult = async () => {
    const data = await fetch(
      `http://spundir.in/l9_blog/api/blog/search/${searchQuery}`
    );
    const result = await data.json();
    setSuggestionData(result.blogs);
  };

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
    <div className="md:flex justify-between bg-white top-0 border-b relative place-content-center">
      <div className="flex justify-between p-5">
        <Link href="/" className="flex">
          <img src="/sp-logo.png" alt="" width={40} />
          <h4 className="font-bold text-xl text-gray-900 ml-4 md:block hidden">
            Shobhit Pundir
          </h4>
        </Link>
        <div className="ml-2 relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100  p-1 px-3 pl-8 rounded-2xl focus:border focus:border-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSuggestionBox(true)}
            onBlur={() =>
              setTimeout(() => {
                setIsSuggestionBox(false);
              }, 200)
            }
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 17L21 21"
                stroke="#847F7F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#847F7F"
                strokeWidth="2"
              />
            </svg>
          </div>
          {isSuggestionBox && suggestionData.length > 0 && (
            <div>
              <div className="absolute inset-y-0 left-0 top-10 pl-3 flex items-center z-[100]">
                <svg
                  fill="#fff"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21,21H3L12,9Z" style={{strokeWidth:.4, stroke:"gray"}}/>
                </svg>
              </div>
              <ul className="max-h-[300px] md:w-[300px] w-full md:left-auto left-1  overflow-y-auto  bg-white border absolute z-[99] mt-3 rounded-xl py-2  shadow-xl ">
                {suggestionData.map((data,index) => (
                  <Link href={`/article/${data.url}`} key={index}>
                    <li className="border-b p-2 text-sm hover:bg-gray-200">
                      {data.title}
                      <p className="font-bold text-sm">{data.category_name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {isNav ? (
          <span className="md:hidden block cursor-pointer">
            <img
              src="/nav.png"
              alt="navigation"
              width="30px"
              height="30px"
              name="menu"
              onClick={() => handleClick(this)}
            />
          </span>
        ) : (
          <span className="md:hidden block cursor-pointer">
            <img
              src="/cross.png"
              alt="navigation"
              width="28px"
              height="28px"
              name="menu"
              onClick={() => handleClick(this)}
            />
          </span>
        )}
      </div>

      <ul className="md:flex md:space-x-7  md:static absolute bg-white md:w-auto w-full md:opacity-100 opacity-0  transition-all ease-in duration-100 pr-5 md:shadow-none shadow-xl z-[999]">
        <li className="md:px-0 px-5 md:py-5 py-1 border-t ">
          <Link href="/">Home</Link>
        </li>
        <li className="md:px-0 px-5 md:py-5 py-1">
          <Link href="/about">About</Link>
        </li>
        <li className="md:px-0 px-5 md:py-5 py-1">Work</li>
        <li className="md:px-0 px-5 md:py-5 py-1">Contact</li>
      </ul>
    </div>
  );
}
