import { useState, useEffect } from 'react';
import Button from '/src/basics/Button.jsx';
import EmptyCard from '/src/assets/empty.svg?react';
import styles from './PetsTreatment.module.css';
import { DONATION_URL } from '/src/vars.jsx';

export default function PetsTreatment() {
  const MOCK = 5;
  const [pets, setPets] = useState(
    Array.from({ length: MOCK }, (_, i) => ({
      id: String(i + 1),
      name: `Питомец ${i + 1}`,
      treatment_description: 'Нуждается в лечении',
      photos: [],
    })),
  );

  const isScrollable = pets.length > 1;

  const multiplier = isScrollable ? Math.ceil(5 / pets.length) : 1;
  const basePets = isScrollable
    ? Array.from({ length: multiplier }, () => pets).flat()
    : pets;

  const totalOriginal = basePets.length;
  const slides = isScrollable ? [...basePets, ...basePets, ...basePets] : pets;

  const [currentIndex, setCurrentIndex] = useState(isScrollable ? totalOriginal : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [startX, setStartX] = useState(0);
  const [currentDragX, setCurrentDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Синхронизация центрального индекса при смене массива питомцев
  useEffect(() => {
    if (isScrollable) {
      setCurrentIndex(totalOriginal);
    } else {
      setCurrentIndex(0);
    }
  }, [totalOriginal, isScrollable]);

  useEffect(() => {
    let isMounted = true;
    const fetchTreatmentPets = async () => {
      try {
        const res = await fetch('/api/pets/treatment?format=json');
        if (res.ok) {
          const data = await res.json();
          const results = Array.isArray(data) ? data : data.results || [];
          if (isMounted) {
            setPets(results);
          }
        }
      } catch (err) {
        console.error('Ошибка загрузки питомцев:', err);
      }
    };

    fetchTreatmentPets();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleTransitionEnd = () => {
    if (!isScrollable) return;
    if (currentIndex >= totalOriginal * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalOriginal);
    }
  };

  const nextSlide = () => {
    if (!isScrollable) return;
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isScrollable) return;
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDragStart = (e) => {
    if (!isScrollable) return;
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setCurrentDragX(e.touches ? e.touches[0].clientX : e.clientX);
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !isScrollable) return;
    setCurrentDragX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging || !isScrollable) return;
    setIsDragging(false);
    const distance = startX - currentDragX;
    const minSwipeDistance = 40;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  if (pets.length === 0)
    return <p className={styles.centerText}>Сейчас все питомцы здоровы</p>;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.carouselContainer}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className={styles.track}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(50% - var(--card-width) / 2 - ${currentIndex} * (var(--card-width) + var(--gap))))`,
            transition: isTransitioning
              ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
              : 'none',
          }}
        >
          {slides.map((pet, idx) => {
            const isCenter = idx === currentIndex;
            const cleaned = pet.treatment_description?.replace(/[\s\p{P}]/gu, '') || '';
            const treatmentText =
              cleaned.length > 0 ? pet.treatment_description : 'Требуется лечение';

            return (
              <div
                key={`${pet.id}-${idx}`}
                className={`${styles.card} ${isCenter ? styles.activeCard : ''}`}
              >
                <div className={styles.imageWrapper}>
                  {pet.photos && pet.photos[0]?.image ? (
                    <img src={pet.photos[0].image} alt={pet.name} />
                  ) : (
                    <EmptyCard style={{ width: '100%', height: '100%' }} />
                  )}
                </div>

                <div className={styles.infoWrapper}>
                  <p className={styles.name}>{pet.name}</p>
                  <p className={styles.description}>{treatmentText}</p>
                </div>

                <Button href={DONATION_URL} target="_blank" rel="noopener noreferrer">
                  Помочь
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrowBtn}
          onClick={prevSlide}
          aria-label="Предыдущий питомец"
          disabled={!isScrollable}
        >
          &larr;
        </button>
        <button
          type="button"
          className={styles.arrowBtn}
          onClick={nextSlide}
          aria-label="Следующий питомец"
          disabled={!isScrollable}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
