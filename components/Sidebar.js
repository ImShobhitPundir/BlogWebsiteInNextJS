import React from "react";
import Link from "next/link";

function Sidebar({ posts, cats }) {
  return (
    <div className="border-l h-auto p-3 w-full">
      <h2 className="font-bold text-xl">Top Stories:</h2>
      <ul className="p-3 border-b">
        {posts.map((post) => (
          <li className="mt-3 text-sm" key={post.id}>
            <p className="">{post.category_name}</p>
            <Link href={`/article/${post.url}`}>
              <p className="font-bold ">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-lg my-3">Recommended Topics</h2>
      <div className="flex flex-wrap">
        {cats.map((cat) => (
          <Link href={`/${cat.url}`} key={cat.id}>
            <span className="bg-gray-100 px-3 py-1 rounded-xl block m-2">{cat.name}</span>
          </Link>
        ))}

        <span></span>
      </div>
    </div>
  );
}

export default Sidebar;
