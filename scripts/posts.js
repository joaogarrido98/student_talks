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
    let url = "https://joaogarrido98.github.io/student_talks/post.html?id=" + posts["post_id"];
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML =
        `<div class="post">
            <a href="${url}"> <h2 class="title">${posts.title}</h2></a>
             <div class="sub-info">
             <span class="date">${posts.date}</span>
             <div id="tags_${posts["post_id"]}"></div>
             </div>
             <div class="info">${posts["short-description"]}</div>
        </div>`;
    ul.append(li);
    let tag_holder = document.querySelector(`#tags_${posts["post_id"]}`);
    posts.tags.forEach(element => {
        let div = document.createElement("span");
        div.classList.add("tag");
        div.innerText = element;
        tag_holder.append(div);
    });
}
