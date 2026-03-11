const blogsPost = [
    {
        title: "My First Blog Post",
        content: "this is my very first blog post. Exciting!",
        author: "Jhon Doe",
        date: "2023-08-14"
    },

    {
        title: "Java script basics",
        content: "in this post. ill cover some java script basic dor beginners",
        author: "Jane Smith",
        date: "2023-08-15"
    }
];

function createBlogPostElement (post) {
    const blogPostElement = document.createElement("article");
    blogPostElement.className = "blog-post";

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `By ${post.author} on ${post.date}`;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    blogPostElement.appendChild(titleElement);
    blogPostElement.appendChild(authorElement);
    blogPostElement.appendChild(contentElement);

    return blogPostElement;
}

const blogList = document.getElementById("blog-list");

function showBlogDetails(post) {
    const detailContainer = document.getElementById("blog-detail");
    detailContainer.innerHTML = "";

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `By ${post.author} on ${post.date}`;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    detailContainer.appendChild(titleElement);
    detailContainer.appendChild(authorElement);
    detailContainer.appendChild(contentElement)
}

blogsPost.forEach(post => {
    const blogPostElement = createBlogPostElement(post);
    blogPostElement.addEventListener("click", () => {
        showBlogDetails(post);
    });
    blogList.appendChild(blogPostElement);
});