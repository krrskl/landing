<?php

$palabrasa=["abab", "abad", "abar", "abaz", "abès", "abey", "abia", "abra"];
$palabrass=["sabadeño", "sabadiego", "sàbado", "sabalar", "sabalera", "sabalero", "sàbalo", "sabana"];
$palabrasd=["dacà", "dacia", "dacio", "daciòn", "dacriocistitis", "dactilada", "dactilado", "dactilar"];
$nombre=$_POST["nombre"];
$letras=str_split($nombre, 1);
$significado=array();
foreach ($letras as $letra) {
	$n=rand(0, 7);
	switch ($letra) {
		case 'a':
		array_push($significado, $palabrasa[$n]);
		// echo ."<br>";
		break;
		case 's':
		array_push($significado, $palabrass[$n]);
		// echo $palabrass[$n]."<br>";
		break;
		case 'd':
		array_push($significado, $palabrasd[$n]);
		// echo $palabrasd[$n]."<br>";
		break;
		default:
		break;
	}
}

var_dump($significado);

?>



<script type="text/javascript">
	
	var CVS = document.createElement('canvas'),
	ctx = CVS.getContext('2d');

	CVS.width  = 500;
	CVS.height = 500;
document.body.appendChild(CVS); // Add canvas to DOM

// GRAPHICS TO CANVAS /////
function sendToCanvas( ob ){
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
		ctx.font = ob.fontWeight+' '+ob.fontSize+' '+ob.fontFamily;
		ctx.fillStyle = ob.color;
		
		<?php 

		$y=500-100;
		$string='ctx.fillText("center", '.$y.', CVS.height/2.5)';
		foreach ($significado as $i => $palabra) {
			echo 'ctx.fillText("center", 0, CVS.height/2.5)';
		}

		?>
		// ctx.fillText("center", CVS.width/2, CVS.height/2.5);
		// ctx.fillStyle = ob.color;
		// ctx.fillText("left", CVS.width/22, CVS.height/2.5);
		// ctx.fillStyle = ob.color;
		// ctx.fillText("right", CVS.width-100, CVS.height/2.5);
	};
	img.src = ob.image;
}
///////////////////////////

// DO IT! /////////////////
sendToCanvas({
	image      : "nombre.png",
	text       : "",
	fontFamily : "Arial",
	fontWeight : "bold",
	fontSize   : "30px",
	color      : "rgba(0, 0, 0, 0.7)"
});

</script>