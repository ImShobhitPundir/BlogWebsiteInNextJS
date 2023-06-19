import React from "react";
import { fDate, fToNow } from "@/utils/formatTime";
import { readTime, removeHtml, wordsLimit } from "@/utils/formatString";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function BlogCard({ post }) {
  return (
    <div className="grid grid-cols-12 my-8 border-b pb-10">
      <div className="col-span-10 pr-10">
        <h1 className="text-sm  text-black">
          <span className="text-gray-800">{post.date ? fDate(post.date) : null}</span>
        </h1>
        <h2 className="md:text-[20px] text-[16px] font-extrabold  text-gray-800">{post.title}</h2>
        <div className="mt-2 blogCard-desc font-normal text-md text-gray-800 md:block hidden">
          {/* <p dangerouslySetInnerHTML={{ __html: post.short_description }}></p> */}
          { wordsLimit(removeHtml(post.short_description),150) }
        </div>

        {/* card footer */}
        <div className="mt-5">
          <span className="bg-gray-100 px-3 py-1 rounded-xl ">{post.category_name}</span>
          <span>{readTime(post.short_description.length+post.long_description.length)} Min Read</span>
        </div>

      </div>
      <div className="col-span-2">
        {/* <img
          src={`https://spundir.in/l9_blog/storage/blog/${post.image1}`}
          alt="Blog Image"
          className="object-cover md:w-36 w-20 md:h-32 h-12"
        /> */}
        {typeof window !== 'undefined' && (
          <LazyLoadImage
            src={`https://spundir.in/l9_blog/storage/blog/${post.image1}`}
            alt="Blog Image"
            effect="blur"
            className="object-cover md:w-36 w-20 md:h-32 h-12"
          />
        )}

      </div>
    </div>
  );
}

export default BlogCard;
