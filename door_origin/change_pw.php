<?php 
    session_start();
    include('server.php'); 
    
    if ($_SESSION['STAT'] == 'USER') {
        $_SESSION['msg'] = "You not ADMIN";
        header('location: index.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cha_pass Page</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="header">
        <h2>Change password</h2>
    </div>

    <form action="change_pw_db.php" method="post">
        <?php include('errors.php'); ?>
        <?php if (isset($_SESSION['error'])) : ?>
            <div class="error">
                <h3>
                    <?php 
                        echo $_SESSION['error'];
                        unset($_SESSION['error']);
                    ?>
                </h3>
            </div>
        <?php endif ?>
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label for="password_1">New Password</label>
            <input type="password" name="password_1">
        </div>
        <div class="input-group">
            <label for="password_2">Confirm Password</label>
            <input type="password" name="password_2">
        </div>
        <div class="input-group">
            <button type="submit" name="cpw_user" class="btn">change</button>
        </div>
    </form>

</body>
</html>