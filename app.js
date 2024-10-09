const btnContainer = document.querySelector('.btn-container');
const switchBtn = document.querySelector('.btn');
const contentContainer = document.querySelector('.container');
const containerInner = document.querySelector('.container-inner');

switchBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        switchBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.add('dark-mode');
        switchBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
