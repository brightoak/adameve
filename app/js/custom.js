'use strict';

// 1. Sticky Header

var headroom = new Headroom(document.querySelector('#header'));
headroom.init();

document.addEventListener("DOMContentLoaded", function () {

  var bodyTag = document.querySelector('body');

  // Side nav
  var navToggle = document.querySelector('.explore');

  if (navToggle) {
    navToggle.onclick = function () {
      if (bodyTag.classList.contains('sidenav-opened')) {
        bodyTag.classList.remove('sidenav-opened');
      } else {
        bodyTag.classList.add('sidenav-opened');
      }
    };

    var closeSideNav = document.querySelector('#sidenav .close-cross');

    closeSideNav.onclick = function () {
      bodyTag.classList.remove('sidenav-opened');
    };

    var navHolder = document.querySelector('#sidenav .inner');
    navHolder.style.maxHeight = window.innerHeight + 'px';

    window.onresize = function () {
      navHolder.style.maxHeight = window.innerHeight + 'px';
    };
  }

  var picker = new Pikaday({ field: document.getElementById('requested-appointment-date') });

  var requestConsultation = document.getElementById('requestconsultation');
  if (requestConsultation) {
    var form = requestConsultation.querySelector('form');
    form.onsubmit = function (e) {
      e.preventDefault();
      requestConsultation.classList.add('js-valid');
    };
  }

  //requestConsultation
  var requestConsultationBtns = document.querySelectorAll('.requestconsultation-btn');
  if (requestConsultationBtns.length > 1) {
    var fader = document.getElementById('fader');
    requestConsultationBtns.forEach(function (el) {
      el.onclick = function (e) {
        e.preventDefault();
        var container = document.getElementById('requestconsultation');
        if (container) {
          container.classList.add('js-visible');

          var closeContainer = container.querySelector('.close');
          closeContainer.onclick = function () {
            container.classList.remove('js-visible');
            container.classList.remove('js-valid');
          };
          fader.onclick = function () {
            container.classList.remove('js-visible');
          };
        }
      };
    });
  }
  var videoReadMore = document.querySelectorAll('.video-read-more');
  if (videoReadMore.length > 1) {

    videoReadMore.forEach(function (el) {
      if (el.scrollHeight > el.offsetHeight) {
        el.classList.add('js-hidden');
        el.onclick = function () {
          el.classList.toggle('js-visible');
        };
      }
    });
  }

  var grid = document.getElementById('photos-grid');
  if (grid) {
    Macy({
      container: '#photos-grid',
      columns: 4,
      margin: 50,
      breakAt: {
        1000: {
          margin: 30,
          columns: 2
        },
        600: {
          columns: 1
        }
      }
    });
  }

  var testimonialsGrid = document.getElementById('testimonials');
  if (testimonialsGrid) {
    Macy({
      container: '#testimonials',
      columns: 3,
      margin: 100,
      breakAt: {
        1000: {
          margin: 30,
          columns: 2
        },
        600: {
          columns: 1
        }
      }
    });
  }
});

// specials slider
var specialsSlider = document.querySelector('#specials-slider');
if (specialsSlider) {
  tns({
    container: specialsSlider,
    mode: "gallery",
    items: 1,
    speed: 400,
    nav: false
  });
}

// before after slider
var beforeAfterSlider = document.querySelector('#before-after-slider');
if (beforeAfterSlider) {
  tns({
    container: beforeAfterSlider,
    mode: "gallery",
    items: 1,
    speed: 400,
    controlsText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    autoHeight: true
  });
}

// FAQ section
var faqsContent = document.getElementById('faqs-content');
if (faqsContent) {
  var faqItems = Array.from(faqsContent.querySelectorAll('.question'));
  faqItems.forEach(function (el) {
    el.onclick = function () {
      el.parentNode.classList.toggle('js-visible');
    };
  });
}

