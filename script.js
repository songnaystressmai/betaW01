// --- Slide trái ---
const leftPosters = [
  "images/slide đầu/slide1.jpg",
  "images/slide đầu/slide10.webp",
  "images/slide đầu/slide2.jpg"
];
let leftIndex = 0;
let leftShow = 1;

function switchLeftPoster(direction) {
  const oldIndex = leftIndex;
  leftIndex += direction;
  if (leftIndex < 0) leftIndex = leftPosters.length - 1;
  if (leftIndex >= leftPosters.length) leftIndex = 0;

  const img1 = document.getElementById("leftPoster1");
  const img2 = document.getElementById("leftPoster2");
  if (!img1 || !img2) return;
  let currentImg, nextImg;

  if (leftShow === 1) {
    currentImg = img1;
    nextImg = img2;
  } else {
    currentImg = img2;
    nextImg = img1;
  }

  nextImg.src = leftPosters[leftIndex];
  nextImg.className = "slide-img";
  nextImg.classList.add(direction > 0 ? "to-right" : "to-left");
  nextImg.style.zIndex = 3;

  // Force reflow
  void nextImg.offsetWidth;

  currentImg.classList.remove("active");
  currentImg.classList.add(direction > 0 ? "to-left" : "to-right");
  nextImg.classList.remove("to-left", "to-right");
  nextImg.classList.add("active");

  leftShow = leftShow === 1 ? 2 : 1;
}

// --- Slide chính bên phải ---
const mainSlideImages = [
  "images/slide đầu/slide4.jpg",
  "images/slide đầu/slide5.jpg",
  "images/slide đầu/slide6.png"
];
let mainSlideIndex = 0;
let mainShow = 1;

function switchMainSlide(direction) {
  const oldIndex = mainSlideIndex;
  mainSlideIndex += direction;
  if (mainSlideIndex < 0) mainSlideIndex = mainSlideImages.length - 1;
  if (mainSlideIndex >= mainSlideImages.length) mainSlideIndex = 0;

  const img1 = document.getElementById("mainSlideImg1");
  const img2 = document.getElementById("mainSlideImg2");
  if (!img1 || !img2) return;
  let currentImg, nextImg;

  if (mainShow === 1) {
    currentImg = img1;
    nextImg = img2;
  } else {
    currentImg = img2;
    nextImg = img1;
  }

  nextImg.src = mainSlideImages[mainSlideIndex];
  nextImg.className = "slide-img";
  nextImg.classList.add(direction > 0 ? "to-right" : "to-left");
  nextImg.style.zIndex = 3;

  // Force reflow
  void nextImg.offsetWidth;

  currentImg.classList.remove("active");
  currentImg.classList.add(direction > 0 ? "to-left" : "to-right");
  nextImg.classList.remove("to-left", "to-right");
  nextImg.classList.add("active");

  mainShow = mainShow === 1 ? 2 : 1;
}

// --- Back to top ---
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById("backToTopBtn");
  if (btn) {
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
    btn.addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
});

// --- Top 10 ---
let top10Index = 0;
function moveTop10(direction) {
  const list = document.querySelector('.top10-list');
  const items = document.querySelectorAll('.top10-item');
  const wrapper = document.querySelector('.top10-list-wrapper');
  if (!list || !items.length || !wrapper) return;

  const gap = 20; // Gap between items, must match CSS
  const itemWidth = items[0].offsetWidth;
  const totalItems = items.length;
  const visibleCount = Math.floor((wrapper.offsetWidth + gap) / (itemWidth + gap));
  const maxIndex = totalItems - visibleCount;

  top10Index += direction;
  if (top10Index < 0) top10Index = 0;
  if (top10Index > maxIndex) top10Index = maxIndex;

  const translateX = top10Index * (itemWidth + gap);
  list.style.transform = `translateX(-${translateX}px)`;
}

// --- Đề xuất hôm nay ---
let featuredIndex = 0;
function moveFeatured(direction) {
  const list = document.querySelector('.featured-list');
  const items = document.querySelectorAll('.featured-item');
  const wrapper = document.querySelector('.featured-wrapper');
  if (!list || !items.length || !wrapper) return;

  const gap = 10;
  const itemWidth = items[0].offsetWidth + gap;
  const maxIndex = items.length - Math.floor(wrapper.offsetWidth / itemWidth);

  featuredIndex += direction;
  if (featuredIndex < 0) featuredIndex = 0;
  if (featuredIndex > maxIndex) featuredIndex = maxIndex;

  list.style.transform = `translateX(-${featuredIndex * itemWidth}px)`;
}

