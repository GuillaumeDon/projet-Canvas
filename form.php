<?php
$errors = [];
if (!empty($_POST)) {


    $emailDesigner = $_POST['emailDesigner'];
    $emailRecipient = $_POST['emailRecipient'];
    $message = $_POST['message'];
    $drawing = $_POST['canvas'];
    $copy = $_POST['copy'];
    $image = $_POST['image'];
    var_dump($emailDesigner);
    var_dump($image);


    if (!$emailDesigner || (!filter_var($emailDesigner, FILTER_VALIDATE_EMAIL))) {
        $errors['emailDesigner'] = 'Le mail est obligatoire';
        var_dump($emailDesigner);



    }

    if (!$emailRecipient || (!filter_var($emailRecipient, FILTER_VALIDATE_EMAIL))) {
        $errors['emailRecipient'] = 'Le mail est obligatoire';

    }
    if(isset($_POST['submit'])){

        if(!empty($_POST['copy'])) {

            foreach($_POST['copy'] as $value){
                echo "value : ".$value.'<br/>';
        }

    }

        $file = "images/file.jpeg";
        /*$uri = substr($image,strpos($image, ",") + 1);


        file_put_contents($file, base64_decode($uri));*/

        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $data = base64_decode($image);
        file_put_contents($file, $data);

}}


include 'index.phtml';