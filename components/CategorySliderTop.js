import React from "react";
import Link from "next/link";

const CategorySliderTop = ({ cats, catUrl }) => {
  return (
    <div className="md:max-w-full max-w-[400px] w-full overflow-x-auto overflow-scrolling-touch text-sm text-gray-500 border-b p-5 pb-2 px-10 sticky top-0 bg-white z-10">
      <div className="flex space-x-4 ">
        {cats?.map((cat) => (
          <Link href={`/${cat.url}`} key={cat.id}>
            {catUrl === cat.url ? (
              <span className="px-2 py-1 text-black font-bold">{cat.name}</span>
            ) : (
              <span className="px-2 py-1 ">{cat.name}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySliderTop;
