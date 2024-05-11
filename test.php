include 'db.php';

// Test query
$result = $db->query('SELECT * FROM posts');

// Check if query was successful
if ($result) {
    // Loop through the results (if any)
    while ($row = $result->fetchArray()) {
        // Output the results
        echo "ID: " . $row['id'] . ", Content: " . $row['content'] . "<br>";
    }
} else {
    // If the query failed, show an error message
    echo "Error executing query: " . $db->lastErrorMsg();
}

// Close the database connection
$db->close();
