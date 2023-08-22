import React from 'react';
import Button from './Button';

const DiscountSection = () => {
  return (
    <div className="w-full p-8">
      <div className="flex items-center justify-center p-12  bg-[url('assets/images/slider02.webp')] ">
        <div className="w-full md:w-[90%] lg:w-[60%] h-96 flex items-center justify-center bg-white p-8">
          <div className="w-[90%] h-[90%] flex flex-col items-center justify-center gap-8 bg-white border p-8">
            <h2 className="text-4xl font-bold text-[#C19C72]">
              {'تخفیف های ویژه'}
            </h2>
            <div className="bg-[#5F754D] text-white font-semibold text-base px-2 py-2 rounded-full w-24">
              <Button>{'فروشگاه'}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
