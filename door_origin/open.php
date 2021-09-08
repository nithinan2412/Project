<?php 
    session_start();
    include('server.php');
    $errors = array();


    if (isset($_POST['ON_DOOR'])) {

        $note = mysqli_real_escape_string($conn, $_POST['note']);
        $user = mysqli_real_escape_string($conn, $_SESSION['username']);
        $time = date("Y-m-d h:i:sa");
        

        if (count($errors) == 0) {
            $sql = "INSERT INTO opens (username, note) VALUES ('$user', '$note')";
            mysqli_query($conn, $sql);
            $opdoor = "UPDATE statdoor SET status = 'ON' WHERE id = 1";
            mysqli_query($conn, $opdoor);
            sleep(10);
            $closedoor = "UPDATE statdoor SET status = 'OFF' WHERE id = 1";
            mysqli_query($conn, $closedoor);
                header("location: index_admin.php");
            
        }
            

        


            
    }

?>