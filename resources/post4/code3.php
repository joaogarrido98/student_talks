<?php
$name = $_GET['name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$messages = $_GET['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'Content-Transfer-Encoding: 8bit' . "\r\n";
$headers .= 'From: ' . $name. "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();

$to = "youremail@email.com";
$subject = "Contact Client: " . $name;

mail($to, $subject, $messages, $headers);
?>
