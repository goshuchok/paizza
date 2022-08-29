import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundBlock from '../components/NotFoundBlock';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
      <NotFoundBlock />
      <Link
        to="/"
        className="button button--cart"
        style={{ display: 'inline' }}
      >
        Back to the pizza
      </Link>
    </div>
  );
};

export default NotFound;
