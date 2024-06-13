/**
 * 
 */




function pedirActividad() {
	let actividad, duracion, fecha

	do {
		actividad = prompt("Que actividad vas a hacer");
		actividad.toLowerCase();
	} while (actividad != "clase" && actividad != "comer" && actividad != "viaje" && actividad != "dormir" && actividad != "ejercicio")


	fechaPedida = prompt("Que fecha hara la actividad(yyyy-MM-dd)")
	let fechaSplit = fechaPedida.split("-")
	fecha = new Date(fechaSplit[0], fechaSplit[1] - 1, fechaSplit[2])

	switch (actividad) {
		case "clase":
			duracion = "1 hora"
			break;
		case "comer":
			duracion = "45 min"
			break;
		case "viaje":
			duracion = "20 min"
			break;
		case "dormir":
			duracion = "8 horas"
			break;
		case "ejercicio":
			duracion = "1 h 30 min"
			break;

	};
	guardar(actividad, duracion, fecha)
}
var actividades = [];
function guardar(actividad, duracion, fecha) {
	actividades.push(actividad, duracion, fecha)
	escribir(actividad, duracion, fecha)

}
function eliminar() {
	let actividadAEliminar = "";
	do {
		actividadAEliminar = prompt("Que actividad vas a eliminar");
		actividadAEliminar.toLowerCase();
	} while (actividadAEliminar != "clase" && actividadAEliminar != "comer" && actividadAEliminar != "viaje" && actividadAEliminar != "dormir" && actividadAEliminar != "ejercicio")
	let existe = false;
	/*Verificar si existe*/
	for (i = 0; actividades.length; i++) {
		if (actividades[i[1]] == actividadAEliminar) {
			existe = true
		}
	}
	let aux=[]
	for (i = 0; actividades.length; i++) {
		if(actividades[i[1]]!= actividadAEliminar){
			aux.push(actividades[i])
		}
		actividades=aux.concat();
	} 
	
	if(existe=false){
		alert("No se han encontrado ninguna actividad con esas características")
	}
	escribir()

}

function escribir(actividad, duracion, fecha) {
	let escritura = "";
	const ruta = document.getElementById("tabla")

	escritura += `<tr><td>${actividad}</td><td>${duracion}</td><td>${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}</td></tr>`;
	ruta.innerHTML += (`<tr>${escritura}</tr>`);

}