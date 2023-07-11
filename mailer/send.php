<?php
require 'class.phpmailer.php';
require 'class.smtp.php';

// данные
$phone = $_POST['phone'];
$social = $_POST['social'];

$question_0 = $_POST['title-0'];
$answer_0 = $_POST["quiz0"];

$question_1 = $_POST['title-1'];
$answer_1all = $_POST["quiz1"];
for($a = 0; $a<count($answer_1all); $a++) {
	$answer_1 .= $answer_1all[$a].', ';
}

$question_3 = $_POST['title-3'];
$answer_3 = $_POST['quiz3'];

$question_4 = $_POST['title-4'];
$answer_4 = $_POST['quiz4'];

$quizFinalTitle_1 = $_POST['title-final-1'];
$answerFinal_1 = $_POST['final-1'];

$quizFinalTitle_2 = $_POST['title-final-2'];
$answerFinal_2 = $_POST['final-2'];

$quizFinalTitle_3 = $_POST['title-final-3'];
$answerFinal_3 = $_POST['final-3'];


if ($_POST['formname'] == 'callback') {
	$msg = '
	Пользователь заказал обратный звонок. 
	Телефон: ' . $phone .' 
	';
} else if ($_POST['formname'] == 'lidmagnit') {
	$msg = '
	Пользователь заполнил форму на странице Лидмагнита и хочет получить 15-85 заявок за 15 дней. 
	Телефон:  ' . $phone .' 
	';
} else if ($_POST['formname'] == 'clients') {
	$msg = '
	Пользователь хочет получить контакты клиентов. 
	Телефон:  ' . $phone .' 
	';
} else if ($_POST['formname'] == 'testdrive') {
	$msg = '
	Пользователь оставил заявку на тест-драйв. 
	Телефон:  ' . $phone .' 
	';
} else if ($_POST['formname'] == 'catalog') {
	$msg = '
	Пользователь скачал инструкцию. 
	Телефон:  ' . $phone .' 
	Способ связи:  ' . $social . ' 
	';
} else if ($_POST['formname'] == 'quiz') {
	$msg = '
	Пользователь прошёл тест: 
	1. ' . $question_0 . ' Ответ: ' . $answer_0 . ' 
	2. ' . $question_1 . ' Ответ: ' . $answer_1 . ' 
	3.  Слайд с текстом гарантий 
	4. ' . $question_3 . ' Ответ: ' . $answer_3 . ' 
	5. ' . $question_4 . ' Ответ: ' . $answer_4 . ' 
	

	Предварительный результат: 
	' . $quizFinalTitle_1 . ' : ' . $answerFinal_1 . ' 
	' . $quizFinalTitle_2 . ' : ' . $answerFinal_2 . ' 
	' . $quizFinalTitle_3 . ' : ' . $answerFinal_3 . ' 


	Телефон:  ' . $phone .' 
	Способ связи:  ' . $social . ' 
	';
}

// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'example@gmail.com'; //  логин
$mail->Password = 'password'; //  пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('formsajt987@gmail.com', 'Форма с сайта'); // Ваш Email
$mail->addAddress('gmail@gmail.com'); // Email получателя

// Письмо
$mail->isHTML(true);
$mail->Subject = 'Форма с сайта '; // Заголовок письма
$mail->Body = $msg;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success"; header('Location: ../thanks.html');} 
else {$result = "error"; header('Location: ../404.html');}


// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>
