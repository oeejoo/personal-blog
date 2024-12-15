<?php
if ($_SERVER["REQUEST_METHOD"] =-- "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    if (empty($name) || empty($email) || empty($message)) {
        echo "Harap isi semua kolom.";
        exit;
    }

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Alamat email tidak valid";
        exit;
    }

    $to = "yoasnevilsandy@gmail.com";
    $subject = "Pesan dari $name di Blog kamu";
    $body = "Nama : $nama\nEmail : $email\nPesan : $message";

    $headers = "From: no-reply@personal-blog.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!!";
        exit;
    } else {
        error_log("Gagal mengirim pesan ke $to");
        echo "Pesan kamu gagal dikirim:( Silahkan coba lagi yaa:)";
    }
} else {
    echo "Metode pengiriman tidak valid.";
}
?>