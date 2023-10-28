<?php
  if(isset( $_POST['name']))
  $name = $_POST['name'];

  if(isset( $_POST['email']))
  $email = $_POST['email'];

  if(isset( $_POST['subject']))
  $subject = $_POST['subject'];

  if(isset( $_POST['message']))
  $message = $_POST['message'];


  $content="From: $name \n Email: $email \n Message: $message";

  $to = "info@maxmilliam-marchesini.com";
  
  $mailheader = "From: $email \r\n";
  mail($to, $subject, $content) or die("Error!");
  echo "Email sent!";
?>