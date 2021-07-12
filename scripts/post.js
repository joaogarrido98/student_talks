document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const post_id = urlParams.get('id');

    fetch("./resources/posts.json")
        .then(response => response.json())
        .then(data => loadData(data, post_id));
});

function loadData(data) {

}