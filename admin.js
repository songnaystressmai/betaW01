//admin
// ===== TAB CHUYỂN PANEL =====
document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    if (tab.dataset.tab === "stat") drawLoginChart();
  });
});

// ===== ĐĂNG XUẤT =====
document.getElementById('logout-admin').onclick = function () {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
};

// ====== UTIL ======
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

// ===== QUẢN LÝ NGƯỜI DÙNG =====
function renderUsers() {
  const users = readAccounts();
  const tbody = document.querySelector('#user-table tbody');
  tbody.innerHTML = '';
  for (let username in users) {
    const u = users[username];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${username}</td>
      <td>${u.fullname || ''}</td>
      <td>${u.role}</td>
      <td>
        ${u.role === 'user' ? `<button class="phong-admin" data-user="${username}">Phong admin</button>` : ''}
        ${username !== 'admin' ? `<button class="xoa-user" data-user="${username}">Xóa</button>` : ''}
      </td>
    `;
    tbody.appendChild(tr);
  }
  // Phong admin
  tbody.querySelectorAll('.phong-admin').forEach(btn => {
    btn.onclick = function() {
      const users = readAccounts();
      users[this.dataset.user].role = 'admin';
      writeAccounts(users);
      renderUsers();
    };
  });
  // Xóa user
  tbody.querySelectorAll('.xoa-user').forEach(btn => {
    btn.onclick = function() {
      if (confirm('Xóa tài khoản này?')) {
        const users = readAccounts();
        delete users[this.dataset.user];
        writeAccounts(users);
        renderUsers();
      }
    };
  });
}
renderUsers();

// ===== ĐƠN HÀNG CHỜ XỬ LÝ =====
function getAllPendingOrders() {
  // Đơn hàng mỗi user lưu ở orders-pending-<username>
  const users = readAccounts();
  let orders = [];
  for (let username in users) {
    const arr = JSON.parse(localStorage.getItem('orders-pending-' + username) || '[]');
    arr.forEach(o => orders.push({ ...o, username }));
  }
  return orders;
}
function setAllPendingOrders(orders) {
  // Ghi lại từng user
  const users = readAccounts();
  for (let username in users) {
    const arr = orders.filter(o => o.username === username);
    localStorage.setItem('orders-pending-' + username, JSON.stringify(arr));
  }
}
function getAllDoneOrders() {
  const users = readAccounts();
  let orders = [];
  for (let username in users) {
    const arr = JSON.parse(localStorage.getItem('orders-done-' + username) || '[]');
    arr.forEach(o => orders.push({ ...o, username }));
  }
  return orders;
}
function setAllDoneOrders(orders) {
  const users = readAccounts();
  for (let username in users) {
    const arr = orders.filter(o => o.username === username);
    localStorage.setItem('orders-done-' + username, JSON.stringify(arr));
  }
}

// Hiển thị đơn chờ xử lý
function renderPendingOrders() {
  const tbody = document.querySelector('#pending-orders-table tbody');
  tbody.innerHTML = '';
  getAllPendingOrders().forEach((order, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${order.username}</td>
      <td>${order.product}</td>
      <td>${order.qty}</td>
      <td>${order.date}</td>
      <td><button class="giao-hang" data-idx="${idx}">Giao hàng</button></td>
    `;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll('.giao-hang').forEach(btn => {
    btn.onclick = function() {
      const idx = +this.dataset.idx;
      let pendings = getAllPendingOrders();
      let dones = getAllDoneOrders();
      const order = pendings[idx];
      // Chuyển sang done
      pendings.splice(idx,1);
      dones.push(order);
      setAllPendingOrders(pendings);
      setAllDoneOrders(dones);
      renderPendingOrders();
      renderDoneOrders();
    };
  });
}
renderPendingOrders();

// Đơn đã xử lý
function renderDoneOrders() {
  const tbody = document.querySelector('#done-orders-table tbody');
  tbody.innerHTML = '';
  getAllDoneOrders().forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${order.username}</td>
      <td>${order.product}</td>
      <td>${order.qty}</td>
      <td>${order.date}</td>
    `;
    tbody.appendChild(tr);
  });
}
renderDoneOrders();

// ======== ĐỌC/GHI shopData ========
function readShopData() {
  return JSON.parse(localStorage.getItem('shopData') || 'null') || [];
}
function writeShopData(data) {
  localStorage.setItem('shopData', JSON.stringify(data));
}

// ======== HIỂN THỊ BẢNG SẢN PHẨM ========
function renderProducts() {
  const tbody = document.querySelector('#product-table tbody');
  if (!tbody) return;
  const shopData = readShopData();

  tbody.innerHTML = '';
  shopData.forEach((cat, catIdx) => {
    cat.items.forEach((item, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${item.img}" width="210" height="300" style="object-fit:cover"></td>
        <td>${item.name}</td>
        <td>${cat.category}</td>
        <td>${item.stock}</td>
        <td>${item.price.toLocaleString()} VND</td>
        <td>
          <button class="xoa-prod" data-cat="${catIdx}" data-idx="${idx}">Xóa</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });

  // Xóa sản phẩm
  tbody.querySelectorAll('.xoa-prod').forEach(btn => {
    btn.onclick = function() {
      if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        const catIdx = +this.dataset.cat, idx = +this.dataset.idx;
        const shopData = readShopData();
        shopData[catIdx].items.splice(idx, 1);
        writeShopData(shopData);
        renderProducts();
      }
    }
  });
}
renderProducts();

// ======== THÊM SẢN PHẨM ========
document.getElementById('add-product-form').onsubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('prod-name').value.trim();
  const cat = document.getElementById('prod-cat').value.trim();
  const qty = +document.getElementById('prod-qty').value;
  const price = +document.getElementById('prod-price').value;
  const imgFile = document.getElementById('prod-img').files[0];
  const msg = document.getElementById('add-prod-msg');
  msg.textContent = "";

  if (!name || !cat || isNaN(qty) || isNaN(price)) { msg.textContent = "Vui lòng nhập đủ thông tin!"; return; }
  if (!imgFile) { msg.textContent = "Chưa chọn ảnh!"; return; }
  if (imgFile.size > 2*1024*1024) { msg.textContent = "Ảnh quá lớn!"; return; }

  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = evt.target.result;
    const shopData = readShopData();
    // Tìm đúng category
    let catObj = shopData.find(c => c.category === cat);
    if (!catObj) {
      // Nếu không có danh mục này thì thêm mới
      catObj = { category: cat, items: [] };
      shopData.push(catObj);
    }
    // Kiểm tra trùng tên trong danh mục
    if (catObj.items.some(p => p.name === name)) {
      msg.textContent = "Sản phẩm đã tồn tại trong danh mục!";
      return;
    }
    catObj.items.push({
      name,
      img,
      price,
      stock: qty
    });
    writeShopData(shopData);
    renderProducts();
    document.getElementById('add-product-form').reset();
    msg.textContent = "Đã thêm!";
    setTimeout(()=>msg.textContent="", 1500);
  };
  reader.readAsDataURL(imgFile);
};

// ===== HOẠT ĐỘNG NGƯỜI DÙNG =====
function renderUserActivities() {
  const users = readAccounts();
  let html = "";
  for (let username in users) {
    html += `<b>${username}</b>:<br>`;
    // Like phim
    const liked = JSON.parse(localStorage.getItem('liked-' + username) || '[]');
    // Like show
    const likedShows = JSON.parse(localStorage.getItem('tvs-liked-' + username) || '[]');
    html += `&nbsp;&nbsp;Like: ${liked.length} phim, ${likedShows.length} show<br>`;
    // Tim phim
    const hearted = JSON.parse(localStorage.getItem('hearted-' + username) || '[]');
    // Tim show
    const heartedShows = JSON.parse(localStorage.getItem('tvs-hearted-' + username) || '[]');
    html += `&nbsp;&nbsp;Tim: ${hearted.length} phim, ${heartedShows.length} show<br>`;
    // Comment
    const comments = JSON.parse(localStorage.getItem('comments-' + username) || '[]');
    html += `&nbsp;&nbsp;Comment: ${comments.length} bình luận<br>`;
    // Share
    const shares = JSON.parse(localStorage.getItem('shares-' + username) || '[]');
    html += `&nbsp;&nbsp;Share: ${shares.length} lần<br>`;
    html += "<hr>";
  }
  document.getElementById('user-activities').innerHTML = html;
}
renderUserActivities();

// ===== BIỂU ĐỒ THỐNG KÊ TRUY CẬP =====
function drawLoginChart() {
  // login-stats: [{username, timestamp}]
  let arr = JSON.parse(localStorage.getItem('login-stats') || '[]');
  // Gom theo ngày
  let dayMap = {};
  arr.forEach(log => {
    const d = (new Date(log.timestamp)).toLocaleDateString();
    dayMap[d] = (dayMap[d]||0)+1;
  });
  const labels = Object.keys(dayMap);
  const data = Object.values(dayMap);

  // Vẽ chart
const ctx = document.getElementById('loginChart').getContext('2d');
if (window.loginChartObj) window.loginChartObj.destroy();
window.loginChartObj = new Chart(ctx, {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Lượt đăng nhập',
      data,
      backgroundColor: '#ffe066',
      barThickness: 60 // Thay đổi giá trị này cho phù hợp, càng nhỏ cột càng hẹp
    }]
  },
  options: {
    scales: { y: { beginAtZero: true } }
  }
})}