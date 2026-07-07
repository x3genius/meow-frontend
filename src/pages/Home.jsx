import { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import Button from '/src/basics/Button.jsx';
import FAQ from '/src/basics/FAQ.jsx';
import PetsRandom from '/src/components/PetsRandom.jsx';
import ContactMap from '/src/components/ContactMap.jsx';
import styles from './Home.module.css';
import DocIcon from '/src/assets/doc.svg?react';
import PawHomeAbout from '/src/assets/paws/PawHomeAbout.svg?react';
import PawHomeTeam from '/src/assets/paws/PawHomeTeam.svg?react';
import PawHomeDocs from '/src/assets/paws/PawHomeDocs.svg?react';
import {
  URL_TO_TAKE,
  URL_BECOME_VOLUNTEER,
  TEAM_MEMBERS,
  FAQ_DATA,
  DOCUMENTS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  PAY_DATA,
  PAY_DATA_HEADER,
} from '/src/vars.jsx';

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroContentWrapper}>
            <h1>
              Добро пожаловать
              <br />в «Мяу-центр»!
            </h1>
            <p className={styles.heroSubtitle}>
              «Спасая животное, мы спасаем человека внутри себя»
            </p>
            <Button size="large" href="#about">
              Узнать подробнее
            </Button>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src="home_cat.png" alt="" className={styles.heroCatImage} />
          </div>
        </div>
        <div className={styles.heroTags}>
          <Button variant="inverted" href="#help">
            Помощь центру
          </Button>
          <Button variant="inverted" href="#pets">
            Наши питомцы
          </Button>
          <Button variant="inverted" href="#team">
            Наша команда
          </Button>
          <Button variant="inverted" href="#faq">
            Ответы на вопросы
          </Button>
          <Button variant="inverted" href="#docs">
            Документы
          </Button>
          <Button variant="inverted" href="#contacts">
            Контакты
          </Button>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <h1>О фонде</h1>
        <p className={styles.centerText}>
          «Мяу-Центр» — это Благотворительный Фонд помощи бездомным животным.
          <br />
          Наши волонтеры — обычные люди, которые не могут закрыть глаза и пройти мимо тех,
          кому нужна помощь.
          <br />С 2022 года мы подбираем, лечим, стерилизуем, кормим и ищем дом. Без
          громких слов и звёзд с неба. Просто каждый день делаем то, что считаем
          правильным: спасаем тех, кому нужна помощь, но не может о ней попросить»
        </p>
        <PawHomeAbout className={styles.pawHomeAbout} />
      </section>

      <section id="help" className={styles.helpSection}>
        <h1>Помощь центру</h1>
        <p className={styles.centerText}>
          Каждый из нас может внести свой посильный вклад. И мы благодарим вас за вашу
          помощь.
        </p>
        <div className={styles.helpGrid}>
          <div className={styles.helpCard}>
            <p className={styles.helpCardTitle}>Сделать пожертвование</p>
            <p>
              Даже 100 рублей — это миска корма или укол антибиотика для того, кто ждал
              помощи слишком долго
            </p>
            <Button href="/help">Узнать подробнее</Button>
          </div>
          <div className={styles.helpCard}>
            <p className={styles.helpCardTitle}>Стать хозяином</p>
            <p>Все наши питомцы здоровы, привиты и стерилизованы</p>
            <Button href="/help#owner">Узнать подробнее</Button>
          </div>
          <div className={styles.helpCard}>
            <p className={styles.helpCardTitle}>Взять на передержку</p>
            <p>
              Не уверены, что готовы к кошке насовсем? Передержка — идеальный способ
              проверить себя и сделать большое дело
            </p>
            <Button href="/help#overexposure">Узнать подробнее</Button>
          </div>
        </div>
      </section>

      <section id="pets" className={styles.petsSection}>
        <h1>Наши питомцы</h1>
        <p className={styles.centerText}>
          Мы поможем выбрать питомца из центра и подготовиться к его переезду.
          <br />
          Заполняйте анкету и координатор свяжется с вами.
        </p>
        <PetsRandom />
        <div className={styles.centerBtnWrapper}>
          <Button size="large" href="/pets">
            Посмотреть всех
          </Button>
        </div>
      </section>

      <section id="team" className={styles.teamSection}>
        <PawHomeTeam className={styles.pawHomeTeam} />

        <h1>Наша команда</h1>
        <p className={styles.centerText}>
          Лица нашего Благотворительного фонда «Мяу-Центр»
        </p>
        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.avatarWrapper}>
                <img src={member.img} alt={member.name} className={styles.avatar} />
              </div>
              <p className={styles.avatarName}>{member.name}</p>
              <p className={styles.avatarTitle}>{member.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.centerBtnWrapper}>
          <Button size="large" href={URL_BECOME_VOLUNTEER}>
            Стать частью команды
          </Button>
        </div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <h1>Часто задаваемые вопросы</h1>
        <FAQ items={FAQ_DATA} />
      </section>

      <section id="docs" className={styles.docsSection}>
        <h1>Документы и реквизиты</h1>
        <div className={styles.docsList}>
          {DOCUMENTS.map((doc) => (
            <HashLink
              key={doc.id}
              className={styles.docItem}
              to={doc.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DocIcon /> {doc.title}
            </HashLink>
          ))}
        </div>
        <div className={styles.qrWrapper}>
          <HashLink to="/help">
            <img src="help_qr.jpg" alt="Пожертвования" className={styles.qrImage} />
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

        <PawHomeDocs className={styles.pawHomeDocs} />
      </section>
      <section id="contacts" className={styles.contactsSection}>
        <h1>Контакты</h1>
        <div className={styles.contactsContent}>
          <div className={styles.mapBlock}>
            <ContactMap />
          </div>
          <div className={styles.contactsInfo}>
            <p className={styles.contactsTitle}>Адрес:</p>
            <p>{CONTACT_INFO.address}</p>

            <p className={styles.contactsTitle}>Телефон:</p>
            <p>{CONTACT_INFO.phone}</p>

            <p className={styles.contactsTitle}>Социальные сети:</p>
            <ul>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.id}>
                  <HashLink to={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>

            <Button href={URL_BECOME_VOLUNTEER}>Присоединиться</Button>
          </div>
        </div>
      </section>
    </>
  );
}
