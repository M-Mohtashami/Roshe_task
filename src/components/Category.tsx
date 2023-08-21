import React from 'react';

type PropsType = {
  src: string;
  category: string;
  link: string;
};
const Category = ({ src, category, link }: PropsType) => {
  return (
    <a href={link}>
      <div className="relative max-w-[200px] h-96 overflow-hidden group">
        <div className="w-full h-full scale-150 transition transform duration-700 ease-in-out group-hover:scale-125">
          <img className="w-full h-full " src={src} alt={category} />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 transition duration-500 ease-in-out hover:bg-black/70"></div>
        <div className="absolute bottom-5 w-full text-center text-white text-4xl fount-bold">
          <h3>{category}</h3>
        </div>
      </div>
    </a>
  );
};

export default Category;
