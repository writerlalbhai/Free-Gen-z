document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.getElementById("signInBtn");

  signInBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const emailOrPhone = document.getElementById("emailOrPhone").value;
    const password = document.getElementById("password").value;

    if (emailOrPhone && password) {
      alert("Login successful!\nEmail/Phone: " + emailOrPhone);
    } else {
      alert("দয়া করে সব ঘর পূরণ করুন!");
    }
  });
});
