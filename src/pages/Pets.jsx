import { useState, useEffect, useRef } from 'react';
import Select from '/src/basics/Select.jsx';
import Checkbox from '/src/basics/Checkbox.jsx';
import PetCard from '/src/components/PetCard.jsx';
import styles from './Pets.module.css';
import PawPets from '/src/assets/paws/PawPets.svg?react';
import { URL_TO_TAKE, GENDER_OPTIONS, AGE_OPTIONS } from '/src/vars.jsx';

export default function Pets() {
  const [isHealthFeatures, setIsHealthFeatures] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const MOCK = 12;
  const [pets, setPets] = useState(
    Array.from({ length: MOCK }, (_, i) => ({
      id: String(i + 1),
      name: `Питомец ${i + 1}`,
      age_category: ['little', 'adult', 'elderly'][i % 3],
      gender: i % 2 === 0 ? 'male' : 'female',
      health_issues: i % 4 === 0,
      photos: [],
    })),
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadPetsData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/pets/available?format=json');

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          const results = Array.isArray(data) ? data : data.results || [];
          setPets(results);
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError('Не удалось загрузить питомцев.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPetsData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 750) {
        setItemsPerPage(9); // 3 cols * 3 rows = 9 cards
      } else if (width > 400) {
        setItemsPerPage(8); // 2 cols * 4 rows = 8 cards
      } else {
        setItemsPerPage(5); // 1 cols * 5 rows = 5 cards
      }
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [gender, age, isHealthFeatures]);

  const filteredPets = pets.filter((pet) => {
    if (gender && pet.gender !== gender) return false;
    if (age && pet.age_category !== age) return false;
    if (isHealthFeatures && !pet.health_issues) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  function filteredFilteredLength() {
    return filteredPets.length;
  }

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPets = filteredPets.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (containerRef.current) {
      const offsetTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const getPaginationRange = () => {
    if (totalPages <= 1) return [];

    if (isMobile) {
      if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
      if (currentPage <= 2) return [1, 2, totalPages];
      if (currentPage >= totalPages - 1) {
        return [1, totalPages - 1, totalPages];
      }
      return [1, currentPage, totalPages];
    }

    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages];
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const paginationRange = getPaginationRange();
  const showSkeletons = loading;

  return (
    <div className={styles.container}>
      <div className={styles.filtersWrapper}>
        <Select
          placeholder="Пол"
          options={GENDER_OPTIONS}
          value={gender}
          onChange={(val) => setGender(val)}
        />
        <Select
          placeholder="Возраст"
          options={AGE_OPTIONS}
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
      {error ? <p className={styles.infoMessage}> {error} </p> : <></>}
      {displayedPets.length === 0 ? (
        <p className={styles.infoMessage}>Питомцы с такими параметрами не найдены.</p>
      ) : (
        <></>
      )}
      <div className={styles.cardsPage}>
        {displayedPets.length > 0 ? (
          displayedPets.map((pet) => <PetCard key={pet.id} data={pet} />)
        ) : (
          <></>
        )}
      </div>

      {!showSkeletons && totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button
              className={styles.arrowBtn}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              &larr;
            </button>
          )}

          {paginationRange.map((page, idx) => {
            if (page === '...') {
              return (
                <span key={`dots-${idx}`} className={styles.dots}>
                  ...
                </span>
              );
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
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              &rarr;
            </button>
          )}
        </div>
      )}

      <PawPets className={styles.pawPets}/>
    </div>
  );
}
