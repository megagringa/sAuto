//Cotizador Constructor
//Constructor para seguro
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;

}

//Todo lo que se muestra
function Interfaz(){

}

//Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje , tipo){
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList = 'correcto';
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.getElementById('.form-group'));

    setTimeout(function(){
        document.querySelector('.mensaje').remove()
    },3000);
}

//EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.option[marca.selectedIndex].value;

    //Leer el año seleccionado del <select>
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.option[anio.selectedIndex].value;

    //Lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value

    //Crear instancia de Interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        //Interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    }else{
        //Instanciar seguro y mostrar intefaz
        console.log('Todo Correcto');
    }

})


const max = new Date().getFullYear();
      min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i-- ){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}