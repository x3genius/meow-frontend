import React from 'react';
import styles from './ContactMap.module.css';
import mapHtml from '/src/assets/map.txt?raw';

const ContactMap = () => {
  return (
    <div className={styles.wrapper}>
      <div dangerouslySetInnerHTML={{ __html: mapHtml }} />
    </div>
  );
};

export default ContactMap;
