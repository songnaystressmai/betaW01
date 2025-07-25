// ====== DỮ LIỆU DANH MỤC SHOW ======
const tvs_categories = [
  { id: "usuk", name: "Us-uk" },
  { id: "vn", name: "Việt Nam" },
  { id: "chinhkich", name: "Chính kịch" },
  { id: "gameshow", name: "Gameshow" },
  { id: "hoathinh", name: "Hoạt hình" },
  { id: "cotrang", name: "Cổ trang" },
  { id: "giatgan", name: "Giật gân" },
  { id: "haihuoc", name: "Hài hước" },
  { id: "tx", name: "Thanh xuân" },
  { id: "thtt", name: "Truyền hình thực tế" },
  { id: "kdrama", name: "K-Drama" },
  { id: "hd", name: "Hành động" },
  { id: "tailieu", name: "Tài liệu" },
  { id: "sitcom", name: "Sitcom" },
  { id: "khoahocvt", name: "Khoa học viễn tưởng" }
];

// ====== DỮ LIỆU SHOW ======
const tvs_data = [
  {
    id: "friends",
    name: "Friends",
    start: 1994,
    end: 2004,
    duration: "22 phút/tập",
    state: "Đã Kết Thúc - 10 Mùa",
    episodes: 236,
    category: ["usuk", "sitcom","haihuoc"],
    editor: true,
    trending: true,
    img: "images/shows/s1.jpg"
  },
  {
    id: "whoisamillionaire",
    name: "Ai Là Triệu Phú",
    start: 2005,
    end: null,
    duration: "55 phút/tập",
    state: "Đang phát sóng",
    episodes: 700,
    category: ["vn", "gameshow"],
    editor: true,
    trending: true,
    img: "images/shows/s2.jpg"
  },
  {
    id: "planetearth",
    name: "Planet Earth",
    start: 2006,
    end: 2016,
    duration: "50 phút/tập",
    state: "Đã kết thúc - 2 Mùa",
    episodes: 11,
    category: ["usuk", "tailieu", "khoahoc","thtt"],
    editor: false,
    trending: false,
    img: "images/shows/s3.jpg"
  },
  {
    id: "breakingbad",
    name: "Tập Làm Người Xấu",
    start: 2008,
    end: 2013,
    duration: "50 phút/tập",
    state: "Đã kết thúc - 5 Mùa",
    episodes: 62,
    category: ["usuk", "hd","giatgan","chinhkich"],
    editor: true,
    trending: true,
    img: "images/shows/s4.jpg"
  },
  {
    id: "quyt",
    name: "Khi Cuộc Đời Cho Bạn Quả Quýt",
    start: 2025,
    end: 2025,
    duration: "60 phút/tập",
    state: "Đã kết thúc - 1 Mùa",
    episodes: 16,
    category: ["haihuoc", "chinhkich","kdrama"],
    editor: false,
    trending: true,
    img: "images/shows/s5.jpg"
  },
  {
    id: "pk",
    name: "Bóng Ma Anh Quốc",
    start: 2013,
    end: null,
    duration: "54 phút/tập",
    state: "Đang phát sóng - 6 Mùa",
    episodes: 36,
    category: ["usuk", "hanhdong", "chinhkich","giatgan"],
    editor: true,
    trending: false,
    img: "images/shows/s6.jpg"
  },
  {
    id: "rickandmorty",
    name: "Rick & Morty",
    start: 2013,
    end: null,
    duration: "23 phút/tập",
    state: "Đang phát sóng - 8 Mùa",
    episodes: 71,
    category: ["hoathinh", "usuk","haihuoc","giatgan"],
    editor: false,
    trending: true,
    img: "images/shows/s7.jpg"
  },
  {
    id: "runningmanvn",
    name: "Running Man Vietnam",
    start: 2019,
    end: null,
    duration: "75 phút/tập",
    state: "Đang phát sóng - 2 Mùa",
    episodes: 50,
    category: ["vn", "gameshow","haihuoc","thtt"],
    editor: false,
    trending: true,
    img: "images/shows/s8.jpg"
  },
  {
    id: "solo",
    name: "Thăng Cấp Một Mình",
    start: 2024,
    end: null,
    duration: "25 phút/tập",
    state: "Đang phát sóng - 2 Mùa",
    episodes: 50,
    category: ["hoathinh", "hanhdong","haihuoc"],
    editor: true,
    trending: true,
    img: "images/shows/s9.webp"
  },
  {
    id: "sop",
    name: "Gia Đình Sopranos",
    start: 1999,
    end: 2007,
    duration: "53 phút/tập",
    state: "Đã kết thúc - 6 Mùa",
    episodes: 86,
    category: ["chinhkich", "usuk"],
    editor: true,
    trending: true,
    img: "images/shows/s9.jpg"
  },
  {
    id: "throne",
    name: "Trò Chơi Vương Quyền",
    start: 2011,
    end: 2019,
    duration: "60 phút/tập",
    state: "Đã kết thúc - 8 Mùa",
    episodes: 74,
    category: ["chinhkich", "usuk","hanhdong","giatgan"],
    editor: false,
    trending: false,
    img: "images/shows/s10.jpg"
  },
  {
    id: "light",
    name: "Chiếc Bật Lửa Và Váy Công Chúa",
    start: 2022,
    end: 2022,
    duration: "45 phút/tập",
    state: "Đã kết thúc - 1 Mùa",
    episodes: 36,
    category: ["tx","haihuoc"],
    editor: true,
    trending: false,
    img: "images/shows/s11.jpg"
  },
  {
    id: "belove",
    name: "Mùa Hè Yêu Dấu Của Chúng Ta",
    start: 2021,
    end: 2022,
    duration: "65 phút/tập",
    state: "Đã kết thúc - 1 Mùa",
    episodes: 16,
    category: ["kdrama", "tx","haihuoc"],
    editor: false,
    trending: false,
    img: "images/shows/s12.jpg"
  },
  {
    id: "at",
    name: "Attack On Titans",
    start: 2013,
    end: 2023,
    duration: "24 phút/tập",
    state: "Đã kết thúc - 4 Mùa",
    episodes: 82,
    category: ["hanhdong", "giatgan","hoathinh"],
    editor: true,
    trending: true,
    img: "images/shows/s13.webp"
  },
  {
    id: "black",
    name: "Gương Đen",
    start: 2011,
    end: null,
    duration: "60 phút/tập",
    state: "Đang phát sóng - 7 Mùa",
    episodes: 33,
    category: ["khoahocvt","giatgan","hanhdong","haihuoc"],
    editor: true,
    trending: true,
    img: "images/shows/s14.webp"
  },
  {
    id: "hccc",
    name: "Hoàn Châu Cách Cách",
    start: 1998,
    end: 1999,
    duration: "45 phút/tập",
    state: "Đã kết thúc - 3 Mùa",
    episodes: 112,
    category: ["chinhkich", "cotrang","haihuoc","hanhdong"],
    editor: true,
    trending: true,
    img: "images/shows/s14.jpg"
  },
  {
    id: "1988",
    name: "Lời Hồi Đáp 1988",
    start: 2015,
    end: 2016,
    duration: "93 phút/tập",
    state: "Đã kết thúc - 1 Mùa",
    episodes: 20,
    category: ["chinhkich", "kdrama","tx","haihuoc"],
    editor: false,
    trending: false,
    img: "images/shows/s15.jpg"
  },
  {
    id: "pen",
    name: "Cánh Cụt",
    start: 2024,
    end: 2024,
    duration: "60 phút/tập",
    state: "Đã kết thúc - 1 Mùa",
    episodes: 8,
    category: ["chinhkich", "usuk","hanhdong","giatgan","hanhdong"],
    editor: true,
    trending: true,
    img: "images/shows/s16.jpg"
  },
  {
    id: "us",
    name: "The Last Of Us",
    start: 2023,
    end: null,
    duration: "47 phút/tập",
    state: "Đang phát sóng - 2 Mùa",
    episodes: 16,
    category: ["chinhkich", "usuk","hanhdong","khoahocvt"],
    editor: true,
    trending: false,
    img: "images/shows/s17.jpg"
  },
  {
    id: "adol",
    name: "Biến Cố Tuổi Thành Niên",
    start: 2025,
    end: null,
    duration: "50 phút/tập",
    state: "Đang phát sóng - 1 Mùa",
    episodes: 4,
    category: ["chinhkich", "usuk"],
    editor: false,
    trending: false,
    img: "images/shows/s19.png"
  },
  {
    id: "arcane",
    name: "Arcane",
    start: 2021,
    end: 2024,
    duration: "41 phút/tập",
    state: "Đã kết thúc - 2 Mùa",
    episodes: 18,
    category: ["hoathinh", "usuk","hanhdong"],
    editor: true,
    trending: true,
    img: "images/shows/s21.jpg"
  },
  {
    id: "shame",
    name: "Không Biết Xấu Hổ",
    start: 2011,
    end: 2021,
    duration: "48 phút/tập",
    state: "Đã kết thúc - 11 Mùa",
    episodes: 134,
    category: ["chinhkich", "usuk","haihuoc"],
    editor: false,
    trending: false,
    img: "images/shows/s22.jpg"
  }
  // ...(thêm các show khác nếu có)...
];

