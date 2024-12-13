<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "yoasnevilsandy@gmail.com"; 
    $subject = "Pesan dari Blog Anda";
    
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Pesan gagal dikirim.";
    }
} else {
    echo "Metode pengiriman tidak valid.";
}
?>