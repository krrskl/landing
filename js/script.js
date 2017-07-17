$(function(){
	let form=$(".nombre");
	let input=$("#nombre");
	let CVS = document.createElement('canvas'), ctx = CVS.getContext('2d');
	$("a#submit").on("click", function(){
		var nombre=input.val();
		var letras=nombre.split("");
		var palabras=[];
		CVS.width  = 500;
		CVS.height = 500;
		document.body.appendChild(CVS);
		
		ColocarPalabra({
			image      : "nombre.png",
			fontFamily : "Arial",
			fontWeight : "bold",
			fontSize   : "30px",
			color      : "rgba(0, 0, 0, 0.7)"
		});

		function ColocarPalabra( ob ){
			var img = new Image();
			img.onload = function(){
				ctx.drawImage(img, 0, 0);
				ctx.font = ob.fontWeight+' '+ob.fontSize+' '+ob.fontFamily;
				ctx.fillStyle = ob.color;
				x=50;
				y=50;
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
						for(letra of palabras[random]){
							ctx.fillText(letra, x, y);
							y+=30;
						}
						x+=30;
					})
				}
			};
			img.src = ob.image;
		}
	});
})