// --- Fan chọn ---
let fanIndex = 0;
function movefan(direction) {
  const list = document.querySelector('.fan-list');
  const items = document.querySelectorAll('.fan-item');
  const wrapper = document.querySelector('.fan-list-wrapper');
  if (!list || !items.length || !wrapper) return;

  const gap = 20; // Gap between items, must match CSS
  const itemWidth = items[0].offsetWidth;
  const totalItems = items.length;
  const visibleCount = Math.floor((wrapper.offsetWidth + gap) / (itemWidth + gap));
  const maxIndex = totalItems - visibleCount;

  fanIndex += direction;
  if (fanIndex < 0) fanIndex = 0;
  if (fanIndex > maxIndex) fanIndex = maxIndex;

  const translateX = fanIndex * (itemWidth + gap);
  list.style.transform = `translateX(-${translateX}px)`;
}

// --- Truyền thông DC ---
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('pi-scroll-container');
  if (!container) return;
  const cards = container.querySelectorAll('.pi-card');
  const card = cards[0];
  if (!card) return;
  const gap = 16;
  const scrollAmount = card.offsetWidth + gap;

  window.piScrollLeft = function () {
    container.scrollTo({
      left: Math.max(container.scrollLeft - scrollAmount, 0),
      behavior: 'smooth'
    });
  };

  window.piScrollRight = function () {
    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollTo({
      left: Math.min(container.scrollLeft + scrollAmount, maxScroll),
      behavior: 'smooth'
    });
  };
});

// --- Lựa chọn BTV ---
let editorChoiceIndex = 0;
function moveEditorChoice(direction) {
  const wrapper = document.querySelector('.editor-choice-wrapper');
  const list = document.querySelector('.editor-choice-list');
  const items = document.querySelectorAll('.editor-choice-item');
  if (!wrapper || !list || !items.length) return;

  const style = getComputedStyle(list);
  const gap = parseInt(style.columnGap || style.gap || 10);
  const itemWidth = items[0].offsetWidth + gap;

  const totalItems = items.length;
  const wrapperWidth = wrapper.offsetWidth;
  const totalWidth = itemWidth * totalItems - gap;
  const maxTranslate = totalWidth - wrapperWidth;

  editorChoiceIndex += direction;
  if (editorChoiceIndex < 0) editorChoiceIndex = 0;

  let translateX = editorChoiceIndex * itemWidth;
  if (translateX > maxTranslate) {
    translateX = maxTranslate;
    editorChoiceIndex = Math.floor(maxTranslate / itemWidth);
  }

  list.style.transform = `translateX(-${translateX}px)`;
}

// --- Coming Soon carousel ---
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.upcoming-play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Play trailer (demo)');
    });
  });
  document.querySelectorAll('.upcoming-like, .upcoming-love').forEach(el => {
    el.addEventListener('click', () => {
      el.style.transform = 'scale(1.23)';
      setTimeout(() => { el.style.transform = ''; }, 150);
    });
  });

  const row = document.querySelector('.upcoming-movie-row');
  const cards = Array.from(document.querySelectorAll('.upcoming-movie-card'));
  const prevBtn = document.querySelector('.upcoming-arrow-left');
  const nextBtn = document.querySelector('.upcoming-arrow-right');
  let scrollIndex = 0;
  const visibleCards = 3;

  function updateCarousel() {
    if (!cards.length || !row) return;
    const cardWidth = cards[0].offsetWidth + 400;
    row.scrollTo({
      left: scrollIndex * cardWidth,
      behavior: 'smooth'
    });
    if (prevBtn) {
      if (scrollIndex === 0) {
        prevBtn.classList.add('hide');
      } else {
        prevBtn.classList.remove('hide');
      }
    }
  }

  if (nextBtn && prevBtn && row && cards.length) {
    nextBtn.addEventListener('click', () => {
      if (scrollIndex < cards.length - visibleCards) {
        scrollIndex++;
        updateCarousel();
      }
    });
    prevBtn.addEventListener('click', () => {
      if (scrollIndex > 0) {
        scrollIndex--;
        updateCarousel();
      }
    });
    updateCarousel();
  }
});

