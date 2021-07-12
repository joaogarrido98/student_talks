document.addEventListener('DOMContentLoaded', () => {
    fetch("./resources/posts.json")
        .then(response => response.json())
        .then(data => loadData(data));
});


function loadData(data) {
    document.querySelector("#total-posts").textContent = data.posts.length + " Blog Posts";

    let ul = document.querySelector(".posts");
    ul.innerText = "";
    for (let i = 0; i < data.posts.length; i++) {
        createItem(data.posts[i], ul);
    }
}

function createItem(posts, ul) {
    console.log(posts)
    let url = "https://joaogarrido98.github.io/blog/post.html?id=" + posts["post_id"];
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML =
        `<a class="post" href="${url}">
             <p class="title">${posts.title}</p>
             <span class="date">${posts.date}</span>
             <div id="tags_${posts["post_id"]}"></div>
        </a>`;
    ul.append(li);
    let tag_holder = document.querySelector(`#tags_${posts["post_id"]}`);
    posts.tags.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("tag");
        div.innerText = element;
        tag_holder.append(div);
    });
}