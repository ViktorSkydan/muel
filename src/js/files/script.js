// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

// document.addEventListener('DOMContentLoaded', function () {
//   const menuTitles = document.querySelectorAll('[data-title-1], [data-title-2]');
//   const catalogs = document.querySelectorAll('[data-catalog]');
//   const catalogItems = document.querySelectorAll('[data-catalog-item]');
//   const submenuItems = document.querySelectorAll('[data-submenu-item]');

//   let removeMenuTitleActiveTimeout = null;

//   // Функция для удаления класса active у всех элементов, кроме переданных исключений
//   function removeActiveClasses(exceptions = []) {
//     document
//       .querySelectorAll('[data-catalog-item].active, [data-title-1].active, [data-title-2].active')
//       .forEach((element) => {
//         if (!exceptions.includes(element)) {
//           element.classList.remove('active');
//         }
//       });
//   }

//   function removeSubmenuActiveClasses(exceptions = []) {
//     document.querySelectorAll('[data-submenu-item].active').forEach((element) => {
//       if (!exceptions.includes(element)) {
//         element.classList.remove('active');
//       }
//     });
//   }

//   // Функция для скрытия всех изображений
//   function hideCatalogImages() {
//     document.querySelectorAll('[data-catalog-img]').forEach((img) => {
//       img.classList.add('hidden');
//     });
//   }

//   // Функция для показа всех изображений
//   function showCatalogImages() {
//     document.querySelectorAll('[data-catalog-img]').forEach((img) => {
//       img.classList.remove('hidden');
//     });
//   }

//   // Обработка наведения курсора на элементы каталога
//   catalogItems.forEach((item) => {
//     item.addEventListener('mouseenter', function () {
//       removeActiveClasses([item]);
//       item.classList.add('active');
//       const catalogImg = item.querySelector('[data-catalog-img]');
//       const submenu = item.querySelector('[data-submenu]');

//       if (submenu) {
//         catalogImg.classList.add('right');
//       }

//       showCatalogImages(); // Показать изображения при наведении на элемент каталога
//     });
//   });

//   // Обработка наведения курсора на элементы подменю
//   submenuItems.forEach((item) => {
//     item.addEventListener('mouseenter', function () {
//       removeSubmenuActiveClasses([item]);
//       item.classList.add('active');
//       const catalogItem = item.closest('[data-catalog-item]');
//       if (catalogItem) {
//         const catalogImg = catalogItem.querySelector('[data-catalog-img]');
//         if (catalogImg) {
//           catalogImg.classList.add('hidden'); // Скрыть изображение при наведении на подменю
//         }
//       }
//     });

//     // Обработка покидания области подменю
//     item.addEventListener('mouseleave', function (event) {
//       const relatedTarget = event.relatedTarget;
//       if (
//         !relatedTarget ||
//         (!relatedTarget.closest('[data-submenu-item]') &&
//           !relatedTarget.closest('[data-catalog-item]'))
//       ) {
//         const catalogItem = item.closest('[data-catalog-item]');
//         if (catalogItem) {
//           const catalogImg = catalogItem.querySelector('[data-catalog-img]');
//           if (catalogImg) {
//             catalogImg.classList.remove('hidden'); // Показать изображение при покидании области подменю
//           }
//         }
//       }
//     });
//   });

//   // Обработка наведения курсора на заголовок меню
//   menuTitles.forEach((title) => {
//     title.addEventListener('mouseenter', function () {
//       if (removeMenuTitleActiveTimeout) {
//         clearTimeout(removeMenuTitleActiveTimeout);
//       }
//       removeActiveClasses([title]);
//       removeSubmenuActiveClasses();
//       showCatalogImages(); // Показать изображения при наведении на заголовок меню
//       title.classList.add('active'); // Добавить класс active к заголовку меню

//       const firstCatalogItem = document.querySelector('[data-catalog] [data-catalog-item]');
//       if (firstCatalogItem) {
//         firstCatalogItem.classList.add('active');
//       }
//     });

//     // Обработка покидания области заголовка меню
//     title.addEventListener('mouseleave', function (event) {
//       const relatedTarget = event.relatedTarget;

//       // Проверка: курсор наведен на другой заголовок меню
//       const isCursorOnAnotherTitle = Array.from(menuTitles).some(
//         (otherTitle) => otherTitle !== title && otherTitle.contains(relatedTarget),
//       );

//       // Проверка: курсор наведен на область catalog-wrapper или на любой его дочерний элемент
//       const isCursorInCatalogWrapper = Array.from(catalogs).some((wrapper) =>
//         wrapper.contains(relatedTarget),
//       );

