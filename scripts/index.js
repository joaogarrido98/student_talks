document.addEventListener("DOMContentLoaded", () => {
    fetch("https://joaogarrido98.github.io/blog/resources/posts.json")
        .then(response => response.json())
        .then(data => loadData(data.posts));
});

function loadData(posts) {
    let totalPosts = posts.length;
    if (totalPosts >= 10) {
        totalPosts = 10;
    }
    let ul = document.querySelector(".posts-list");
    for (let i = 0; i < totalPosts; i++) {
        createItem(posts[i], ul);
    }
}


function createItem(posts, ul) {
    let url = "https://joaogarrido98.github.io/post?id=" + posts["post_id"];
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = `<div class='post-item'><div class='post-inner'><a href='${url}' class='post-link'><span class='post-title'>${posts['title']}</span></a><p class='posts-description'>${posts["short-description"]}</p></div></div>`;
    ul.append(li);
}