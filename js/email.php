<?php

    if(isset($_POST['email']) && !empty($_POST['email'])) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $titulo = $_POST['assunto'];
        $mensagem = $_POST['mensagem'];

        $to = 'claudemir@vallorx.com.br';
        $body = 'Nome: '.$nome."\n".
                'Email: '.$email."\n".
                'Assunto: '.$titulo."\n"
                'Mensagem: '.$mensagem;
    
        $header = 'From:claudemir@vallorx.com.br'."\n".
                    'Reply-To:'.$email."\n".
                    'X=Mailer:PHP/'.phpversion();


        if(mail($to,$titulo,$body,$header)) {
            // echo "<script>alert('Email enviado com sucesso!');document.location='http://www.vallorx.com.br/#contato';</script>";
             // Página que será redirecionada
            echo 'Email enviado com sucesso'
        } else {
            echo('erro');
        }
    }
?>