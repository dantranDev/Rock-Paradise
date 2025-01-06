function toggleFavorite(event) {
  event.preventDefault();

  const link = event.target;

  if (link.classList.contains("active")) {
    link.classList.remove("active");
    link.innerHTML = "❤ Thêm vào danh sách yêu thích";
  } else {
    link.classList.add("active");
    link.innerHTML = "❤ Đã thêm vào danh sách yêu thích";
  }
}
