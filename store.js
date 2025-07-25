/*shop*/
// ===== DANH MỤC CHUẨN =====
const PRODUCT_CATEGORIES = [
  "Poster phim",
  "Quần áo, phụ kiện",
  "Vé xem phim",
  "CD, Bluray",
  "Đồ lưu niệm"
];
const defaultShopData = [
  {
    category: "Poster phim",
    items: [
      { name: "Poster The Wild Robot", img: "images/store/p1.jpg", price: 104000, stock: 10 },
      { name: "Poster Flow", img: "images/store/p2.webp", price: 124000, stock: 18 },
      { name: "Poster Dune", img: "images/store/p3.avif", price: 159000, stock: 3 },
      { name: "Poster Oppenheimer", img: "images/store/p4.webp", price: 55000, stock: 43 },
      { name: "Poster AVG: Endgame", img: "images/store/p5.jpg", price: 83200, stock: 8 },
      { name: "Poster Mario The Movie", img: "images/store/p6.jpg_large", price: 99000, stock: 9 },
      { name: "Poster Breaking Bad", img: "images/store/p8.jpg", price: 390000, stock: 1 },
      { name: "Poster Mùi Cỏ Cháy", img: "images/store/p9.jpg", price: 999999999, stock: 100 },
      { name: "Poster Thunderbolts", img: "images/store/p7.jpeg", price: 140000, stock: 3 },
      { name: "Poster Không Gia Đình", img: "images/store/p10.webp", price: 64000, stock: 12 }
    ]
  },
  {
    category: "Đồ lưu niệm",
    items: [
      { name: "Móc khóa Star War", img: "images/store/l1.jpg", price: 12000, stock: 14 },
      { name: "Mô Hình Flow", img: "images/store/l2.jpeg", price: 68000, stock: 5 },
      { name: "Godzilla Diorama", img: "images/store/l3.jpg", price: 116000, stock: 21 },
      { name: "Sticker Người Nhện", img: "images/store/l4.jpg", price: 16000, stock: 75 },
      { name: "Ốp Lưng BR 2049(CN)", img: "images/store/l5.jpg", price: 24000, stock: 4 },
      { name: "Zippo Peaky Blinders", img: "images/store/l6.jpg", price: 356000, stock: 9 },
      { name: "Túi DIY SpongeBob", img: "images/store/l7.webp", price: 88888, stock: 52 },
      { name: "Ly Nước Kungfu Panda", img: "images/store/l8.jpg", price: 220000, stock: 37 }
    ]
  },
  {
    category: "Quần áo, phụ kiện",
    items: [
      { name: "Áo thun Planet Of Apes", img: "images/store/a1.jpg", price: 212000, stock: 11 },
      { name: "Áo Thun The Flash", img: "images/store/a2.webp", price: 112000, stock: 21 },
      { name: "Áo khoác The Drive", img: "images/store/a3.jpg", price: 1346000, stock: 34 },
      { name: "Áo Hoodie Scream", img: "images/store/a4.jpg", price: 200000, stock: 99 },
      { name: "Pjama Avatar Nickelodon", img: "images/store/a5.jpg", price: 4267000, stock: 42 },
      { name: "Áo len Homelander", img: "images/store/a6.jpg", price: 2150000, stock: 2 },
      { name: "LE Sneaker Disney's", img: "images/store/a7.png", price: 54120000, stock: 15 },
      { name: "Fendi's LE Pokemon", img: "images/store/a8.avif", price: 34650000, stock: 9 },
      { name: "Invicta's LE Joker", img: "images/store/a9.jpg", price: 1990000, stock: 36 },
      { name: "Mũ Venom", img: "images/store/a10.webp", price: 972000, stock: 6 }
    ]
  },
  {
    category: "Vé xem phim",
    items: [
      { name: "Vé Lilo & Stitch (23-06-2025 / Đặc Biệt / L4 / CGV Aeon Long Biên )", img: "images/store/v1.jpg", price: 90000, stock: 22 },
      { name: "Vé Sinners (21-06-2025 / Thường / K1 / Beta Cinema Thanh Xuân )", img: "images/store/v2.jpg", price: 84000, stock: 31 },
      { name: "Vé Lật Mặt 8 (24-06-2025 / Thường / C3 / BHD Star Cầu Giấy )", img: "images/store/v3.webp", price: 125600, stock: 4 },
      { name: "Vé Thám Tử Kiên (26-06-2025 / VIP / A2 / Lotte Cinema Minh Khai )", img: "images/store/v4.webp", price: 113000, stock: 14 },
      { name: "Vé Until Dawn (02-06-2025 / VIP / G7 / CGV Mipec Tower )", img: "images/store/v5.jpg", price: 64000, stock: 11 },
      { name: "Vé Biệt Đội Sấm Sét (04-06-2025 / Thường / D8 / Galaxy Tràng Thi )", img: "images/store/v6.jpg", price: 172800, stock: 9 },
      { name: "Vé Holly Night (07-06-2025 / Đặc Biệt / B1 / CGV Vincom NCT )", img: "images/store/v7.jpg", price: 134200, stock: 2 },
      { name: "Vé Shin: Tenkasu (11-06-2025 / Thường / F17 / Beta Cineplex MĐ )", img: "images/store/v8.jpg", price: 75300, stock: 24 },
      { name: "Vé Minecraft Movie (29-05-2025 / Thường / H4 / Lotte Thăng Long )", img: "images/store/v9.jpeg", price: 48000, stock: 46 },
      { name: "Vé Gia Tài Của Ngoại (24-05-2025 / Thường / K9 / BHD Star PNT   )", img: "images/store/v10.jpg", price: 84000, stock: 19 },
      { name: "Vé Lalaland (28-05-2025 / VIP / A4 / CGV Metropolis Liễu Giai )", img: "images/store/v11.jpg", price: 158700, stock: 13 }
    ]
  },
  {
    category: "CD, Bluray",
    items: [
      { name: "Bluray Flow (Bluray / 4K / ENGLISH / Dolby 5.1 / H.265)", img: "images/store/b1.webp", price: 2800700, stock: 3 },
      { name: "Peaky Blinders Collection (Bluray / HDR 10 bit / VN / H.265)", img: "images/store/b2.avif", price: 3524000, stock: 6 },
      { name: "Wonder Woman (UHD / 2160P / HDR10 / DOLBY 5.1 / H.265)", img: "images/store/b3.jpg", price: 1870000, stock: 5 },
      { name: "The Martian (Bluray / 1080P / 16:9 / DTS Audio / H.264)", img: "images/store/b4.avif", price: 780000, stock: 1 },
      { name: "Smurfs: The Lost Village (Bluray / 4K / Dolby 5.1 / HEVC)", img: "images/store/b5.jpg", price: 4284000, stock: 4 },
      { name: "Caroline (BDRemux / 1440P / ENG / DTS Audio / H.264)", img: "images/store/b6.jpg", price: 642600, stock: 2 },
      { name: "Haikyuu 3RD Season (Bluray / VN / 2 DISC / 1080P / H.264)", img: "images/store/b7.avif", price: 672300, stock: 12 },
      { name: "Sicario Extend Edition (Bluray / ENG / Hi 10P / Dolby Atmos 7.1 / HEVC)", img: "images/store/b8.jpg", price: 2218400, stock: 7 }
    ]
  }
];

