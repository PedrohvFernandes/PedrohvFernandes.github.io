<?php
if(isset($_POST['email']) && !empty($_POST['email'])){


$nome = addcslashes($_POST['nome']);
$email=addcslashes($_POST['email']);
$mensagem=addcslashes($_POST['descrition']);
$file=addcslashes($_POST['arquivo']);

$to = "pedrohv20fernandes@gmail.com"
$subject = "vagas para mim do meu portfolio"
$body = "Nome: ".$nome."\r\n".
        "Email: ".$email."\r\n".
        "Mensagem: ".$mensagem."\r\n".
        "File: ".$file."\r\n";
$header ="From: pedrohv20fernandes@gmail.com"."\r\n"."Reply-To:".$email."\r\n".
"X=Mailer:PHP/".phpversion();


if(mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso!");
}else{
    echo("O Email não pode ser enviado");
}


}
?>