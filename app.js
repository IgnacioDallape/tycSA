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
    let contactButton = document.querySelector('#AServicios');

    contactButton.addEventListener('click', function () {
      let contactoSection = document.querySelector('#servicios');
      let position = contactoSection.offsetTop;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let contactButton = document.querySelector('#AClientes');

    contactButton.addEventListener('click', function () {
      let contactoSection = document.querySelector('#clientes');
      let position = contactoSection.offsetTop;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let contactButton = document.querySelector('#AUbicacion');

    contactButton.addEventListener('click', function () {
      let contactoSection = document.querySelector('#Ubicacion');
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

