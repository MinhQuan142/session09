// Lấy giá trị độ C từ người dùng
let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));

// Kiểm tra xem người dùng đã nhập đúng định dạng số hay chưa
if (isNaN(celsius)) {
  console.error("Vui lòng nhập đúng định dạng số cho nhiệt độ.");
} else {
  // Chuyển đổi sang độ F
  let fahrenheit = (celsius * 9) / 5 + 32;

  // Hiển thị kết quả
  console.log(celsius + "°C tương đương với " + fahrenheit.toFixed(2) + "°F");
}
