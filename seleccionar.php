<?php 

require 'conexion.php';
$inicial=$_POST['letra'];
$genero=$_POST['genero'];
$query = 'SELECT contenido FROM palabras.palabras where contenido Like "'.$inicial.'%" and genero="'.$genero.'"';
$palabras = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$resultado=array();

// echo $query;
while ($i = mysql_fetch_array($palabras, MYSQL_ASSOC)) {
    foreach ($i as $palabra) {
        array_push($resultado, $palabra);
    }
}

echo json_encode($resultado);

?>