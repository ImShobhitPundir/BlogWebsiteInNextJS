import React from "react";
import Link from "next/link";

const CategorySliderTop = ({cats}) => {
  return (
    <div className="md:max-w-full max-w-[400px] w-full overflow-x-auto overflow-scrolling-touch text-sm text-gray-500 border-b p-5 pb-2 px-10 sticky top-0 bg-white z-0">
      {/* <button className="flex-none px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
              &lt;
            </button> */}
      <div className="flex space-x-4 ">
        {cats.map((cat) => (
          <Link href={`/${cat.url}`} key={cat.id}>
            <span className="px-2 py-1 ">{cat.name}</span>
          </Link>
        ))}
      </div>
      {/* <button className="flex-none px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
              &gt;
            </button> */}
    </div>
  );
};

export default CategorySliderTop;
