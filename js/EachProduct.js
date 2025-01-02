function toggleFavorite(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    const link = event.target;

    // Kiểm tra nếu liên kết đã có class "active", nghĩa là sản phẩm đã được yêu thích
    if (link.classList.contains("active")) {
        link.classList.remove("active");
        link.innerHTML = "❤ Thêm vào danh sách yêu thích"; // Cập nhật văn bản
    } else {
        link.classList.add("active");
        link.innerHTML = "❤ Đã thêm vào danh sách yêu thích"; // Cập nhật văn bản
    }
}