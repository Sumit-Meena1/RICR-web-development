// script.js - interactivity for Ishika Car Care front page
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        navList.classList.remove('show');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Booking modal open/close
  const openBtns = [document.getElementById('book-now'), document.getElementById('hero-book')];
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');

  openBtns.forEach(b => b?.addEventListener('click', () => openModal()));
  modalClose?.addEventListener('click', () => closeModal());
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function openModal() {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input, select, textarea');
    firstInput?.focus();
  }
  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Booking form validation & handler
  const bookingForm = document.getElementById('booking-form');
  bookingForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Simple validation
    const name = bookingForm.querySelector('#cust-name').value.trim();
    const phone = bookingForm.querySelector('#cust-phone').value.trim();
    const vehicle = bookingForm.querySelector('#cust-vehicle').value.trim();
    const service = bookingForm.querySelector('#service-select').value;
    const date = bookingForm.querySelector('#preferred-date').value;

    if (!name || !phone || !vehicle || !service || !date) {
      alert('Please fill all required fields.');
      return;
    }

    // Build booking payload (developer: replace with real API call)
    const payload = { name, phone, vehicle, service, date, notes: bookingForm.querySelector('#notes').value.trim() };
    // For now show a success message and reset the form
    console.log('Booking payload:', payload);
    alert('Thank you! Your booking request has been received. We will contact you to confirm.');
    bookingForm.reset();
  });

  // Modal form submit (quick request)
  const modalForm = document.getElementById('modal-form');
  modalForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = modalForm.querySelector('#m-name').value.trim();
    const phone = modalForm.querySelector('#m-phone').value.trim();
    const service = modalForm.querySelector('#m-service').value;

    if (!name || !phone || !service) {
      alert('Please fill all fields.');
      return;
    }
    console.log('Modal booking:', { name, phone, service });
    alert('Thanks! We will call you shortly to confirm the booking.');
    modalForm.reset();
    closeModal();
  });

  // Carousel logic (simple)
  const track = document.querySelector('.carousel-track');
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  if (track) {
    let index = 0;
    const items = Array.from(track.querySelectorAll('.carousel-item'));
    function updateCarousel() {
      const itemWidth = items[0].getBoundingClientRect().width + 12; // gap
      track.style.transform = `translateX (-${index * itemWidth} px)`;
    }
    prev?.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      updateCarousel();
    });
    next?.addEventListener('click', () => {
      index = Math.min(items.length - 1, index + 1);
      updateCarousel();
    });
    // responsive: recalc on resize
    window.addEventListener('resize', () => setTimeout(updateCarousel, 120));
  }

  // Accessibility: close modal on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      navList.classList.remove('show');
    }
  });
});