let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;

let aang = document.getElementById('aang');
let zuko = document.getElementById('zuko');
let katara = document.getElementById('katara');
let toph = document.getElementById('toph');
let spanAvatarJugdor = document.getElementById('name-avatar');

function iniciarJuego() {
    let seccionAtaque = document.getElementById('seleccionar-ataque')
    seccionAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'

    let btnDone = document.getElementById('btn-done')
    btnDone.addEventListener('click', seleccionarAvatar)

    // Ataques del Jugador
    let btnFire = document.getElementById('btn-fire')
    let btnWater = document.getElementById('btn-water')
    let btnEarth = document.getElementById('btn-earth')
    let btnAir = document.getElementById('btn-air')
    // Reiniciar
    let btnReiniciar = document.getElementById('btn-restart')

    btnFire.addEventListener('click', atackFire)
    btnWater.addEventListener('click', atackWater)
    btnEarth.addEventListener('click', atackEarth)
    btnAir.addEventListener('click', atackAir)
    // Reiniciar
    btnReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarAvatar() {

    let seleccionarAvatar = document.getElementById('seleccionar-avatar')
    let seccionAtaque = document.getElementById('seleccionar-ataque')
    let seccionImgAvatar = document.getElementById('img-avatar-combate')

    if (aang.checked) {
        spanAvatarJugdor.innerHTML = '[Aang]'
        seleccionarAvatar.style.display = 'none'
        seccionAtaque.style.display = 'block'
        seccionImgAvatar.setAttribute('src', './images/aang.jpg')
        seleccionarAvatarEnemigo()
    } else if (katara.checked) {
        spanAvatarJugdor.innerHTML = '[Katara]'
        seleccionarAvatar.style.display = 'none'
        seccionAtaque.style.display = 'block'
        seccionImgAvatar.setAttribute('src', './images/katara.png')
        seleccionarAvatarEnemigo()
    } else if (zuko.checked) {
        spanAvatarJugdor.innerHTML = '[Zuko]'
        seleccionarAvatar.style.display = 'none'
        seccionAtaque.style.display = 'block'
        seccionImgAvatar.setAttribute('src', './images/zuko.jpg')
        seleccionarAvatarEnemigo()
    } else if (toph.checked) {
        spanAvatarJugdor.innerHTML = '[Toph]'
        seleccionarAvatar.style.display = 'none'
        seccionAtaque.style.display = 'block'
        seccionImgAvatar.setAttribute('src', './images/toph.png')
        seleccionarAvatarEnemigo()
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Please, select an Avatar"
        });
    }

}

function seleccionarAvatarEnemigo() {
    let ataqueAleatorio = aleatorio(1, 4)
    let spanAvatarEnemigo = document.getElementById('name-enemy-avatar')
    let seccionImgAvatarEnemigo = document.getElementById('img-avatar-enemigo-combate')

    if (ataqueAleatorio == 1) {
        seccionImgAvatarEnemigo.setAttribute('src', './images/aang.jpg')
        Swal.fire({
            title: "Oh no!",
            text: "Your enemy is Avatar AANG",
            confirmButtonText: 'FIGHT!',
            imageUrl: "images/aang.jpg",
            imageWidth: 350,
            imageAlt: "Custom image",
            customClass: {
                confirmButton: 'confirmButton-class'
            }
        });
        spanAvatarEnemigo.innerHTML = '[Aang]'
    } else if (ataqueAleatorio == 2) {
        seccionImgAvatarEnemigo.setAttribute('src', './images/katara.png')
        Swal.fire({
            title: "Oh no!",
            text: "Your enemy is Avatar KATARA",
            confirmButtonText: 'FIGHT!',
            imageUrl: "images/katara.png",
            imageWidth: 350,
            imageAlt: "Custom image",
            customClass: {
                confirmButton: 'confirmButton-class'
            }
        });
        spanAvatarEnemigo.innerHTML = '[Katara]'
    } else if (ataqueAleatorio == 3) {
        seccionImgAvatarEnemigo.setAttribute('src', './images/zuko.jpg')
        Swal.fire({
            title: "Oh no!",
            text: "Your enemy is Avatar ZUKO",
            confirmButtonText: 'FIGHT!',
            imageUrl: "images/zuko.jpg",
            imageWidth: 350,
            imageAlt: "Custom image",
            customClass: {
                confirmButton: 'confirmButton-class'
            }
        });
        spanAvatarEnemigo.innerHTML = '[Zuko]'
    } else if (ataqueAleatorio == 4) {
        seccionImgAvatarEnemigo.setAttribute('src', './images/toph.png')
        Swal.fire({
            title: "Oh no!",
            text: "Your enemy is Avatar TOPH",
            confirmButtonText: 'FIGHT!',
            imageUrl: "images/toph.png",
            imageWidth: 350,
            imageAlt: "Custom image",
            customClass: {
                confirmButton: 'confirmButton-class'
            }
        });
        spanAvatarEnemigo.innerHTML = '[Toph]'
    }
}

function atackFire() {
    if (aang.checked || katara.checked || zuko.checked || toph.checked) {
        ataqueJugador = 'FIRE 🔥'
        ataqueAleatorioEnemigo()
    } else {
        alert('Select an Avatar!')
    }
}

function atackWater() {
    if (aang.checked || katara.checked || zuko.checked || toph.checked) {
        ataqueJugador = 'WATER 💧'
        ataqueAleatorioEnemigo()
    } else {
        alert('Select an Avatar!')
    }
}

