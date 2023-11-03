// Tableau contenant les informations de chaque diapositive
const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
  ];
  
  // Sélection des éléments du DOM nécessaires
  const leftArrow = document.querySelector('.arrow_left');
  const rightArrow = document.querySelector('.arrow_right');
  const bannerImage = document.querySelector('.banner-img');
  const bannerText = document.querySelector('#tagLine');
  
  // Index de la diapositive actuellement affichée
  let currentSlideIndex = 0;
  
  // Sélection du conteneur des points dans le DOM
  const dotsContainer = document.querySelector('.dots');










  ////////////////////////////////////////////////
  // Fonction pour créer les points du carrousel//
  ////////////////////////////////////////////////


  function createDots() {
	
	// Créer un nouveau point pour chaque diapositive
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dotsContainer.appendChild(dot);
	  }
  }
  
  // Appel de la fonction pour créer les points
  createDots();
  
  // Mettre à jour la sélection des points dans le DOM après leur création
  const dots = document.querySelectorAll('.dot');
  
  // Fonction pour mettre à jour l'état des points en fonction de l'index de la diapositive actuelle
  function updateDots(index) {
	// Parcourir tous les points et les mettre à jour en conséquence
	for (let i = 0; i < dots.length; i++) {
	  if (i === index) {
		dots[i].classList.add('dot_selected'); // Ajoute la classe 'dot_selected' au point correspondant à la diapositive actuelle
	  } else {
		dots[i].classList.remove('dot_selected'); // Supprime la classe 'dot_selected' des autres points
	  }
	}
  }
  








  /////////////////////////////////////////////////////////////////////////////////
  // Fonction pour afficher une diapositive spécifique en fonction de son index ///
  ///////////////////////////////////////////////////////////////////////////////


  function showSlide(index) {
	bannerImage.src = `assets/images/slideshow/${slides[index].image}`; // Met à jour l'image du carrousel
	bannerText.innerHTML = slides[index].tagLine; // Met à jour le texte du carrousel
  
	console.log('Affichage de la diapositive ' + index); // Log de console
  
	updateDots(index); // Appel de la fonction pour mettre à jour les dots

  }
   




  /////////////////////////////////////////////////
  // Fonction pour gérer le clic sur les flèches //
  /////////////////////////////////////////////////



  function handleArrowClick(direction) {
	console.log('Clic sur la flèche ' + direction);
  
	// Mettre à jour l'index de la diapositive actuelle en fonction de la direction 
	if (direction === 'gauche') {
	  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	} else if (direction === 'droite') {
	  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	}
  
	showSlide(currentSlideIndex); // Affiche la nouvelle diapositive
  }
  
  leftArrow.addEventListener('click', function () {
	handleArrowClick('gauche'); // Gère le clic sur la flèche gauche
  });
  
  rightArrow.addEventListener('click', function () {
	handleArrowClick('droite'); // Gère le clic sur la flèche droite
  });
 



  


   ///////////////////////////////////////////////////////
  // Gestionnaire d'événement pour le clic sur les points//
  ////////////////////////////////////////////////////////




  for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', function () {
	  console.log('Clic sur le point ' + i); // Log de console
  
	  currentSlideIndex = i; // Met à jour l'index de la diapositive actuelle
  
	  showSlide(currentSlideIndex); // Affiche la nouvelle diapositive
	});
  }
  



  //////////////////////////////////////////////////////////////
  // Afficher la première diapositive au chargement de la page//
  //////////////////////////////////////////////////////////////


  showSlide(currentSlideIndex);

  