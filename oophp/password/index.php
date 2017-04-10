<?php
$uname = isset($_POST["username"]) ? $_POST["username"] : null;
$upass = isset($_POST["password"]) ? $_POST["password"] : null;

// steg 3
$compPass = isset($_POST["compPass"]) ? $_POST["compPass"] : null;
$hashedPass = isset($_POST["hashedPass"]) ? $_POST["hashedPass"] : null;

echo "Username: " . $uname . "<br>";
echo "Password: " . $upass . "<br>";
// visa detta
echo "Save this in dabatase: " . password_hash($upass, PASSWORD_DEFAULT, array("cost" => 11));
echo "<br>------------------------------------------<br>";
echo "Is it the same password?<br>";

if (password_verify($compPass, $hashedPass)) {
    echo "<h3>It validates!</h3>";
} else {
    echo "<h3>No match...</h3>";
}
?>

<!doctype html>
<head>
    <meta charset="utf-8">
    <title>Passwords</title>
</head>
<body>
    <form action="" method="POST">
        <table>
            <legend><h4>Login</h4></legend>
            <tr><td>Name: </td><td><input type="text" name="username" value="<?=$uname?>"></td></tr>
            <tr><td>Password: </td><td><input type="password" name="password" value="<?=$upass?>"></td></tr>
            <tr><td><input type="submit"></td></tr>
        </table>
    </form>
    ------------------------------------------
    
    <form action="" method="POST">
        <table>
            <legend><h4>Validate</h4></legend>
            <tr><td>Password: </td><td><input type="text" name="compPass" value="<?=$compPass?>"></td></tr>
            <tr><td>Hash: </td><td><input type="text" name="hashedPass" value="<?=$hashedPass?>"></td></tr>
            <tr><td><input type="submit"></td></tr>
        </table>
    </form>
</body>
</html>