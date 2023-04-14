<head>
<?php
$con = mysqli_connect('localhost','root','');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"proiect");
$sql="SELECT * FROM inscrisi";
$result = mysqli_query($con,$sql);
?>
<script>
  console.log("<?php echo "<p>AAAAA</p>" ?>");
</script>
</head>

<body>
</body>