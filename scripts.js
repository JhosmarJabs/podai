document.addEventListener('DOMContentLoaded', () => {
    const fechaElement = document.getElementById('fecha');
    const fechaActual = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const diaSemana = dias[fechaActual.getDay()];
    const dia = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();

    fechaElement.textContent = `Hoy es, ${diaSemana}, ${dia} de ${mes} de ${año}`;
});
