var overlay = document.getElementById('overlay');
var courseInfo = document.getElementById('courseInfo');
var showCourseListBtn = document.getElementById('courseListBtn');
var closeBtn = document.getElementById('closeBtn'); // Добавлено

showCourseListBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    courseInfo.style.display = 'block';
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    courseInfo.style.display = 'none';
});

closeBtn.addEventListener('click', function() { // Добавлено
    overlay.style.display = 'none';
    courseInfo.style.display = 'none';
});
