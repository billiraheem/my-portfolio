import React from "react";

interface TagProps {
  name: string;
  onClick: any;
  isSelected: boolean;
}

export const ProjectTag = ({ name, onClick, isSelected }: TagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-pink-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
