<!-- Form Submission -->

<?php
  if (isset($_POST['email'])) { 
    
    //this checks to see if user submitted email before taking all the info below

    // Email Information
    $admin_email = "kevin@edgeledger.net";
    $name = $_POST ['name'];
    $email = $_POST ['email'];
    $phone = $_POST ['phone'];
    $message = $_POST ['message']

    // Send email notification

    mail($admin_email, "New Form Submission", $message . '-' . $phone, "From:" . $email);


    //Link user to Thank You message after successful submission
    
    header('Location: http://edgeledger.net/success.html')
  }