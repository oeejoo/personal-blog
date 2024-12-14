<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"]) && 
        !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])) {

        $name = htmlspecialchars($_POST["name"]);
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars($_POST["message"]);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Alamat email tidak valid.";
            exit;
        }

        $to = "yoasnevilsandy@gmail.com";
        $subject = "Pesan dari Blog Anda";
        $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo "Pesan berhasil dikirim!";
        } else {
            echo "Pesan gagal dikirim.";
        }
    } else {
        echo "Harap isi semua kolom.";
    }
} else {
    echo "Metode pengiriman tidak valid.";
}
?>
