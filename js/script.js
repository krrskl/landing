$(function(){
	let form=$(".nombre");
	let input=$("#nombre");
	let CVS = document.createElement('canvas'), ctx = CVS.getContext('2d');
	$("a#submit").on("click", function(){
		var nombre=input.val();
		var letras=nombre.split("");
		var palabras=[];
		CVS.width  = 500;
		CVS.height = 700;
		document.body.appendChild(CVS);
		
		ColocarPalabra();

		function ColocarPalabra( ob ){
			var img = new Image();
			img.onload = function(){
				ctx.drawImage(img, 0, 0);
				x=50;
				i=1;
				genero=$('input:checkbox[name=genero]:checked').val();
				if(!genero){
					genero="h";
				}else{
					genero="m";
				}
				console.log(genero);
				for(letra of letras){
					$.post('seleccionar.php', {letra:letra, genero:genero}, function(msg){
						palabras=json=$.parseJSON(msg);
						random=Math.floor((Math.random() * palabras.length-1) + 1);
						y=50;
						i=0;
						for(letra of palabras[random]){
							if(i==0){
								ctx.font = "50px Arial";
								ctx.fillStyle = "rgba(250, 250, 250, 0.7)"
								letra=letra.toUpperCase();
							}else{
								ctx.font = "30px Arial";
								ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
							}
							ctx.fillText(letra, x, y);
							y+=25;
							i++;
						}
						x+=50;
					})
				}
			};
			img.src = "nombre.png";
		}
	});
})