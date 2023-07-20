<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'brayokymz@gmail.com'; // Replace this with your email address
    $subject = 'New contact form submission';
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comment = $_POST['comment'];
    $message = "Email: $email\nPhone: $phone\nComment: $comment";

    // You can add additional headers or configurations here if needed.

    // Send the email
    mail($to, $subject, $message);
}
?>