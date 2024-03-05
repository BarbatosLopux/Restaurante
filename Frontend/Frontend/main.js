document.addEventListener('DOMContentLoaded', async () => {
    const platosList = document.getElementById('platos-list');

    try {
        const response = await fetch('http://localhost:8080/api/plato');
        const data = await response.json();
        if (response.ok) {
            data.forEach(plato => {
                const platoItem = document.createElement('li');
                platoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                platoItem.innerHTML = `
                    <div>
                        <h5 class="mb-1">${plato.nombrePlato}</h5>
                        <p class="mb-1">${plato.descripcion}</p>
                        <small>Precio: ${plato.precio}</small>
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger btn-sm me-2" onclick="eliminarPlato(${plato.idPlato})">Eliminar</button>
                    </div>
                `;
                platosList.appendChild(platoItem);
            });
        } else {
            console.error('Error al obtener los platos:', response.statusText);
        }
    } catch (error) {
        console.error('Error al obtener los platos:', error.message);
    }
});

async function eliminarPlato(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/plato/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Eliminación exitosa
            // Puedes actualizar la interfaz de usuario para reflejar los cambios si es necesario
            console.log('Plato eliminado exitosamente');
        } else {
            console.error('Error al eliminar el plato:', response.statusText);
        }
    } catch (error) {
        console.error('Error al eliminar el plato:', error.message);
    }
}

async function editarPlato(id) {
    try {
        // Obtener los detalles del plato actual mediante una solicitud GET al backend
        const response = await fetch(`http://localhost:8080/api/plato/${id}`);

        // Escuchar el evento submit del formulario
        document.getElementById('edit-plato-form').addEventListener('submit', async (event) => {
            event.preventDefault();

            // Obtener los valores actualizados del formulario
            const nombre = document.getElementById('nombreEditar').value;
            const descripcion = document.getElementById('descripcionEditar').value;
            const precio = document.getElementById('precioEditar').value;
            const categoria_Plato = document.getElementById('categoria_platoEditar').value;
            const disponibilidad = document.getElementById('disponibilidadEditar').value;
            const tiempo_Preparacion = document.getElementById('tiempo_preparacionEditar').value;
            // Crear un objeto con los datos actualizados del plato
            const platoActualizado = {
                nombrePlato: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio), // Convertir a número
                categoriaPlato: categoria_Plato,
                disponibilidad: disponibilidad,
                tiempoPreparacion: tiempo_Preparacion
            };

            console.log(platoActualizado);

            // Enviar la solicitud PUT o PATCH al backend para actualizar el plato
            const updateResponse = await fetch(`http://localhost:8080/api/plato/${id}`, {
                method: 'PUT', // Cambia a 'PATCH' si es necesario
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(platoActualizado)
            });

            if (updateResponse.ok) {
                // Actualización exitosa
                console.log('Plato actualizado exitosamente');
        
            } else {
                console.error('Error al actualizar el plato:', updateResponse.statusText);
            }
        });
    } catch (error) {
        console.error('Error al editar el plato:', error.message);
    }
}




document.addEventListener('DOMContentLoaded', () => {
    const addPlatoForm = document.getElementById('add-plato-form');

    addPlatoForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombrePlatoEnviar = document.getElementById('nombreEnviar').value;
        const descripcionPlatoEnviar = document.getElementById('descripcionEnviar').value;
        const precioPlatoEnviar = document.getElementById('precioEnviar').value;
        const categoriaPlatoEnviar = document.getElementById('categoria_platoEnviar').value;
        const disponibilidadPlatoEnviar = document.getElementById('disponibilidadEnviar').value;
        const tiempoPreparacionPlatoEnviar = document.getElementById('tiempo_preparacionEnviar').value;

        const obj = {
            nombrePlato: nombrePlatoEnviar,
            descripcion: descripcionPlatoEnviar,
            precio: precioPlatoEnviar,
            categoriaPlato: categoriaPlatoEnviar,
            disponibilidad: disponibilidadPlatoEnviar,
            tiempoPreparacion: tiempoPreparacionPlatoEnviar
        };

        console.log(obj);
        
        try {
            const response = await fetch('http://localhost:8080/api/plato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });

            if (response.ok) {
                console.log('Plato agregado exitosamente');
                // Aquí podrías recargar la lista de platos si lo deseas
            } else {
                console.error('Error al agregar el plato:', response.statusText);
            }
        } catch (error) {
            console.error('Error al agregar el plato:', error.message);
        }
    });


    document.addEventListener('DOMContentLoaded', () => {
        const addPlatoForm = document.getElementById('edit-plato-form');
    
        addPlatoForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            console.log("sirve");

            const obj = {
                nombrePlato: nombrePlato,
                descripcion: descripcion,
                precio: precio,
                categoriaPlato: categoria,
                disponibilidad: disponibilidad,
                tiempoPreparacion: tiempoPreparacion
            };
    
            console.log(obj);
            
            try {
                const response = await fetch(`http://localhost:8080/api/plato/${idPlato}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                });
    
                if (response.ok) {
                    console.log('Plato enviado exitosamente');
                    // Aquí podrías recargar la lista de platos si lo deseas
                } else {
                    console.error('Error al agregar el plato:', response.statusText);
                }
            } catch (error) {
                console.error('Error al agregar el plato:', error.message);
            }
        });
})
});
