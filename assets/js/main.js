/**
* Template Name: Logis
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Custom Cursor
   */
  const cursorDot = document.createElement("div");
  const cursorOutline = document.createElement("div");
  cursorDot.classList.add("custom-cursor-dot");
  cursorOutline.classList.add("custom-cursor-outline");
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.opacity = "1";

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
    cursorOutline.style.opacity = "1";
  });

  document.querySelectorAll('a, button, .btn, .mobile-nav-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '60px';
      cursorOutline.style.height = '60px';
      cursorOutline.style.borderColor = 'rgba(66, 133, 236, 0.8)';
      cursorOutline.style.backgroundColor = 'rgba(66, 133, 236, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.style.width = '30px';
      cursorOutline.style.height = '30px';
      cursorOutline.style.borderColor = 'rgba(66, 133, 236, 0.5)';
      cursorOutline.style.backgroundColor = 'transparent';
    });
  });

  /**
   * WhatsApp Floating Button — injected globally on every page
   */
  (function injectWhatsApp() {
    const PHONE = '919037014455';
    const MESSAGE = encodeURIComponent('Hello PITS! I would like to know more about your services.');
    const waLink = 'https://wa.me/' + PHONE + '?text=' + MESSAGE;

    var btn = document.createElement('a');
    btn.href = waLink;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Chat with PITS on WhatsApp');
    btn.className = 'whatsapp-float';
    btn.id = 'whatsapp-float-btn';

    var pulse = document.createElement('span');
    pulse.className = 'whatsapp-float-pulse';
    btn.appendChild(pulse);

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('width', '30');
    svg.setAttribute('height', '30');
    svg.setAttribute('fill', 'white');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.437-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.07 22.9c-.337.949-1.676 1.738-2.766 1.969-.74.157-1.706.282-4.956-1.065-4.16-1.693-6.84-5.896-7.047-6.168-.2-.272-1.68-2.24-1.68-4.272 0-2.033 1.065-3.03 1.443-3.445.338-.37.737-.462.983-.462l.706.013c.226.01.53-.086.83.633.31.737 1.053 2.575 1.146 2.764.093.188.155.41.031.659-.124.248-.186.403-.372.62-.187.217-.394.485-.562.65-.187.186-.382.387-.165.76.217.373.965 1.592 2.072 2.579 1.424 1.27 2.627 1.663 2.999 1.85.373.186.59.155.808-.094.217-.248.932-1.085 1.18-1.458.247-.372.496-.31.836-.186.34.124 2.163 1.02 2.534 1.207.372.186.62.28.713.434.093.155.093.897-.244 1.812z');
    svg.appendChild(path);
    btn.appendChild(svg);

    var tooltip = document.createElement('span');
    tooltip.className = 'whatsapp-float-tooltip';
    tooltip.textContent = 'Chat with us!';
    btn.appendChild(tooltip);

    document.body.appendChild(btn);
  })();

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  $(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('whatsapp-form');
    form.addEventListener('submit', (event) => {
      sendWhatsAppMessage(event, 'My Project Name');
    });
  });

  function sendWhatsAppMessage(event, projectname) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const date = document.getElementById('date').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !date || !message) {
      alert("Please fill out all fields before sending!");
      return;
    }

    const whatsappMessage = `Hello, here are the details for the ${projectname} project:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n` +
      `Date: ${date}\n` +
      `Message: ${message}`;

    const recipientNumber = '+919048723474';
    const appLink = `whatsapp://send?phone=${recipientNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    const webLinkDesktop = `https://web.whatsapp.com/send?phone=${recipientNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    const webLinkMobile = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      const appWindow = window.open(appLink, '_blank');
      setTimeout(() => {
        if (!appWindow || appWindow.closed || typeof appWindow.closed === 'undefined') {
          window.open(webLinkMobile, '_blank');
        }
      }, 1000);
    } else {
      window.open(webLinkDesktop, '_blank');
    }
  }

})();