const heart = document.querySelector('.heart-icon');

heart.addEventListener('click', () => {
    heart.querySelector('.empty').classList.toggle('active');
    heart.querySelector('.fill').classList.toggle('active');
});