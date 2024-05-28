// Lấy chiều dài và chiều rộng từ người dùng
let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));

// Kiểm tra tính hợp lệ của giá trị
if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
  console.error(
    "Vui lòng nhập đúng định dạng số dương cho chiều dài và chiều rộng."
  );
} else {
  // Tính chu vi và diện tích
  let perimeter = 2 * (length + width);
  let area = length * width;

  // Hiển thị kết quả
  console.log("Chu vi hình chữ nhật là:", perimeter);
  console.log("Diện tích hình chữ nhật là:", area);
}
