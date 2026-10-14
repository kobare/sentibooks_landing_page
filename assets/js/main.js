document.addEventListener('DOMContentLoaded', function() {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  window.switchCycle = function(cycle) {
    document.querySelectorAll('.billing-tab').forEach(function(tab) {
      var isActive = tab.dataset.cycle === cycle;
      tab.classList.toggle('active', isActive);
      tab.classList.toggle('bg-white', isActive);
      tab.classList.toggle('text-gray-900', isActive);
      tab.classList.toggle('shadow-sm', isActive);
    });
    document.querySelectorAll('.monthly-price').forEach(function(el) { el.classList.toggle('hidden', cycle !== 'monthly'); });
    document.querySelectorAll('.quarterly-price').forEach(function(el) { el.classList.toggle('hidden', cycle !== 'quarterly'); });
    document.querySelectorAll('.yearly-price').forEach(function(el) { el.classList.toggle('hidden', cycle !== 'yearly'); });
    document.querySelectorAll('.quarterly-note').forEach(function(el) { el.classList.toggle('hidden', cycle !== 'quarterly'); });
    document.querySelectorAll('.yearly-note').forEach(function(el) { el.classList.toggle('hidden', cycle !== 'yearly'); });
  };

  var slides = [
    { src: '/assets/images/01.jpg', type: 'mobile',  alt: 'Sentibooks mobile view 1' },
    { src: '/assets/images/02.jpg', type: 'desktop', alt: 'Sentibooks desktop view 1' },
    { src: '/assets/images/03.jpg', type: 'mobile',  alt: 'Sentibooks mobile view 2' },
    { src: '/assets/images/04.jpg', type: 'desktop', alt: 'Sentibooks desktop view 2' },
    { src: '/assets/images/05.jpg', type: 'mobile',  alt: 'Sentibooks mobile view 3' },
    { src: '/assets/images/06.jpg', type: 'desktop', alt: 'Sentibooks desktop view 3' }
  ];

  var track = document.getElementById('sliderTrack');
  var dotsContainer = document.getElementById('sliderDots');
  if (!track || !dotsContainer) return;

  slides.forEach(function(slide, index) {
    var slideDiv = document.createElement('div');
    slideDiv.className = 'slider-slide';
    slideDiv.innerHTML = slide.type === 'mobile'
      ? '<div class="phone-frame"><div class="phone-screen"><div class="phone-notch"></div><img src="' + slide.src + '" alt="' + slide.alt + '" class="w-full h-auto"></div></div>'
      : '<div class="monitor-frame"><div class="monitor-screen"><img src="' + slide.src + '" alt="' + slide.alt + '" class="w-full h-auto"></div><div class="monitor-stand"></div><div class="monitor-base"></div></div>';
    track.appendChild(slideDiv);

    var dot = document.createElement('span');
    dot.className = 'dot' + (index === 0 ? ' active' : '');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  var currentIndex = 0;
  var allSlides = document.querySelectorAll('.slider-slide');
  var dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    dots.forEach(function(d) { d.classList.remove('active'); });
    dots[index].classList.add('active');
    currentIndex = index;
  }

  setInterval(function() {
    currentIndex = (currentIndex + 1) % dots.length;
    goToSlide(currentIndex);
  }, 4000);

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() { goToSlide(parseInt(dot.dataset.index)); });
  });

  var modal = document.getElementById('imageModal');
  var modalImage = document.getElementById('modalImage');
  var closeModalBtn = document.getElementById('closeModal');
  if (!modal || !modalImage || !closeModalBtn) return;

  allSlides.forEach(function(slide) {
    slide.addEventListener('click', function() {
      var img = slide.querySelector('img');
      if (img) {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modal.style.display = 'flex';
      }
    });
  });

  closeModalBtn.addEventListener('click', function() { modal.style.display = 'none'; });
  modal.addEventListener('click', function(e) { if (e.target === modal) modal.style.display = 'none'; });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') modal.style.display = 'none';
  });
});
