// ==== Dữ liệu mẫu ====
const nfeed_data = [
  {
    id: "news1",
    title: "Công bố 3 diễn viên Harry Potter bản truyền hình",
    author: "Quang Anh",
    time: "2025-05-27T08:10:00Z",
    categories: ["tinmoi", "tg","celeb","phimanh","tinhot"],
    preview: "Dominic McLaughlin - diễn viên 11 tuổi người Scotland - vượt hàng nghìn ứng viên để đóng Harry Potter trong phim truyền hình cùng tên...",
    img: "images/tt/t1.webp"
  },
  {
    id: "news2",
    title: "Hoạt hình Việt trỗi dậy mùa hè",
    author: "Kim Đồng",
    time: "2025-05-24T13:25:00Z",
    categories: ["tinhot","vietnam","tinmoi", "phimanh"],
    preview: "Lần đầu tiên hoạt hình Việt gây chú ý với khán giả khi có hai phim liên tiếp ra rạp là 'Dế Mèn phiêu lưu ký' và 'Trạng Quỳnh nhí'",
    img: "images/tt/t2.webp"
  },
  {
    id: "news3",
    title: "Diễn viên 'Em và Trịnh' tái hợp trên màn ảnh ",
    author: "Quang Anh",
    time: "2025-05-28T13:25:00Z",
    categories: ["tinhot", "tinmoi","phimanh","celeb"],
    preview: "Avin Lu và Hoàng Hà - từng đóng cặp trong 'Em và Trịnh' - tham gia phim điện ảnh về thời thanh xuân 'Điều ước cuối cùng'. ",
    img: "images/tt/t3.jpg"
  },
   {
    id: "news4",
    title: "Phim của Thư Kỳ thắng giải đặc biệt tại Cannes 2025",
    author: "Light Nguyễn",
    time: "2025-05-26T13:25:00Z",
    categories: ["tinhot", "tg", "phimanh","celeb"],
    preview: "Pháp-'Resurrection' - có Thư Kỳ đóng chính - giành giải đặc biệt (Prix Spécial) tại Liên hoan phim Cannes 2025. ",
    img: "images/tt/t4.webp"
  },
   {
    id: "news5",
    title: "Cannes 2025-chính trị lấn át điện ảnh",
    author: "Napoleon Nguyễn",
    time: "2025-05-27T13:25:00Z",
    categories: ["tinhot", "tinmoi", "phimanh","tg"],
    preview: "Tiêu chí tôn vinh điện ảnh ở Liên hoan phim Cannes bị lu mờ khi thông điệp chính trị, vấn đề thuế quan chiếm lĩnh sự chú ý. ",
    img: "images/tt/t5.jpg"
  },
   {
    id: "news6",
    title: "'Lilo & Stitch' - phép màu từ tình thân.",
    author: "Lights Night",
    time: "2025-05-23T13:25:00Z",
    categories: ["tg", "phimanh"],
    preview: "Cô bé Lilo dạy người bạn ngoài hành tinh về ý nghĩa của gia đình bằng tình thương và sự kiên nhẫn, trong phim live-action 'Lilo & Stitch'. ",
    img: "images/tt/t6.webp"
  },
   {
    id: "news7",
    title: "Nghệ sĩ Đức Khuê tái xuất màn ảnh rộng.",
    author: "Quang Anh",
    time: "2025-05-26T13:25:00Z",
    categories: ["tinmoi", "vietnam", "phimanh","celeb"],
    preview: "Nghệ sĩ Đức Khuê trở lại điện ảnh sau bảy năm, với phim kinh dị 'Út Lan: Oán linh giữ của'.",
    img: "images/tt/t7.png"
  },
   {
    id: "news8",
    title: "Elle Fanning khóc khi nhận tràng pháo tay 15 phút tại Cannes ",
    author: "Light Night",
    time: "2025-05-24T13:25:00Z",
    categories: ["tinhot", "tg", "phimanh","celeb"],
    preview: "Diễn viên Elle Fanning xúc động nhận sự tán thưởng từ khán giả khi ra mắt 'Sentimental Value' tại Liên hoan phim Cannes 2025.",
    img: "images/tt/t8.jpg"
  },
   {
    id: "news9",
    title: "'Jurassic World 7' hé lộ cảnh Scarlett Johansson đối đầu khủng long",
    author: "Quang Anh",
    time: "2025-05-27T13:25:00Z",
    categories: ["tinhot", "tg","tinmoi","celeb", "phimanh"],
    preview: "Scarlett Johansson vào vai trưởng đoàn thám hiểm chạm trán nhiều loài khủng long trong trailer phần phim 'Jurassic World: Rebirth', sẽ ra mắt trong nước ngày 4/7",
    img: "images/tt/t10.avif"
  },
   {
    id: "news10",
    title: "Phim 'Chốt đơn' của Thùy Tiên bị gỡ khỏi hệ thống rạp",
    author: "Light Nguyễn",
    time: "2025-05-28T13:25:00Z",
    categories: ["tinhot", "vietnam", "phimanh","celeb"],
    preview: "'Chốt đơn' - phim về nghề bán hàng online có hoa hậu Thùy Tiên đóng chính - bị gỡ khỏi hệ thống website rạp, dù sắp đến ngày chiếu.",
    img: "images/tt/t11.webp"
  },
   {
    id: "news11",
    title: "Tài tử Denzel Washington nhận Cành Cọ Vàng danh dự",
    author: "Light Light",
    time: "2025-05-25T13:25:00Z",
    categories: ["tinhot", "tg", "celeb"],
    preview: "Denzel Washington được trao Cành Cọ Vàng danh dự cho sự nghiệp diễn xuất, trong lần đầu góp mặt tại Liên hoan phim Cannes.",
    img: "images/tt/t11.jpg"
  },
  {
    id: "news12",
    title: "'Địa đạo' bản đặc biệt chiếu sớm trên Galaxy Play",
    author: "Yassuo 1st",
    time: "2025-05-20T13:25:00Z",
    categories: ["vietnam","phimanh"],
    preview: "'Địa đạo - Mặt trời trong bóng tối' bản đặc biệt hé lộ số phận nhân vật Bảy Theo, chiếu sớm và độc quyền trên Galaxy Play, từ ngày 19/5. ",
    img: "images/tt/t12.webp"
  },
  {
    id: "news13",
    title: "Phim tài liệu tiết lộ Justin Bieber 'bán bài hát vì nguy cơ phá sản'",
    author: "Quang Anh",
    time: "2025-05-29T13:25:00Z",
    categories: ["tinhot", "tg", "phimanh","celeb"],
    preview: "Phim tài liệu 'TMZ Investigates: What Happened to Justin Bieber?' cho biết ca sĩ bán gần 300 bài hát với giá 200 triệu USD để tránh nguy cơ phá sản. ",
    img: "images/tt/t14.webp"
  },
  {
    id: "news14",
    title: "Phim 'Trạng Quỳnh' tung cảnh đại chiến với Cửu Vĩ Hồ",
    author: "Anh Nguyễn",
    time: "2025-05-30T13:25:00Z",
    categories: ["tinhot", "vietnam", "phimanh","tinmoi"],
    preview: "Phim hoạt hình về Trạng Quỳnh giới thiệu tạo hình Cửu Vĩ Hồ - thế lực hắc ám đối đầu nhân vật chính trong chuyến phiêu lưu.",
    img: "images/tt/t15.png"
  },
  {
    id: "news15",
    title: "'Thám tử Kiên' vượt doanh thu 'Lật mặt 8'",
    author: "Yassuo Sweeper",
    time: "2025-05-22T13:25:00Z",
    categories: ["tinhot", "vietnam", "phimanh"],
    preview: "'Thám tử Kiên' đạt 211 tỷ đồng sau nửa tháng ra rạp, vượt 'Lật mặt 8' của Lý Hải - tác phẩm chiếu cùng dịp.",
    img: "images/tt/t16.webp"
  },
  {
    id: "news16",
    title: "Bom tấn 'Superman' tung trailer",
    author: "Quang Anh",
    time: "2025-05-21T13:25:00Z",
    categories: ["tinhot", "tg", "phimanh","celeb"],
    preview: "Trailer 'Superman' hé lộ quá trình Superman - David Corenswet đóng - nỗ lực hòa nhập xã hội loài người dưới vỏ bọc nhà báo Clark Kent. ",
    img: "images/tt/t17.jpg"
  },
  {
    id: "news17",
    title: "Dàn sao 'Dòng máu anh hùng' sau gần 20 năm",
    author: "Napoleon Nguyễn",
    time: "2025-05-20T13:25:00Z",
    categories: ["vietnam", "phimanh","celeb"],
    preview: "Ngô Thanh Vân hạnh phúc bên chồng kém 11 tuổi, Johnny Trí Nguyễn kết thúc mối tình với bạn gái Nhung Kate, sau 18 năm đóng 'Dòng máu anh hùng'. ",
    img: "images/tt/t17.webp"
  },
  {
    id: "news18",
    title: "Các công đoàn kêu gọi ông Trump giảm thuế cho Hollywood",
    author: "Alexander Đại Đế",
    time: "2025-06-01T13:25:00Z",
    categories: ["tinhot", "tg","tinmoi"],
    preview: "Mỹ-Công đoàn Hollywood kêu gọi Tổng thống Donald Trump khấu trừ chi phí cho ngành giải trí, sau khi ông muốn áp thuế 100% phim sản xuất ngoài nước Mỹ. ",
    img: "images/tt/t18.avif"
  },
  {
    id: "news19",
    title: "Tài tử 'Gia đình là số một' đóng phim hợp tác Việt - Hàn",
    author: "Quang Anh",
    time: "2025-05-24T13:25:00Z",
    categories: ["tinhot", "vietnam", "phimanh","celeb"],
    preview: "Ngôi sao 'Gia đình là số một' Jung Il Woo đóng cặp Juliet Bảo Ngọc - diễn viên 'Tro tàn rực rỡ', trong phim hợp tác Việt - Hàn. ",
    img: "images/tt/t20.jpg"
  },
  
  // Thêm các item khác tại đây
];

