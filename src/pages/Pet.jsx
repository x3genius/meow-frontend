import { useParams } from 'react-router-dom';
import Button from '/src/basics/Button.jsx';
import styles from './Pet.module.css';


export default function Pet() {
  const { id } = useParams();

  const pet = {
    "name": "Лиззи",
    "age": 1,
    "description": "Хорошая киса",
  }

  return (
    <div className={styles.petPage}>
      <div className={styles.petContainer}>
        <div className={`${styles.petMedia} NotImplemented`}>
          NotImplemented: PetMedia
        </div>
        <div className={styles.petInfo}>
          <h1 className={styles.petName}> {pet.name} </h1>
          <p>
            <strong>Возраст:</strong> {pet.age}
          </p>
          <p>
            {pet.description}
          </p>
        </div>
      </div>
      <div className={styles.petButtons}>
        <Button disabled>
          Видео
        </Button>
        <Button disabled>
          Стать хозяином
        </Button>
        <Button disabled>
          Взять на передержку
        </Button>
      </div>
    </div>
  );
}
