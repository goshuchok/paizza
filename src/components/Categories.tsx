import React, { memo } from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
};

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
const Categories: React.FC<CategoriesProps> = memo(
  ({ value, onClickCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              className={value === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