// --- Tin tức ---
const newsData = {
  // ... dữ liệu như bạn đã có ...
  // (bạn giữ nguyên phần newsData như cũ)
  top: [
    {
      img: "images/news/new1.jpg",
      title: "🔥Cáo buộc hút ngôi sao võ thuật hành động Hắc Long tàng trữ chất cấm",
      meta: "Tin Tức - 16 tháng 5 hôm nay"
    },
    {
      img: "images/news/new2.jpg",
      title: "Dàn diễn viên Điều Kỳ Diệu Ở Buồng Giam Số 7 đình đám một thời giờ ra sao: Kẻ đi tù, người qua đời vì bạo bệnh...",
      meta: "<span>Tin Tức</span>"
    },
    {
      img: "images/fan/o4.jpg",
      title: "Ý nghĩa cái kết của Ballerina: liệu có đủ sức thay thế ông kẹ ?",
      meta: "<span>Tạp Chí Điện Ảnh Số 126</span>"
    },
    {
      img: "images/news/new3.jpg",
      title: "Paddington: Gấu thủ chu du đang gây sốt ở Peru bằng lăng kính đầy phép màu của Dougal Wilson",
      meta: "Cast: <span>Henry Brown, Emily Mortimer, Mary Brown, Ben Whishaw, Paddington Bear, Imelda Staunton, Aunt Lucy,...</span>"
    },
    {
      img: "images/news/new4.jpg",
      title: "Cyberpunk: Edge Runner, bộ phim hoạt hình được chuyển thể từ tựa game Cyberpunk 2077 : Khát Vọng hay lời cảnh báo về thế giới tương lai đầy tăm tối ?",
      meta: "🔥<span>Netflix 16 tháng 5</span>"
    },
    {
      img: "images/news/new5.jpg",
      title: "'Bé Tư' Wednesday tái ngộ cùng bộ phim kinh dị hài hước Death Of A Unicorn !",
      meta: "22 tháng 5 này tại rạp: <span>Đặt Vé Ngay</span>"
    }
  ],
  movie: [
    {
      img: "images/news/new6.jpg",
      title: "Bộ phim Live Action của Bạch Tuyết thất bại thảm hại vì những phát ngôn gây sốc của nữ diễn viên chính.",
      meta: "Xem Thêm<span></span>"
    },
    {
      img: "images/news/new7.avif",
      title: "Series Final Destination trở lại bùng nổ với phần phim mới.",
      meta: "Order Hulu Bluray<span></span>"
    },
    {
      img: "images/news/new8.jpg",
      title: "Lại thêm một bộ phim kinh dị bị đánh giá 'rẻ tiền', phá vỡ nguyên tác và bạo lực quá trớn đầu năm nay.",
      meta: "Xem Đánh Giá<span></span>"
    },
    {
      img: "images/news/new9.jpg",
      title: "'Kẻ Tội Đồ' chễm chệ leo lên top đầu phòng vé Âu Mỹ tháng 5 này.",
      meta: "Trailers And Videos<span></span>"
    },
    {
      img: "images/news/new10.jpg",
      title: "500 ngày ác mộng của mùa hè và bài học chấp nhận nỗi đau hậu chia tay.",
      meta: "Phân Tích<span></span>"
    },
    {
      img: "images/news/new11.jpg",
      title: "Chiến tranh đau đớn đến nhường nào ?, hãy xem qua bộ phim này ít nhất một lần trong đời",
      meta: "<span>Đọc Thêm</span>"
    }
  ],
  tv: [
    {
      img: "images/news/new12.jpg",
      title: "Benicio Del Toro và chiếc series Sicario kinh điển về tội phạm băng đảng biên giới Mexico",
      meta: "<span>Lựa chọn của chúng tôi</span>"
    },
    {
      img: "images/news/new13.jpg",
      title: "Cái giá của lời nói dối: nỗi đau khôn nguôi trong Chernobyl.",
      meta: "<span>Lựa chọn của chúng tôi</span>"
    },
    {
      img: "images/news/new14.webp",
      title: "Arcane lọt vào top 10 những series phim hoạt hình hay nhất trên IMDB",
      meta: "<span>Lựa chọn của chúng tôi</span>"
    },
    {
      img: "images/news/new15.jpg",
      title: "Hàng loạt cáo buộc của khán giả Nhật hướng tới Shogun vì xuyên tạc lịch sử, coi thường người Nhật, nhà sản xuất nói gì?",
      meta: "<span>New York Times ngày 16 tháng 5 2025</span>"
    },
    {
      img: "images/news/new16.jpg",
      title: "TV Show hay nhất mọi thời đại là đây, Easter Egg soi không xuể.",
      meta: "<span>Top 1 Lựa Chọn Của Biên Tập Viên</span>"
    },
    {
      img: "images/news/new17.jpg",
      title: "Khi siêu anh hùng con người....hơn cả con người ?",
      meta: "Amazone Prime Original Series<span></span>"
    }
  ],
  celebrity: [
    {
      img: "images/news/new18.jpg",
      title: "Bob Odenkrik xác nhận quay trở lại trong Nobody 2.",
      meta: "<span>Trailers And Videos</span>"
    },
    {
      img: "images/news/new19.jpg",
      title: "The Rock trải lòng về việc tham gia bộ phim Live Action Moana",
      meta: "<span>Videos</span>"
    },
    {
      img: "images/news/new20.jpg",
      title: "Sao hạng A Nguyễn Thành Luân bị khán giả chỉ trích vì hành vi thiếu ý thức ở nơi công cộng, nguy cơ bị phong sát ",
      meta: "<span>Xem Ngay</span>"
    },
    {
      img: "images/news/new21.jpg",
      title: "Bắt gặp siêu sao An Ke trong chuyến từ thiện tại điểm trường Lũng Cú, diện mạo khiến người khác bất ngờ",
      meta: "<span>Những Ngôi Sao Đang Lên</span>"
    },
    {
      img: "images/news/new22.jpg",
      title: "Sao Ấn Mohamed SaQuốc được tìm thấy đã tử vong trong tình trạng tử vong do chết não, sau khi chơi game suốt 23 giờ đồng hồ liên tiếp.",
      meta: "Tin Hot<span></span>"
    },
    {
      img: "images/news/new23.jpg",
      title: "Pedro Pascal gây sốt với video ngắn quảng cáo Apple AirPods 4.",
      meta: "Videos<span></span>"
    },
    {
      img: "images/news/new24.webp",
      title: "Ca sĩ Lady Gaga bị chê vì quá đơ trong Joker Folie À Deux",
      meta: "TV News<span></span>"
    }
  ]
};

