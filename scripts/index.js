document.addEventListener("DOMContentLoaded", () => {
    const recentPosts;
    fetch("https://joaogarrido98.github.io/blog/resources/posts.json")
        .then(response => response.json())
        .then(data => console.log(data));

});