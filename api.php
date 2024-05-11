<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "hackathon";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM posts";
$result = $conn->query($sql);
$posts = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
}
$conn->close();
echo json_encode($posts);
?>
