const addFavoriteBtn = document.querySelector('#add-favorite-btn');

addFavoriteBtn.addEventListener('click', function() {
  // Récupérer les informations nécessaires pour ajouter la page aux favoris
  const pageUrl = window.location.href.slice(27, 33);
  console.log(pageUrl);

  // Vérifier si la page est déjà dans les favoris
  const favoritePages = JSON.parse(localStorage.getItem('favoritePages')) || [];
  const isAlreadyFavorite = favoritePages.some(function(page) {
    return page.url === pageUrl;
  });

  // Si la page n'est pas encore dans les favoris, l'ajouter
  if (!isAlreadyFavorite) {
    favoritePages.push({url: pageUrl});
    localStorage.setItem('favoritePages', JSON.stringify(favoritePages));
    alert('La série a été ajoutée aux favoris.');
  } else {
    alert('déjà en favoris');
  }
});
