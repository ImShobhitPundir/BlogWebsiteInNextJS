import React from "react";
import { fDate, fToNow } from "@/utils/formatTime";
import { readTime, removeHtml, wordsLimit } from "@/utils/formatString";

const BottomBlogCard = ({ post }) => {
  return (
    <div className="col-span-1">
      <div className="my-8">
        <div className="">
          <img
            src={`https://spundir.in/l9_blog/storage/blog/${post.image1}`}
            alt="Blog Image"
            className="object-cover w-full h-64"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-sm  text-black">
            <span className="text-gray-800">
              {post.date ? fDate(post.date) : null}
            </span>
          </h1>
          <h2 className="text-[20px] font-bold  text-gray-800">
            {post.title}
          </h2>
          <div className="mt-2 blogCard-desc font-normal text-md text-gray-800">
            {/* <p dangerouslySetInnerHTML={{ __html: post.short_description }}></p> */}
            {wordsLimit(removeHtml(post.short_description), 150)}
          </div>

          {/* card footer */}
          <div className="mt-5">
            {/* <span className="bg-gray-100 px-3 py-1 rounded-xl">
              {post.category_name}
            </span> */}
            <span>
              {readTime(
                post.short_description.length + post.long_description.length
              )}{" "}
              Min Read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBlogCard;
