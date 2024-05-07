let btn = document.getElementById("reg");
btn.onclick = function () {
  console.log(btn);
  event.preventDefault();
  localStorage.setItem("isAuth", true);
  window.location.href = window.location.origin + "/index.html";
};
