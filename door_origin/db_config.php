<?php

define('DBHOST', 'localhost');

define('DBUSER', 'id15393604_garrymg');

define('DBPASS', 'y26mNq[&aE2_]7FZ');

define('DBNAME', 'id15393604_account');

$db = mysqli_connect(DBHOST,DBUSER,DBPASS,DBNAME);

if (!$db){

	die("Connection Failed: ". mysqli_connect_error());

} ?>

