export const URL_BECOME_VOLUNTEER = "https://forms.yandex.ru/u/6a3e2bb6d04688b344ca2dae";

export const URL_TO_TAKE = (purpose = '', cat = '') => {
    // purpose: ['owner', 'overexposure']
    const baseUrl = "https://forms.yandex.ru/u/6a3e20fad04688affeca2d0f/";
    
    const params = new URLSearchParams();
    if (purpose != '') {
        params.append('answer_purpose', purpose);
    }
    if (cat != '') {
        params.append('answer_cat_name', cat);
    }

    return `${baseUrl}?${params.toString()}`;
};

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Мальчик' },
  { value: 'female', label: 'Девочка' }
];

export const GENDER_ENUM = {
  male: 'Мальчик',
  female: 'Девочка',
}

export const AGE_OPTIONS = [
  { value: 'little', label: 'Котёнок' },
  { value: 'adult', label: 'Взрослый' },
  { value: 'elderly', label: 'Пожилой' },
];

export const TEAM_MEMBERS = [
  { id: 1, name: "Имя Фам", title: "Должность", img: "team_empty.png" },
  { id: 2, name: "Имяя Фами", title: "Должность", img: "team_empty.png" },
  { id: 3, name: "Имяяя Фамил", title: "Должность", img: "team_empty.png" },
  { id: 4, name: "Имяяяя Фамили", title: "Должность", img: "team_empty.png" },
  { id: 5, name: "Имяяяяя Фамилия", title: "Должность", img: "team_empty.png" },
  { id: 6, name: "Имяяяяяя Фамилияя", title: "Должность", img: "team_empty.png" },
  { id: 7, name: "Имяяяяяяя Фамилияяя", title: "Должность", img: "team_empty.png" },
  { id: 8, name: "Имяяяяяяяя Фамилияяяя", title: "Должность", img: "team_empty.png" },
  { id: 9, name: "Имяяяяяяяяя Фамилияяяяя", title: "Должность", img: "team_empty.png" },
];

export const DOCUMENTS = [
  { id: 1, title: "Устав фонда", url: "#" },
  { id: 2, title: "Публичная оферта", url: "#" },
  { id: 3, title: "Свидетельство о регистрации", url: "#" },
  { id: 4, title: "Свидетельство налогоплательщика", url: "#" },
  { id: 5, title: "Свидетельство о регистрации юридического лица", url: "#" },
];

export const CONTACT_INFO = {
  address: "Где-то там далеко...",
  phone: "88001234567",
};

export const SOCIAL_LINKS = [
  { id: 1, name: "Кофе", url: "#" },
  { id: 2, name: "Чай", url: "#" },
  { id: 3, name: "Молоко", url: "#" },
];

export const FAQ_DATA = [
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

export const VOLOUNTEER_DATA = [
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
];

export const OWNER_DATA = [
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
];

export const OVEREXPOSURE_DATA = [
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
  {
    question: 'not filled in',
    answer: 'not filled in',
  },
];