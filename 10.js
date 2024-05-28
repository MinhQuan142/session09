let a = 6;
let result = ++a + a + a++ + ++a + a;

/*
**Giải thích:**

* **++a (Tiền tố):**
    - Tăng giá trị của `a` lên 1 đơn vị trước.
    - Trả về giá trị mới của `a` sau khi tăng.

* **a++ (Hậu tố):**
    - Trả về giá trị hiện tại của `a`.
    - Sau đó tăng giá trị của `a` lên 1 đơn vị.

**Tính toán từng bước:**

1. ++a: a tăng lên 7, giá trị 7 được sử dụng trong phép tính.
2. a: Giá trị hiện tại của a là 7, được sử dụng trong phép tính.
3. a++: Giá trị hiện tại của a là 7, được sử dụng trong phép tính. Sau đó, a tăng lên 8.
4. ++a: a tăng lên 9, giá trị 9 được sử dụng trong phép tính.
5. a: Giá trị hiện tại của a là 9, được sử dụng trong phép tính.

**Kết quả:**

* result = 7 + 7 + 7 + 9 + 9 = 39
* a = 9 (sau khi thực hiện tất cả các phép tính)
*/

console.log("Giá trị của result:", result); // 39
console.log("Giá trị của a:", a); // 9
