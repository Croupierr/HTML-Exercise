/* PENDINTE A ENTENDER Y VER CÓMO USAR PARA TOMAR LOS DATOS YA PROPORCIONADOS
function sendDatos (datos) {
    return fetch('file:///C:/Users/cezar/HTML-Exercise/youtube-simple/Formulario/formulario.html', {
        method: 'post'
        body: JSON.stringify(datos)
    })
}

function onSubmit (event) {
    event.preventDefault()
    const elementVideoName = document.getElementById('id')

    const video = {name: elementVideoName.value, category: elementVideocategory.value}
    sendVideo(video)
    .then(() => console.log('Video guardado)
    .catch(console.error)
}

window.addEventListener('load', function(){
    const form = document.getElementById('id')
    form.addEventListener('sumbit', onSubmit)
})
*/