// function viewPost(postId) {
//   window.location.href = `post.html?id=${postId}`;
// }
function viewPost(postId, authorName, postContent, postDate) {
  // Assuming postId is used to fetch post data from the API
    // fetch(`api.php?postId=${postId}`)
    return;
    fetch("api.php")
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        if (post.id === postId) {
          // const authorElement = document.getElementById("post-author-name");
          // console.log(authorElement.textContent);
          // // authorElement.textContent = post.authorName;
          // const dateElement = document.getElementById("post-date");
          // dateElement.textContent = post.postDate;
          // const contentElement = document.getElementById("post-content");
          // contentElement.innerHTML = post.content;
        }
      })
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
        let profilePictureSrc = "profile.png";
        if (post.author_username === "Munguntulga Purevsuren") {
          profilePictureSrc = "profile_1.png";
        }
        else if (post.author_username === "Biligt Gursed") {
          profilePictureSrc = "profile_3.png";
        }
        else {
          profilePictureSrc = "profil_2.png";
        }
        postElement.innerHTML = `
        <div class="author-info">
        <img src=${profilePictureSrc} alt="Profile Picture" class="profile-picture2">
        <span><a href="profile.html" style="color: blue; text-decoration: none;">${post.author_username}</a></span>
        </div>
          <h3>${post.title}</h3>
          <p>${post.content.length > 500 ? post.content.substring(0, 500) + "... <a href='#' onclick='extendContent(event)'>Read more</a>" : post.content}</p>
          <div class="post-footer">
      <div class="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
        <a class="toDownload" href="download.pdf" download="downloaded_file_name.pdf">Download</a>
      </div>
    </div>
        `;
        feed.appendChild(postElement);
      });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("api.php")
    .then(response => response.json())
    .then(posts => {
      const feed = document.querySelector(".feed_profile");
      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.addEventListener("click", function () {
          viewPost(post.id, post.author_username, post.content, post.postDate);
        });
        let profilePictureSrc = "profile.png";
        if (post.author_username === "Munguntulga Purevsuren") {
          profilePictureSrc = "profile_1.png";
          postElement.innerHTML = `
        <div class="author-info">
        <img src=${profilePictureSrc} alt="Profile Picture" class="profile-picture2">
        <span><a href="profile.html" style="color: blue; text-decoration: none;">${post.author_username}</a></span>
        </div>
          <h3>${post.title}</h3>
          <p>${post.content.length > 500 ? post.content.substring(0, 500) + "... <a href='#' onclick='extendContent(event)'>Read more</a>" : post.content}</p>
          <div class="post-footer">
      <div class="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
        <a class="toDownload" href="download.pdf" download="downloaded_file_name.pdf">Download</a>
      </div>
    </div>
        `;
          feed.appendChild(postElement);
        }

      });
    });
});
function addPage() {
  window.location.href = "addPage.html";
}
function downloadFile(url) {
  // Create a temporary anchor element
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = url.split('/').pop(); // Set the download attribute to the file name
  document.body.appendChild(a);
  a.click(); // Simulate a click to trigger the download
  document.body.removeChild(a); // Clean up the anchor element
}
function redirectToNewPage()
{
  window.location.href = "addPage.html";
}