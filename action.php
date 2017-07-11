<?php
$palabrasa=["abab", "abad", "abar", "abaz", "abès", "abey", "abia", "abra"];
$palabrass=["sabadeño", "sabadiego", "sàbado", "sabalar", "sabalera", "sabalero", "sàbalo", "sabana"];
$palabrasd=["dacà", "dacia", "dacio", "daciòn", "dacriocistitis", "dactilada", "dactilado", "dactilar"];
$nombre=$_POST["nombre"];
$letras=str_split($nombre, 1);
foreach ($letras as $letra) {
	$n=rand(0, 7);
	switch ($letra) {
		case 'a':
			echo $palabrasa[$n]."<br>";
			break;
		case 's':
			echo $palabrass[$n]."<br>";
			break;
		case 'd':
			echo $palabrasd[$n]."<br>";
			break;
		default:
			break;
	}
}

?>