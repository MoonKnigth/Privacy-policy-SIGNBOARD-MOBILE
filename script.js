// อัปเดตปีและวันที่ปรับปรุงล่าสุด
document.getElementById('year').textContent = new Date().getFullYear();
// ตั้งค่าแสดงผลวัน/เดือน/ปีแบบไทย (พุทธศักราช)
(function () {
  const el = document.getElementById('last-updated');
  if (!el) return;
  // ใช้วันที่ที่กำหนดในเอกสารอยู่แล้ว เพื่อความคงที่ตามประกาศ
  el.textContent = 'อัปเดตล่าสุด: 10 กันยายน 2568';
})();

// Accordion แบบไม่ใช้ไลบรารี
const headers = document.querySelectorAll('.accordion__header');
headers.forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = btn.nextElementSibling;
    if (panel) {
      panel.hidden = expanded;
    }
  });
});
