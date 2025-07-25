// --- Đăng nhập / Đăng ký ---
document.addEventListener('DOMContentLoaded', function () {
  // Lấy các phần tử tab và form
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginMsg = document.getElementById('login-message');
  const registerMsg = document.getElementById('register-message');

  // Hàm mã hoá mật khẩu (base64)
  function hash(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  // Đọc danh sách tài khoản từ localStorage
  function readAccounts() {
    const data = localStorage.getItem('tk.txt') || '';
    const users = {};
    data.split('\n').forEach(line => {
      if (!line.trim()) return;
      // Đọc đủ 7 trường
      const [fullname, username, pass, role, hometown, birthday, gender] = line.split('|');
      if (username) users[username] = { fullname, pass, role, hometown, birthday, gender };
    });
    return users;
  }

  // Ghi danh sách tài khoản vào localStorage
  function writeAccounts(users) {
    const lines = [];
    for (let username in users) {
      const { fullname, pass, role, hometown, birthday, gender } = users[username];
      lines.push(`${fullname}|${username}|${pass}|${role}|${hometown || ""}|${birthday || ""}|${gender || ""}`);
    }
    localStorage.setItem('tk.txt', lines.join('\n'));
  }

  // Chuyển tab đăng nhập/đăng ký
  if (tabLogin && tabRegister && loginForm && registerForm) {
    tabLogin.addEventListener('click', function () {
      tabLogin.classList.add('active');
      tabRegister.classList.remove('active');
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
      if (loginMsg) loginMsg.textContent = '';
      if (registerMsg) registerMsg.textContent = '';
    });
    tabRegister.addEventListener('click', function () {
      tabLogin.classList.remove('active');
      tabRegister.classList.add('active');
      loginForm.classList.remove('active');
      registerForm.classList.add('active');
      if (loginMsg) loginMsg.textContent = '';
      if (registerMsg) registerMsg.textContent = '';
    });
  }

  // Đăng ký
  if (registerForm) {
    registerForm.onsubmit = function (e) {
      e.preventDefault();
      const fullname = document.getElementById('register-fullname').value.trim();
      const username = document.getElementById('register-username').value.trim();
      const password = document.getElementById('register-password').value;
      const password2 = document.getElementById('register-password2').value;
      const hometown = document.getElementById('register-hometown').value.trim();
      const birthday = document.getElementById('register-birthday').value;
      const gender = document.getElementById('register-gender').value;
      const role = document.getElementById('register-role').value;
      const terms = document.getElementById('register-terms').checked;

      if (registerMsg) registerMsg.classList.remove('success');

      // Validate all fields
      if (!fullname || !username || !password || !password2 || !hometown || !birthday || !gender || !role) {
        if (registerMsg) registerMsg.textContent = 'Vui lòng nhập đầy đủ thông tin!';
        return;
      }
      if (password !== password2) {
        if (registerMsg) registerMsg.textContent = 'Mật khẩu nhập lại không khớp!';
        return;
      }
      if (!terms) {
        if (registerMsg) registerMsg.textContent = 'Bạn phải đồng ý với điều khoản và chính sách!';
        return;
      }

      const users = readAccounts();
      if (users[username]) {
        if (registerMsg) registerMsg.textContent = 'Tên tài khoản đã tồn tại!';
        return;
      }
      users[username] = {
        fullname,
        pass: hash(password),
        role,
        hometown,
        birthday,
        gender
      };
      writeAccounts(users);
      if (registerMsg) {
        registerMsg.textContent = 'Đăng ký thành công! Bạn có thể đăng nhập.';
        registerMsg.classList.add('success');
      }
      registerForm.reset();
      setTimeout(() => {
        if (typeof tabLogin !== "undefined" && tabLogin) tabLogin.click();
        if (registerMsg) {
          registerMsg.textContent = '';
          registerMsg.classList.remove('success');
        }
      }, 1500);
    };
  }

  // Đăng nhập
  if (loginForm) {
    loginForm.onsubmit = function (e) {
      e.preventDefault();
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value;
      if (loginMsg) loginMsg.classList.remove('success');

      if (!username || !password) {
        if (loginMsg) loginMsg.textContent = 'Vui lòng nhập tên và mật khẩu!';
        return;
      }
      const users = readAccounts();
      if (!users[username] || users[username].pass !== hash(password)) {
        if (loginMsg) loginMsg.textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
        return;
      }
      // Lưu trạng thái đăng nhập
      localStorage.setItem('currentUser', JSON.stringify({
        username,
        fullname: users[username].fullname,
        role: users[username].role
      }));
      // Ghi lại lượt đăng nhập
      let stats = JSON.parse(localStorage.getItem('login-stats') || '[]');
      stats.push({ username, timestamp: Date.now() });
      localStorage.setItem('login-stats', JSON.stringify(stats));
      if (loginMsg) {
        loginMsg.textContent = 'Đăng nhập thành công!';
        loginMsg.classList.add('success');
      }
      setTimeout(() => {
        if (users[username].role === 'admin') {
          window.location.href = "admin.html";
        } else {
          window.location.href = "index.html";
        }
      }, 800);
    };
  }
});

// --- Logic menu người dùng ---
document.addEventListener('DOMContentLoaded', function () {
  const userArea = document.getElementById('user-menu-area');
  if (!userArea) return;

  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user && user.username) {
    // Tạo item Quản lý nếu là admin
    let adminMenu = "";
    if (user.role === 'admin') {
      adminMenu = `<a href="admin.html" id="admin-link" style="color:#1976d2;">Quản lý</a>`;
    }

    userArea.innerHTML = `
      <div class="user-menu">
        <button id="user-menu-btn" style="color:#e7a90a; font-weight:bold; background:none; border:none; cursor:pointer;">
          ${user.fullname || user.username} <i class="fa fa-caret-down"></i>
        </button>
        <div id="user-menu-dropdown" style="display:none; position:absolute; right:0; background:#fff; border-radius:8px; box-shadow:0 2px 8px #0002; min-width:120px; z-index:10;">
          <a href="#" id="account-link">Tài khoản</a>
          ${adminMenu}
          <a href="#" id="logout-btn" style="color:#d32f2f;">Đăng xuất</a>
        </div>
      </div>
    `;
    // Dropdown logic
    const btn = document.getElementById('user-menu-btn');
    const dropdown = document.getElementById('user-menu-dropdown');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function () {
      dropdown.style.display = 'none';
    });

    // Chuyển hướng tài khoản
    const accountLink = document.getElementById('account-link');
    accountLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'user.html';
    });

    // Đăng xuất
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      window.location.href = "index.html"; // Chuyển về trang chủ sau khi đăng xuất
    });
    // Quản lý (nếu là admin thì đã có href)
  } else {
    userArea.innerHTML = `<a href="login.html">Đăng Nhập/Đăng Ký</a>`;
  }
});

function isLoggedIn() {
  return !!localStorage.getItem('currentUser');
}