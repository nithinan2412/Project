<?php 

    $servername = "localhost";
    $username = "id15393604_garrymg";
    $password = "y26mNq[&aE2_]7FZ";
    $dbname = "id15393604_account";

    // Create Connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed" . mysqli_connect_error());
    } 

?>