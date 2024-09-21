onload = () => {
    document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnLogin").addEventListener("click", function () {
        let login = document.getElementById("nameFriend").value.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
        let audioCristina = document.getElementById("audioCristina");
        let audioSilvana = document.getElementById("audioSilvana");
        let audioAylin = document.getElementById("audioAylin");
        let audioMadai = document.getElementById("audioMadai");

        if (login === "leydi") { // Compara con el nombre en minúsculas
            setTimeout(function () {
                window.location.href = "Flores_Leydi.html"; // Redirige a la página de Aylin
            }, 2000); // Esperar 2 segundos antes de redirigir
        } else if (login === "diana") {
            setTimeout(function () {
                window.location.href = "Flores_Diana.html"; // Redirige a la página de Madai
            }, 2000); // Esperar 2 segundos antes de redirigir
         // Redirige a la página de Silvana
        } else {
            alert("Hazta pa poner tu nombre eres sonsa");
        }
    });
});
