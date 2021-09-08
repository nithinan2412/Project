<?php 
    session_start();

    if (!isset($_SESSION['username'])) {
        $_SESSION['msg'] = "You must log in first";
        header('location: login.php');
    }

    if (isset($_GET['logout'])) {
        session_destroy();
        unset($_SESSION['username']);
        header('location: login.php');
    }

    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="homeheader">
        <h2>DOOR</h2>
    </div>

    <div class="homecontent">
        <!--  notification message -->
        <?php if (isset($_SESSION['success'])) : ?>
            <div class="success">
                <h3>
                    <?php 
                        echo $_SESSION['success'];
                        unset($_SESSION['success']);
                    ?>
                </h3>
            </div>
        <?php endif ?>

    <form action="open.php" method="post">
        <div class="input-group">
            <button type="submit" name="ON_DOOR" class="btn">OPEN</button>
        </div>
        <div class="note">
            <h3 align = 'left'>Note :</h3>
            <textarea name="note" rows=5 cols=50 ></textarea><br>
        </div>
    </form>

        <?php
            echo "" . date("Y/m/d")."<br>";
            echo "This time is " . date("h:i:sa")."<br>"; 
            
        ?>

        <!-- logged in user information -->
        <?php if (isset($_SESSION['username'])) : ?>
            <p>Welcome <strong><?php echo $_SESSION['username']; ?></strong></p>
            <p><a href="index.php?logout='1'" style="color: red;">Logout</a></p>
        <?php endif ?>
    </div>
    

    

</body>
</html>