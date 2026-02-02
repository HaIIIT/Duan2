function login() {
  const email = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password').value;
  if (email == "sinhvien@st.vlute.edu.vn" && password == "sv@k49") {
    window.location.href = "homepages.html";
  } else {
    alert("Tài Khoản hoặc Mật Khẩu không đúng!");
  }
}
