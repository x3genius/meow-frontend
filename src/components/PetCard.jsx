import Button from '/src/basics/Button.jsx';
import styles from './PetCard.module.css';
import EmptyCard from '/src/assets/empty.svg?react'


export default function PetCard({ children, data, ...props }) {
  const normalizedData = {
    id: data?.id || '0',
    name: data?.name || 'Имя',
    description: data?.description || 'Описание',
    gender: data?.gender || 'Пол',
    age: data?.age || 'Возраст',
    photos: data?.photos || [''],
  };

  return (
    <div className={styles.card} {...props}>
      <div className={styles.imageWrapper}>
        { 
          normalizedData.photos[0] 
          ?
          <img 
            src={normalizedData.photos[0] || 'https://placehold.co/300x400?text=No+Photo'} 
            alt={normalizedData.name} 
          /> 
          :
          <EmptyCard style={{width: '100%', height: '100%'}}/>
        }
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{normalizedData.name}</p>
        <p className={styles.specifications}>
          {normalizedData.gender} / {normalizedData.age}
        </p>
        <p className={styles.description}>{normalizedData.description}</p>
      </div>
      <Button 
        href={data ? `/pets/${normalizedData.id}` : undefined} 
        target="_blank" 
        rel="noopener noreferrer" 
        disabled={!data}
      >Узнать подробнее</Button>
    </div>
  );
}
