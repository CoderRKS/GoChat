function user() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "index2.html";
}
// Enter Key Press
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        user();
    }
});