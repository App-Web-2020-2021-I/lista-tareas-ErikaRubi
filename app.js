function agregarTarea(datos){
    let html =  
    //$("#lista-tareas").html() +
    `<li class="list-group-item">
        <div class="row">
            <div class="col-1 d-flex">
                <input type="checkbox" class="form-control align-self-center">
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
                <button class="btn btn-danger align-self-center">&times;</button>
            </div>
        </div>
    </li>`;

    //$("#lista-tareas").html(html);
    $("#lista-tareas").append(html);
    //$("#lista-tareas").prepend(html);
}


$(document).ready(function(){
    $("#form-tarea").submit(function(e) {
        e.preventDefault();

        let titulo = $("#titulo").val();
        let fecha = $("#fecha").val();
        let descripcion = $("#descripcion").val();

        let datos = {
            titulo,
            fecha,
            descripcion
        };
        agregarTarea(datos);
    });
});