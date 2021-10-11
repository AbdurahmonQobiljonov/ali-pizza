import { memo, useState } from 'react';

const Categories = memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const OnSelectItem = (idx) => {
    setActiveItem(idx);
    onClickItem(idx);
  };
  return (
    <div className="categories">
      <ul>
        <li onClick={() => OnSelectItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((item, idx) => {
            return (
              <li
                className={activeItem === idx ? 'active' : ''}
                onClick={() => OnSelectItem(idx)}
                key={`${item}_${idx}`}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
