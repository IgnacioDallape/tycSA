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