const form = document.querySelector('.form-inline');
const input = document.querySelector('.input-text');

const urls = [
    'yourlieinapril',
    'walkingdead',
    'viking',
    'thewitcher',
    'sarah',
    'malcolm',
    'kylexy',
    'gto',
    'demonslayer',
    'arcane'
  ];

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const searchTerm = input.value.trim().toLowerCase();
  let searchWithoutSpace = searchTerm.replace(/ /g, "");
//   console.log(searchWithoutSpace);
  if (searchTerm !== '') {
    const url = 'http://127.0.0.1:5503/html/' + searchWithoutSpace +'.html?' ;
    window.location.href = url;
  }
});