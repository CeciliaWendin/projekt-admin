<?php
session_start();

if(isset($_POST['submit_pass']) && $_POST['pass'])
{
 $pass=$_POST['pass'];
 if($pass=="123")
 {
  $_SESSION['password']=$pass;
 }
 else
 {
  $error="Incorrect Password";
 }
}

if(isset($_POST['page_logout']))
{
 unset($_SESSION['password']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <title>Projekt admin</title>
 
    <!-- bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
 
    <!-- custom CSS -->
    <link href="assets/css/style.css" rel="stylesheet" />
 
</head>
<body>
 
<!-- our app will be injected here -->
<div id="app"></div>

 
<!-- jQuery library -->
<script src="assets/js/jquery-3.5.1.min.js"></script>
 
<!-- bootstrap JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 
<!-- bootbox for confirm pop up -->
<script src="assets/js/bootbox.min.js"></script>
 
<!-- app js script -->
<script src="app.js"></script>
 
<!-- course scripts -->
<script src="files/read-project.js"></script>
<script src="files/create-project.js"></script>
<script src="files/read-one-project.js"></script>
<script src="files/update-project.js"></script>
<script src="files/delete-project.js"></script>

 
</body>
</html>