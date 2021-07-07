document.addEventListener("DOMContentLoaded", () => {
    fetch("https://joaogarrido98.github.io/blog/resources/posts.json")
        .then(response => response.json())
        .then(data => loadData(data.posts));
});

function loadData(posts) {
    let totalPosts = posts.length;
    if (totalPosts >= 10) {
        totalPosts = 9;
    }
    for (let i = 0; i < totalPosts; i++) {
        console.log(posts[i])
    }
}