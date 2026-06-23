import Button from '/src/basics/Button.jsx';
import FAQ from '/src/basics/FAQ.jsx';
import PetsRandom from '/src/components/PetsRandom.jsx';
import styles from './Home.module.css';
import DocIcon from '/src/assets/doc.svg?react';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqData = [
    {
      question: 'Является ли «Мяу-центр» официальным Благотворительным фондом?',
      answer: 'not filled in',
    },
    {
      question: 'Как можно стать хозяином питомца?',
      answer: 'not filled in',
    },
    {
      question: 'Как можно взять питомца на передержку?',
      answer: 'not filled in',
    },
    {
      question: 'Как можно помочь центру?',
      answer: 'not filled in',
    },
    {
      question: 'Как стать волонтёром в «Мяу-Центр»?',
      answer: 'not filled in',
    },
  ];

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
            <Button size="large" onClick={() => scrollToSection('about')}>
              Узнать подробнее
            </Button>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src="home_cat.png" alt="" className={styles.heroCatImage} />
          </div>
        </div>
        <div className={styles.heroTags}>
          <Button variant="inverted" onClick={() => scrollToSection('help')}>
            Помощь центру
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('pets')}>
            Наши питомцы
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('team')}>
            Наша команда
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('faq')}>
            Ответы на вопросы
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('docs')}>
            Документы
          </Button>
          <Button variant="inverted" onClick={() => scrollToSection('contacts')}>
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
        <h1>Наша команда</h1>
        <p className={styles.centerText}>
          Лица нашего Благотворительного фонда «Мяу-Центр»
        </p>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.avatarWrapper}>
              <img src="team_empty.png" alt="😅" className={styles.avatar} />
            </div>
            <p className={styles.avaterName}>Елизавета Елизавета</p>
            <p className={styles.avaterTitle}>Учредитель</p>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.avatarWrapper}>
              <img src="team_empty.png" alt="😅" className={styles.avatar} />
            </div>
            <p className={styles.avaterName}>Игорь Игорь</p>
            <p className={styles.avaterTitle}>Учредитель</p>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.avatarWrapper}>
              <img src="team_empty.png" alt="😅" className={styles.avatar} />
            </div>
            <p className={styles.avaterName}>Иван Иван</p>
            <p className={styles.avaterTitle}>Разнорабочий</p>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.avatarWrapper}>
              <img src="team_empty.png" alt="😅" className={styles.avatar} />
            </div>
            <p className={styles.avaterName}>Сергей Сергей</p>
            <p className={styles.avaterTitle}>Разнорабочий</p>
          </div>
        </div>
        <div className={styles.centerBtnWrapper}>
          <Button size="large" disabled>
            Стать частью команды
          </Button>
        </div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <h1>Часто задаваемые вопросы</h1>
        <div className="NotImplemented">
          <FAQ items={faqData} />
        </div>
      </section>

      <section id="docs" className={styles.docsSection}>
        <h1>Документы и реквизиты</h1>
        <div className={styles.docsList}>
          <a className={`${styles.docItem} NotImplemented`} href="#">
            <DocIcon /> Устав фонда
          </a>
          <a className={`${styles.docItem} NotImplemented`} href="#">
            <DocIcon /> Публичная оферта
          </a>
          <a className={`${styles.docItem} NotImplemented`} href="#">
            <DocIcon /> Свидетельство о регистрации
          </a>
          <a className={`${styles.docItem} NotImplemented`} href="#">
            <DocIcon /> Свидетельство налогоплательщика
          </a>
          <a className={`${styles.docItem} NotImplemented`} href="#">
            <DocIcon /> Свидетельство о регистрации юридического лица
          </a>
        </div>
        <div className={styles.qrWrapper}>
          <a href="#" className="NotImplemented">
            <img src="help_qr.png" alt="Пожертвования" className={styles.qrImage} />
          </a>
        </div>
      </section>
      <section id="contacts" className={styles.contactsSection}>
        <h1>Контакты</h1>
        <div className={styles.contactsContent}>
          <div className={styles.mapBlock}>
            {' '}
            <p className="NotImplemented">NotImplemented: Card</p>{' '}
          </div>
          <div className={styles.contactsInfo}>
            <p className={styles.contactsTitle}>Адрес:</p>
            <p className="NotImplemented">Где-то там далеко...</p>
            <p className={styles.contactsTitle}>Телефон:</p>
            <p className="NotImplemented">88001234567</p>
            <p className={styles.contactsTitle}>Социальные сети:</p>
            <ul>
              <li>
                <a href="#" className="NotImplemented">
                  Кофе
                </a>
              </li>
              <li>
                <a href="#" className="NotImplemented">
                  Чай
                </a>
              </li>
              <li>
                <a href="#" className="NotImplemented">
                  Молоко
                </a>
              </li>
            </ul>
            <Button disabled>Присоединиться</Button>
          </div>
        </div>
      </section>
    </>
  );
}
