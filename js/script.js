$(function(){
	let input=$("#nombre");
	let CVS = document.createElement('canvas'), ctx = CVS.getContext('2d');
	$("a#submit").on("click", function(){
		var nombre=input.val();
		var letras=nombre.split("");
		var palabras=[];
		CVS.width  = 500;
		CVS.height = 300;
		document.body.appendChild(CVS);
		
		ColocarPalabra();

		function ColocarPalabra( ob ){
			var img = new Image();
			img.onload = function(){
				ctx.drawImage(img, 0, 0);
				x=(500-50*nombre.length)/2;
				console.log(x);
				i=1;
				genero=$('input:checkbox[name=genero]:checked').val();
				if(!genero){
					genero="h";
				}else{
					genero="m";
				}
				for(letra of letras){
					$.post('seleccionar.php', {letra:letra, genero:genero}, function(msg){
						palabras=json=$.parseJSON(msg);
						random=Math.floor((Math.random() * palabras.length-1) + 1);
						y=70;
						i=0;
						for(letra of palabras[random]){
							if(i==0){
								ctx.font = "50px Anton";
								ctx.fillStyle = "rgba(250, 250, 250, 0.7)"
							}else{
								ctx.font = "30px Anton";
								ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
							}
							ctx.fillText(letra, x, y);
							y+=30;
							i++;
						}
						x+=50;
					})
				}
			};
			img.src = "nombre.png";
			$("h3").text("Resultado");
			$(".container").fadeOut();
			$("canvas").css({
				marginLeft: '33%',
				marginTop: '8%'
			});
		}
	});
})