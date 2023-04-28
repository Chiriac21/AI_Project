<HTML>
<body>

<?php

// Taking all 5 values from the form data(input)
if(isset($_POST['submit']))
{
    $nume = $_POST['Nume'];
    $prenume = $_POST['Prenume'];
    $email = $_POST['Email'];
    $cnp = $_POST['CNP'];
    $telefon = $_POST['Telefon'];
    $zi = $_POST['Zi'];
    $luna = $_POST['Luna'];
    $an = $_POST['An'];
    $sex = $_POST['sex'];
    $birth = $an . "-" . $luna . "-" . $zi; 
}

    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gabi";

// creating a connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}
// Performing insert query execution
// here our table name is college
$sql = "INSERT INTO inscrisi VALUES (DEFAULT,'$nume',
            '$prenume','$email','$cnp','$telefon','$birth','$sex')";

if (mysqli_query($conn, $sql)) {
    echo 
    "
    <style>
      /* Define the styles for the submit button */
      input[type='submit'] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
      }

      /* Add hover effect */
      input[type='submit']:hover {
        background-color: #45a049;
      }

      /* Add active effect */
      input[type='submit']:active {
        background-color: #3e8e41;
      }
    </style>
    <p style='text-align: center;'><img src='https://cdn.jotfor.ms/img/check-icon.png' alt='Jotform Answers Uploaded Image-0' width='128' height='128' /></p>
    <div style='text-align: center;'>
    <h1 style='text-align: center;'>Mulțumim!</h1>
    <p style='text-align: center;'>Înscrierea a fost realizată.</p>
    <form action='../html/inscrieri.html' method='POST'>
       <input type='submit' value='Înapoi la pagina academiei'/>
    </form>
    </div> 
    ";
} else {
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);


?>



</body>
</HTML>