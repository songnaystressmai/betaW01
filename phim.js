// ====== DỮ LIỆU ======
const movieapp_categories = [
  {id: 'phimmoi', name: 'Phim mới'},
  {id: 'thang6', name: 'Tháng 6 tới'},
  {id: 'chinhkich', name: 'Chính Kịch'},
  {id: 'kinhdi', name: 'Kinh dị'},
  {id: 'hanhdong', name: 'Hành động'},
  {id: 'phieuluu', name: 'Phiêu lưu'},
  {id: 'tamlytoipham', name: 'Tâm lý tội phạm'},
  {id: 'den', name: 'Hài Kịch Đen'},
  {id: 'ngontinh', name: 'Lãng Mạn'},
  {id: 'tinhcamgiadinh', name: 'Tình cảm gia đình'},
  {id: 'hoathinh', name: 'Hoạt hình'},
  {id: 'anime', name: 'Anime'},
  {id: 'hai', name: 'Phim hài'},
  {id: 'viet', name: 'Phim Việt'},
  {id: 'vientuong', name: 'Viễn Tưởng'},
  {id: 'phepthuat', name: 'Phép Thuật'},
  {id: 'giatgan', name: 'Giật Gân'},
  {id: 'bian', name: 'Bí Ẩn'},
  {id: 'thanthoai', name: 'Thần Thoại'},
  {id: 'han', name: 'Phim Hàn'}
];
const movieapp_movies = [
  {
    id: "wildrobot",
    title: "The Wild Robot",
    year: 2024,
    duration: "104 phút",
    state: "Đang chiếu rạp",
    categories: ['phimmoi','hoathinh','phieuluu','thang6'],
    editor: false,
    trending: true,
    img: "images/phim/p1.jpg"
  },
  {
    id: "flow",
    title: "Flow",
    year: 2024,
    duration: "85 phút",
    state: "Đang chiếu rạp",
    categories: ['thang6','hoathinh'],
    editor: false,
    trending: true,
    img: "images/phim/p2.webp"
  },
  {
    id: "nhabanu",
    title: "Nhà Bà Nữ",
    year: 2023,
    duration: "102 phút",
    state: "Đã chiếu",
    categories: ['viet','tinhcamgiadinh','hai'],
    editor: false,
    trending: false,
    img: "images/phim/p3.jpg"
  },
  {
    id: "dune2",
    title: "Hành Tinh Cát 2",
    year: 2024,
    duration: "166 phút",
    state: "NA",
    categories: ['hanhdong','phieuluu','vientuong'],
    editor: true,
    trending: true,
    img: "images/phim/p4.jpg"
  },
  {
    id: "parasite",
    title: "Ký Sinh Trùng",
    year: 2019,
    duration: "132 phút",
    state: "Đã chiếu",
    categories: ['han','tamlytoipham','bian','giatgan','hai','den'],
    editor: true,
    trending: true,
    img: "images/phim/p5.jpg"
  },
  {
    id: "thesubstance",
    title: "Thần Dược",
    year: 2024,
    duration: "140 phút",
    state: "Đã chiếu",
    categories: ['kinhdi','hai','giatgan','vientuong','den'],
    editor: false,
    trending: false,
    img: "images/phim/p6.webp"
  },
  {
    id: "avatar2",
    title: "Avatar 2: Dòng Chảy Của Nước",
    year: 2022,
    duration: "192 phút",
    state: "Đã chiếu",
    categories: ['phieuluu','vientuong','hanhdong'],
    editor: true,
    trending: false,
    img: "images/phim/p7.jpeg"
  },
  {
    id: "hereditary",
    title: "Hereditary",
    year: 2018,
    duration: "127 phút",
    state: "Đã chiếu",
    categories: ['kinhdi','tamlytoipham','giatgan','bian'],
    editor: false,
    trending: false,
    img: "images/phim/p8.jpg"
  },
  {
    id: "inthiscorneroftheworld",
    title: "Góc Khuất Của Thế Giới",
    year: 2016,
    duration: "129 phút",
    state: "Đã chiếu",
    categories: ['hoathinh','anime'],
    editor: false,
    trending: false,
    img: "images/phim/p9.jpg"
  },
  {
    id: "pulpfiction",
    title: "Chuyện Tào Lao",
    year: 1994,
    duration: "154 phút",
    state: "NA",
    categories: ['hai','tamlytoipham','giatgan','den'],
    editor: true,
    trending: false,
    img: "images/phim/p10.jpg"
  },
  {
    id: "shawshank",
    title: "Nhà Tù Shawshank",
    year: 1994,
    duration: "142 phút",
    state: "Đã chiếu",
    categories: ['chinhkich'],
    editor: true,
    trending: true,
    img: "images/phim/p11.jpg"
  },
  {
    id: "taxidriver",
    title: "Tài Xế Taxi",
    year: 1976,
    duration: "114 phút",
    state: "Đã chiếu",
    categories: ['chinhkich','tamlytoipham'],
    editor: true,
    trending: true,
    img: "images/phim/p12.jpg"
  },
  {
    id: "thegodfather",
    title: "Bố Già",
    year: 1972,
    duration: "175 phút",
    state: "Đã chiếu",
    categories: ['chinhkich','tamlytoipham'],
    editor: true,
    trending: false,
    img: "images/phim/p13.jpg"
  },
  {
    id: "spiritedaway",
    title: "Vùng Đất Linh Hồn",
    year: 2001,
    duration: "125 phút",
    state: "Đã chiếu",
    categories: ['hoathinh','anime','phieuluu','phepthuat'],
    editor: true,
    trending: true,
    img: "images/phim/p14.jpg"
  },
  {
    id: "aladdin",
    title: "Aladdin",
    year: 2019,
    duration: "128 phút",
    state: "Đã chiếu",
    categories: ['phepthuat','phieuluu','hanhdong','hai'],
    editor: false,
    trending: false,
    img: "images/phim/p15.jpeg"
  },
  {
    id: "bluevalentine",
    title: "Lễ Tình Nhân Xanh",
    year: 2010,
    duration: " 120 phút",
    state: "Đã chiếu",
    categories: ['ngontinh','chinhkich'],
    editor: false,
    trending: false,
    img: "images/phim/p16.jpg"
  },
  {
    id: "hercules",
    title: "Hercules: The Thracian Wars",
    year: 2014,
    duration: "98 phút",
    state: "Đã chiếu",
    categories: ['hanhdong','phieuluu','thanthoai'],
    editor: true,
    trending: false,
    img: "images/phim/p17.jpg"
  },
  {
    id: "fanstaticbeast",
    title: "Sinh Vật Huyền Bí",
    year: 2016,
    duration: "133 phút",
    state: "Đã chiếu",
    categories: ['phieuluu','hai','thanthoai','phepthuat'],
    editor: false,
    trending: false,
    img: "images/phim/p18.jpg"
  },
  {
    id: "bladerunner2049",
    title: "Tội Phạm Nhân Bản 2049",
    year: 2017,
    duration: "163 phút",
    state: "Đã chiếu",
    categories: ['vientuong','hanhdong','phieuluu','giatgan'],
    editor: true,
    trending: true,
    img: "images/phim/p19.jpg"
  },
  {
    id: "mai",
    title: "Mai",
    year: 2024,
    duration: "131 phút",
    state: "Đã chiếu",
    categories: ['ngontinh','hai','viet'],
    editor: true,
    trending: false,
    img: "images/phim/p20.jpg"
  },
  {
    id: "extremejob",
    title: "Nghề Siêu Khó",
    year: 2019,
    duration: "111 phút",
    state: "Đã chiếu",
    categories: ['hai','han','hanhdong'],
    editor: false,
    trending: true,
    img: "images/phim/p21.jpg"
  },
  {
    id: "myneighbor",
    title: "Hàng Xóm Của Tôi Là Totoro",
    year: 1988,
    duration: "86 phút",
    state: "Đã chiếu",
    categories: ['hoathinh','anime','tinhcamgiadinh','hai','phepthuat'],
    editor: true,
    trending: true,
    img: "images/phim/p22.jpg"
  },
  {
    id: "thelobster",
    title: "Những Người Độc Thân",
    year: 2015,
    duration: "118 phút",
    state: "Đã chiếu",
    categories: ['den','vientuong','hai','giatgan','ngontinh'],
    editor: true,
    trending: true,
    img: "images/phim/p23.jpg"
  },
  {
    id: "5cm",
    title: "5 Centimet Trên Giây",
    year: 2007,
    duration: "63 phút",
    state: "Đã chiếu",
    categories: ['hoathinh','anime','ngontinh','chinhkich','vientuong'],
    editor: true,
    trending: true,
    img: "images/phim/p244.jpg"
  },
  {
    id: "elcamino",
    title: "El Camino",
    year: 2019,
    duration: "122 phút",
    state: "Đã chiếu",
    categories: ['hanhdong','giatgan','tamlytoipham'],
    editor: true,
    trending: true,
    img: "images/phim/p25.webp"
  },
  {
    id: "littlewoman",
    title: "Những Người Phụ Nữ Nhỏ Bé",
    year: 2019,
    duration: "135 phút",
    state: "Đã chiếu",
    categories: ['ngontinh','chinhkich','tinhcamgiadinh','hai'],
    editor: true,
    trending: false,
    img: "images/phim/p26.webp"
  },
  {
    id: "pi",
    title: "Cuộc Đời Của Pi",
    year: 2012,
    duration: "127 phút",
    state: "Đã chiếu",
    categories: ['phieuluu','hai'],
    editor: false,
    trending: false,
    img: "images/phim/p27.webp"
  }
];

