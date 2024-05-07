let btn = document.querySelector(".knopkaprofile");
if (localStorage.getItem("isAuth") == "true") {
  btn.textContent = "Профиль";
  console.log(localStorage.getItem("isAuth"));
}
btn.onclick = function () {
  const isAuth = localStorage.getItem("isAuth");
  console.log(isAuth);
  if (isAuth == "false") {
    console.log("ВЫ НЕ ЗАРЕГАНЫ");
    window.location.href = "/registration.html";
  } else {
    window.location.href = window.location.origin + "/profile.html";
  }
  //   if (isAuth == false) {
  //     window.location.href = "/registration.html";
  //     console.log("wdwdwq");
  //   } else {
  //     console.log("Срабботал else");
  // console.log(window.location.origin+"/profile.html");
  // window.location.href =window.location.origin+"/profile.html"
  //   }
};
