let input = document.querySelector("input");
let button = document.querySelector("button");
let ol = document.querySelector("ol");

button.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button class = "delete"><i class="fa-solid fa-delete-left"></i></button>`;
    ol.appendChild(li);
    input.value = "";
    document.querySelectorAll("li button").forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove();
        });
});
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let li = document.createElement("li");
        li.innerHTML = `${input.value} <button class = "delete"><i class="fa-solid fa-delete-left"></i></button>`;
        ol.appendChild(li);
        input.value = "";
        document.querySelectorAll("li button").forEach(function(btn) {
            btn.addEventListener("click", function() {
                btn.parentElement.remove();
            });
    });
}
});
});
