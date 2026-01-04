// Write your code here!
document.addEventListener('DOMContentLoaded', () => {
  const postList = document.getElementById('post-list');
  
  async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      postList.innerHTML = '<li>Failed to load posts. Please try again later.</li>';
    }
  }
  
  function displayPosts(posts) {
    postList.innerHTML = '';
    
    posts.forEach(post => {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      
      h1.textContent = post.title;
      p.textContent = post.body;
      
      li.appendChild(h1);
      li.appendChild(p);
      postList.appendChild(li);
    });
  }
  
  fetchPosts();
});