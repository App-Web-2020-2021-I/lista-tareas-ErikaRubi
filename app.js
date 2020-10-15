function agregarTarea(datos){
    let html =  
    //$("#lista-tareas").html() +
    `<li class="list-group-item" id="${datos.id}">
        <div class="row">
            <div class="col-1 d-flex">
                <input type="checkbox" class="form-control align-self-center" onchange="cambiarEstatusTarea(${datos.id})">
            </div>
            <div class="col-10 row m-0 p-0">
                <div class="col-9 h5">
                    ${datos.titulo}
                </div>
                <div class="col-3 text-right">
                    <i>${datos.fecha}</i> 
                </div>
                <div class="col-12 text-justify">
                    ${datos.descripcion}
                </div>
            </div>
            <div class="col-1 d-flex">
                <button class="btn btn-danger align-self-center" onclick="borrarTarea(${datos.id})">&times;</button>
            </div>
        </div>
    </li>`;

    //$("#lista-tareas").html(html);
    $("#lista-tareas").append(html);
    //$("#lista-tareas").prepend(html);
}

function muestraAlerta(mensaje){
    $("#alerta-form").text(mensaje);
    $("#alerta-form").show(1000);
}

function borrarTarea(id){
    $("#" + id).hide(800, function(){
        $(this).remove();
    });
}

function cambiarEstatusTarea(id){
    $("#" + id).toggleClass("bg-tarea");
}

$(document).ready(function(){

    $("#alerta-form").hide(0);

    $("#form-tarea").submit(function(e) {
        e.preventDefault();

        let titulo = $("#titulo").val();
        if(titulo.trim() === ""){
            muestraAlerta("El titulo de la tarea no puede estar vacío")
            return;
        }

        let fecha = $("#fecha").val();
        if(fecha=== ""){
            muestraAlerta("La fecha no puede estar vacía");
            return;
        }

        $("#alerta-form").hide(1000);

        let descripcion = $("#descripcion").val();

        let datos = {
            titulo,
            fecha,
            descripcion,
            id: Date.now()
        };

        agregarTarea(datos);

        $("#titulo").val("");
        $("#fecha").val("");
        $("#descripcion").val("");
    });
});