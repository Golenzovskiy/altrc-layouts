<?php
if ($_POST){
	$mess = ["success" => "YES", "amount" => 3];
} else {
	$mess = ["success" => "NO"];
}
sleep(rand(1, 3));
echo json_encode($mess);