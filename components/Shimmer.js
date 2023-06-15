import React from "react";

const shimmer = () => {
  return (
    <>
      <div className="grid grid-cols-12 my-8">
        <div className="col-span-10 px-10">
          <h1 className="text-sm  text-black">
            <div className="h-5 bg-gray-400  w-1/4 object-cover object-center"></div>
          </h1>
          <h2 className="text-[20px] font-extrabold  text-gray-800">
            <div className="h-5 bg-gray-400  w-full object-cover object-center"></div>
          </h2>
          <div className="mt-2 blogCard-desc font-normal text-md text-gray-800">
            <div className="h-20 bg-gray-400 w-full object-cover object-center"></div>
          </div>

          {/* card footer */}
          <div className="mt-5">
            <div className="-5 bg-gray-400 w-1/2 object-cover object-center"></div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="h-10 w-10 bg-gray-400 object-cover object-center"></div>
        </div>
      </div>
    </>
  );
};

export default shimmer;