// herosection
var hero = document.getElementById('hero');
if (hero) {
  var app = new Vue({
    el: '#hero',
    data: {
      selectedArea: '',
      selectedService: '',
      selectedProcedure: '',

      currentSlide: 0,

      heroWrapperWidth: document.querySelector('#hero .wrapper').clientWidth,

      slides: 4,
      bodyAreas: [{
        id: 'face-area',
        title: 'Face',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sagittis mattis. Maecenas ut metus neque. Donec vitae turpis nec orci pretium dictum sed finibus enim.',
        imageUrl: 'images/bg-step2.jpg',
        services: [{
          title: 'Skin Tightening',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Total FX CO2 Laser',
            text: 'Total FX CO2 Laser from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Laser Genesis',
            text: 'Laser Genesis from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'NOVA Threads',
            text: 'NOVA Threads from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Wrinkle Reduction',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Skin Discoloration',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Hair Reduction',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Skin Texture',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Skin Rejuvenation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Permanent Makeup',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }]
      }, {
        id: 'hairline-area',
        title: 'Hairline',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sagittis mattis. Maecenas ut metus neque. Donec vitae turpis nec orci pretium dictum sed finibus enim.',
        imageUrl: 'images/bg-step2.jpg',
        services: [{
          title: 'Skin Tightening',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Total FX CO2 Laser',
            text: 'Total FX CO2 Laser from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Laser Genesis',
            text: 'Laser Genesis from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'NOVA Threads',
            text: 'NOVA Threads from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Wrinkle Reduction',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }]
      }, {
        id: 'neck-area',
        title: 'Neck',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sagittis mattis. Maecenas ut metus neque. Donec vitae turpis nec orci pretium dictum sed finibus enim.',
        imageUrl: 'images/bg-step2.jpg',
        services: [{
          title: 'Skin Tightening',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Total FX CO2 Laser',
            text: 'Total FX CO2 Laser from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Laser Genesis',
            text: 'Laser Genesis from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'NOVA Threads',
            text: 'NOVA Threads from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Wrinkle Reduction',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }]
      }, {
        id: 'body-area',
        title: 'Body',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sagittis mattis. Maecenas ut metus neque. Donec vitae turpis nec orci pretium dictum sed finibus enim.',
        imageUrl: 'images/bg-step2.jpg',
        services: [{
          title: 'Skin Tightening',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Total FX CO2 Laser',
            text: 'Total FX CO2 Laser from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Laser Genesis',
            text: 'Laser Genesis from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'NOVA Threads',
            text: 'NOVA Threads from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Wrinkle Reduction',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }]
      }, {
        id: 'hands-area',
        title: 'Hands',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sagittis mattis. Maecenas ut metus neque. Donec vitae turpis nec orci pretium dictum sed finibus enim.',
        imageUrl: 'images/bg-step2.jpg',
        services: [{
          title: 'Skin Tightening',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Total FX CO2 Laser',
            text: 'Total FX CO2 Laser from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Laser Genesis',
            text: 'Laser Genesis from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'NOVA Threads',
            text: 'NOVA Threads from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }, {
          title: 'Wrinkle Reduction',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id imperdiet lacus, quis fermentum lectus. Quisque eget massa nec justo sagittis aliquet ut eget purus. Nulla sed sem sit amet tortor pulvinar commodo in euismod magna. Ut ipsum leo, pulvinar at dolor blandit, aliquet tempus ipsum.',
          imageUrl: 'images/bg-step3.jpg',
          procedures: [{
            title: 'Ultherapy',
            text: 'Ultherapy from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).\n                The only FDA-approved procedure to lift skin on these hard-to-treat areas, Ultherapy uses the safe, time-tested energy of ultrasound to stimulate the deep structural support layers of the skin\u2014including those typically addressed in a surgical facelift\u2014without disturbing the surface of the skin.',
            learnMoreUrl: 'http://example.com/'
          }, {
            title: 'Sculptra',
            text: 'Sculptra from Adam and Eve Med Spa in Scottsdale Arizona is a new type of non-surgical, non-invasive procedure that uses ultrasound and the body\u2019s own natural healing process to lift, tone, and tighten loose skin on the brow, around the eyes, neck, under the chin, and decolletage (chest).',
            learnMoreUrl: 'http://example.com/'
          }]
        }]
      }]
    },

    created: function created() {
      window.addEventListener("resize", this.windowResize);
    },
    destroyed: function destroyed() {
      window.removeEventListener("resize", this.windowResize);
    },

    computed: {

      stepWidth: function stepWidth() {
        return this.heroWrapperWidth;
      },

      containerWidth: function containerWidth() {
        return this.stepWidth * 4;
      },

      containerLeftPosition: function containerLeftPosition() {
        return this.stepWidth * this.currentSlide;
      }

    },

    methods: {
      nextStep: function nextStep(index) {
        this.selectedArea = this.bodyAreas[index];
        this.currentSlide++;
      },
      nextStepService: function nextStepService(index) {
        this.selectedService = this.selectedArea.services[index];
        this.currentSlide++;
      },
      nextStepprocedure: function nextStepprocedure(index) {
        this.selectedProcedure = this.selectedService.procedures[index];
        this.currentSlide++;
      },
      goToPrevStep: function goToPrevStep() {
        this.currentSlide--;
      },
      windowResize: function windowResize() {
        this.heroWrapperWidth = document.querySelector('#hero .wrapper').clientWidth;
      },

      openLightbox: function openLightbox(event) {
        event.preventDefault();
        var container = document.getElementById('requestconsultation');
        if (container) {
          container.classList.add('js-visible');

          var closeContainer = container.querySelector('.close');
          closeContainer.onclick = function () {
            container.classList.remove('js-visible');
            container.classList.remove('js-valid');
          };
        }
      }
    }
  });
}

// mediagallery
var mediagallery = document.getElementById('mediagallery');
if (mediagallery) {
  var app = new Vue({
    el: '#mediagallery',
    data: {
      selectedFilter: 'all',
      filters: {
        all: 'All',
        videos: 'Videos',
        beforeafter: 'Before & After',
        photos: 'Photos'
      }
    },

    methods: {
      setActive: function setActive(key) {
        this.selectedFilter = key;
      }
    }
  });
}