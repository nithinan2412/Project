<?php 
    session_start();
    include('server.php');
    
    $errors = array();

    if (isset($_POST['cpw_user'])) {
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password_1 = mysqli_real_escape_string($conn, $_POST['password_1']);
        $password_2 = mysqli_real_escape_string($conn, $_POST['password_2']);

        if (empty($username)) {
            array_push($errors, "Username is required");
            $_SESSION['error'] = "Username is required";
        }
        if (empty($password_1)) {
            array_push($errors, "Password is required");
            $_SESSION['error'] = "Password is required";
        }
        if ($password_1 != $password_2) {
            array_push($errors, "The two passwords do not match");
            $_SESSION['error'] = "The two passwords do not match";
        }

        $user_check_query = "SELECT * FROM user WHERE username = '$username'  LIMIT 1";
        $query = mysqli_query($conn, $user_check_query);


        if ($query) { // if user exists
            if ($result['username'] !== $username) {
                array_push($errors, "Username do not match");
            }
        }

        if (count($errors) == 0) {
            $password = md5($password_1);

            $sql = "UPDATE users SET password = '$password'WHERE username = '$username';";
            mysqli_query($conn, $sql);

            $_SESSION['username'] = $username;
            $_SESSION['success'] = "Change pass success";
            header('location: index_admin.php');
        } else {
            header("location: change_pw.php");
        }
    }
