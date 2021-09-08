<?php

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");







//Creating Array for JSON response

$response = array();



$servername = "localhost";

$username = "id15393604_garrymg";

$password = "y26mNq[&aE2_]7FZ";

$dbname = "id15393604_account";



// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

}







 // Fire SQL query to get all data from statdoor

 if (isset($_GET["id"])) {

     $id = $_GET['id'];



      // Fire SQL query to get weather data by id

     $result = $conn->query("SELECT * FROM statdoor WHERE id = '$id'");



 	//If returned result is not empty

     if (!empty($result)) {



         // Check for succesfull execution of query and no results found

         if (mysqli_num_rows($result) > 0) {



 			// Storing the returned array in response

             $result = mysqli_fetch_array($result);



 			// temperoary user array

             $statdoor = array();

             $statdoor["id"] = $result["id"];

             $statdoor["status"] = $result["status"];





             // Show JSON response

             echo json_encode($statdoor);

         } else {

             // If no data is found

             $response["success"] = 0;

             $response["message"] = "No data on statdoor found";



             // Show JSON response

             echo json_encode($response);

         }

     } else {

         // If no data is found

         $response["success"] = 0;

         $response["message"] = "No data on statdoor found";



         // Show JSON response

         echo json_encode($response);

     }

 } else {

     // If required parameter is missing

     $response["success"] = 0;

     $response["message"] = "Parameter(s) are missing. Please check the request";



     // echoing JSON response

     echo json_encode($response);

 }

 ?>

