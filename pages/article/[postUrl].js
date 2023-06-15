import { useState, useEffect } from "react";
import Head from "next/head";
import { fDate, fToNow } from "@/utils/formatTime";
import { readTime, removeHtml, wordsLimit } from "@/utils/formatString";
import { ContentWithHtmlTag } from "@/components/ContentWithHtmlTag";
import BottomBlogCard from "@/components/BottomBlogCard";
import Link from "next/link";
import Shimmer from "@/components/Shimmer";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";

export default function SingleArticle({ post, relatedPost }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(false); // Set loading state to false after initial render
  }, []);

  useEffect(() => {
    //const contentDiv = document.getElementById("content");
    //const lastPost = contentDiv.querySelector("a:last-child");
    function handleProgress() {
      const contentDiv = document.getElementById("content");
      const totalHeight =
      contentDiv.scrollHeight - window.innerHeight + 200;
      const currentHeight = window.scrollY;
      const scrollPercentage = (currentHeight / totalHeight) * 100;
      setProgress(Math.round(scrollPercentage));
    }
    addEventListener("scroll", handleProgress);
    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, []);

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <>
      <Head>
        <title>{post.blog.title}</title>
      </Head>
      {/* Progress Bar */}

      <StickyNav progress={progress} />
      <div className="px-10 py-4 flex justify-center">
        <div className="max-w-[800px]">
          <div id="content">
            <h1 className="font-extrabold md:text-5xl text-3xl text-left my-4 text-gray-800">
              {post.blog.title}
            </h1>
            <div className="mt-6 border-y p-3 text-gray-500">
              <Link href={`/${post.blog.category_url}`}>
                <span className="">{post.blog.category_name}</span>
              </Link>{" "}
              |{" "}
              <span>
                {readTime(
                  post.blog.short_description.length +
                    post.blog.long_description.length
                )}{" "}
                Min Read
              </span>{" "}
              | <span>{fDate(post.blog.date)}</span>
            </div>

            <img
              src={`http://spundir.in/l9_blog/storage/blog/${post.blog.image1}`}
              alt="Blog Image"
              className="object-cover w-full my-10"
            />

            <div className="text-left">
              <ContentWithHtmlTag content={post.blog.short_description} />
              <br />
            </div>

            <div className="text-left">
              <ContentWithHtmlTag content={post.blog.long_description} />
            </div>
            <div>
              {post.blogDetails.length > 0
                ? post.blogDetails.map((postDetails) => (
                    <div key={postDetails.id}>
                      <br />
                      <ContentWithHtmlTag
                        content={postDetails.description}
                        image={postDetails.image}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          {/* Related post */}
          <div className="border-t mt-10 pt-10">
            <h3 className="font-extrabold text-xl">Related Post</h3>
            <div className="grid md:grid-cols-2 gred-cols gap-7">
              {relatedPost.length > 0
                ? relatedPost.map((post, index) =>
                    index < 2 ? (
                      <Link href={`/article/${post.url}`} key={post.id}>
                        <BottomBlogCard post={post} />
                      </Link>
                    ) : null
                  )
                : null}
            </div>
          </div>
          {/* End Related post */}
        </div>
      </div>
    </>
  );
}

SingleArticle.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const url = params.postUrl;

  const data = await fetch(`http://spundir.in/l9_blog/api/pblog/single/${url}`);
  const result = await data.json();

  const catID = result.blog.category_id;

  const retlatedData = await fetch(
    `http://spundir.in/l9_blog/api/pblog/related/${catID}`
  );
  const relatedPost = await retlatedData.json();

  return {
    props: {
      post: result,
      relatedPost,
    },
  };
}
