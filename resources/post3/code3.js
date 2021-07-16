document.addEventListener("DOMContentLoaded", () => {
    fetch("./resources/data.json")
        .then(response => response.json())
        .then(data => loadData(data.todo));
});

function loadData(data) {
    const body = document.body;
    let textTag = document.createElement("p");
    textTag.innerHTML = data.todo_message;
    body.append(textTag);
}