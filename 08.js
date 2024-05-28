// Khai báo hằng số PI
const PI = 3.14159; // Giá trị xấp xỉ của số Pi

// Lấy bán kính từ người dùng
let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));

// Kiểm tra tính hợp lệ của giá trị
if (isNaN(radius) || radius <= 0) {
  console.error("Vui lòng nhập đúng định dạng số dương cho bán kính.");
} else {
  // Tính chu vi và diện tích
  let circumference = 2 * PI * radius;
  let area = PI * radius * radius;

  // Hiển thị kết quả
  console.log("Chu vi hình tròn là:", circumference.toFixed(2));
  console.log("Diện tích hình tròn là:", area.toFixed(2));
}
