import { Header } from './components';
import { Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import { useEffect } from 'react';
import { fetchPizzas } from './redux/actions/pizzas';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
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
