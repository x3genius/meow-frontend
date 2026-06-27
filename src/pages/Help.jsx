import Button from '/src/basics/Button.jsx';
import FAQ from '/src/basics/FAQ.jsx';
import styles from './Help.module.css';
import { 
  VOLOUNTEER_DATA, 
  OWNER_DATA, 
  OVEREXPOSURE_DATA,
  PAY_DATA_HEADER,
  PAY_DATA,
} from '/src/vars.jsx'


export default function Help() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroTags}>
          <Button variant="inverted" onClick={() => scrollToSection('help')}>
            Финансовая помощь
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('volunteer')}>
            Стать волонтёром
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('owner')}>
            Стать хозяином
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('overexposure')}>
            Взять на передержку
          </Button>
        </div>
      </section>

      <section id="help" className={styles.aboutSection}>
        <h1>Финансовая помощь</h1>
        <p className={styles.centerText}>
          Долгое время фонд функционировал только за счёт собственных вложений. <br />
          Но животных на попечении фонда становится больше, а средства на еду и лекарства
          заканчиваются.
        </p>
        <p className={styles.centerText}>
          <a href="#" className={`${styles.helpDonate} NotImplemented`}>
            Вот как вы можете помочь прямо сейчас:
          </a>
        </p>
        <div className={styles.qrWrapper}>
          <a href="#" className="NotImplemented">
            <img src="help_qr.png" alt="Пожертвования" className={styles.qrImage} />
          </a>
        </div>
        <h3>{PAY_DATA_HEADER}</h3>
        <p className={styles.centerText}>
          {PAY_DATA.map((item) => (
            <><span>{item}</span><br /></>
          ))}
        </p>
      </section>

      <section id="volunteer" className={styles.faqSection}>
        <h1>Стать волонтёром</h1>
        <p className={`${styles.centerText} NotImplemented`}>
          Общее описание процесса становления...
        </p>
        <div className="NotImplemented">
          <FAQ items={VOLOUNTEER_DATA} />
        </div>
      </section>

      <section id="owner" className={styles.faqSection}>
        <h1>Стать хозяином</h1>
        <p className={`${styles.centerText} NotImplemented`}>
          Общее описание процесса становления...
        </p>
        <div className="NotImplemented">
          <FAQ items={OWNER_DATA} />
        </div>
      </section>

      <section id="overexposure" className={styles.faqSection}>
        <h1>Взять на передержку</h1>
        <p className={`${styles.centerText} NotImplemented`}>
          Общее описание процесса становления...
        </p>
        <div className="NotImplemented">
          <FAQ items={OVEREXPOSURE_DATA} />
        </div>
      </section>
    </>
  );
}
