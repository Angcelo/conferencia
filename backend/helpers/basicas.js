exports.getFechaActual= ()=>{
  var hoy = new Date();
  var año = hoy.getFullYear() + ""
  var mes = (hoy.getMonth() + 1) + ""
  var dia = hoy.getDate() + ""
  var horas = hoy.getHours() + ""
  var minutos = hoy.getMinutes() + ""
  var segundos = hoy.getSeconds() + ""
  var fecha = 
    año + "-" +
    mes.padStart(2,"0") + "-" +
    dia.padStart(2,"0") + " " +
    horas.padStart(2,"0") + ":" +
    minutos.padStart(2,"0") + ":" +
    segundos.padStart(2,"0")
  return fecha
}