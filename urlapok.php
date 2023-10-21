<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Űrlapok</title>
  <style>
    input {
      display: block;
      margin-bottom: 10px;
    }
    input[type=checkbox]{
      display: inline-block;
    }
  </style>
</head>
<body>
<h1>Kommunikáció űrlapon keresztül</h1>
<form action="<?php echo $_SERVER["PHP_SELF"]?>" method="post">  <!-- az elküldő fájl nevét írja az action-be -->
  <fieldset>
    <legend>Regisztráció</legend>
    <label for="nev">Név</label>
    <input type="text" id="nev" name="nev" value="<?php echo (isset($_POST["nev"])?$_POST["nev"]:"")?>">  <!-- ha volt tartalma, akkor visszaírja (megtartja a tartalát) -->
    <label for="jelszo">Jelszó</label>
    <input type="password" id="jelszo" name="jelszo">
    <fieldset>
      <legend>Szakjaim</legend>
      <label for="pia">PIA</label>
      <input type="checkbox" id="pia" name="szak[]" value="PIA">  <!-- az azonos nevű elemek []-bel jelölve tömbként lesznek elküldve -->
      <label for="mia">MIA</label>
      <input type="checkbox" id="mia" name="szak[]" value="MIA">
      <label for="gia">GIA</label>
      <input type="checkbox" id="gia" name="szak[]" value="GIA">
    </fieldset>
    <label for="email">E-mail</label>
    <input type="text" id="email" name="email">
    <input type="submit" value="Küld" name="submit">
  </fieldset>
</form>
<?php
if (isset($_POST["submit"])){
  echo "<p>Helló ".htmlspecialchars($_POST["nev"])." (".htmlspecialchars($_POST["jelszo"]).")</p>\n";   // a kiírás miatt átalakítjuk a speciális karatereket, ne lehessen "trükközni"
  //echo "<p>Szakjaid: ".$_POST["pia"].", ".$_POST["mia"].", ".$_POST["gia"]."</p>\n";
  echo "<p>Szakjaid: ";
  if (isset($_POST["szak"])){   // checkbox-t csak akkor küld át, ha be volt kapcsolva
    foreach ($_POST["szak"] as $sz){    //  tömbként kapott értékeken végig lehet menni
      echo "$sz ";
    }
  } else {
    echo "-";
  }
  echo "</p>\n";

  echo "<p>Kapott e-mail:". $_POST["email"]."</p>\n";
  $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);    // kiveszi az e-mailben nem megengedett karaktereket
  echo "Filterezett email: $email</p>\n";

  if ($email = filter_var($email,FILTER_VALIDATE_EMAIL)){   // ellenőrzi, hogy e-mail formátumú-e
    echo "<p> A $email cím helyes</p>\n";
  } else {
    echo "<p> A $email cím helytelen</p>\n";
  }

}
?>
</body>
</html>