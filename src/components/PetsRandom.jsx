import { useState, useEffect } from 'react';
import styles from './PetsRandom.module.css';
import PetCard from './PetCard.jsx';

export default function PetsRandom() {
  const MOCK = 12;
  const [pets, setPets] = useState(
    Array.from({ length: MOCK }, (_, i) => ({
      id: String(i + 1),
      name: `Питомец ${i + 1}`,
      age_category: ['little', 'adult', 'elderly'][i % 3],
      gender: i % 2 === 0 ? 'male' : 'female',
      health_issues: i % 4 === 0,
      photos: [] 
    }))
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          const results = Array.isArray(data) ? data : (data.results || []);
          setPets(results);
        }
      } catch (err) {
        if (isMounted) {
          console.error(err)
          setError("Не удалось загрузить питомцев.");
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

  if (pets.length === 0) return <p className={styles.infoMessage}>Питомцы не найдены.</p>;

  if (isMobile) {
    const prevIndex = (activeIndex - 1 + pets.length) % pets.length;
    const nextIndex = (activeIndex + 1) % pets.length;

    return (
      <div className={styles.container}>
        <div className={styles.carouselContainer}>
          {pets.map((pet, idx) => {
            let slideClass = styles.hidden;
            let isClickable = false;

            if (idx === activeIndex) {
              slideClass = styles.active;
            } else if (idx === prevIndex) {
              slideClass = styles.prev;
              isClickable = true;
            } else if (idx === nextIndex) {
              slideClass = styles.next;
              isClickable = true;
            }
            return (
              <div 
                key={pet.id} 
                className={`${styles.slide} ${slideClass}`}
                onClickCapture={isClickable ? (e) => { 
                  e.preventDefault(); 
                  e.stopPropagation(); 
                  setActiveIndex(idx); 
                } : undefined}
              >
                <PetCard data={pet} short={true}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const itemsPerPage = 4;
    const totalPages = Math.ceil(pets.length / itemsPerPage);
    const desktopPets = pets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div className={styles.container}>
        <div className={styles.gridMode}>
          {desktopPets.map((pet) => (
            <PetCard key={pet.id} data={pet} short={true} />
          ))}
        </div>
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button className={styles.arrowBtn} onClick={() => setCurrentPage(p => p - 1)}>&larr;</button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button className={styles.arrowBtn} onClick={() => setCurrentPage(p => p + 1)}>&rarr;</button>
          )}
        </div>
      </div>
    );
  }
}