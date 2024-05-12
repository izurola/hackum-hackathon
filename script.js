// function viewPost(postId) {
//   window.location.href = `post.html?id=${postId}`;
// }
function viewPost(postId, authorName, postContent, postDate) {
  // Assuming postId is used to fetch post data from the API
  fetch(`api.php?postId=${postId}`)
      .then(response => response.json())
      .then(post => {
        // var authorElement = document.getElementById("post-author-name");
        // authorElement.innerText = "authorName";
    
        // var dateElement = document.getElementById("post-date");
        // dateElement.textContent = postDate; 
    
        // var contentElement = document.getElementById("post-content");
        // contentElement.innerHTML = postContent;
      });
}

function displayPost(postId) {
  const postContent = document.getElementById("post-content");
  fetch(`${postId}.html`)
    .then(response => response.text())
    .then(html => {
      postContent.innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching post:', error);
    });
}


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  if (postId) {
    displayPost(postId);
  }

  document.addEventListener("DOMContentLoaded", function () {
    let downloadButton = document.getElementById("download-button");
    if (downloadButton) {
      downloadButton.addEventListener("click", function () {
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    let starRating = document.getElementById("star-rating");
    if (starRating) {
      starRating.addEventListener("change", function () {
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const contactAuthorButton = document.getElementById("contact-author-button");
    contactAuthorButton.addEventListener("click", function () {
      alert("Contact author functionality will be implemented here.");
    });
  });

});
document.addEventListener("DOMContentLoaded", function () {
  fetch("api.php")
    .then(response => response.json())
    .then(posts => {
      const feed = document.querySelector(".feed");
      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.addEventListener("click", function () {
          viewPost(post.id, post.author_username, post.content, post.postDate);
        });
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <span>Author: ${post.author_username}</span>
        `;
        feed.appendChild(postElement);
      });
    });
});



