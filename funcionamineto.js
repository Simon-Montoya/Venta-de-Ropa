var indiceFormularioActual = 1;
    var totalFormularios = 5;

    function mostrarSiguiente() {
        ocultarFormulario(indiceFormularioActual);
        indiceFormularioActual = (indiceFormularioActual % totalFormularios) + 1;
        mostrarFormulario(indiceFormularioActual);
    }

    function mostrarAnterior() {
        ocultarFormulario(indiceFormularioActual);
        indiceFormularioActual = (indiceFormularioActual - 2 + totalFormularios) % totalFormularios + 1;
        mostrarFormulario(indiceFormularioActual);
    }

    function mostrarFormulario(numeroFormulario) {
        var formulario = document.getElementById("form" + numeroFormulario);
        formulario.classList.remove("hidden");
    }

    function ocultarFormulario(numeroFormulario) {
        var formulario = document.getElementById("form" + numeroFormulario);
        formulario.classList.add("hidden");
    }

    // Mostrar el primer formulario al cargar la página
    mostrarFormulario(indiceFormularioActual);