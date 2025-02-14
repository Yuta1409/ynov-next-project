import React from "react";

export const SectionTitle = (props) => {
  return (
    <div className="text-center">
      <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
        {props.preTitle}
      </h2>
       <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
        {props.title}
      </p>                                  
      <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
        {props.children}
      </p>
    </div>
  );
};
