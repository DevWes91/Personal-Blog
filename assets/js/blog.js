const mainElement = document.querySelector('main');

const createEl = function (type, text, parent) {
    const tag = document.createElement(type);
    tag.textContent = text;
    parent.appendChild(tag);

    return tag;
};

const ifEmpty = function () {
    createEl('h2', 'Nothing here yet', mainElement);
    const a = createEl('a', 'Write Your Thoughts', mainElement);
    a.href = 'index.html';
};

const getFromLocalStorage = function () {
    const blogPost = localStorage.getItem('posts');
    const blogData = JSON.parse(blogPost);
    return blogData || [];
  };

const listPosts = function () {
    const posts = getFromLocalStorage ();
    if (!posts.length) {
        ifEmpty();

        return;
    }

    for (let post of posts) {
        const section = createEl('section', null, mainElement);
        createEl('h2', post.title, section);
        createEl('blockquote', post.content, section);
        createEl('p', `Created by ${post.username}`, section);

        section.classList.add('card');
    }
};

listPosts()