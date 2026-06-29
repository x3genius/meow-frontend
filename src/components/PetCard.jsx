import { HashLink } from 'react-router-hash-link';
import Button from '/src/basics/Button.jsx';
import styles from './PetCard.module.css';
import EmptyCard from '/src/assets/empty.svg?react';
import { GENDER_ENUM } from '/src/vars.jsx';

export default function PetCard({ children, data, short = false, ...props }) {
  const pet_id = data?.id || 0;
  const normalizedData = {
    id: pet_id,
    name: data?.name || `Питомец ${pet_id}`,
    age: data?.age || 'возраст',
    gender: GENDER_ENUM[data?.gender] || 'пол',
    description:
      data?.description ||
      `Замечательный питомец под номером ${pet_id}, который ищет дом и любящую семью.`,
    photos: data?.photos || [],
  };

  return (
    <div className={styles.card} {...props}>
      <HashLink
        className={styles.cardLink}
        to={true ? (data ? `/pets/${normalizedData.id}` : undefined) : undefined}
      >
        <div className={styles.imageWrapper}>
          {normalizedData.photos[0]?.image ? (
            <img src={normalizedData.photos[0].image} alt={normalizedData.name} />
          ) : (
            <EmptyCard style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        <div className={styles.infoWrapper}>
          <p className={`${styles.name} ${short ? styles.centerText : ''}`}>
            {normalizedData.name}
          </p>
          <p className={`${styles.specifications} ${short ? styles.centerText : ''}`}>
            {normalizedData.gender} / {normalizedData.age}
          </p>
          {!short && <p className={styles.description}>{normalizedData.description}</p>}
        </div>
      </HashLink>
      {!short && (
        <Button
          href={data ? `/pets/${normalizedData.id}` : undefined}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!data}
        >
          Узнать подробнее
        </Button>
      )}
    </div>
  );
}
