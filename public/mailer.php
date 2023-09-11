<?php
header('Content-Type: application/json');

$recipient_email = "chfaiqnadeem@gmail.com";
$email = $_POST["email"];
$name = $_POST["name"];
$message = $_POST["message"];

$headers = "From: $email";

if (mail($recipient_email, "New message from $name", $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "There was an error sending the email."]);
}
?>