//       // Если курсор не на другом заголовке меню и не в области catalog-wrapper
//       if (!isCursorOnAnotherTitle && !isCursorInCatalogWrapper) {
//         removeMenuTitleActiveTimeout = setTimeout(function () {
//           title.classList.remove('active'); // Удалить класс active у заголовка меню с задержкой
//         }, 250); // Задержка в 0.25 секунд
//       }
//     });
//   });

//   // Обработка покидания области каталога
//   catalogs.forEach((wrapper) => {
//     wrapper.addEventListener('mouseleave', function () {
//       removeActiveClasses();
//       removeSubmenuActiveClasses();
//       hideCatalogImages();
//     });
//   });

//   // Изначально показываем изображения для активного элемента
//   showCatalogImages();
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const title1 = document.querySelector('[data-title-1]');
//   const catalog1 = document.querySelector('[data-catalog-1]');
//   const otherTitles = document.querySelectorAll('[data-title-2], [data-title-3], [data-title-4]');

//   // Добавляем класс active к элементу data-title-1 при наведении курсора
//   title1.addEventListener('mouseenter', function () {
//     title1.classList.add('active');
//   });

//   // Удаляем класс active с data-title-1, если курсор наведен на другие заголовки
//   otherTitles.forEach((title) => {
//     title.addEventListener('mouseenter', function () {
//       title1.classList.remove('active');
//     });
//   });

//   // Обработка покидания области элемента data-catalog-1
//   catalog1.addEventListener('mouseleave', function (event) {
//     const relatedTarget = event.relatedTarget;

//     // Проверяем, не покинул ли курсор область дочерних элементов data-catalog-1
//     if (!catalog1.contains(relatedTarget)) {
//       title1.classList.remove('active');
//     }
//   });

//   // Добавляем логику для присвоения класса right при наличии подменю
//   const catalogItems = catalog1.querySelectorAll('[data-catalog-item]');
//   catalogItems.forEach((item) => {
//     item.addEventListener('mouseenter', function () {
//       const submenu = item.querySelector('[data-submenu]');
//       const catalogImg = item.querySelector('[data-catalog-img]');

//       if (submenu && catalogImg) {
//         catalogImg.classList.add('right');
//       }
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   let activeCatalog = null; // Активный открытый каталог
//   let hideTimeout = null; // Таймер для задержки закрытия каталога

//   // Функция для открытия каталога
//   function showCatalog(event) {
//     clearTimeout(hideTimeout); // Отмена таймера закрытия при наведении на другой элемент

//     if (
//       activeCatalog &&
//       activeCatalog !== event.target.closest('li').querySelector('[data-catalog]')
//     ) {
//       // Если открыт другой каталог, закрываем его
//       activeCatalog.style.display = 'none';
//     }

//     const catalog = event.target.closest('li').querySelector('[data-catalog]');
//     if (catalog) {
//       catalog.style.display = 'block';
//       activeCatalog = catalog;
//     }
//   }

//   // Функция для закрытия каталога
//   function hideCatalog() {
//     hideTimeout = setTimeout(() => {
//       if (activeCatalog) {
//         activeCatalog.style.display = 'none';
//         activeCatalog = null;
//       }
//     }, 300); // Задержка 0.3 секунды
//   }

//   // Функция для показа изображений или подменю
//   function showSubItems(event) {
//     clearTimeout(hideTimeout); // Отмена таймера закрытия при наведении на подменю или изображение

//     const catalogItem = event.target.closest('[data-catalog-item]');
//     const catalogImg = catalogItem.querySelector('[data-catalog-img]');
//     const submenu = catalogItem.querySelector('[data-submenu]');

//     if (submenu) {
//       submenu.style.display = 'block';
//     } else if (catalogImg) {
//       catalogImg.style.display = 'block';
//     }
//   }

//   // Функция для скрытия изображений или подменю
//   function hideSubItems(event) {
//     const catalogItem = event.target.closest('[data-catalog-item]');
//     const catalogImg = catalogItem.querySelector('[data-catalog-img]');
//     const submenu = catalogItem.querySelector('[data-submenu]');

//     if (submenu) {
//       submenu.style.display = 'none';
//     } else if (catalogImg) {
//       catalogImg.style.display = 'none';
//     }
//   }

//   // Добавляем обработчики событий для элементов меню
//   const menuTitles = document.querySelectorAll(
//     '[data-title-1], [data-title-2], [data-title-3], [data-title-4]',
//   );
//   menuTitles.forEach((title) => {
//     title.addEventListener('mouseover', showCatalog);
//     title.addEventListener('mouseout', hideCatalog);
//   });

//   // Добавляем обработчики событий для элементов каталога
//   const catalogItems = document.querySelectorAll('[data-catalog-item]');
//   catalogItems.forEach((item) => {
//     item.addEventListener('mouseover', showSubItems);
//     item.addEventListener('mouseout', hideSubItems);
//   });

