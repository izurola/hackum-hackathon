<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $db->query('SELECT posts.id, posts.author_id, posts.content, posts.created_at, authors.name AS author FROM posts JOIN authors ON posts.author_id = authors.id');
    $posts = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $posts[] = $row;
    }
    echo json_encode($posts);
}

?>
