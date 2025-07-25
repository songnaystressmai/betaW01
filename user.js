//user
// ===== ĐỌC VÀ GHI TÀI KHOẢN TỪ localStorage (tk.txt) =====
function readAccounts() {
  const data = localStorage.getItem('tk.txt') || '';
  const users = {};
  data.split('\n').forEach(line => {
    if (!line.trim()) return;
    const [fullname, username, pass, role, hometown, birthday, gender, avatar] = line.split('|');
    if (username)
      users[username] = { fullname, pass, role, hometown, birthday, gender, avatar };
  });
  return users;
}

function writeAccounts(users) {
  const lines = [];
  for (let username in users) {
    const { fullname, pass, role, hometown, birthday, gender, avatar } = users[username];
    lines.push([fullname, username, pass, role, hometown || "", birthday || "", gender || "", avatar || ""].join('|'));
  }
  localStorage.setItem('tk.txt', lines.join('\n'));
}

// ===== LẤY USERNAME ĐÃ ĐĂNG NHẬP =====
function getCurrentUser() {
  // Lưu ý: currentUser là object (từ login.html)
  const u = JSON.parse(localStorage.getItem('currentUser') || '{}');
  return u.username || '';
}

// ===== HIỂN THỊ THÔNG TIN LÊN FORM USER =====
function loadUserInfo() {
  const username = getCurrentUser();
  if (!username) return;
  const users = readAccounts();
  const user = users[username];
  if (!user) return;
  if (document.getElementById('info-username')) document.getElementById('info-username').value = username;
  if (document.getElementById('info-fullname')) document.getElementById('info-fullname').value = user.fullname || "";
  if (document.getElementById('info-birthday')) document.getElementById('info-birthday').value = user.birthday || "";
  if (document.getElementById('info-gender')) document.getElementById('info-gender').value = user.gender || "";
  if (document.getElementById('info-hometown')) document.getElementById('info-hometown').value = user.hometown || "";
  if (document.getElementById('info-role')) document.getElementById('info-role').value = user.role || "";
  // Avatar
  const avatarImg = document.getElementById('user-avatar');
  if (avatarImg) avatarImg.src = user.avatar && user.avatar.startsWith("data:") ? user.avatar : 'images/default-avatar.png';
}
document.addEventListener('DOMContentLoaded', loadUserInfo);

// ======= LƯU THAY ĐỔI THÔNG TIN =======
const userInfoForm = document.getElementById('user-info-form');
if (userInfoForm) {
  userInfoForm.onsubmit = function(e) {
    e.preventDefault();
    const username = getCurrentUser();
    if (!username) return;
    const users = readAccounts();
    if (!users[username]) return;
    users[username].fullname = document.getElementById('info-fullname').value.trim();
    users[username].birthday = document.getElementById('info-birthday').value;
    users[username].gender = document.getElementById('info-gender').value;
    users[username].hometown = document.getElementById('info-hometown').value.trim();
    writeAccounts(users);

    // Đồng bộ lại currentUser (nếu thay đổi họ tên)
    let cur = JSON.parse(localStorage.getItem('currentUser') || '{}');
    cur.fullname = users[username].fullname;
    localStorage.setItem('currentUser', JSON.stringify(cur));

    alert('Đã lưu thông tin!');
    loadUserInfo();
  };
}

// ======= UPLOAD VÀ LƯU AVATAR (BASE64) =======
const avatarInput = document.getElementById('user-avatar-upload');
if (avatarInput) {
  avatarInput.addEventListener('change', function(e) {
    const file = this.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh!');
      return;
    }
    const reader = new FileReader();
    reader.onload = function(evt) {
      const avatarBase64 = evt.target.result;
      const avatarImg = document.getElementById('user-avatar');
      if (avatarImg) avatarImg.src = avatarBase64;
      const username = getCurrentUser();
      if (!username) return;
      const users = readAccounts();
      if (!users[username]) return;
      users[username].avatar = avatarBase64;
      writeAccounts(users);

      // Đồng bộ lại currentUser (nếu muốn dùng avatar ở menu)
      let cur = JSON.parse(localStorage.getItem('currentUser') || '{}');
      cur.avatar = avatarBase64;
      localStorage.setItem('currentUser', JSON.stringify(cur));
    };
    reader.readAsDataURL(file);
  });
}