//   // Закрытие каталога при уходе курсора с области каталога
//   const catalogs = document.querySelectorAll('[data-catalog]');
//   catalogs.forEach((catalog) => {
//     catalog.addEventListener('mouseover', () => clearTimeout(hideTimeout));
//     catalog.addEventListener('mouseout', hideCatalog);
//   });
// });

//-----------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//   const menuItems = document.querySelectorAll('.menu__item');
//   const catalogItems = document.querySelectorAll('.catalog__item');
//   const submenuItems = document.querySelectorAll('.submenu__item');

//   let activeCatalogLink = null; // Глобальная переменная для хранения активного catalogLink
//   let activeSubmenuLink = null; // Глобальная переменная для хранения активного submenuLink

//   menuItems.forEach((menuItem) => {
//     const title = menuItem.querySelector('.menu__item-title');
//     const catalog = menuItem.querySelector('[data-catalog]');

//     function addActiveClass() {
//       title.classList.add('active');
//     }

//     function removeActiveClass() {
//       title.classList.remove('active');
//     }

//     // Обработчик для наведения на menu__item-title
//     title.addEventListener('mouseover', addActiveClass);
//     title.addEventListener('mouseout', removeActiveClass);

//     // Обработчик для наведения на catalog
//     if (catalog) {
//       catalog.addEventListener('mouseover', addActiveClass);
//       catalog.addEventListener('mouseout', removeActiveClass);
//     }
//   });

//   //----------------------------------------------------------------

//   catalogItems.forEach((catalogItem) => {
//     const catalogLink = catalogItem.querySelector('.catalog__link');
//     const catalog = catalogItem.closest('[data-catalog]');
//     const submenu = catalogItem.querySelector('[data-submenu]');

//     function addActiveClass() {
//       // Удаляем класс active с предыдущего активного catalogLink
//       if (activeCatalogLink && activeCatalogLink !== catalogLink) {
//         activeCatalogLink.classList.remove('active');
//       }
//       catalogLink.classList.add('active');
//       activeCatalogLink = catalogLink; // Сохраняем текущий активный catalogLink
//     }

//     function removeActiveClass(event) {
//       // Проверка, если курсор уходит в область catalog
//       if (catalog && catalog.contains(event.relatedTarget)) {
//         return; // Не удаляем класс, если курсор переходит на catalog
//       }
//       catalogLink.classList.remove('active');
//       if (activeCatalogLink === catalogLink) {
//         activeCatalogLink = null; // Сброс активного catalogLink, если он больше не активен
//       }
//     }

//     // Обработчик для наведения на catalog__link
//     catalogLink.addEventListener('mouseover', addActiveClass);
//     catalogLink.addEventListener('mouseout', removeActiveClass);

//     // Обработчик для наведения на submenu (если оно существует)
//     if (submenu) {
//       submenu.addEventListener('mouseover', addActiveClass);
//       submenu.addEventListener('mouseout', removeActiveClass);
//     }
//   });

//   //----------------------------------------------------------------

//   submenuItems.forEach((menuItem) => {
//     const submenuLink = menuItem.querySelector('.submenu__link');
//     const submenuCatalog = menuItem.closest('[data-catalog]'); // Найти родительский элемент с [data-catalog]

//     function addActiveClass() {
//       // Удаляем класс active с предыдущего активного submenuLink
//       if (activeSubmenuLink && activeSubmenuLink !== submenuLink) {
//         activeSubmenuLink.classList.remove('active');
//       }
//       submenuLink.classList.add('active');
//       activeSubmenuLink = submenuLink; // Сохраняем текущий активный submenuLink
//     }

//     function removeActiveClass(event) {
//       // Проверка, если курсор уходит в область submenuCatalog
//       if (submenuCatalog && submenuCatalog.contains(event.relatedTarget)) {
//         return; // Не удаляем класс, если курсор переходит на submenuCatalog
//       }
//       submenuLink.classList.remove('active');
//       if (activeSubmenuLink === submenuLink) {
//         activeSubmenuLink = null; // Сброс активного submenuLink, если он больше не активен
//       }
//     }