function readShopData() {
  return JSON.parse(localStorage.getItem('shopData') || 'null') || JSON.parse(JSON.stringify(defaultShopData));
}
function writeShopData(data) {
  localStorage.setItem('shopData', JSON.stringify(data));
}
let shopData = readShopData();
let invoice = [];

function renderShop() {
  shopData = readShopData(); // luôn lấy mới nhất
  const root = document.getElementById('shop-root');
  if (!root) return;
  root.innerHTML = '';
  shopData.forEach((cat, catIdx) => {
    // THÊM DÒNG NÀY để bỏ qua danh mục rỗng
    if (!cat.items || cat.items.length === 0) return;

    let catHTML = `
    <div class="shop-category">
      <h2>${cat.category}</h2>
      <div class="shop-carousel-wrapper">
        <button class="shop-btn-prev" id="prev-${catIdx}" aria-label="Trước">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="#fff" stroke="#F28B20" stroke-width="2" vector-effect="non-scaling-stroke"/>
            <path d="M18 10L12 16L18 22" stroke="#F28B20" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
          </svg>
        </button>
        <div class="shop-carousel" id="carousel-${catIdx}">
    `;
    cat.items.forEach((item, idx) => {
      catHTML += `
        <div class="shop-item" data-cat="${catIdx}" data-idx="${idx}">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <div class="price">${item.price.toLocaleString()} VND</div>
          <div class="stock">Còn lại: <span id="stock-${catIdx}-${idx}">${item.stock}</span></div>
          <div class="qty-row">
            <button class="qty-btn-shop" onclick="changeQty(${catIdx},${idx},-1)">-</button>
            <span class="qty-num" id="qty-${catIdx}-${idx}">0</span>
            <button class="qty-btn-shop" onclick="changeQty(${catIdx},${idx},1)">+</button>
          </div>
          <button class="order-btn-shop" onclick="orderNow(${catIdx},${idx})" ${!isLoggedIn() ? 'disabled' : ''}>Đặt mua</button>
        </div>
      `;
    });
    catHTML += `
        </div>
        <button class="shop-btn-next" id="next-${catIdx}" aria-label="Sau">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="#fff" stroke="#F28B20" stroke-width="2" vector-effect="non-scaling-stroke"/>
            <path d="M14 10L20 16L14 22" stroke="#F28B20" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
          </svg>
        </button>
      </div>
    </div>
    `;
    root.innerHTML += catHTML;
  });

  // Khởi động carousel sau khi render xong
  shopData.forEach((cat, catIdx) => setupCarousel(catIdx));
}

