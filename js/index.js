// الكود الأول: تغيير لون الخلفية
document.getElementById("btnColor").onclick = function() {
  document.body.style.background = "red";
};

// الكود الثاني: رسالة ترحيب
document.getElementById("hlo").onclick = function() {
  alert("مرحبًا بك في موقعي!");
};
document.getElementById("op").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "admin" && password === "1234") {
    message.textContent = "مرحبًا بك يا " + username + "!";
    message.style.color = "green";
  } else {
    message.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    message.style.color = "red";
  }
});
