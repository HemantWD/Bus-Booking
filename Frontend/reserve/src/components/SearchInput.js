import React from "react";

export const SearchInput = (props) => {
  const { type, placeholder } = props;
  return (
    <div className="w-full h-20 py-1 px-3 text-lg">
      <input
        type={type}
        placeholder={placeholder}
        className="border border-black mx-2.5 my-2.5 px-3 py-3 rounded-lg"
      />
    </div>
  );
};
