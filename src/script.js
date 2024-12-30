const btn = document.getElementById('btn');
const counter = document.querySelector('.counter');

let savedcounter = JSON.parse(localStorage.getItem('savedcounter'));
let count = savedcounter ? savedcounter : 0;
counter.textContent = count;

btn.addEventListener('click', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - btn.offsetWidth);
    const randomY = Math.random() * (windowHeight - btn.offsetHeight);

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    count++
    localStorage.setItem('savedcounter', JSON.stringify(count));

    counter.classList.add('blur');
    setTimeout(() => {
        counter.classList.remove('blur');
        counter.textContent = count;
    }, 300)
    
})

