// Hiển thị 7 ảnh mỗi lần, class pos0...pos6 (hoặc active-main, active-sub, active-side)
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.magazine-slider').forEach(function (slider) {
    const images = Array.from(slider.querySelectorAll('img'));
    let idx = 0; // index của ảnh chính giữa
    const showCount = 8; // số ảnh hiển thị

    function show(i) {
      // Xóa toàn bộ class liên quan trước
      images.forEach(img => {
        img.classList.remove(
          'pos0','pos1','pos2','pos3','pos4','pos5','pos6',
          'active-main','active-sub','active-side'
        );
        img.style.display = 'none';
      });
      let n = images.length;

      // Gán class cho 7 ảnh liên tiếp (vòng tròn)
      for (let k = 0; k < Math.min(showCount, n); k++) {
        let imgIdx = (i + k) % n;
        images[imgIdx].classList.add('pos' + k);
        images[imgIdx].style.display = '';

        // Nếu muốn kết hợp với các hiệu ứng active-* trong CSS:
        if (k === 3) images[imgIdx].classList.add('active-main');
        if (k === 2 || k === 4) images[imgIdx].classList.add('active-sub');
        if (k === 1 || k === 5) images[imgIdx].classList.add('active-side');
      }
    }

    show(idx);
    slider.querySelector('.prev-btn').onclick = () => {
      idx = (idx - 1 + images.length) % images.length;
      show(idx);
    };
    slider.querySelector('.next-btn').onclick = () => {
      idx = (idx + 1) % images.length;
      show(idx);
    };
  });
});