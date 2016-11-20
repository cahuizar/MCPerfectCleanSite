<?php

header('Content-type: application/json');

$errors = '';
if(empty($errors))
{
	$from_name = $_POST['FName'] . ' ' . $_POST['LName'];
	$from_email = $_POST['Email'];
  $from_phone = $_POST['PNumber'];
  $from_add1 = $_POST['Addr1'];
  $from_add2 = $_POST['Addr2'];
  $from_city = $_POST['City'];
  $from_zip = $_POST['Zip'];
	$message = $_POST['Message'];

	$to_email = 'contact@mcperfectclean.com';

	$contact = "<p><strong>Name:</strong> $from_name</p>
				<p><strong>Email:</strong> $from_email</p>";

	$content = "";

	// from smaller form
	if(empty($from_add1)) {
		$content = "<p>$message</p>";
	}
	else {
		$content =
		"
			<p><strong>Phone Number:</strong> $from_phone</p>
			<p><strong>Address:</strong>$from_add1</p>
			<p>$from_add2</p>
			<p>$from_city IN, $from_zip</p>
			<p><strong>Message:</strong> $message</p>

		";
	}

	$email_subject = "Estimado necesitado por $from_name";
	$email_subject_cc = "Estimado necesitado por $from_name";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: donotrespond@mcperfectclean.com\n";
	$headers .= "Reply-To: $from_email";

	mail($to_email,$email_subject,$email_body,$headers);


	$response_array['status'] = 'success';
	echo json_encode($response_array);
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
}
?>