// ======= ĐỔI MẬT KHẨU =======
const changePassForm = document.getElementById('change-pass-form');
if (changePassForm) {
  changePassForm.onsubmit = function(e) {
    e.preventDefault();
    const msg = document.getElementById('pass-msg');
    if (msg) msg.textContent = "";
    const oldPass = document.getElementById('old-pass').value;
    const newPass = document.getElementById('new-pass').value;
    const confirmPass = document.getElementById('confirm-pass').value;
    const username = getCurrentUser();
    if (!username) return;
    const users = readAccounts();
    if (!users[username]) return;
    function hash(str) { return btoa(unescape(encodeURIComponent(str))); }
    if (users[username].pass !== hash(oldPass)) {
      if (msg) { msg.textContent = "Mật khẩu cũ không đúng!"; msg.classList.remove('success'); }
      return;
    }
    if (newPass.length < 4) {
      if (msg) { msg.textContent = "Mật khẩu mới phải >= 4 ký tự"; msg.classList.remove('success'); }
      return;
    }
    if (newPass !== confirmPass) {
      if (msg) { msg.textContent = "Nhập lại mật khẩu mới không khớp!"; msg.classList.remove('success'); }
      return;
    }
    users[username].pass = hash(newPass);
    writeAccounts(users);
    if (msg) {
      msg.textContent = "Đổi mật khẩu thành công!";
      msg.classList.add('success');
      setTimeout(() => { msg.textContent = ""; }, 1800);
    }
    this.reset();
  };
}

// ======= TAB PANEL FUNCTIONALITY =======
document.querySelectorAll('.user-tab').forEach(tab => {
  tab.onclick = function() {
    document.querySelectorAll('.user-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.user-panel').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    const panel = document.getElementById('panel-' + this.dataset.tab);
    if (panel) panel.classList.add('active');
  };
});

//biến phim để lưu watchlist, tim, like
window.movieapp_movies = [
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
  // ...các phim khác như trong dữ liệu của bạn...
];
//shows
window.tvs_data = [
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
];
// ======= WATCHLIST, LIKED, HEARTED, COMMENT, ORDER (Demo) =======
function renderList(listId, storageKey, emptyMsg) {
  const username = getCurrentUser();
  const listDiv = document.getElementById(listId);
  if (!username || !listDiv) return;

  // Lấy mảng id phim
  const phimArr = JSON.parse(localStorage.getItem(storageKey + '-' + username) || '[]');
  // Lấy mảng id TV SHOWS (nếu có)
  const showArr = JSON.parse(localStorage.getItem('tvs-' + storageKey + '-' + username) || '[]');
  // Gộp lại, loại trùng
  const idList = [...new Set([...phimArr, ...showArr])];

  // moviesData phải gồm cả phim lẫn show
  const moviesData = (window.movieapp_movies || []).concat(window.tvs_data || []);
  let html = "";
  if (idList.length) {
    html = `<div class="movieapp-list-grid">` + idList.map(id => {
      const item = moviesData.find(m => m.id === id);
      if (!item) return "";
      return `
        <div class="movieapp-account-card">
          <img class="movieapp-account-card-img" src="${item.img || 'images/poster-placeholder.png'}" alt="${item.title || item.name}">
          <button class="movieapp-account-card-remove" title="Xóa khỏi danh sách" onclick="removeFromList('${storageKey}','${item.id}',this)">&times;</button>
          <div class="movieapp-account-card-content">
            <div class="movieapp-account-card-title">${item.title || item.name}</div>
            <div class="movieapp-account-card-meta">${item.year ? item.year + ' • ' : (item.start ? item.start + (item.end ? '-' + item.end : '-nay') + ' • ' : '')}${item.duration || ''}</div>
            <div class="movieapp-account-card-state">${item.state || ''}</div>
          </div>
        </div>
      `;
    }).join('') + `</div>`;
  } else {
    html = `<div style="color:#aaa;font-style:italic;padding:10px;">${emptyMsg}</div>`;
  }
  listDiv.innerHTML = html;
}

