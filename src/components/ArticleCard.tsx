import React from 'react';
import { HiOutlineShare } from 'react-icons/hi';
import { BiMessage } from 'react-icons/bi';
import Button from './Button';

type PropsType = {
  article: ArticleType;
};
const ArticleCard = ({ article }: PropsType) => {
  console.log(article);

  return (
    <div className="relative max-w-xs group overflow-hidden">
      <img
        className="transition transform duration-700 ease-in-out group-hover:scale-110"
        src={article.image}
        alt={article.title}
      />
      <div className="absolute top-0 bottom-0 bg-black w-full transition ease-in-out duration-500 opacity-0 group-hover:opacity-30"></div>
      <div className="absolute top-0 bottom-0 bg-gradient-to-t from-black w-full opacity-70" />
      <div className="absolute top-0 bottom-0 w-full">
        <div className="w-full h-full flex flex-col items-center justify-between py-4">
          <div className="w-full px-4 flex justify-start">
            <div className="bg-white px-4 py-1 flex flex-col items-center">
              <div className="font-bold text-lg">
                {article.createdAt.toLocaleDateString('fa-IR', {
                  day: 'numeric',
                })}
              </div>
              <div className="font-semibold text-sm">
                {article.createdAt.toLocaleDateString('fa-IR', {
                  month: 'long',
                })}
              </div>
            </div>
          </div>
          <div className="w-full px-4 flex flex-col items-center justify-center gap-3 text-white font-semibold">
            <span className="text-xs bg-[#5F754D] opacity-100 px-4 py-1">
              {article.category}
            </span>
            <a href="#">
              <h3 className="text-2xl">{article.title}</h3>
            </a>
            <div className="flex items-start justify-center gap-3">
              <span className="text-xs text-gray-300 font-medium">
                {'نوشته شده توسط '}
                {article.author}
              </span>
              <div className="relative">
                <Button>
                  <BiMessage size={20} />
                  <span className="px-1 rounded-full text-white text-[8px] absolute top-0 bg-[#5F754D]">
                    {article.comments}
                  </span>
                </Button>
              </div>
              <div>
                <Button>
                  <HiOutlineShare size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
