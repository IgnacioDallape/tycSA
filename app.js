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
        behavior: 'smooth',
        duration: 2000
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let contactButton = document.querySelector('#AUnidades');

    contactButton.addEventListener('click', function () {
      let contactoSection = document.querySelector('#unidades');
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
        hoverpause: false
    });

    glide.mount();
});

document.addEventListener('DOMContentLoaded', function () {
  const anotherGlide = new Glide('.another-carousel', {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      autoplay: 2000,
      hoverpause: false
  });

  anotherGlide.mount();
});