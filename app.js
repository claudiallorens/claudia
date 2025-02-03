// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaYzM8ufxHiBIyZh9kKXqM9dI-MOe7aqA",
  authDomain: "proyecto-a79b6.firebaseapp.com",
  databaseURL: "https://proyecto-a79b6-default-rtdb.firebaseio.com",
  projectId: "proyecto-a79b6",
  storageBucket: "proyecto-a79b6.firebasestorage.app",
  messagingSenderId: "704541374734",
  appId: "1:704541374734:web:cd436dc53c98135bb97f5f",
  measurementId: "G-2P5E499DHJ"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(); // Para Realtime Database

// Manejar el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir que el formulario se envíe de manera tradicional

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Enviar los datos a Firebase
    database.ref("contactos").push({
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    }).then(function () {
        alert("¡Mensaje enviado correctamente!");
        // Limpiar el formulario después de enviar
        document.getElementById("contact-form").reset();
    }).catch(function (error) {
        console.error("Error al guardar los datos:", error);
    });
});
