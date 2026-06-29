import { HashLink } from 'react-router-hash-link';
import { Fragment } from 'react';
import Button from '/src/basics/Button.jsx';
import FAQ from '/src/basics/FAQ.jsx';
import styles from './Help.module.css';
import {
  VOLOUNTEER_DATA,
  OWNER_DATA,
  OVEREXPOSURE_DATA,
  PAY_DATA_HEADER,
  PAY_DATA,
} from '/src/vars.jsx';

export default function Help() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroTags}>
          <Button variant="inverted" href="#help">
            Финансовая помощь
          </Button>
          <Button variant="inverted" href="#volunteer">
            Стать волонтёром
          </Button>
          <Button variant="inverted" href="#owner">
            Стать хозяином
          </Button>
          <Button variant="inverted" href="#overexposure">
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
          <HashLink href="#" className={styles.helpDonate}>
            Вот как вы можете помочь прямо сейчас:
          </HashLink>
        </p>
        <div className={styles.qrWrapper}>
          <HashLink to="#">
            <img src="help_qr.png" alt="Пожертвования" className={styles.qrImage} />
          </HashLink>
        </div>
        <h3>{PAY_DATA_HEADER}</h3>
        <p className={styles.centerText}>
          {PAY_DATA.map((item, index) => (
            <Fragment key={index}>
              <span>{item}</span>
              <br />
            </Fragment>
          ))}
        </p>
      </section>

      <section id="volunteer" className={styles.faqSection}>
        <h1>Стать волонтёром</h1>
        <p className={styles.centerText}>Общее описание процесса становления...</p>
        <FAQ items={VOLOUNTEER_DATA} />
      </section>

      <section id="owner" className={styles.faqSection}>
        <h1>Стать хозяином</h1>
        <p className={styles.centerText}>Общее описание процесса становления...</p>
        <FAQ items={OWNER_DATA} />
      </section>

      <section id="overexposure" className={styles.faqSection}>
        <h1>Взять на передержку</h1>
        <p className={styles.centerText}>Общее описание процесса становления...</p>
        <FAQ items={OVEREXPOSURE_DATA} />
      </section>
    </>
  );
}
