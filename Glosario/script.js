// 1. Tus datos: Preguntas y Respuestas
const data = [
    { q: "¿Qué es Hardware?", a: " Es toda la parte física y tangible de la computadora, como los circuitos, cables y periféricos que puedes tocar." },
    { q: "¿Qué es Software?", a: "Son los programas e instrucciones lógicas que le dicen al hardware exactamente qué tareas debe realizar." },
     { q: "¿Qué es Sistema Operativo?", a: "Es el software principal que gestiona los recursos de la computadora y sirve de puente entre tú y la máquina." },
      { q: "¿Qué es CPU (Procesador)?", a: "Se considera el cerebro de la computadora, encargado de interpretar datos y ejecutar todas las instrucciones del sistema." },
       { q: "¿Qué es Memoria RAM?", a: "Es la memoria de acceso rápido donde el sistema guarda temporalmente los datos de los programas que estás usando en el momento." },
        { q: "¿Qué es Memoria ROM?", a: "Un chip de memoria de solo lectura que contiene las instrucciones críticas para que la computadora pueda arrancar correctamente." },
         { q: "¿Qué es Unidad de Almacenamiento?", a: "Dispositivos como discos duros o SSD donde se guardan de forma permanente tus archivos y el software instalado." },
          { q: "¿Qué es Periféricos de Entrada?", a: "Herramientas como el teclado o el ratón que permiten introducir información o comandos desde el exterior hacia el sistema." },
           { q: "¿Qué es Periféricos de Salida?", a: "Dispositivos como el monitor o la impresora que muestran los resultados del procesamiento de datos al usuario." },
            { q: "¿Qué es un Bit?", a: "Es la unidad mínima de información en computación, representando un estado binario que puede ser únicamente 0 o 1." },
            { q: "¿Qué es Byte?", a: "Una unidad de medida compuesta por 8 bits, que generalmente representa un solo carácter, como una letra o un número." },
            { q: "¿Qué es Bus de Datos?", a: " Es el conjunto de conexiones físicas o canales por donde viaja la información entre los distintos componentes internos." },
            { q: "¿Qué es Placa Base (Motherboard)?", a: "La tarjeta de circuito principal donde se conectan y comunican todos los componentes esenciales del hardware." },
            { q: "¿Qué es Firmware?", a: " Software específico grabado directamente en el hardware que controla sus funciones más básicas y elementales." },
             { q: "¿Qué es Arquitectura de Computadoras?", a: "Es el diseño conceptual y la estructura operativa que define cómo se organizan y conectan las partes de un sistema." },
];



const container = document.getElementById('glossary-container');

// 2. Función para renderizar el glosario
data.forEach((item, index) => {
    const section = document.createElement('div');
    section.className = 'glossary-item';

    section.innerHTML = `
        <div class="question" onclick="toggleAnswer(${index})">
            ${item.q} <span>+</span>
        </div>
        <div class="answer" id="answer-${index}">
            ${item.a}
        </div>
    `;
    container.appendChild(section);
});

// 3. Función para mostrar/ocultar
function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const isVisible = answer.classList.contains('show');
    
    // Opcional: Cerrar otras respuestas antes de abrir la nueva
    document.querySelectorAll('.answer').forEach(el => el.classList.remove('show'));

    if (!isVisible) {
        answer.classList.add('show');
    }
}


