function showCourseList() {
    var overlay = document.getElementById('overlay');
    var courseInfo = document.getElementById('courseInfo');
    overlay.style.display = 'block';
    courseInfo.style.display = 'block';
}

function showModal(title, description) {
    var modal = document.getElementById('courseInfo');
    var courseTitle = document.getElementById('courseTitle');
    var courseDescription = document.getElementById('courseDescription');

    courseTitle.textContent = title;
    courseDescription.textContent = description;

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('overlay');
    modal.style.display = 'none';
}

function showShortInfoModal(title, description) {
    var modal = document.getElementById('shortInfoModal');
    var courseTitle = document.getElementById('shortCourseTitle');
    var courseDescription = document.getElementById('shortCourseDescription');

    courseTitle.textContent = title;
    courseDescription.textContent = description;

    modal.style.display = 'block';
}