// ==== Config ====
const NFEED_PER_PAGE = 10;
let nfeedCurrentCat = "all";
let nfeedCurrentPage = 1;

// ==== Time ago helper ====
function nfeedTimeAgo(iso) {
  const now = new Date(), d = new Date(iso);
  const diff = Math.floor((now - d) / 60000);
  if (diff < 1) return "Vừa xong";
  if (diff < 60) return diff + " phút trước";
  if (diff < 1440) return Math.floor(diff / 60) + " giờ trước";
  return d.toLocaleDateString("vi-VN");
}

// ==== Hiển thị tên danh mục ====
function nfeedCatLabel(cat) {
  switch (cat) {
    case "tinmoi": return "Tin mới";
    case "tinhot": return "Tin hot";
    case "tg": return "Thế giới";
    case "celeb": return "Người nổi tiếng";
    case "vietnam": return "Việt nam";
    case "phimanh": return "Phim ảnh";
    default: return cat;
  }
}

// ==== Render Newsfeed, mỗi hàng 2 card ====
function renderNFeed(filter = "") {
  let filtered = nfeed_data.filter(item => {
    const catOk = (nfeedCurrentCat === "all" || item.categories.includes(nfeedCurrentCat));
    const txt = (item.title + " " + item.author).toLowerCase();
    const srch = filter.trim().toLowerCase();
    return catOk && (srch === "" || txt.includes(srch));
  });
  const total = filtered.length;
  const totalPages = Math.ceil(total / NFEED_PER_PAGE);
  if (nfeedCurrentPage > totalPages) nfeedCurrentPage = totalPages || 1;
  if (nfeedCurrentPage < 1) nfeedCurrentPage = 1;
  const start = (nfeedCurrentPage - 1) * NFEED_PER_PAGE;
  const pageNews = filtered.slice(start, start + NFEED_PER_PAGE);

  const wrap = document.getElementById("nfeed-list");
  wrap.innerHTML = pageNews.map(item => `
    <div class="nfeed-item">
      <img class="nfeed-img" src="${item.img}" alt="${item.title}">
      <div class="nfeed-info">
        <div class="nfeed-title">${item.title}</div>
        <div class="nfeed-meta">
          ${item.author} · ${nfeedTimeAgo(item.time)}
          <span style="margin-left:8px;">
            ${item.categories.map(cat =>
              `<span class="nfeed-cat-label">${nfeedCatLabel(cat)}</span>`
            ).join('')}
          </span>
        </div>
        <div class="nfeed-preview">${item.preview}</div>
      </div>
    </div>
  `).join('');

  // Pagination
  let pag = "";
  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      pag += `<button class="nfeed-page-btn${i === nfeedCurrentPage ? " active" : ""}" onclick="gotoNFeedPage(${i})">${i}</button>`;
    }
  }
  document.getElementById("nfeed-pagination").innerHTML = pag;
}

window.gotoNFeedPage = function (p) {
  nfeedCurrentPage = p;
  renderNFeed(document.getElementById('nfeed-search').value);
};

// ==== Sự kiện ====
document.addEventListener("DOMContentLoaded", function () {
  renderNFeed();
  document.querySelectorAll('.nfeed-cat-btn').forEach(btn => {
    btn.onclick = function () {
      document.querySelectorAll('.nfeed-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      nfeedCurrentCat = btn.dataset.cat;
      nfeedCurrentPage = 1;
      renderNFeed(document.getElementById('nfeed-search').value);
    }
  });
  document.getElementById('nfeed-search-btn').onclick = function () {
    nfeedCurrentPage = 1;
    renderNFeed(document.getElementById('nfeed-search').value);
  }
  document.getElementById('nfeed-search').onkeydown = function (e) {
    if (e.key === "Enter") {
      nfeedCurrentPage = 1;
      renderNFeed(this.value);
    }
  }
});