// ====== TRẠNG THÁI NGƯỜI DÙNG (localStorage) ======
function getCurrentUser() {
  const u = JSON.parse(localStorage.getItem('currentUser') || '{}');
  return u.username || '';
}
function tvs_getArr(key) {
  const user = getCurrentUser();
  return JSON.parse(localStorage.getItem(`${key}-${user}`) || "[]");
}
function tvs_setArr(key, arr) {
  const user = getCurrentUser();
  localStorage.setItem(`${key}-${user}`, JSON.stringify(arr));
}

// ====== PHÂN TRANG ======
const TVS_PER_ROW = 2;
const TVS_ROWS_PER_PAGE = 4;
const TVS_PER_PAGE = TVS_PER_ROW * TVS_ROWS_PER_PAGE;
let tvs_currentPage = 1;

// ====== RENDER SHOWS ======
let tvs_currentCat = "all";
function tvs_renderShows(filter = "") {
  let shows = tvs_data.filter(show =>
    (tvs_currentCat === "all" || show.category.includes(tvs_currentCat)) &&
    show.name.toLowerCase().includes(filter.toLowerCase())
  );

  let liked = tvs_getArr("tvs-liked");
  let hearted = tvs_getArr("tvs-hearted");
  let watchlist = tvs_getArr("tvs-watchlist");

  // Phân trang
  const totalPages = Math.ceil(shows.length / TVS_PER_PAGE);
  if (tvs_currentPage > totalPages) tvs_currentPage = totalPages || 1;
  if (tvs_currentPage < 1) tvs_currentPage = 1;
  const startIdx = (tvs_currentPage - 1) * TVS_PER_PAGE;
  const endIdx = startIdx + TVS_PER_PAGE;
  const pageShows = shows.slice(startIdx, endIdx);

  const showsList = document.getElementById("tvs-list");
  if (!shows.length) {
    showsList.innerHTML = `<div style="font-style:italic;color:#999;font-size:1.1em">Không có show nào.</div>`;
    document.getElementById("tvs-pagination").innerHTML = "";
    return;
  }
  showsList.innerHTML = pageShows.map(show => {
    let likeCount = JSON.parse(localStorage.getItem("tvs-likecount-" + show.id) || "[]").length;
    let heartCount = JSON.parse(localStorage.getItem("tvs-heartcount-" + show.id) || "[]").length;
    let comments = JSON.parse(localStorage.getItem("tvs-comments-" + show.id) || "[]");
    return `
      <div class="tvs-show-card">
        ${show.editor ? '<span class="tvs-show-card-badge editor">Biên tập viên</span>' : ""}
        <span class="tvs-show-card-save${watchlist.includes(show.id) ? ' saved' : ''}" title="Thêm vào Watchlist" onclick="tvs_toggleWatchlist('${show.id}',this)"><i class="fa fa-bookmark"></i></span>
        <img class="tvs-show-img" src="${show.img}" alt="${show.name}">
        <div class="tvs-show-card-title">${show.name}</div>
        <div class="tvs-show-card-meta">${show.start} - ${show.end ? show.end : "nay"} · ${show.duration}</div>
        <div class="tvs-show-card-state">${show.state}</div>
        <div class="tvs-show-card-episodes">Số tập: <b>${show.episodes}</b></div>
        <div class="tvs-show-card-actions">
          <button title="Like" class="${liked.includes(show.id) ? 'liked' : ''}" onclick="tvs_toggleLike('${show.id}',this)"><i class="fa fa-thumbs-up"></i> <span>${likeCount}</span></button>
          <button title="Tim" class="${hearted.includes(show.id) ? 'loved' : ''}" onclick="tvs_toggleHeart('${show.id}',this)"><i class="fa fa-heart"></i> <span>${heartCount}</span></button>
          <button title="Bình luận" onclick="tvs_showCommentBox('${show.id}',this)"><i class="fa fa-comment"></i> <span>${comments.length}</span></button>
        </div>
      </div>
    `
  }).join('');

  // Luôn luôn render phân trang (kể cả chỉ 1 trang)
  let pagHTML = '<div class="tvs-pagination">';
  for (let i = 1; i <= totalPages; i++) {
    pagHTML += `<button class="tvs-page-btn${tvs_currentPage === i ? ' active' : ''}" onclick="tvs_gotoPage(${i})">${i}</button>`;
  }
  pagHTML += '</div>';
  document.getElementById("tvs-pagination").innerHTML = pagHTML;
}
window.tvs_gotoPage = function (p) {
  tvs_currentPage = p;
  tvs_renderShows(document.getElementById('tvs-search').value.trim());
}

