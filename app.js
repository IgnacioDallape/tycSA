document.addEventListener('DOMContentLoaded', function () {
    let contactButton = document.querySelector('#AContacto');

    contactButton.addEventListener('click', function () {
      let contactoSection = document.querySelector('#contacto');
      let position = contactoSection.offsetTop;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let contactButton = document.querySelector('#ANosotros');

    contactButton.addEventListener('click', function () {
      let contactoSection = document.querySelector('#nosotros');
      let position = contactoSection.offsetTop;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });

  //carrousel
  document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 3000,
        hoverpause: true
    });

    glide.mount();
});

