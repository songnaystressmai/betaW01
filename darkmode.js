// Dark mode toggle
document.addEventListener("DOMContentLoaded", function(){
  const btn = document.getElementById('dark-mode-toggle');
  if(btn) {
    btn.onclick = function() {
      document.body.classList.toggle('darkmode');
      btn.classList.toggle('active');
      // Lưu trạng thái
      if(document.body.classList.contains('darkmode')) {
        localStorage.setItem('darkmode','1');
        btn.querySelector('.darkmode-icon').textContent = "☀️";
      } else {
        localStorage.removeItem('darkmode');
        btn.querySelector('.darkmode-icon').textContent = "🌙";
      }
    }
    // Tự động bật darkmode nếu đã lưu
    if(localStorage.getItem('darkmode')) {
      document.body.classList.add('darkmode');
      btn.classList.add('active');
      btn.querySelector('.darkmode-icon').textContent = "☀️";
    }
  }
});