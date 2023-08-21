import Category from './Category';

const categories = [
  {
    id: 1,
    src: 'assets/images/skin.jpg',
    category: 'پوست',
    link: 'https://rosheh.com/product-category/skin/',
  },
  {
    id: 2,
    src: 'assets/images/hair-min.jpeg',
    category: 'مو',
    link: 'https://rosheh.com/product-category/skin/',
  },
  {
    id: 2,
    src: 'assets/images/makeup.jpg',
    category: 'آرایش',
    link: 'https://rosheh.com/product-category/skin/',
  },
  {
    id: 3,
    src: 'assets/images/perfume.jpg',
    category: 'عطر',
    link: 'https://rosheh.com/product-category/skin/',
  },
  {
    id: 4,
    src: 'assets/images/revert.jpg',
    category: 'برعکس',
    link: 'https://rosheh.com/product-category/skin/',
  },
];
const CategoriesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row px-8">
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            src={category.src}
            category={category.category}
            link={category.link}
          />
        );
      })}
    </div>
  );
};

export default CategoriesSection;
