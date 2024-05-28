// Lấy điểm các môn từ người dùng
let physics = parseFloat(prompt("Nhập điểm Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm Hóa học:"));
let biology = parseFloat(prompt("Nhập điểm Sinh học:"));

// Kiểm tra xem người dùng đã nhập đúng định dạng số hay chưa
if (isNaN(physics) || isNaN(chemistry) || isNaN(biology)) {
  console.error("Vui lòng nhập đúng định dạng số cho các môn học.");
} else {
  // Tính tổng điểm và điểm trung bình
  let total = physics + chemistry + biology;
  let average = total / 3;

  // Hiển thị kết quả
  console.log("Tổng điểm của 3 môn là:", total);
  console.log("Điểm trung bình của 3 môn là:", average.toFixed(2)); // Làm tròn đến 2 chữ số thập phân
}
