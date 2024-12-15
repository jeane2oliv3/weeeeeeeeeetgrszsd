let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.style.display = 'flex';
  });
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
    };
  });
}
menuIcon.onclick =() =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// Add event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');
  });
});
// Função para alternar o menu
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('active');
}

// Função para fechar o menu ao clicar em um link
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('active');
}
