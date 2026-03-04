<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<title>Różowy Kalkulator</title>

<style>
body {
    background: linear-gradient(135deg, #ff9ecf, #ffcce6);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Arial', sans-serif;
}

.kalkulator {
    background: #ffe6f2;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(255, 105, 180, 0.4);
    width: 300px;
}

#wynik {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 12px;
    margin-bottom: 15px;
    text-align: right;
    font-size: 22px;
    padding-right: 10px;
    background: #fff0f6;
    color: #d63384;
}

button {
    width: 22%;
    height: 50px;
    margin: 1%;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    background: #ff66b2;
    color: white;
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    background: #ff3385;
    transform: scale(1.05);
}

.operator {
    background: #ff1493;
}

.operator:hover {
    background: #e60073;
}

.equal {
    background: #ff85c1;
}

.equal:hover {
    background: #ff4da6;
}

.clear {
    background: #ffb3d9;
    color: #a6005c;
}

.clear:hover {
    background: #ff80bf;
}
</style>
</head>
<body>

<div class="kalkulator">
    <input type="text" id="wynik" disabled>

    <div>
        <button onclick="dodaj('7')">7</button>
        <button onclick="dodaj('8')">8</button>
        <button onclick="dodaj('9')">9</button>
        <button class="operator" onclick="dodaj('/')">÷</button>
    </div>
    <div>
        <button onclick="dodaj('4')">4</button>
        <button onclick="dodaj('5')">5</button>
        <button onclick="dodaj('6')">6</button>
        <button class="operator" onclick="dodaj('*')">×</button>
    </div>
    <div>
        <button onclick="dodaj('1')">1</button>
        <button onclick="dodaj('2')">2</button>
        <button onclick="dodaj('3')">3</button>
        <button class="operator" onclick="dodaj('-')">−</button>
    </div>
    <div>
        <button onclick="dodaj('0')">0</button>
        <button class="clear" onclick="czysc()">C</button>
        <button class="equal" onclick="oblicz()">=</button>
        <button class="operator" onclick="dodaj('+')">+</button>
    </div>
</div>

<script>
function dodaj(wartosc) {
    document.getElementById("wynik").value += wartosc;
}

function czysc() {
    document.getElementById("wynik").value = "";
}

function oblicz() {
    try {
        document.getElementById("wynik").value =
            eval(document.getElementById("wynik").value);
    } catch {
        alert("Błąd w działaniu!");
    }
}
</script>
<a href="JS.html">Powrót</a>
</body>
</html>
