let isAuth =false
localStorage.setItem("isAuth", false)
console.log("Загрузка Данных")
let btn = document.querySelector(".knopkaprofile")
if (localStorage.key(0)) {
    btn.textContent = "Профиль";
}else {
    localStorage.setItem("isAuth", false);
}
console.log(btn);
btn.onclick = function(){
    if (localStorage.getItem("isAuth") == false){
window.location.href = "/registration.html"
    }else {
window.location.href ="/profile.html"
    }
      
    
}