import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

type PizzaType = {
  imageUrl: string;
  title: string;
  price: number;
};

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<PizzaType>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://63033a2a0de3cd918b30421a.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Not found current pizza');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Download....</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="imag" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link className="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
