document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Ocultar el formulario de información del estudiante
    document.getElementById("student-info").style.display = "none";
    // Mostrar las preguntas
    document.getElementById("interview-questions").style.display = "block";
  });
  
  document.getElementById("questionsForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Obtener el nombre del estudiante
    const name = document.getElementById("name").value;
    
    // Calcular las respuestas correctas
    let correctAnswers = 0;
    const totalQuestions = 5;
    
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
  
    if (q1 && q1.value === "correcta") correctAnswers++;
    if (q2 && q2.value === "correcta") correctAnswers++;
    if (q3 && q3.value === "correcta") correctAnswers++;
    if (q4 && q4.value === "correcta") correctAnswers++;
    if (q5 && q5.value === "correcta") correctAnswers++;
  
    // Calcular el porcentaje
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
  
    // Mostrar los resultados
    document.getElementById("interview-questions").style.display = "none";
    document.getElementById("results").style.display = "block";
  
    document.getElementById("studentName").textContent = `¡Buen trabajo, ${name}!`;
    document.getElementById("score").textContent = `Has respondido correctamente ${correctAnswers} de ${totalQuestions} preguntas (${scorePercentage}%).`;
  
    // Generar sugerencias
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
  
    if (scorePercentage < 60) {
      suggestions.innerHTML += "<li>Repasa más sobre la empresa y sus valores antes de la entrevista.</li>";
      suggestions.innerHTML += "<li>Practica cómo comunicar tus fortalezas y habilidades clave.</li>";
    } else if (scorePercentage < 80) {
      suggestions.innerHTML += "<li>Refuerza tus respuestas con ejemplos de tus experiencias pasadas.</li>";
      suggestions.innerHTML += "<li>Considera cómo mejorar tus respuestas sobre tus objetivos a largo plazo.</li>";
    } else {
      suggestions.innerHTML += "<li>¡Continúa así! Solo asegúrate de mantenerte informado sobre las novedades de la empresa.</li>";
    }
  });
  