function renderCarousel(category) {
  const carousel = document.querySelector('.news-carousel');
  if (!carousel) return;
  carousel.innerHTML = '';
  const items = newsData[category] || [];
  items.forEach(news => {
    carousel.innerHTML += `
      <div class="news-card">
        <img src="${news.img}" alt="" class="news-img" />
        <div class="news-info">
          <div class="news-title">${news.title}</div>
          <div class="news-meta">${news.meta}</div>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderCarousel('top');
  const carousel = document.querySelector('.news-carousel');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  function getCardWidth() {
    const card = carousel ? carousel.querySelector('.news-card') : null;
    return card ? card.offsetWidth + 36 : 456;
  }

  if (nextBtn && carousel) {
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });
  }
  if (prevBtn && carousel) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-category');
      renderCarousel(cat);
    });
  });
});

// --- Celeb slider ---
let celebIndex = 0;
function slideCeleb(direction) {
  const track = document.querySelector('.celeb-track');
  const items = document.querySelectorAll('.celeb-item');
  if (!track || !items.length) return;
  const itemWidth = items[0].offsetWidth;
  const maxIndex = Math.max(0, items.length - 4);

  celebIndex += direction;
  celebIndex = Math.max(0, Math.min(celebIndex, maxIndex));

  track.style.transform = `translateX(-${celebIndex * itemWidth}px)`;
}

// --- Vừa mới xem ---
const RV_KEY = 'recently_viewed_imgs';
const RV_MAX = 5;

function getRV() {
  return JSON.parse(localStorage.getItem(RV_KEY)) || [];
}
function setRV(items) {
  localStorage.setItem(RV_KEY, JSON.stringify(items));
}
function renderRV() {
  const list = document.getElementById('rv-list');
  const clearBtn = document.getElementById('rv-clear');
  if (!list || !clearBtn) return;
  const items = getRV().slice(0, RV_MAX);
  list.innerHTML = '';
  if (items.length === 0) {
    const li = document.createElement('li');
    li.className = 'rv-empty';
    li.textContent = 'Bạn chưa xem gì.';
    list.appendChild(li);
    clearBtn.style.display = 'none';
  } else {
    items.forEach(src => {
      const li = document.createElement('li');
      li.className = 'rv-img-item';
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Đã xem";
      li.appendChild(img);
      list.appendChild(li);
    });
    clearBtn.style.display = 'inline-block';
  }
}

document.addEventListener('click', function(e) {
  let img = e.target.closest('img');
  if (!img) return;
  if (img.closest('.recently-viewed-section')) return;
  const src = img.src;
  if (!src) return;
  let items = getRV();
  items = [src, ...items.filter(i => i !== src)];
  setRV(items);
  renderRV();
});

document.addEventListener('DOMContentLoaded', function() {
  renderRV();
  const clearBtn = document.getElementById('rv-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      localStorage.removeItem(RV_KEY);
      renderRV();
    });
  }
});