function setupCarousel(catIdx) {
  const carousel = document.getElementById(`carousel-${catIdx}`);
  const prevBtn = document.getElementById(`prev-${catIdx}`);
  const nextBtn = document.getElementById(`next-${catIdx}`);
  if (!carousel || !prevBtn || !nextBtn) return;

  function updateBtns() {
    const scrollRight = carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft;
    prevBtn.style.display = carousel.scrollLeft > 10 ? 'flex' : 'none';
    nextBtn.style.display = scrollRight > 10 ? 'flex' : 'none';
  }

  function scrollByItem(dir) {
    const item = carousel.querySelector('.shop-item');
    if (!item) return;
    const gap = parseInt(getComputedStyle(carousel).gap) || 28;
    const scrollAmount = item.offsetWidth + gap;
    carousel.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
    setTimeout(updateBtns, 350);
  }

  prevBtn.onclick = (e) => {
    e.stopPropagation();
    scrollByItem(-1);
  };
  nextBtn.onclick = (e) => {
    e.stopPropagation();
    scrollByItem(1);
  };

  prevBtn.style.pointerEvents = "auto";
  nextBtn.style.pointerEvents = "auto";

  carousel.addEventListener('scroll', updateBtns);
  window.addEventListener('resize', updateBtns);

  setTimeout(updateBtns, 80);
}

window.changeQty = function(catIdx, idx, delta) {
  const qtySpan = document.getElementById(`qty-${catIdx}-${idx}`);
  let qty = parseInt(qtySpan.textContent);
  const stock = shopData[catIdx].items[idx].stock;
  qty = Math.max(0, Math.min(stock, qty + delta));
  qtySpan.textContent = qty;
}
window.orderNow = function(catIdx, idx) {
  if (!isLoggedIn()) {
    alert('Bạn cần đăng nhập để đặt mua sản phẩm!');
    return;
  }
  const qtySpan = document.getElementById(`qty-${catIdx}-${idx}`);
  let qty = parseInt(qtySpan.textContent);
  if (qty === 0) return alert('Vui lòng chọn số lượng > 0');
  let item = shopData[catIdx].items[idx];
  if (qty > item.stock) return alert('Số lượng vượt quá tồn kho');

  // Lấy user hiện tại và họ tên
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const users = (localStorage.getItem('tk.txt') || '').split('\n').reduce((obj, line) => {
    let [fullname, username] = line.split('|');
    if (username) obj[username] = fullname;
    return obj;
  }, {});
  const fullname = users[currentUser.username] || currentUser.fullname || currentUser.username;

  // Tạo đơn hàng với ngày đặt
  const orderKey = 'orders-pending-' + currentUser.username;
  const orders = JSON.parse(localStorage.getItem(orderKey) || '[]');
  orders.push({
    fullname: fullname,
    product: item.name,
    qty: qty,
    price: item.price,
    date: new Date().toLocaleDateString('vi-VN')
  });
  localStorage.setItem(orderKey, JSON.stringify(orders));

  // Trừ tồn kho và lưu lại
  item.stock -= qty;
  writeShopData(shopData);
  document.getElementById(`stock-${catIdx}-${idx}`).textContent = item.stock;
  qtySpan.textContent = 0;

  alert('Đã gửi đơn đặt hàng, chờ xử lý!');
};

function isLoggedIn() {
  return !!localStorage.getItem('currentUser');
}

window.downloadInvoice = function() {
  if (!isLoggedIn()) {
    alert('Bạn cần đăng nhập để xuất hóa đơn!');
    return;
  }
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const orderKey = 'orders-pending-' + currentUser.username;
  const orders = JSON.parse(localStorage.getItem(orderKey) || '[]');
  // Lấy ngày hôm nay theo định dạng đã lưu đơn (vi-VN)
  const today = new Date().toLocaleDateString('vi-VN');
  // Lọc các đơn mua đúng ngày hôm nay
  const todayOrders = orders.filter(order => order.date === today);

  if (!todayOrders.length) {
    alert('Bạn chưa đặt mua sản phẩm nào hôm nay!');
    return;
  }

  let content = "HÓA ĐƠN MUA HÀNG\n------------------\n";
  todayOrders.forEach((order, i) => {
    content += `${i+1}. ${order.product} | SL: ${order.qty} | Đơn giá: ${order.price.toLocaleString()} VND | Ngày: ${order.date}\n`;
  });
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'hoadon.txt';
  link.click();
};

document.addEventListener('DOMContentLoaded', renderShop);