// ====== SỰ KIỆN ======
document.addEventListener("DOMContentLoaded", function () {
  tvs_renderShows();
  // Danh mục
  document.querySelectorAll('.tvs-cat-btn').forEach(btn => {
    btn.onclick = function () {
      document.querySelectorAll('.tvs-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tvs_currentCat = btn.dataset.cat;
      tvs_currentPage = 1;
      tvs_renderShows(document.getElementById('tvs-search').value.trim());
    }
  });
  // Tìm kiếm
  document.getElementById('tvs-search-btn').onclick = function () {
    tvs_currentPage = 1;
    tvs_renderShows(document.getElementById('tvs-search').value.trim());
  }
  document.getElementById('tvs-search').onkeydown = function (e) {
    if (e.key == "Enter") {
      tvs_currentPage = 1;
      tvs_renderShows(this.value.trim());
    }
  }
});

// ====== LIKE ======
window.tvs_toggleLike = function (id, btn) {
  const user = getCurrentUser();
  let liked = tvs_getArr("tvs-liked");
  let arr = JSON.parse(localStorage.getItem("tvs-likecount-" + id) || "[]");
  let idx = liked.indexOf(id);
  if (idx === -1) { liked.push(id); if (!arr.includes(user)) arr.push(user); }
  else { liked.splice(idx, 1); arr = arr.filter(u => u !== user); }
  tvs_setArr("tvs-liked", liked);
  localStorage.setItem("tvs-likecount-" + id, JSON.stringify(arr));
  tvs_renderShows(document.getElementById('tvs-search').value.trim());
}

// ====== HEART ======
window.tvs_toggleHeart = function (id, btn) {
  const user = getCurrentUser();
  let hearted = tvs_getArr("tvs-hearted");
  let arr = JSON.parse(localStorage.getItem("tvs-heartcount-" + id) || "[]");
  let idx = hearted.indexOf(id);
  if (idx === -1) { hearted.push(id); if (!arr.includes(user)) arr.push(user); }
  else { hearted.splice(idx, 1); arr = arr.filter(u => u !== user); }
  tvs_setArr("tvs-hearted", hearted);
  localStorage.setItem("tvs-heartcount-" + id, JSON.stringify(arr));
  tvs_renderShows(document.getElementById('tvs-search').value.trim());
}

// ====== WATCHLIST ======
window.tvs_toggleWatchlist = function (id, btn) {
  let watchlist = tvs_getArr("tvs-watchlist");
  let idx = watchlist.indexOf(id);
  if (idx === -1) watchlist.push(id);
  else watchlist.splice(idx, 1);
  tvs_setArr("tvs-watchlist", watchlist);
  tvs_renderShows(document.getElementById('tvs-search').value.trim());
}

// ====== POPUP COMMENT (POPOVER) CHO TV SHOWS ======
window.tvs_showCommentBox = function (id, btn) {
  // Đóng mọi popup comment hiện có
  document.querySelectorAll('.tvs-popover-comment').forEach(e => e.remove());

  // Nếu đang mở thì đóng lại
  if (btn && btn.dataset.opened === "1") {
    btn.dataset.opened = "0";
    return;
  }
  if (btn) btn.dataset.opened = "1";

  const user = getCurrentUser();
  let comments = JSON.parse(localStorage.getItem("tvs-comments-" + id) || "[]");

  // Tạo popover
  const pop = document.createElement("div");
  pop.className = "tvs-popover-comment";
  pop.innerHTML = `
    <button class="close-popover" title="Đóng">&times;</button>
    <div class="tvs-popover-title">Bình luận</div>
    <div class="tvs-comment-scroll">
      ${
        comments.length
          ? comments.map((c, i) => {
              let isOwner = user && c.user === user;
              return `<div class="tvs-comment-row" data-idx="${i}">
                <span class="tvs-comment-user${isOwner ? ' owner' : ''}">${c.user}</span>: 
                <span class="tvs-comment-content">${c.text}</span>
                <span class="tvs-comment-time">${c.time ? c.time.split(',')[0] : ''} <span>${c.time ? c.time.split(',')[1] : ''}</span></span>
                ${isOwner ? `<button class="tvs-delete-comment-btn" onclick="tvs_deleteComment('${id}',${i})" title="Xoá bình luận">&times;</button>` : ""}
              </div>`
            }).join('')
          : '<i style="color:#aaa;">Chưa có bình luận.</i>'
      }
    </div>
    <form class="tvs-comment-form" onsubmit="tvs_addComment(event,'${id}',this)">
      <input type="text" name="cmt" maxlength="200" required placeholder="Viết bình luận..." autocomplete="off">
      <button type="submit">Gửi</button>
    </form>
  `;
  pop.querySelector('.close-popover').onclick = () => {
    if (btn) btn.dataset.opened = "0";
    pop.remove();
  };
  document.body.appendChild(pop);

  // Vị trí popover (dưới nút bình luận)
  if (btn) {
    const rect = btn.getBoundingClientRect();
    pop.style.position = 'absolute';
    pop.style.left = (rect.left + window.scrollX + rect.width / 2 - 190) + 'px';
    pop.style.top = (rect.bottom + window.scrollY + 8) + 'px';
    pop.style.zIndex = 9999;
  } else {
    pop.style.position = "fixed";
    pop.style.left = "50%";
    pop.style.top = "50%";
    pop.style.transform = "translate(-50%,-50%)";
    pop.style.zIndex = 9999;
  }
};

window.tvs_addComment = function (e, id, form) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return alert("Bạn cần đăng nhập để bình luận!");
  let val = form.querySelector('input[name=cmt]').value.trim();
  if (!val) return;
  // Lưu vào show
  let arr = JSON.parse(localStorage.getItem("tvs-comments-" + id) || "[]");
  const commentObj = { user, text: val, time: (new Date()).toLocaleString(), timestamp: Date.now() };
  arr.push(commentObj);
  localStorage.setItem("tvs-comments-" + id, JSON.stringify(arr));
  // Lưu vào bình luận user
  let userCommentArr = JSON.parse(localStorage.getItem("comments-" + user) || "[]");
  userCommentArr.push({
    showId: id,
    content: val,
    time: commentObj.time,
    user: user,
    timestamp: commentObj.timestamp
  });
  localStorage.setItem("comments-" + user, JSON.stringify(userCommentArr));
  form.reset();
  // Reload lại popover
  document.querySelectorAll('.tvs-popover-comment').forEach(e => e.remove());
  const btns = document.querySelectorAll(`[onclick*="tvs_showCommentBox('${id}'"]`);
  btns.length && tvs_showCommentBox(id, btns[0]);
};

