var overlay = document.getElementById('overlay');
var showCourseListBtn = document.getElementById('courseListBtn');

showCourseListBtn.addEventListener('click', function() {
    overlay.style.display = 'block'; // Отображаем темную вкладку
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none'; // Закрываем темную вкладку при клике на нее
});
