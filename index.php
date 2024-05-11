<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RP NUM</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>

  <?php
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $conn = new mysqli($servername, $username, $password);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  ?>
</head>

<body>
  <div id="topnav-placeholder"></div>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const topnavPlaceholder = document.getElementById("topnav-placeholder");
      fetch("topnav.html")
        .then(response => response.text())
        .then(html => {
          topnavPlaceholder.innerHTML = html;
        });
    });
  </script>
  <div class="feed">

  </div>
  <main>

  </main>

</body>

</html>