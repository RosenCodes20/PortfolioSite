document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
          title: "Rosen Ivanov",
          description: "Welcome to my website!",
          buttonText: "Click me",
          home: "Home",
          aboutMe: 'About Me',
          projects: 'Projects',
          certificates: 'Certificates',
          contact: 'Contact',
          hiThere: 'Hi, there!',
          workWith: 'I am able to work with:',
          aboutRosen: 'About Rosen Ivanov',
          aboutMeInfo: 'Hi, I am Rosen Ivanov! I am 16 years old boy from Botevgrad, Bulgaria. I study web programming with django at SoftUni. I want one day to become senior full-stack engineer. I also study programming in programming school. Currently I am a student at NPG po KTS in town Pravets.',
          cvBtn: 'Download my CV',
          rosenProjects: 'Rosen Ivanov projects',
          firstSlideTextOne: 'This is the football team manager.',
          firstSlideTextTwo: 'Made with Django, used CRUD, authentication with email, authorization and even more interesting things.',
          firstSlideTextThree: 'I love football very much, so I made this one for my Python-Web Module.',
          githubProj: 'Project in GitHub',
          siteLink: 'Visit Site',
          secondSlideTextOne: 'This is the fast unit exercise made by me',
          secondSlideTextTwo: 'Its work is to generate a students to teachers who will test students.',
          secondSlideTextOne: 'One of my biggest projects for school, because it will be used for a long time.',
          secondSlideTextOne: 'With that project my journey with getting better started and I am so happy to show it to you :)',
          thirdSlideTextOne: 'This is my bottle shop for the competition softuniada.',
          thirdSlideTextTwo: 'At first I made this for my mother but then liked it and wanted to compete with it.',
          thirdSlideTextThree: 'This is one of my biggest project and one that I like the most!',
          softCert: 'SoftUni certificates',
          firstCertificate: 'Programming Fundamentals with Python - Rosen Ivanov - 6.00/6.00',
          secondCertificate: 'Python Advanced - Rosen Ivanov - 6.00/6.00',
          thirdCertificate: 'Python OOP - Rosen Ivanov - 6.00/6.00',
          fourthCertificate: 'PostgreSQL - Rosen Ivanov - 6.00/6.00',
          fifthCertificate: 'Python ORM - Rosen Ivanov - 6.00/6.00',
          sixthCertificate: 'Django Basics - Rosen Ivanov - 6.00/6.00',
          seventhCertificate: 'Django Advanced - Rosen Ivanov - 6.00/6.00',
          eightCertificate: 'HTML & CSS - Rosen Ivanov - 6.00/6.00',
          ninethCertificate: 'JS Front-End - Rosen Ivanov - 6.00/6.00',
          contactMeHere: 'Contact me here',
          contactText: 'I am free for new talks about work and making projects together, so if you want you can text me here:',
          footer: '©Rosen Rosenov Ivanov 2025. All rights reserved.'
        },
        bg: {
          title: "Росен Иванов",
          description: "Добре дошли в моя уебсайт!",
          buttonText: "Натисни ме",
          home: 'Начало',
          aboutMe: 'За мен',
          projects: 'Проекти',
          certificates: 'Сертификати',
          contact: 'Контакт',
          hiThere: 'Здравейте!',
          workWith: 'Мога да работя с:',
          aboutRosen: 'За Росен Иванов',
          aboutMeInfo: 'Здравейте, аз съм Росен Иванов! Аз съм момче на 16 години от Ботевград, България. Уча уеб програмиране с django в СофтУни. Искам един ден да стана full-stack инженер. Аз също уча програмиране в училище по програмиране. В момента съм ученик в НПГ по КТС гр. Правец.',
          cvBtn: 'Изтеглете CV - то ми',
          rosenProjects: 'Проектите на Росен Иванов',
          firstSlideTextOne: 'Това е мениджърът на футболни отбори.',
          firstSlideTextTwo: 'Направен с Django, използван CRUD, удостоверяване с имейл, авторизация и още интересни неща.',
          firstSlideTextThree: 'Много обичам футбола, така че направих този за моя Python-Web модул.',
          githubProj: 'Проект в ГитХъб',
          siteLink: 'Посети сайта',
          secondSlideTextOne: 'Това е бързото единично упражнение, направено от мен',
          secondSlideTextTwo: 'Работата му е да генерира ученици към учители, които ще тестват учениците.',
          secondSlideTextThree: 'Един от най-големите ми проекти за училище, защото ще се използва дълго време.',
          secondSlideTextFour: 'С този проект моето пътуване към по-добро стартиране и съм толкова щастлив да ви го покажа :)',
          thirdSlideTextOne: 'Това е моят магазин за бутилки за състезателната софтуниада.',
          thirdSlideTextTwo: 'Първо направих това за майка ми, но след това ми хареса и исках да се състезавам с него.',
          thirdSlideTextThree: 'Това е един от най-големите ми проекти и този, който най-много ми харесва!',
          softCert: 'Сертификати от Софтуни',
          firstCertificate: 'Основи на програмирането с Python - Росен Иванов - 6.00/6.00',
          secondCertificate: 'Python Advanced - Росен Иванов - 6.00/6.00',
          thirdCertificate: 'Python OOP - Росен Иванов - 6.00/6.00',
          fourthCertificate: 'PostgreSQL - Росен Иванов - 6.00/6.00',
          fifthCertificate: 'Python ORM - Росен Иванов - 6.00/6.00',
          sixthCertificate: 'Django Basics - Росен Иванов - 6.00/6.00',
          seventhCertificate: 'Django Advanced - Росен Иванов - 6.00/6.00',
          eightCertificate: 'HTML & CSS - Росен Иванов - 6.00/6.00',
          ninethCertificate: 'JS Front-End - Росен Иванов - 6.00/6.00',
          contactMeHere: 'Свържете се с мен тук',
          contactText: 'Свободен съм за нови разговори за работа и правене на съвместни проекти, така че ако искате можете да ми пишете тук:',
          footer: '©Росен Росенов Иванов 2025. Всички права запазени.',
        }
      };
    
      const languageSelector = document.getElementById('sel');
    
      languageSelector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          element.textContent = translations[selectedLang][key];
        });
      });

      const languagePhoneSelector = document.getElementById('select');
      
      languagePhoneSelector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          element.textContent = translations[selectedLang][key];
          document.querySelector('[type="checkbox"]').checked = false;
        });
      });

})