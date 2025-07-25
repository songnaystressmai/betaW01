// Hàm lấy username hiện tại (dựa vào localStorage key 'currentUser')
function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return user && user.username ? user.username : null;
}

// Hàm render Watchlist dạng carousel (slide hàng ngang)
function renderWatchlistCarousel() {
  const username = getCurrentUser();
  const listDiv = document.getElementById('watchlist-list');
  const wrap = listDiv && listDiv.closest('.watchlist-carousel-wrap');
  if (!listDiv) return;

  // Nếu chưa đăng nhập, hiển thị giao diện mời đăng nhập
  if (!username) {
    listDiv.innerHTML = `
      <div class="watchlist-empty" style="width:100%;text-align:center;padding:48px 0;">
        <div class="bookmark-icot" style="margin-bottom:18px;position:relative;display:inline-block;">
          <i class="fa-solid fa-bookmark" style="font-size:52px;color:#232323;"></i>
          <i class="fa-solid fa-plus small-plus" style="font-size:14px;color:#ffbc0a;position:absolute;right:-3px;top:1px;background:#fff;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px #23232312;padding:0 1.5px;"></i>
        </div>
        <p><strong>Sign in to access your Watchlist</strong></p>
        <p>Save shows and movies to keep track of what you want to watch.</p>
        <a href="login.html"><button class="signin-btn" style="margin-top:13px;background:linear-gradient(90deg,#ffe17f 65%,#ffbc0a 100%);color:#232323;border:none;border-radius:20px;padding:10px 32px;font-size:1em;font-weight:700;cursor:pointer;box-shadow:0 2px 12px #f7c32524;">Sign in to TumbleWeed</button></a>
      </div>
    `;
    if (wrap) {
      wrap.querySelector('.carousel-btn.left').style.display = "none";
      wrap.querySelector('.carousel-btn.right').style.display = "none";
    }
    return;
  }

  // Lấy dữ liệu từ localStorage
  const phimArr = JSON.parse(localStorage.getItem('watchlist-' + username) || '[]');
  const showArr = JSON.parse(localStorage.getItem('tvs-watchlist-' + username) || '[]');
  const idList = [...new Set([...phimArr, ...showArr])];

  // Dữ liệu phim và show (bạn phải đảm bảo 2 biến này luôn có trên window)
  const moviesData = (window.movieapp_movies || []).concat(window.tvs_data || []);
  let html = "";
  if (idList.length) {
    html = idList.map(id => {
      const item = moviesData.find(m => m.id === id);
      if (!item) return "";
      return `
        <div class="movieapp-account-card">
          <img class="movieapp-account-card-img" src="${item.img || 'images/poster-placeholder.png'}" alt="${item.title || item.name}">
          <button class="movieapp-account-card-remove" title="Xóa khỏi danh sách" onclick="removeFromList('watchlist','${item.id}',this)">&times;</button>
          <div class="movieapp-account-card-content">
            <div class="movieapp-account-card-title">${item.title || item.name}</div>
            <div class="movieapp-account-card-meta">${item.year ? item.year + ' • ' : (item.start ? item.start + (item.end ? '-' + item.end : '-nay') + ' • ' : '')}${item.duration || ''}</div>
            <div class="movieapp-account-card-state">${item.state || ''}</div>
          </div>
        </div>
      `;
    }).join('');
    if (wrap) {
      wrap.querySelector('.carousel-btn.left').style.display = "";
      wrap.querySelector('.carousel-btn.right').style.display = "";
    }
  } else {
    html = `<div style="color:#aaa;font-style:italic;padding:10px;">Your watchlist is empty.</div>`;
    if (wrap) {
      wrap.querySelector('.carousel-btn.left').style.display = "none";
      wrap.querySelector('.carousel-btn.right').style.display = "none";
    }
  }
  listDiv.innerHTML = html;
}

// Xóa khỏi danh sách (giống như trước)
window.removeFromList = function(storageKey, movieId, btn) {
  const username = getCurrentUser();
  if (!username) return;
  let arr = JSON.parse(localStorage.getItem(storageKey + '-' + username) || '[]');
  arr = arr.filter(id => id !== movieId);
  localStorage.setItem(storageKey + '-' + username, JSON.stringify(arr));
  let arr2 = JSON.parse(localStorage.getItem('tvs-' + storageKey + '-' + username) || '[]');
  arr2 = arr2.filter(id => id !== movieId);
  localStorage.setItem('tvs-' + storageKey + '-' + username, JSON.stringify(arr2));
  renderWatchlistCarousel();
};

// Nút chuyển slide trái/phải
function setupCarouselBtn() {
  const listDiv = document.getElementById('watchlist-list');
  if (!listDiv) return;
  const leftBtn = document.getElementById('carousel-left');
  const rightBtn = document.getElementById('carousel-right');
  if (leftBtn && rightBtn) {
    leftBtn.onclick = () => listDiv.scrollBy({ left: -230, behavior: 'smooth' });
    rightBtn.onclick = () => listDiv.scrollBy({ left: 230, behavior: 'smooth' });
  }
}

// Gọi khi trang tải để render slide và setup nút
document.addEventListener('DOMContentLoaded', function() {
  renderWatchlistCarousel();
  setupCarouselBtn();
});