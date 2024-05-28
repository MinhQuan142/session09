let a = 5; // Biến a có kiểu dữ liệu là số nguyên (number)
let b = "5"; // Biến b có kiểu dữ liệu là chuỗi (string)

// So sánh bằng (==): So sánh giá trị, tự động chuyển đổi kiểu dữ liệu nếu cần
console.log(a == b); // true (5 == "5" sau khi chuyển đổi kiểu)

// So sánh bằng và cùng kiểu (===): So sánh giá trị và kiểu dữ liệu
console.log(a === b); // false (5 không cùng kiểu với "5")

// So sánh khác (!=): So sánh giá trị, tự động chuyển đổi kiểu dữ liệu nếu cần
console.log(a != b); // false (5 != "5" sau khi chuyển đổi kiểu)

// So sánh khác hoặc khác kiểu (!==): So sánh giá trị hoặc kiểu dữ liệu
console.log(a !== b); // true (5 khác kiểu với "5")
