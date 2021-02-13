export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event){
    event.preventDefault();
    this.classList.add('active');
  };

  dropdownMenus.forEach((menu) => {
    menu.addEventListener('click', handleClick);
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  })

}


