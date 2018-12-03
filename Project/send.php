<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];

// Настройки
$mail = new PHPMailer;

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'sell.idea.2018'; // Ваш логин в почте. Именно логин, без @gmail.com
$mail->Password = ''; // Ваш пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('sell.idea.2018@gmail.com'); // Ваш Email
$mail->addAddress('sell.idea.2018@gmail.com'); // Email получателя
$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// // Прикрепление файлов
//   for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
//         $filename = $_FILES['userfile']['name'][$ct];
//         if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//         } else {
//             $msg .= 'Failed to move file to ' . $uploadfile;
//         }
//     }

// Письмо
$mail->isHTML(true);
$mail->Subject = "Заголовок"; // Заголовок письма
$mail->Body    = "Имя $name . Телефон $number . Почта $email"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
