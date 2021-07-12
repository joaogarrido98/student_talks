document.addEventListener('DOMContentLoaded', () => {
    fetch("https://joaogarrido98.github.io/blog/resources/posts.json")
        .then(response => response.json())
        .then(data => loadData(data));
});


function loadData(data) {
    document.querySelector("#total-posts").textContent = data.posts.length + " Blog Posts";

    let options_list = document.querySelector(".options-list");
    for (let j = 0; j < data.tags.length; j++) {
        addOptions(data.tags[j], options_list);
    }

    let ul = document.querySelector(".posts-list");
    ul.innerText = "";
    for (let i = 0; i < data.posts.length; i++) {
        createItem(data.posts[i], ul);
    }
}


function addOptions(data, ul) {
    let li = document.createElement("li");
    li.classList.add("option");
    li.innerText = data;
    ul.append(li);
}

function createItem(posts, ul) {
    let url = "https://joaogarrido98.github.io/blog/post.html?id=" + posts["post_id"];
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML =
        `<a href='${url}' class='post-item'>
        <div class='post-wrapper'>
            <div class='post-inner'>
                <img class='background-images' src='${posts["preview"]}' alt='background image'/>
                <div class='overlay'></div> 
                    <p class='post-link'>
                        <span class='post-title'>${posts['title']}</span>
                    </p>
                <div class='post-description-wrapper'>
                <div class='post-description'>${posts["short-description"]}</div>
                </div>
                <div class='utility-info'>
                <div class='left'> 
                    <ul class='tags-list'>
                        <li class='post-tag'>${posts['tags'][0]}</li>
                        <li class='post-tag'>${posts['tags'][1]}</li>
                    </ul>
                </div>
                <div class='right'>
                    <span>${posts["year"]}</span><i class='fa fa-calendar'></i>
                </div>
            </div>
        </div>
    </div>
    </a>`;
    ul.append(li);
}