import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '/src/basics/Button.jsx';
import PetSlider from '/src/components/PetSlider.jsx';
import styles from './Pet.module.css';
import { 
  GENDER_ENUM,
  URL_TO_TAKE,
} from '/src/vars.jsx';

export default function Pet() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchPet = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/pets/${id}`);
        if (!response.ok) throw new Error(`Fetch error: ${response.status}`);
        const data = await response.json();
        if (isMounted) setPet(data);
      } catch (err) {
        console.error("Failed to fetch pet data:", err);
        if (isMounted) setError("Не удалось загрузить данные о питомце.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPet();
    return () => { isMounted = false; };
  }, [id]);

  if (loading) return <div className={styles.petPage}>Загрузка...</div>;
  if (error) return <div className={styles.petPage}>{error}</div>;
  if (!pet) return null;

  const genderText = GENDER_ENUM[pet.gender] || 'пол';

  return (
    <div className={styles.petPage}>
      <div className={styles.petContainer}>
        <div className={styles.petMedia}>
          <PetSlider photos={pet.photos} />
        </div>
        
        <div className={styles.petInfo}>
          <h1 className={styles.petName}>{pet.name}</h1>
          <p className={styles.specifications}>
            {genderText} / {pet.age}
          </p>
          {pet.health_issues ? (
            <p className={styles.specifications}>
              Требует особого внимания и любви: питомец с особенностями здоровья.
            </p>
          ) : <></>}
          <p className={styles.description}>{pet.description}</p>
        </div>
      </div>

      <div className={styles.petButtons}>
        {pet.video && (
          <Button href={pet.video} target="_blank" rel="noopener noreferrer">
            Видео
          </Button>
        )}
        <Button href={URL_TO_TAKE('owner', pet.name)}>Стать хозяином</Button>
        <Button href={URL_TO_TAKE('overexposure', pet.name)}>Взять на передержку</Button>
      </div>
    </div>
  );
}