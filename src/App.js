import { Header } from './components';
import { Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import { useEffect } from 'react';
import { setPizzas } from './redux/actions/pizzas';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
