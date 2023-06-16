import { useState, useEffect } from "react";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Shimmer from "@/components/Shimmer";

export default function Index({ posts, catResult, catUrl, topResult }) {
  const [isLoading, setIsLoading] = useState(true);
  const { cats } = catResult;

  useEffect(() => {
    setIsLoading(false); // Set loading state to false after initial render
  }, []);

  // if(isLoading){
  //   return <Shimmer/>
  // }
  return (
    <>
      <Head>
        <title>{posts[0].category_name} | Blog</title>
      </Head>
      <div className="grid md:grid-cols-12 gred-cols flex">
        <div className="col-span-8 ">
        <div className="md:max-w-full max-w-[400px] overflow-x-auto text-sm text-gray-500 border-b p-5 pb-2 px-10 sticky top-0 bg-white ">
            {/* <button className="flex-none px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
              &lt;
            </button> */}
            <div className="flex space-x-4 ">
              {cats.map((cat) => (
                <Link href={`/${cat.url}`} key={cat.id}>
                  {catUrl === cat.url ? (
                    <span className="px-2 py-1 text-black font-bold">
                      {cat.name}
                    </span>
                  ) : (
                    <span className="px-2 py-1 ">{cat.name}</span>
                  )}
                </Link>
              ))}
            </div>
            {/* <button className="flex-none px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
              &gt;
            </button> */}
          </div>
          <div
            id="main"
            className="md:max-h-[950px] flex-none  overflow-hidden hover:overflow-y-auto p-5 px-10"
          >
            <div id="content">
              {posts.map((post) => (
                <Link href={`/article/${post.url}`} key={post.id}>
                  <BlogCard post={post} cats={cats} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <Sidebar posts={topResult} cats={cats} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const url = params.cat;

  const data = await fetch(
    `https://spundir.in/l9_blog/api/pblog/category/${url}`
  );
  const result = await data.json();

  const topData = await fetch("https://spundir.in/l9_blog/api/pblog/list/0/10");
  const topResult = await topData.json();

  const catData = await fetch("https://spundir.in/l9_blog/api/pcats");
  const catResult = await catData.json();

  return {
    props: {
      posts: result,
      catResult: catResult,
      catUrl: url,
      topResult,
    },
  };
}
