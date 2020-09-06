//Initialize and add the map
function initMap() {
  //Your location
  const loc = {lat: 42.361145, lng: -71.057083};
  //Centered Map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  //The marker, positioned at location
  const marker = new google.maps.Marker({position: loc, map: map})
}

//Sticky menu background
  //makes stick menu have opacity only when you start to scroll down

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity=0.8;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

//Smooth Scrolling

$('#navbar a,').on('click', function(event) {
  if (this.hash !=='') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100 //keeps scroll feature from blocking out section title
      },
      800 //speed of smooth scroll,  800 miliseconds
    );
  }
});