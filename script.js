// 夜间模式切换
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '日间模式';
    } else {
        themeToggle.textContent = '夜间模式';
    }
});

// 个人日记本功能
const diaryForm = document.getElementById('diary-form');
const diaryContent = document.getElementById('diary-content');
const diaryEntries = document.getElementById('diary-entries');

diaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const entry = document.createElement('div');
    entry.classList.add('diary-entry');
    entry.textContent = diaryContent.value;
    diaryEntries.prepend(entry);
    diaryContent.value = '';
});