// ====== PHÂN TRANG ======
let movieapp_currentPage = 1;
const MOVIEAPP_ITEMS_PER_ROW = 4; // số cột trên 1 hàng, chỉnh theo CSS grid của bạn
const MOVIEAPP_ROWS_PER_PAGE = 3; // số hàng mỗi trang

// ====== HELPER LOCALSTORAGE ======
function getCurrentUser() {
  const u = JSON.parse(localStorage.getItem('currentUser') || '{}');
  return u.username || '';
}
function todayStr() {
  const d = new Date();
  return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
}

// ====== RENDER CATEGORY SIDEBAR ======
let movieapp_currentCat = movieapp_categories[0].id;
function movieapp_renderCategories() {
  const catDiv = document.getElementById('movieapp-categories');
  catDiv.innerHTML = movieapp_categories.map(cat =>
    `<button class="movieapp-catbtn${cat.id===movieapp_currentCat?' active':''}" data-id="${cat.id}">${cat.name}</button>`
  ).join('');
}

// ====== RENDER MOVIES GRID PHÂN TRANG - PHÂN TRANG LUÔN Ở DƯỚI ======
function movieapp_renderMovies(filterText = "") {
  const root = document.getElementById('movieapp-list');
  const user = getCurrentUser();
  let watchlist = JSON.parse(localStorage.getItem('watchlist-'+user)||'[]');
  let liked = JSON.parse(localStorage.getItem('liked-'+user)||'[]');
  let hearted = JSON.parse(localStorage.getItem('hearted-'+user)||'[]');
  let filtered = movieapp_movies.filter(m =>
    (movieapp_currentCat === movieapp_categories[0].id || m.categories.includes(movieapp_currentCat)) &&
    m.title.toLowerCase().includes(filterText.toLowerCase())
  );

  // Tính số phim/trang, số trang
  const itemsPerPage = MOVIEAPP_ITEMS_PER_ROW * MOVIEAPP_ROWS_PER_PAGE;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (movieapp_currentPage > totalPages) movieapp_currentPage = totalPages > 0 ? totalPages : 1;
  if (movieapp_currentPage < 1) movieapp_currentPage = 1;

  if (filtered.length === 0) {
    root.innerHTML = `<div class="movieapp-empty-msg">Không có phim nào.</div>`;
    return;
  }
  // Lấy phim của trang hiện tại
  const startIdx = (movieapp_currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageMovies = filtered.slice(startIdx, endIdx);

  // Render thẻ phim
  let gridHtml = pageMovies.map(m => {
    let cmtCount = movieapp_getAllComments(m.id).length;
    return `
      <div class="movieapp-card" data-movie="${m.id}">
        ${m.editor?`<span class="movieapp-card-badge editor">Biên tập viên</span>`:""}
        ${m.trending?`<span class="movieapp-card-badge trending" style="left:85px;">Top 1</span>`:""}
        <span class="movieapp-card-save${watchlist.includes(m.id)?' saved':''}" title="Thêm Watchlist" onclick="movieapp_toggleWatchlist('${m.id}',this)"><i class="fa fa-bookmark"></i></span>
        <img src="${m.img}" alt="${m.title}" class="movieapp-card-img">
        <div class="movieapp-card-content">
          <div class="movieapp-card-title">${m.title}</div>
          <div class="movieapp-card-meta">${m.year} • ${m.duration}</div>
          <div class="movieapp-card-state">${m.state}</div>
          <div class="movieapp-card-actions">
            <button class="movieapp-action-btn${liked.includes(m.id)?' liked':''}" onclick="movieapp_toggleLike('${m.id}',this)"><i class="fa fa-thumbs-up"></i> <span class="count">${movieapp_getLikeCount(m.id)}</span></button>
            <button class="movieapp-action-btn${hearted.includes(m.id)?' loved':''}" onclick="movieapp_toggleHeart('${m.id}',this)"><i class="fa fa-heart"></i> <span class="count">${movieapp_getHeartCount(m.id)}</span></button>
            <button class="movieapp-action-btn commented" onclick="movieapp_toggleCommentsPopover('${m.id}',this)" title="Bình luận phim"><i class="fa fa-comment"></i> <span class="count">${cmtCount}</span></button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Render pagination riêng dưới cùng
  let paginationHtml = '';
  if (totalPages > 1) {
    paginationHtml = `<div class="movieapp-pagination">` +
      Array.from({length: totalPages}, (_, i) =>
        `<button class="page-btn${movieapp_currentPage===i+1?' active':''}" onclick="movieapp_gotoPage(${i+1})">${i+1}</button>`
      ).join('') +
      `</div>`;
  }

  // Đảm bảo phân trang luôn nằm dưới cùng
  root.innerHTML = `<div class="movieapp-list-grid">${gridHtml}</div>${paginationHtml}`;
}

// Hàm chuyển trang
window.movieapp_gotoPage = function(page) {
  movieapp_currentPage = page;
  movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
};

// ====== WATCHLIST ======
window.movieapp_toggleWatchlist = function(movieId,el) {
  const user = getCurrentUser(); if(!user){alert("Cần đăng nhập!");return;}
  let list = JSON.parse(localStorage.getItem('watchlist-'+user)||'[]');
  let idx = list.indexOf(movieId);
  if(idx===-1) list.push(movieId); else list.splice(idx,1);
  localStorage.setItem('watchlist-'+user,JSON.stringify(list));
  movieapp_saveUserActivity(`${movieapp_getCurrentUserName()} đã ${idx===-1?"thêm vào":"xoá khỏi"} Watchlist phim ${movieapp_getMovieTitle(movieId)} lúc ${todayStr()}`);
  movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
}
// ====== LIKE ======
window.movieapp_toggleLike = function(movieId,btn) {
  const user = getCurrentUser(); if(!user){alert("Cần đăng nhập!");return;}
  let liked = JSON.parse(localStorage.getItem('liked-'+user)||'[]');
  let idx = liked.indexOf(movieId);
  if(idx===-1) liked.push(movieId); else liked.splice(idx,1);
  localStorage.setItem('liked-'+user,JSON.stringify(liked));
  let all = JSON.parse(localStorage.getItem('likeCount-'+movieId)||'[]');
  let uidx = all.indexOf(user);
  if(uidx===-1 && idx===-1) all.push(user);
  else if(uidx!==-1 && idx!==-1) all.splice(uidx,1);
  localStorage.setItem('likeCount-'+movieId,JSON.stringify(all));
  if(idx===-1) movieapp_saveUserActivity(`${movieapp_getCurrentUserName()} đã like phim ${movieapp_getMovieTitle(movieId)} lúc ${todayStr()}`);
  movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
}
// ====== HEART ======
window.movieapp_toggleHeart = function(movieId,btn) {
  const user = getCurrentUser(); if(!user){alert("Cần đăng nhập!");return;}
  let hearted = JSON.parse(localStorage.getItem('hearted-'+user)||'[]');
  let idx = hearted.indexOf(movieId);
  if(idx===-1) hearted.push(movieId); else hearted.splice(idx,1);
  localStorage.setItem('hearted-'+user,JSON.stringify(hearted));
  let all = JSON.parse(localStorage.getItem('heartCount-'+movieId)||'[]');
  let uidx = all.indexOf(user);
  if(uidx===-1 && idx===-1) all.push(user);
  else if(uidx!==-1 && idx!==-1) all.splice(uidx,1);
  localStorage.setItem('heartCount-'+movieId,JSON.stringify(all));
  if(idx===-1) movieapp_saveUserActivity(`${movieapp_getCurrentUserName()} đã thả tim phim ${movieapp_getMovieTitle(movieId)} lúc ${todayStr()}`);
  movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
}
function movieapp_getLikeCount(movieId) {
  return (JSON.parse(localStorage.getItem('likeCount-'+movieId)||'[]')).length;
}
function movieapp_getHeartCount(movieId) {
  return (JSON.parse(localStorage.getItem('heartCount-'+movieId)||'[]')).length;
}

// ====== POPUP COMMENT (POPOVER) ======
window.movieapp_toggleCommentsPopover = function(movieId,btn) {
  document.querySelectorAll('.movieapp-popover-comment').forEach(e=>e.remove());
  if(btn.dataset.opened==="1") {
    btn.dataset.opened="0";
    return;
  }
  document.querySelectorAll('.movieapp-action-btn.commented').forEach(b=>b.dataset.opened="0");
  btn.dataset.opened="1";
  const pop = document.createElement('div');
  pop.className = 'movieapp-popover-comment';

  // Lấy user hiện tại
  const currentUser = getCurrentUser();

  pop.innerHTML = `
    <button class="close-popover" title="Đóng">&times;</button>
    <div style="font-weight:bold; margin-bottom:8px;">Bình luận </div>
    <div style="max-height:170px; overflow:auto; margin-bottom:8px;">
      ${
        movieapp_getAllComments(movieId).length
        ? movieapp_getAllComments(movieId).map((c,i)=>{
            // Chỉ hiện nút xoá nếu user hiện tại là chủ comment
            let isOwner = currentUser && c.user === movieapp_getCurrentUserName();
            return `<div class="comment-row" data-idx="${i}" data-user="${c.user}" data-time="${c.timestamp}">
              <span class="comment-user">${c.user}</span>: 
              <span class="comment-content">${c.content}</span> 
              <span class="comment-time">${c.time}</span>
              ${isOwner ? `<button class="delete-comment-btn" title="Xoá bình luận" style="color:red; border:none; background:transparent; cursor:pointer;" data-idx="${i}" data-ts="${c.timestamp}">&times;</button>` : ""}
            </div>`
        }).join('')
        : '<i style="color:#aaa;">Chưa có bình luận.</i>'
      }
    </div>
    <form class="comment-form" onsubmit="movieapp_addComment(event,'${movieId}',this)">
      <input type="text" placeholder="Viết bình luận..." required maxlength="200">
      <button type="submit">Gửi</button>
    </form>
  `;
  document.body.appendChild(pop);
  const rect = btn.getBoundingClientRect();
  let left = rect.left + rect.width/2 - 120;
  if(left < 8) left = 8;
  if(left + 250 > window.innerWidth) left = window.innerWidth - 260;
  let top = rect.bottom + 7;
  pop.style.left = left+'px';
  pop.style.top = top+'px';

  function closePopover(e) {
    if (!pop.contains(e.target) && e.target!==btn) {
      pop.remove();
      btn.dataset.opened="0";
      document.removeEventListener('mousedown', closePopover);
    }
  }
  setTimeout(()=>document.addEventListener('mousedown', closePopover),0);
  pop.querySelector('.close-popover').onclick = function(e) {
    pop.remove();
    btn.dataset.opened="0";
    document.removeEventListener('mousedown', closePopover);
  };

  // Gắn sự kiện xoá bình luận
  pop.querySelectorAll('.delete-comment-btn').forEach(btnDel=>{
    btnDel.onclick = function(e){
      e.stopPropagation();
      const ts = btnDel.getAttribute('data-ts');
      window.movieapp_deleteComment(movieId, ts, btn);
    }
  });
}

// Hàm lấy tất cả bình luận
function movieapp_getAllComments(movieId) {
  let arr = [];
  for(let k in localStorage) if(k.startsWith('comments-')){
    try {
      let cs = JSON.parse(localStorage.getItem(k)||'[]');
      cs.filter(c=>c.movieId===movieId).forEach(c=>arr.push(c));
    }catch{}
  }
  arr.sort((a,b)=>b.timestamp-a.timestamp);
  return arr;
}

// Thêm hàm xoá comment
window.movieapp_deleteComment = function(movieId, timestamp, btn){
  const user = getCurrentUser(); if(!user){alert("Cần đăng nhập!");return;}
  let comments = JSON.parse(localStorage.getItem('comments-'+user)||'[]');
  comments = comments.filter(c=>!(c.movieId===movieId && c.timestamp==timestamp));
  localStorage.setItem('comments-'+user,JSON.stringify(comments));
  movieapp_saveUserActivity(`${movieapp_getCurrentUserName()} đã xoá bình luận ở phim ${movieapp_getMovieTitle(movieId)} lúc ${todayStr()}`);
  window.movieapp_toggleCommentsPopover(movieId, btn);
  window.movieapp_toggleCommentsPopover(movieId, btn); // mở lại popover
}

// Hàm thêm comment
window.movieapp_addComment = function(e, movieId, form) {
  e.preventDefault();
  const user = getCurrentUser(); if(!user){alert("Cần đăng nhập!");return;}
  const input = form.querySelector('input');
  const comment = input.value.trim();
  if(!comment) return;
  let comments = JSON.parse(localStorage.getItem('comments-'+user)||'[]');
  const now = Date.now();
  const timeStr = todayStr();
  comments.push({movieId, content:comment, time:timeStr, user:movieapp_getCurrentUserName(), timestamp:now});
  localStorage.setItem('comments-'+user,JSON.stringify(comments));
  movieapp_saveUserActivity(`${movieapp_getCurrentUserName()} đã bình luận ở phim ${movieapp_getMovieTitle(movieId)} lúc ${timeStr}`);
  document.querySelectorAll('.movieapp-popover-comment').forEach(e=>e.remove());
  movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
}

// ====== USER NAME ======
function movieapp_getCurrentUserName() {
  let u = JSON.parse(localStorage.getItem('currentUser')||'{}');
  if(u.fullname) return u.fullname;
  if(!u.username) return "Khách";
  const data = localStorage.getItem('tk.txt')||'';
  for(let line of data.split('\n')) {
    let [fullname, username] = line.split('|');
    if(username===u.username && fullname) return fullname;
  }
  return u.username;
}
function movieapp_getMovieTitle(movieId) {
  let m = movieapp_movies.find(m=>m.id===movieId);
  return m?m.title:movieId;
}

// ====== HOẠT ĐỘNG NGƯỜI DÙNG ======
function movieapp_saveUserActivity(msg) {
  let logs = JSON.parse(localStorage.getItem('user-activities')||'[]');
  logs.push({msg, time:todayStr()});
  localStorage.setItem('user-activities',JSON.stringify(logs));
}

// ====== SỰ KIỆN ======
document.addEventListener("DOMContentLoaded", function() {
  movieapp_renderCategories();
  movieapp_renderMovies();

  document.getElementById('movieapp-categories').onclick = function(e) {
    if (e.target.classList.contains('movieapp-catbtn') && e.target.dataset.id) {
      movieapp_currentCat = e.target.dataset.id;
      movieapp_currentPage = 1; // reset về trang 1 khi chọn danh mục
      movieapp_renderCategories();
      movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
    }
  };
  document.getElementById('movieapp-search-btn').onclick = function() {
    movieapp_currentPage = 1;
    movieapp_renderMovies(document.getElementById('movieapp-search').value.trim());
  };
  document.getElementById('movieapp-search').onkeydown = function(e) {
    if (e.key === "Enter") {
      movieapp_currentPage = 1;
      movieapp_renderMovies(this.value.trim());
    }
  };
});

// ====== EXPORT CHO ADMIN VÀ USER ======
window.movieapp_getAllUserActivities = function() {
  return JSON.parse(localStorage.getItem('user-activities')||'[]');
}
window.movieapp_getUserList = function(type) {
  const user = getCurrentUser();
  if(!user) return [];
  if(type==="like") return JSON.parse(localStorage.getItem('liked-'+user)||'[]').map(mid=>({movie:movieapp_getMovieTitle(mid)}));
  if(type==="tim") return JSON.parse(localStorage.getItem('hearted-'+user)||'[]').map(mid=>({movie:movieapp_getMovieTitle(mid)}));
  if(type==="watchlist") return JSON.parse(localStorage.getItem('watchlist-'+user)||'[]').map(mid=>({movie:movieapp_getMovieTitle(mid)}));
  if(type==="comment") {
    let cs = JSON.parse(localStorage.getItem('comments-'+user)||'[]');
    return cs.map(c=>({movie:movieapp_getMovieTitle(c.movieId), content:c.content, time:c.time}));
  }
  return [];
};