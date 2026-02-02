const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

//Người dùng
const avatarBtn = document.getElementById("avatarBtn");
const userMenu = document.getElementById("userMenu");
const profileBtn = document.getElementById("profileBtn");
const logoutBtn = document.getElementById("logoutBtn");

/* mở / đóng menu */
avatarBtn.onclick = () => {
  userMenu.style.display =
    userMenu.style.display === "block" ? "none" : "block";
};

/* đóng khi click ra ngoài */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".user-wrapper")) {
    userMenu.style.display = "none";
  }
});

/* nút thông tin */
profileBtn.onclick = () => {
  alert("Mở trang thông tin cá nhân");
  // window.location.href = "profile.html";
};

/* logout */
logoutBtn.onclick = () => {
  alert("Đăng xuất");
};
logoutBtn.onclick = () => {
    alert("Đăng xuất");
  // nếu có lưu đăng nhập
  localStorage.removeItem("user");
  sessionStorage.clear();

  // quay về trang login
  window.location.href = "login.html";
};




