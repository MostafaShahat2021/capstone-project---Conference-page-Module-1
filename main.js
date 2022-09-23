// Global Variabels
const hamburgerBtn = document.getElementById('hamburger');

const mobMenu = document.querySelector('.mob-menu');

const closeBtn = document.getElementById('close');

const links = document.getElementsByClassName('portfolio-link');

hamburgerBtn.addEventListener('click', () => {
  mobMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});

function closeLink() {
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', () => {
      mobMenu.style.display = 'none';
    });
  }
}
closeLink();
// ===================================================================
// =========== Dynamic page ================
const articleData = [
  {
    img: 'img/AA-Yasmine-Fouad-ENB.jpg',
    title: 'Dr Yasmine Fouad',
    p1: 'Minister of Environment',
    p2: ' COP27 Ministerial Coordinator and Envoy headed the Egyptian delegation that participated at the 18th session of the African ministerial conference on environment',
  },
  {
    img: 'img/63174f9d4236043faa3501a1.jpg',
    title: 'Sameh Shoukry',
    p1: 'Minister of Foreign Affairs of Egypt ',
    p2: 'served as the Ambassador of Egypt to the United States from 2008 to 2012, Lorem ipsum dolor sit amet',
  },
  {
    img: 'img/web-assets3.webp',
    title: 'Chrissy Brien',
    p1: 'Manger Director Boston',
    p2: 'Manufacturing Post merger integration,Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    img: 'img/web-assets4.webp',
    title: 'Jesper Nileson',
    p1: 'Managing director London',
    p2: 'Corporate Finance and strategy,Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    img: 'img/web-assets5.webp',
    title: 'Shelly Trench',
    p1: 'Managing Director Dubai',
    p2: 'Business Model Innovation, Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    img: 'img/web-assets6.webp',
    title: 'Yvonne Zhou',
    p1: 'Public Sector Beijing',
    p2: 'International Business, Infrastructure, Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];
function cardGenerator() {
  for (let i = 0; i < articleData.length; i += 1) {
    const section = document.querySelector('.third-section');
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `<img src="${articleData[i].img}">
            <div class="speaker">
            <h4 class="card-title">${articleData[i].title}</h4>
            <p class="p-1">${articleData[i].p1}</p>
            <hr class="hrr">
            <p class="p-2">${articleData[i].p2}</p>
            </div>
            `;
    section.appendChild(card);
  }
}
cardGenerator();