<?php
// Prosta obsługa przycisków
$message = "";

if (isset($_POST['akcja'])) {
    if ($_POST['akcja'] === 'powitanie') {
        $message = "🌸 Witaj na stronie w bladym różu!";
    } elseif ($_POST['akcja'] === 'info') {
        $message = "ℹ️ To przykładowa strona PHP z instrukcjami sterującymi.";
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Bladoróżowa strona PHP</title>
    <style>
        body {
            background-color: #f7c6d9;
            font-family: Arial, sans-serif;
            color: #5a2a3c;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 40px auto;
            background-color: #fde4ec;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }

        h1, h2 {
            text-align: center;
        }

        .instructions {
            background-color: #f9d3e2;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        button {
            background-color: #e89bb5;
            border: none;
            color: white;
            padding: 12px 20px;
            margin: 5px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #d87aa0;
        }

        .message {
            margin-top: 20px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🌷 Bladoróżowa strona PHP</h1>

    <div class="instructions">
        <h2>Instrukcje sterujące</h2>
        <ul>
            <li><b>Przycisk „Powitanie”</b> – wyświetla komunikat powitalny</li>
            <li><b>Przycisk „Informacje”</b> – pokazuje informacje o stronie</li>
        </ul>
    </div>

    <form method="post">
        <button type="submit" name="akcja" value="powitanie">Powitanie</button>
        <button type="submit" name="akcja" value="info">Informacje</button>
    </form>

    <?php if ($message): ?>
        <div class="message">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>
</div>
<a class="fixed-back" href="index.html"> 🠔 Powrót</a>
</body>
</html>
