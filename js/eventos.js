const botonListar = document.getElementById("listar")
const botonAgregar = document.getElementById("agregar")
const botonBuscar = document.getElementById("buscar")
const botonBorrar = document.getElementById("borrar")
const botonOrdenar = document.getElementById("ordenar")
const botonCalcular = document.getElementById("calcular")
const botonInspeccionar = document.getElementById("inspeccionar")
const botonInspeccionar2 = document.getElementById("inspeccionar2")
const botonInspeccionar3 = document.getElementById("inspeccionar3")
const botonInspeccionar4 = document.getElementById("inspeccionar4")

botonAgregar.addEventListener("click", ()=> {
    console.log("AGREGAR RECETA SELECCIONADO")
})

botonBuscar.addEventListener("click", ()=> {
    console.log("BUSCANDO RECETA")
})

botonBorrar.addEventListener("click", ()=> {
    console.log("BORRAR RECETA SELECCIONADO")
})

botonListar.addEventListener("click",  listarReceta)
botonAgregar.addEventListener("click", nuevaReceta)
botonBuscar.addEventListener("click", buscarReceta)
botonBorrar.addEventListener("click", borrarReceta)
botonOrdenar.addEventListener("click", ordenarRecetas)
botonCalcular.addEventListener("click", calcularIMC)

botonListar.addEventListener("click", ()=> {
    alert("Se listaron los elementos ✔️")
})

botonOrdenar.addEventListener("click", ()=> {
    alert("Se ordenaron las recetas ✔️")
})

botonInspeccionar.addEventListener("click", ()=> {
    alert("❌NO DISPONIBLE, COMMING SOON...❌")
})

botonInspeccionar2.addEventListener("click", ()=> {
    alert("❌NO DISPONIBLE, COMMING SOON...❌")
})

botonInspeccionar3.addEventListener("click", ()=> {
    alert("❌NO DISPONIBLE, COMMING SOON...❌")
})

botonInspeccionar4.addEventListener("click", ()=> {
    alert("❌NO DISPONIBLE, COMMING SOON...❌")
})
