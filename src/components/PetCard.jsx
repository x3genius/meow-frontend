import Button from '/src/basics/Button.jsx';
import styles from './PetCard.module.css';
import EmptyCard from '/src/assets/empty.svg?react'
import { 
  GENDER_ENUM,
} from '/src/vars.jsx'


export default function PetCard({ children, data, ...props }) {
  const pet_id = data?.id || 0
  const normalizedData = {
    id: pet_id,
    name: data?.name || `Питомец ${pet_id}`,
    age: data?.age || 'возраст',
    gender: GENDER_ENUM[data?.gender] || 'пол',
    description: data?.description || `Замечательный питомец под номером ${pet_id}, который ищет дом и любящую семью.`,
    photos: data?.photos || [],
  };

  return (
    <div className={styles.card} {...props}>
      <div className={styles.imageWrapper}>
        { 
          normalizedData.photos[0]?.image
          ?
          <img 
            src={normalizedData.photos[0].image} 
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
