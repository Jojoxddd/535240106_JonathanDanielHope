// Ambil elemen-elemen yang dibutuhkan
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const signUpBtn = document.querySelector("#sign-up-btn");
const signInBtn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

// Toggle form (animasi sign in / sign up)
signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Validasi Email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Simulasi proses login
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signInForm.querySelector('input[type="text"]').value.trim();
  const password = signInForm.querySelector('input[type="password"]').value.trim();

  let messageBox = document.querySelector(".message-box");
  if (!messageBox) {
    messageBox = document.createElement("p");
    messageBox.classList.add("message-box");
    messageBox.style.textAlign = "center";
    messageBox.style.marginTop = "10px";
    signInForm.appendChild(messageBox);
  }

  if (!email || !password) {
    messageBox.textContent = "Email dan kata sandi harus diisi.";
    messageBox.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    messageBox.textContent = "Format email tidak valid.";
    messageBox.style.color = "red";
    return;
  }

  // Ambil data user dari localStorage
  const savedUser = JSON.parse(localStorage.getItem("user"));

 
  if (
    (savedUser && savedUser.email === email && savedUser.password === password) ||
    (email === "user@example.com" && password === "12345678")
  ) {
    messageBox.textContent = "Login berhasil!";
    messageBox.style.color = "green";
    window.location.href = "main.html";
  } else {
    messageBox.textContent = "Email atau kata sandi salah.";
    messageBox.style.color = "red";
  }
});

// Simulasi proses sign up
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = signUpForm.querySelectorAll('input');
  const fullname = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const password = inputs[2].value.trim();
  const confirmPassword = inputs[3].value.trim();
  const phone = inputs[4].value.trim();

  let messageBox = document.querySelector(".signup-message");
  if (!messageBox) {
    messageBox = document.createElement("p");
    messageBox.classList.add("signup-message");
    messageBox.style.textAlign = "center";
    messageBox.style.marginTop = "10px";
    signUpForm.appendChild(messageBox);
  }

  
  if (!fullname || fullname.length < 3 || fullname.length > 32 || /\d/.test(fullname)) {
    messageBox.textContent = "Nama lengkap 3-32 karakter & tidak boleh mengandung angka.";
    messageBox.style.color = "red";
    return;
  }

 
  if (!validateEmail(email)) {
    messageBox.textContent = "Format email tidak valid.";
    messageBox.style.color = "red";
    return;
  }

  if (password.length < 8) {
    messageBox.textContent = "Password minimal 8 karakter.";
    messageBox.style.color = "red";
    return;
  }

  
  if (password !== confirmPassword) {
    messageBox.textContent = "Konfirmasi password tidak cocok.";
    messageBox.style.color = "red";
    return;
  }

  
  if (!/^08\d{8,14}$/.test(phone)) {
    messageBox.textContent = "Nomor HP harus diawali 08, 10-16 digit angka.";
    messageBox.style.color = "red";
    return;
  }

 
  localStorage.setItem(
    "user",
    JSON.stringify({ fullname, email, password, phone })
  );

  messageBox.textContent = "Akun berhasil dibuat!";
  messageBox.style.color = "green";
});
