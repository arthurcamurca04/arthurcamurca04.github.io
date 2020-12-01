//identificar o clique no menu
//verificar o item que foi clicado e fazer referência com o alvo
//verificar a distância entre o alvo e o topo
//animar o scroll até o alvo

const menuItems = document.querySelectorAll('.menu a[href^="#"]');
const $headerButton = document.getElementById('header-button');

$headerButton.addEventListener('click', scrollToIdOnClick);

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
  event.preventDefault();
  const $linkMenu = event.target;
  const to = getScrollTopByHref($linkMenu);
  scrollToPosition(to);
}

function scrollToPosition(position){
  window.scroll({
    top: position,
    behavior: "smooth",
  });
}

function getScrollTopByHref(element){
  const id = element.getAttribute('href');
  const $section = document.querySelector(id);
  return $section.offsetTop;
}