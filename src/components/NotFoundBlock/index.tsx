import React from 'react';
import styles from './NotFound.module.scss';

const NotFoundBlock: React.FC = () => (
  <div className={styles.root}>
    <h1>
      <span>😕</span>
      <br />
      Not Found: )
    </h1>
    <p className={styles.description}>
      Unfortunately this page not found in the our store
    </p>
  </div>
);

export default NotFoundBlock;
