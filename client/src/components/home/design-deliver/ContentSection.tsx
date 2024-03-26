import React from 'react'

const ContentSection = () => {
  return (
    <div className="lg:w-1/2 w-full flex justify-end">
      <div className="lg:w-3/4 flex flex-col gap-3">
        <h1 className="lg:text-2xl md:text-4xl text-2xl bg-gradient-to-b from-fuchsia-600 to-fuchsia-200 via-fuchsia-300 bg-clip-text text-transparent">
          Design Develop Deliver
        </h1>
        <p className="text-neutral-50 leading-relaxed tracking-wide">
          We design, develop and deliver beautiful, functional and responsive
          web applications. We are a team of passionate developers, designers
          and strategists who love to build and grow businesses.
        </p>
      </div>
    </div>
  );
}

export default ContentSection