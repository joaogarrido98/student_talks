document.addEventListener("DOMContentLoaded", () => {
    fetch("https://joaogarrido98.github.io/blog/resources/posts.json")
        .then(response => response.json())
        .then(data => loadData(data.posts));

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    toggleSwitch.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }
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
    let url = "https://joaogarrido98.github.io/blog/post.html?id=" + posts["post_id"];
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML =
        `<a href='${url}' class='post-item'>
        <div class='post-wrapper'>
            <div class='post-inner'>
            <img src='${posts["preview"]}' alt='background image'/>
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
    </div>`;
    ul.append(li);
}