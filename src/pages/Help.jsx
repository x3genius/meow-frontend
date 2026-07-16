import { HashLink } from 'react-router-hash-link';
import { Fragment } from 'react';
import Button from '/src/basics/Button.jsx';
import FAQ from '/src/basics/FAQ.jsx';
import styles from './Help.module.css';
import PawHelpHelp from '/src/assets/paws/PawHelpHelp.svg?react';
import PawHelpOwner from '/src/assets/paws/PawHelpOwner.svg?react';
import {
  URL_BECOME_VOLUNTEER,
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

        <PawHelpHelp className={styles.pawHelpHelp} />
      </section>

      <section id="help" className={styles.aboutSection}>
        <h1>Финансовая помощь</h1>
        <p className={styles.centerText}>
          Долгое время фонд функционировал только за счёт собственных вложений. <br />
          Но животных на попечении фонда становится больше, а средства на еду и лекарства
          заканчиваются.
        </p>
        <p className={styles.helpDonate}>Вот как вы можете помочь прямо сейчас:</p>
        <div className={styles.qrWrapper}>
          <img src="help_qr.svg" alt="Пожертвования" className={styles.qrImage} />
          <p className={styles.mutedText}>
            Отсканировать можно в приложении любого банка
          </p>
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
        <p className={styles.centerText}>
          Не нужно быть супергероем, чтобы помогать. Достаточно написать нам или заполнить{' '}
          <HashLink to={URL_BECOME_VOLUNTEER}>короткую форму</HashLink> — и мы обсудим,
          что вам по силам и по душе: приезжать или помогать дистанционно. Опыт не важен,
          важны вы сами.
        </p>
        <FAQ items={VOLOUNTEER_DATA} />
      </section>

      <section id="owner" className={styles.faqSection}>
        <h1>Стать хозяином</h1>
        <p className={styles.centerText}>
          Передержка — это не просто временный дом, а мостик к новой жизни. Вы даёте коту
          безопасное место, где он может отдохнуть, привыкнуть к людям и дождаться своих
          будущих хозяев. А мы помогаем вам на всех этапах: от выбора питомца до передачи
          в семью. Всё, что нужно с вашей стороны — забота и крыша над головой.
        </p>
        <FAQ items={OWNER_DATA} />

        <PawHelpOwner className={styles.pawHelpOwner} />
      </section>

      <section id="overexposure" className={styles.faqSection}>
        <h1>Взять на передержку</h1>
        <p className={styles.centerText}>
          Каждый кот в нашем фонде имеет свою историю, характер, привычки и представления
          о счастье. Во вкладке <HashLink to="/pets">«Питомцы»</HashLink> можно
          познакомиться со всеми.
        </p>
        <FAQ items={OVEREXPOSURE_DATA} />
      </section>
    </>
  );
}
