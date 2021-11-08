import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import MyLoader from '../loader/loader';
const CategoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];
function Home() {
  const dispatch = useDispatch();

  const onClickCategories = React.useCallback((index) => dispatch(setCategory(index)), []);

  const items = useSelector(({ pizzas }) => pizzas.items);
  const Loader = useSelector(({ pizzas }) => pizzas.isLoaded);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onClickCategories} items={CategoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {Loader
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12).fill(<MyLoader />)}
      </div>
    </div>
  );
}
export default Home;
