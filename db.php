<?php
$db_file = 'hackathon.db';
$db = new SQLite3($db_file);

$db->exec('CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    author_id INTEGER,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)');

$db->exec('CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY,
    name TEXT,
    posts TEXT
)');

?>
