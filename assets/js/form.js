const formElement = document.querySelector('form');

const formPublish = (event) => {
  event.preventDefault();
}

const userName = document.querySelector('#username').value.trim();
const postTitle = document.querySelector('#title').value.trim();
const postContent = document.querySelector('#content').value.trim();

if (!userName || !postTitle || !postContent) {
  const errorEl = document.querySelector('#error');
  errorEl.textContent = 'Write Your Thoughts.';

  setTimeout(() => {
    errorEl.textContent = '';
  }, 5000);

  const userName = document.querySelector('#username').value.trim();
}

const formData = {
  username: userName,
  title: postTitle,
  content: postContent,
}

const saveToLocalStorage = (data) => {
  let userPosts = [];
  try {
    const storedPosts = getFromLocalStorage();
    if (storedPosts) {
      userPosts = storedPosts;
    }
  } catch (error) {
    
  }
  userPosts.push(data);
  const blogData = JSON.stringify(userPosts);
  localStorage.setItem('posts', blogData);
}

const changePage = function () {
  location.href = 'blog.html';
}

formElement.addEventListener('submit', formPublish);