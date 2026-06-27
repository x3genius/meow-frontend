import { useState, useEffect } from 'react';
import styles from './PetSlider.module.css';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function PetSlider({ photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  if (!photos || photos.length === 0) {
    return (
      <div className={styles.emptyMedia}>
        <p>Фотографий пока нет</p>
      </div>
    );
  }

  const currentPhoto = photos[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setIsModalOpen(false);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.mainImageWrapper} onClick={openModal}>
        <img src={currentPhoto.image} alt="Pet" className={styles.mainImage} />
        
        {photos.length > 1 && (
          <>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>
              <ArrowLeft />
            </button>
            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext}>
              <ArrowRight />
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className={styles.thumbnailsContainer}>
          {photos.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.image}
              alt={`Thumbnail ${index + 1}`}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>&#10006;</button>
            <img src={currentPhoto.image} alt="Pet Enlarge" className={styles.modalImage} onClick={(e) => e.stopPropagation()}/>
            
            {photos.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.modalPrevBtn}`} onClick={handlePrev}>
                  <ArrowLeft />
                </button>
                <button className={`${styles.navBtn} ${styles.modalNextBtn}`} onClick={handleNext}>
                  <ArrowRight />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}