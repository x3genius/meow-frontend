import { useState } from 'react';
import Select from '/src/basics/Select.jsx';
import Checkbox from '/src/basics/Checkbox.jsx';
import PetCard from '/src/components/PetCard.jsx';
import styles from './Pets.module.css';


export default function Pets() {
  const [isHealthFeatures, setIsHealthFeatures] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const genderOptions = [
    { value: 'boy', label: 'Мальчик' },
    { value: 'girl', label: 'Девочка' }
  ];

  const ageOptions = [
    { value: 'under_1', label: 'До года' },
    { value: '1_2', label: '1-2 года' },
    { value: '3_4', label: '3-4 года' },
    { value: '5_6', label: '5-6 лет' },
    { value: 'over_7', label: 'От 7 лет' }
  ];

  return (
    <>
      <div className={styles.filtersWrapper}>
        <Select 
          placeholder="Пол"
          options={genderOptions}
          value={gender}
          onChange={(val) => setGender(val)}
        />
        <Select 
          placeholder="Возраст"
          options={ageOptions}
          value={age}
          onChange={(val) => setAge(val)}
        />
        <Checkbox 
          checked={isHealthFeatures} 
          onChange={(e) => setIsHealthFeatures(e.target.checked)}
        >
          Особенности здоровья
        </Checkbox>
      </div>

      <div>
        <PetCard />
        <PetCard />
        ...
      </div>
    </>
  );
}
