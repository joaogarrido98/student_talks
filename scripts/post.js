document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const post_id = urlParams.get('id');

    fetch("./resources/posts.json")
        .then(response => response.json())
        .then(data => findPost(data.posts, post_id));

    document.addEventListener("click", e => {
        if (e.target.matches(".content_image")) {
            enlargeImages(e.target.src)
        }
    })

    document.querySelector(".close").addEventListener("click", () => {
        let modal = document.getElementById("modalImage");
        let modalImg = document.getElementById("imageBig");
        modal.style.display = "none";
        modalImg.src = "";
        const body = document.body;
        body.style.overflow = "auto";
    });
});

function findPost(data, post_id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]["post_id"] == post_id) {
            loadData(data[i]);
            break;
        }
    }
}

function loadData(post) {
    document.querySelector(".post-title").innerHTML = post.title;
    document.querySelector(".date").innerHTML = post.date;
    let tag_holder = document.querySelector(".tags");
    post.tags.forEach(element => {
        let div = document.createElement("span");
        div.classList.add("tag");
        div.innerText = element;
        tag_holder.append(div);
    });

    let short_description = post["short-description"];
    document.querySelector(".short-description").innerHTML = short_description;

    post.content.forEach(element => {
        loadContent(element)
    });

}

function loadContent(content) {
    let title = document.createElement("h2");
    title.classList.add("content_title");
    title.innerHTML = content.content_title;
    let text = document.createElement("div");
    text.classList.add("content_text");
    text.innerHTML = content.content_text;


    let content_holder = document.querySelector(".content")
    content_holder.append(title, text);

    if (content.content_code != null) {
        content.content_code.forEach(element => {
            let pre_block = document.createElement("pre");
            pre_block.setAttribute("data-src", element);
            content_holder.append(pre_block);
        });
    }

    Prism.highlightAll();

    let img = document.createElement("img");
    if (content.content_image != null) {
        content.content_image.forEach(element => {
            img.src = element;
            img.classList.add("content_image");
            content_holder.append(img);
        });
    }

    let content_alert = content.content_alert;
    if (content_alert != null) {
        let type = content_alert.type;
        let message = content_alert.message;
        let alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.innerHTML = "<div class='alert-inner'>" + message + "</div>";
        content_holder.append(alert)
    }
}

function enlargeImages(image) {
    const body = document.body;
    body.style.overflow = "hidden";
    let modal = document.getElementById("modalImage");
    let modalImg = document.getElementById("imageBig");
    modalImg.src = image;
    modal.style.display = "flex";
}
