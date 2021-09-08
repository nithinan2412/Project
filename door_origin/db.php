<?php

include ('db_config.php');

$db_select = "SELECT * FROM led WHERE id = 1";

$result = $db->query($db_select);

$row = $result->fetch_assoc();

$LED = $row['status'];

echo $LED;

if (isset($_POST['btn_led_01'])){

    echo '<meta http-equiv="refresh" content="0" />';



	if ($LED=='ON'){

		$db_insert = "UPDATE led SET status='OFF' WHERE id=1";

		if (mysqli_query($db,$db_insert)){

			$add_record = "Add New Record";

		}

		else{

			echo "Error :" .$db_insert."<br>".mysqli_connect_error($db);

		}

	}else{

		$db_insert = "UPDATE led SET status='ON' WHERE id=1";

		if (mysqli_query($db,$db_insert)){

			$add_record = "Add New Record";

		}

		else{

			echo "Error :" .$db_insert."<br>".mysqli_connect_error($db);

		}

	}

}



?>

<html>

<style>

*{

	padding: 0;

	margin: 0;

	font-family: "Times New Roman", Times, serif;

}

#wrapper{

	margin-top: 50px;

	padding: 0;

}

#container{

	margin: auto;

	background: #00b0f2;

	width: 550px;

	height: 620px;

	box-shadow: 1px 1px 5px 0px #000;

}

#mid-menu{

	margin: auto;

	width: 350px;

	height: auto;

}

#mid-menu input{

	float: left;

	width: 100%;

	height: 50px;

	margin-top: 10px;

	padding-left: 10px;

	font-size: 18px;

}

#logo-menu{

	width: 100%;

	height:200px;

}

#btn-login{

	margin: auto;

	width: 350px;

	height: 50px;

	float: left;



	margin-top: 10px;

}

#btn-led {

	margin: auto;

	width: 100%;

	height: 50px;



}

#btn-led button{

	font-size: 18px;

	width: 100%;

	height: 100%;

}

</style>

<body>

	<div id="wrapper">

				<div id="container">

						<div id="mid-menu">

							<div id="logo-menu"></div>

							<form method="post" action="db.php">

								<div id="btn-login"><div id="btn-led"><button type="submit" name="btn_led_01"><?php echo $LED;?></button>

								</div>

							</div>

							</form>

						</div>

				</div>

	</div>

</body>

</html>