function atackEarth() {
    if (aang.checked || katara.checked || zuko.checked || toph.checked) {
        ataqueJugador = 'EARTH 🌱'
        ataqueAleatorioEnemigo()
    } else {
        alert('Select an Avatar!')
    }
}

function atackAir() {
    if (aang.checked || katara.checked || zuko.checked || toph.checked) {
        ataqueJugador = 'AIR 🌪️'
        ataqueAleatorioEnemigo()
    } else {
        alert('Select an Avatar!')
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorioEnemigo = aleatorio(1, 4)

    if (ataqueAleatorioEnemigo == 1) {
        ataqueEnemigo = 'FIRE 🔥'
    } else if (ataqueAleatorioEnemigo == 2) {
        ataqueEnemigo = 'WATER 💧'
    } else if (ataqueAleatorioEnemigo == 3) {
        ataqueEnemigo = 'EARTH 🌱'
    } else if (ataqueAleatorioEnemigo == 4) {
        ataqueEnemigo = 'AIR 🌪️'
    }

    winOrLose()
}

function winOrLose() {

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    let vidasMiAvatar = document.getElementById('vidas-mi-avatar')
    let vidasMiEnemigo = document.getElementById('vidas-mi-enemigo')

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    } else if (ataqueJugador == 'FIRE 🔥' && ataqueEnemigo == 'AIR 🌪️') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        if (vidasEnemigo == 2) {
            vidasMiEnemigo.innerText = 'Lives: ❤️❤️'
        } else if (vidasEnemigo == 1) {
            vidasMiEnemigo.innerText = 'Lives: ❤️'
        }
    } else if (ataqueJugador == 'WATER 💧' && ataqueEnemigo == 'FIRE 🔥') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        if (vidasEnemigo == 2) {
            vidasMiEnemigo.innerText = 'Lives: ❤️❤️'
        } else if (vidasEnemigo == 1) {
            vidasMiEnemigo.innerText = 'Lives: ❤️'
        }
    } else if (ataqueJugador == 'EARTH 🌱' && ataqueEnemigo == 'WATER 💧') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        if (vidasEnemigo == 2) {
            vidasMiEnemigo.innerText = 'Lives: ❤️❤️'
        } else if (vidasEnemigo == 1) {
            vidasMiEnemigo.innerText = 'Lives: ❤️'
        }
    } else if (ataqueJugador == 'AIR 🌪️' && ataqueEnemigo == 'EARTH 🌱') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        if (vidasEnemigo == 2) {
            vidasMiEnemigo.innerText = 'Lives: ❤️❤️'
        } else if (vidasEnemigo == 1) {
            vidasMiEnemigo.innerText = 'Lives: ❤️'
        }
    } else if (ataqueJugador == 'EARTH 🌱' && ataqueEnemigo == 'FIRE 🔥') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        if (vidasEnemigo == 2) {
            vidasMiEnemigo.innerText = 'Lives: ❤️❤️'
        } else if (vidasEnemigo == 1) {
            vidasMiEnemigo.innerText = 'Lives: ❤️'
        }
    } else if (ataqueJugador == 'AIR 🌪️' && ataqueEnemigo == 'WATER 💧') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        if (vidasEnemigo == 2) {
            vidasMiEnemigo.innerText = 'Lives: ❤️❤️'
        } else if (vidasEnemigo == 1) {
            vidasMiEnemigo.innerText = 'Lives: ❤️'
        }
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        if (vidasJugador == 2) {
            vidasMiAvatar.innerText = 'Lives: ❤️❤️'
        } else if (vidasJugador == 1) {
            vidasMiAvatar.innerText = 'Lives: ❤️'
        }
    }

    // Revisar las vidas
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajefinal("CONGRATS! YOUR AVATAR WON!")
    } else if (vidasJugador == 0) {
        crearMensajefinal("SORRY! YOUR AVATAR WAS DEFEATED...")
    }
}

function crearMensaje(resultado) {
    // let divMensaje = document.getElementById('mensajes')
    // divMensaje.innerText = ''
    // let parrafo = document.createElement('p')
    // parrafo.innerText = `Your Avatar attacked with ${ataqueJugador}, Your Enemy has attacked with ${ataqueEnemigo}. ${resultado} !!! 🎉`
    // divMensaje.append(parrafo)
    Swal.fire({
        title: resultado + "!!!",
        text: `Your Avatar attacked with ${ataqueJugador}, Your Enemy has attacked with ${ataqueEnemigo}.`,
        customClass: {
            confirmButton: 'confirmButton-class'
        }
    });
}

function crearMensajefinal(resultadoFinal) {
    let divMensaje = document.getElementById('mensajes')
    divMensaje.innerText = ''
    let parrafo = document.createElement('p')
    parrafo.innerText = resultadoFinal
    divMensaje.append(parrafo)

    let btnFire = document.getElementById('btn-fire')
    let btnWater = document.getElementById('btn-water')
    let btnEarth = document.getElementById('btn-earth')
    let btnAir = document.getElementById('btn-air')

    btnFire.disabled = true
    btnWater.disabled = true
    btnEarth.disabled = true
    btnAir.disabled = true

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'

    let seleccionarAtaque = document.getElementById('seleccionar-ataque')
    seleccionarAtaque.style.display = 'none'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)


