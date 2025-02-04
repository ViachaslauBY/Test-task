document.addEventListener("DOMContentLoaded", () => {    
  fetch('includes/wrapper.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('wrapper').innerHTML = data;
    })
    .catch(error => console.error('Ошибка при загрузке wrapper:', error));    
});

//  async function loadComponent(url, targetId) {
//       try {
//         const response = await fetch(url); // Загружаем файл
//         if (!response.ok) {
//           throw new Error(`Ошибка загрузки: ${response.status}`);
//         }
//         const html = await response.text(); // Получаем содержимое файла как строку
//         document.getElementById(targetId).innerHTML = html; // Вставляем содержимое в placeholder
//       } catch (error) {
//         console.error(`Не удалось загрузить компонент: ${error.message}`);
//       }
//     }

//     // Вызываем функцию для загрузки header и footer
//     loadComponent('./includes/wrapper.html', 'wrapper');
    