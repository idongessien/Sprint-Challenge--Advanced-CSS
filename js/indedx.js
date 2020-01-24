var form = document.getElementById("form");
var button = document.getElementById("form");

button.addEventListener("click", closeSub);
li.addEventListener("click", showSub);

function showSub() { 
    form.style.display = "block";
}

function closeSub() {
form.style.display = "none";
}