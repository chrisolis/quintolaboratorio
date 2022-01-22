$(".panel-body").on("click", "#ButtonPost", function(e){
    e.preventDefault(); //Prevenimos que el boton post haga su metodo default de recargar la pagina (por estar dentro de un formulario) y que mejor haga lo siguiente.
    let todo = $("#todoText").val(); //Agarra el texto del cuadro de texto
    let list = $("#todoList"); //Obtenemos la referencia de la lista donde queremos escribir los todos.
    
    //Creamos el div que contendra el input (checkbox) y el texto que agarramos previamente para ponerlo dentro de una label que ira al lado del checkbox.
    let divo = $(`<div></div>`);
    let input = $(`<input type="checkbox" name="todo"></input>`); //Creamos el input.
    let label = $(`<label id="etiqueta"></label>`); //Creamos la etiqueta.
    label.text(todo); //Asignamos el texto de la caja como el texto de la etiqueta.
    
    //Ponemos tanto el input como la label dentro del div.
    divo.append(input);
    divo.append(label);
    
    //Agreguemos al div (que contiene al input/checkbox y la label) dentro de la lista.
    list.append(divo);
})
  
  $(".buttons").on("click", "#ButtonClear", function(){
    $("input:checkbox").prop("checked", false);
})

$(".buttons").on("click", "#ButtonMark", function(){
    $("input:checkbox").prop("checked", true);
})

$(".buttons").on("click", "#ButtonDelete", function(){
    $("input:checked").parent().remove();
})