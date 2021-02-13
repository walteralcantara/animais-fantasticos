export default function initMenuMobile(){
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('#menuList');

  function openMenu(){
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
  }

  menuButton.addEventListener('click', openMenu);
}