window.tvs_deleteComment = function (id, idx) {
  const user = getCurrentUser();
  let arr = JSON.parse(localStorage.getItem("tvs-comments-" + id) || "[]");
  if (!arr[idx] || arr[idx].user !== user) return;
  // Lấy timestamp của comment để xoá khỏi `comments-<username>`
  const ts = arr[idx].timestamp;
  arr.splice(idx, 1);
  localStorage.setItem("tvs-comments-" + id, JSON.stringify(arr));
  // Xoá khỏi user comment
  let userCommentArr = JSON.parse(localStorage.getItem("comments-" + user) || "[]");
  userCommentArr = userCommentArr.filter(c => !(c.showId === id && c.timestamp === ts));
  localStorage.setItem("comments-" + user, JSON.stringify(userCommentArr));
  // Reload lại popover
  document.querySelectorAll('.tvs-popover-comment').forEach(e => e.remove());
  const btns = document.querySelectorAll(`[onclick*="tvs_showCommentBox('${id}'"]`);
  btns.length && tvs_showCommentBox(id, btns[0]);
};

// ====== XEM DANH SÁCH SHOW ĐÃ LIKE/HEART/WATCHLIST ======
window.tvs_getUserShows = function (type) {
  let arr = tvs_getArr("tvs-" + type);
  return arr;
}