//     // Обработчик для наведения на submenu__link
//     submenuLink.addEventListener('mouseover', addActiveClass);
//     submenuLink.addEventListener('mouseout', removeActiveClass);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu__item');
  const catalogItems = document.querySelectorAll('.catalog__item');
  const submenuItems = document.querySelectorAll('.submenu__item');

  let activeCatalogLink = null; // Глобальная переменная для хранения активного catalogLink
  let activeSubmenuLink = null; // Глобальная переменная для хранения активного submenuLink
  let activeSubmenu = null; // Глобальная переменная для хранения активного submenu

  menuItems.forEach((menuItem) => {
    const title = menuItem.querySelector('.menu__item-title');
    const catalog = menuItem.querySelector('[data-catalog]');

    function addActiveClass() {
      title.classList.add('active');
    }

    function removeActiveClass() {
      title.classList.remove('active');
    }

    // Обработчик для наведения на menu__item-title
    title.addEventListener('mouseover', addActiveClass);
    title.addEventListener('mouseout', removeActiveClass);

    // Обработчик для наведения на catalog
    if (catalog) {
      catalog.addEventListener('mouseover', addActiveClass);
      catalog.addEventListener('mouseout', removeActiveClass);
    }
  });

  //----------------------------------------------------------------

  catalogItems.forEach((catalogItem) => {
    const catalogLink = catalogItem.querySelector('.catalog__link');
    const catalog = catalogItem.closest('[data-catalog]');
    const submenu = catalogItem.querySelector('.submenu');

    function addActiveClass() {
      // Удаляем класс active с предыдущего активного catalogLink и submenu
      if (activeCatalogLink && activeCatalogLink !== catalogLink) {
        activeCatalogLink.classList.remove('active');
        if (activeSubmenu) {
          activeSubmenu.classList.remove('active'); // Убираем активность с предыдущего submenu
        }
      }

      catalogLink.classList.add('active');
      activeCatalogLink = catalogLink; // Сохраняем текущий активный catalogLink

      // Добавляем класс active к submenu, если оно существует
      if (submenu) {
        submenu.classList.add('active');
        activeSubmenu = submenu; // Сохраняем текущее активное submenu
      }
    }

    function removeActiveClass(event) {
      // Проверка, если курсор уходит в область другого catalog или submenu
      if (
        (catalog && catalog.contains(event.relatedTarget)) ||
        (submenu && submenu.contains(event.relatedTarget))
      ) {
        return; // Не удаляем класс, если курсор переходит на catalog или submenu
      }
      catalogLink.classList.remove('active');
      if (activeCatalogLink === catalogLink) {
        activeCatalogLink = null; // Сброс активного catalogLink, если он больше не активен
      }

      // Удаляем класс active с submenu, если оно существует и если курсор не уходит на другой catalogLink
      if (submenu && (!event.relatedTarget || !event.relatedTarget.closest('.catalog__link'))) {
        submenu.classList.remove('active');
        activeSubmenu = null; // Сброс активного submenu
      }
    }

    // Обработчик для наведения на catalog__link
    catalogLink.addEventListener('mouseover', addActiveClass);
    catalogLink.addEventListener('mouseout', removeActiveClass);
  });

  //----------------------------------------------------------------

  submenuItems.forEach((menuItem) => {
    const submenuLink = menuItem.querySelector('.submenu__link');
    const submenuCatalog = menuItem.closest('[data-catalog]'); // Найти родительский элемент с [data-catalog]

    function addActiveClass() {
      // Удаляем класс active с предыдущего активного submenuLink
      if (activeSubmenuLink && activeSubmenuLink !== submenuLink) {
        activeSubmenuLink.classList.remove('active');
      }
      submenuLink.classList.add('active');
      activeSubmenuLink = submenuLink; // Сохраняем текущий активный submenuLink
    }

    function removeActiveClass(event) {
      // Проверка, если курсор уходит в область submenuCatalog или submenu
      if (submenuCatalog && submenuCatalog.contains(event.relatedTarget)) {
        return; // Не удаляем класс, если курсор переходит на submenuCatalog или submenu
      }
      submenuLink.classList.remove('active');
      if (activeSubmenuLink === submenuLink) {
        activeSubmenuLink = null; // Сброс активного submenuLink, если он больше не активен
      }
    }

    // Обработчик для наведения на submenu__link
    submenuLink.addEventListener('mouseover', addActiveClass);
    submenuLink.addEventListener('mouseout', removeActiveClass);
  });

  //----------------------------------------------------------------

  // Добавление глобального обработчика для удаления всех активных классов, когда курсор покидает область .catalog
  const catalogs = document.querySelectorAll('[data-catalog]');
  catalogs.forEach((catalog) => {
    catalog.addEventListener('mouseout', (event) => {
      if (!catalog.contains(event.relatedTarget)) {
        // Удаляем все активные классы
        if (activeCatalogLink) {
          activeCatalogLink.classList.remove('active');
          activeCatalogLink = null;
        }
        if (activeSubmenu) {
          activeSubmenu.classList.remove('active');
          activeSubmenu = null;
        }
        if (activeSubmenuLink) {
          activeSubmenuLink.classList.remove('active');
          activeSubmenuLink = null;
        }
      }
    });
  });
});
