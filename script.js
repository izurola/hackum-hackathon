document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let keyword = document.getElementById('keyword').value;
});
function displayResults(data) {
  let resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';
  data.forEach(result => {
    let resultElement = document.createElement('div');
    resultElement.textContent = result.title;
    resultsDiv.appendChild(resultElement);
  });
}
document.getElementById('searchButton').addEventListener('click', function () {
  let searchTerm = document.getElementById('searchInput').value;
  console.log('Searching for:', searchTerm);
});
function viewPost(postId) {
  window.location.href = `post.html?id=${postId}`;
}
function displayPost(postId) {
  const postContent = document.getElementById("post-content");
  fetch(`posts/${postId}.html`)
    .then(response => response.text())
    .then(html => {
      postContent.innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  if (postId) {
    displayPost(postId);
  }

  const downloadButton = document.getElementById("download-button");
  downloadButton.addEventListener("click", function () {
    // Add your download logic here
    alert("Download functionality will be implemented here.");
  });

  // Star rating functionality
  const starRating = document.getElementById("star-rating");
  starRating.addEventListener("change", function () {
    const rating = document.querySelector('input[name="rating"]:checked').value;
    // Add your star rating logic here
    alert(`You rated this post ${rating} stars.`);
  });

  // Contact author button functionality
  const contactAuthorButton = document.getElementById("contact-author-button");
  contactAuthorButton.addEventListener("click", function () {
    // Add your contact author logic here
    alert("Contact author functionality will be implemented here.");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("api.php")
    .then(response => response.json())
    .then(posts => {
      const postContent = document.getElementById("post-content");
      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <div class="post-header">
            <img src="profile.jpg" alt="Profile Picture" class="profile-picture">
            <div class="post-info">
              <h2>${post.author}</h2>
              <span class="post-time">${post.created_at}</span>
            </div>
          </div>
          <div class="post-content">
            <p>${post.content}</p>
          </div>
          <div class="post-footer">
            <div class="actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        `;
        postContent.appendChild(postElement);
      });
    });
});


