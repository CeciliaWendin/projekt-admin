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

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/password_style.css">
</head>
<body>
<div id="wrapper">

<?php
if($_SESSION['password']=="123")
{?>
</body>
</html>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <title>Admin</title>
 
  </head>
  <body>
    <h1><font style="color:black;">Admin</font></h1>
    <a class="btn btn-default" href="courses/" role="Kurser">Kurser</a>
    <a class="btn btn-default" href="work/" role="Arbete">Arbete</a>
    <a class="btn btn-default" href="projects/" role="Projekt">Projekt</a>
    <br><br>
    <form method="post" action="" id="logout_form">
    <input type="submit" name="page_logout" value="LOGOUT">
 </form>
    
  </body>
</html>
    <?php }
    else
    {
     ?>
     <form method="post" action="" id="login_form">
      <h1>LOGIN TO PROCEED</h1>
      <input type="password" name="pass" placeholder="*******">
      <input type="submit" name="submit_pass" value="DO SUBMIT">
      <p>"Password : 123"</p>
      <p><font style="color:red;"><?php echo $error;?></font></p>
     </form>
     <?php	
    }?>
