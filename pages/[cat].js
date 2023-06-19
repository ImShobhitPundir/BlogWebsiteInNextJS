import { useState, useEffect } from "react";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Shimmer from "@/components/Shimmer";
import CategorySliderTop from "@/components/CategorySliderTop";

export default function Index({ posts, catResult, catUrl, topResult }) {
  const [isLoading, setIsLoading] = useState(true);
  const { cats } = catResult;

  useEffect(() => {
    setIsLoading(false); 
  }, []);

  return (
    <>
      <Head>
        <title>{posts[0].category_name} | Blog</title>
      </Head>
      <div className="grid md:grid-cols-12 gred-cols flex">
        <div className="col-span-8 ">

        <CategorySliderTop cats={cats} catUrl={catUrl}/>
          <div
            id="main"
            className="md:max-h-[950px] flex-none  overflow-hidden hover:overflow-y-auto p-5 md:px-10 "
          >
            <div id="content">
              {posts?.map((post) => (
                <Link href={`/article/${post.url}`} key={post.id}>
                  <BlogCard post={post} cats={cats} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 col-span-8 ">
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
