import { useState, useEffect } from 'react';
import Select from '/src/basics/Select.jsx';
import Checkbox from '/src/basics/Checkbox.jsx';
import PetCard from '/src/components/PetCard.jsx';
import styles from './Pets.module.css';


export default function Pets() {
  const [isHealthFeatures, setIsHealthFeatures] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const genderOptions = [
    { value: 'Мальчик', label: 'Мальчик' },
    { value: 'Девочка', label: 'Девочка' }
  ];

  const ageOptions = [
    { value: 'under_1', label: 'До года' },
    { value: '1_2', label: '1-2 года' },
    { value: '3_4', label: '3-4 года' },
    { value: '5_6', label: '5-6 лет' },
    { value: 'over_7', label: 'От 7 лет' }
  ];

  // loading plug
  const M = 27;
  useEffect(() => {
    const timer = setTimeout(() => {
      const mockPets = Array.from({ length: M }, (_, i) => ({
        id: String(i + 1),
        name: `Питомец ${i + 1}`,
        description: `Замечательный питомец под номером ${i + 1}, который ищет дом и любящую семью.`,
        gender: i % 2 === 0 ? 'Мальчик' : 'Девочка',
        age: ['under_1', '1_2', '3_4', '5_6', 'over_7'][i % 5],
        photos: [`https://picsum.photos/id/${(i + 10) * 2}/300/400`]
      }));
      setPets(mockPets);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1160) {
        setItemsPerPage(9);  // 3 cols * 3 rows = 9 cards
      } else if (width > 768) {
        setItemsPerPage(8);  // 2 cols * 4 rows = 8 cards
      } else {
        setItemsPerPage(5);  // 1 cols * 5 rows = 5 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [gender, age, isHealthFeatures]);

  const filteredPets = pets.filter(pet => {
    if (gender && pet.gender !== gender) return false;
    if (age && pet.age !== age) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPets = filteredPets.slice(startIndex, endIndex);

  const getPaginationRange = () => {
    if (totalPages <= 1) return [];
    
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const paginationRange = getPaginationRange();

  const showSkeletons = loading || filteredPets.length === 0;

  return (
    <div className={styles.container}>
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

      <div className={styles.cardsPage}>
        {showSkeletons ? (
          <>
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
          </>
        ) : (
          displayedPets.map(pet => (
            <PetCard key={pet.id} data={pet} />
          ))
        )}
      </div>

      {!showSkeletons && totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button 
              className={styles.arrowBtn} 
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              &larr;
            </button>
          )}

          {paginationRange.map((page, idx) => {
            if (page === '...') {
              return <span key={`dots-${idx}`} className={styles.dots}>...</span>;
            }
            return (
              <button
                key={`page-${page}`}
                className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}

          {currentPage < totalPages && (
            <button 
              className={styles.arrowBtn} 
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              &rarr;
            </button>
          )}
        </div>
      )}
    </div>
  );
}
