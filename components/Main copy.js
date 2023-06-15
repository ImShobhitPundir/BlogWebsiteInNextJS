import React from 'react'

function Main() {
  return (
    <div className="h-[90vh] grid md:grid-cols-2 gred-cols ">
        <div className="p-5 place-self-center">
          <h1 className="md:text-[40px] text-[20px] font-bold text-black">
            <span className="text-gray-800">Hi There,</span>
          </h1>
          <h2 className="md:text-[50px] text-[30px] font-bold  text-blue-900">
            I'm Shobhit Pundir
          </h2>
          <p className="text-lg text-gray-800">
            Hello everyone! I'm a{" "}
            <span className="font-bold">Full Stack Developer</span> with over 5
            years of professional experience in the design, development, and
            implementation of web-based applications.{" "}
          </p>
        </div>

        <div className="place-self-center p-4">
          <img
            src="/my-2.png"
            alt="Shobhit PUndir"
            width="400px"
            height="400px"
          />
        </div>
      </div>
  )
}

export default Main