// Nút xóa nhanh khỏi danh sách
window.removeFromList = function(storageKey, movieId, btn) {
  const username = getCurrentUser();
  // Xóa khỏi phim (key phim)
  let arr = JSON.parse(localStorage.getItem(storageKey + '-' + username) || '[]');
  arr = arr.filter(id => id !== movieId);
  localStorage.setItem(storageKey + '-' + username, JSON.stringify(arr));
  // Xóa khỏi TV SHOWS (key show)
  let arr2 = JSON.parse(localStorage.getItem('tvs-' + storageKey + '-' + username) || '[]');
  arr2 = arr2.filter(id => id !== movieId);
  localStorage.setItem('tvs-' + storageKey + '-' + username, JSON.stringify(arr2));
  // Render lại chính danh sách vừa xóa
  if (storageKey === 'watchlist') renderList('watchlist-list', 'watchlist', 'Chưa có phim/show nào trong Watchlist.');
  if (storageKey === 'liked') renderList('liked-list', 'liked', 'Chưa có phim nào được like.');
  if (storageKey === 'hearted') renderList('hearted-list', 'hearted', 'Chưa có phim/show nào được "tim".');
};

function renderComments() {
  const username = getCurrentUser();
  const ul = document.getElementById('comment-list');
  if (!username || !ul) return;
  const comments = JSON.parse(localStorage.getItem('comments-' + username) || '[]');
  // Lấy tên show
  function getShowName(id) {
    if (window.tvs_data) {
      const found = window.tvs_data.find(s => s.id === id);
      return found ? found.name : id;
    }
    return id;
  }
  // Lấy tên phim
  function getMovieName(id) {
    if (typeof movieapp_getMovieTitle === 'function') return movieapp_getMovieTitle(id) || id;
    if (window.moviesData) {
      const found = window.moviesData.find(m => m.id === id);
      return found ? found.title || found.name : id;
    }
    return id;
  }
  ul.innerHTML = comments.length
    ? comments.map(c => {
        let label = "";
        if (c.movieId) label = `<b>Phim:</b> ${getMovieName(c.movieId)}`;
        else if (c.showId) label = `<b>Show:</b> ${getShowName(c.showId)}`;
        else label = "<b>Khác</b>";
        return `<li>
          ${label}<br>
          <span>${c.content}</span>
          <span style="color:#bbb;font-size:0.9em;"> (${c.time})</span>
        </li>`;
      }).join('')
    : `<li style="color:#aaa;font-style:italic;">Chưa có bình luận nào.</li>`;
}

function renderOrders() {
  const username = getCurrentUser();
  const ul = document.getElementById('order-list');
  if (!username || !ul) return;
  const orders = JSON.parse(localStorage.getItem('orders-pending-' + username) || '[]');
  ul.innerHTML = orders.length
    ? orders.map(o => 
        `<li>
          <b>${o.product}</b>
          - Số lượng: ${o.qty}
          - Giá: ${o.price ? o.price.toLocaleString() + ' VND' : 'N/A'}
          - Ngày đặt: ${o.date || ''}
        </li>`
      ).join('')
    : `<li style="color:#aaa;font-style:italic;">Không có đơn hàng nào đang chờ xử lý.</li>`;
}

document.addEventListener('DOMContentLoaded', function() {
  renderList('watchlist-list', 'watchlist', 'Chưa có phim/show nào trong Watchlist.');
  renderList('liked-list', 'liked', 'Chưa có phim nào được like.');
  renderList('hearted-list', 'hearted', 'Chưa có phim/show nào được "tim".');
  renderComments();
  renderOrders();
});