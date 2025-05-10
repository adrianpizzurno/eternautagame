# ❄️ El Eternauta: La Adivinanza Profunda ❄️

¡Bienvenido al juego de adivinanzas definitivo para los fanáticos de "El Eternauta"! Pon a prueba tus conocimientos sobre el icónico cómic argentino de Héctor Germán Oesterheld y Francisco Solano López, así como su más reciente adaptación.

![Screenshot del Juego](https://github.com/adrianpizzurno/eternautagame/blob/22755e6f2b6dbbf0a45c52b6a8e42a3dde082bfe/%7Beternauta%7D1_1.jpg)
<!-- Reemplaza 'images/placeholder_screenshot_1.png' con la ruta a una captura de pantalla real del juego -->
<!-- Puedes añadir más screenshots si quieres -->

## 📜 Descripción

"El Eternauta: La Adivinanza Profunda" es un juego interactivo de preguntas y respuestas que te desafiará a recordar personajes, eventos cruciales, locaciones, detalles de producción y el profundo legado de esta obra maestra de la ciencia ficción. Desde la primera nevada mortal en 1957 hasta las nuevas interpretaciones, cada pregunta está diseñada para evocar el espíritu de resistencia y la importancia del héroe colectivo.

Este proyecto fue desarrollado utilizando HTML5, CSS3 y JavaScript puro para el frontend, con Google Apps Script y Google Sheets funcionando como un backend simple para el registro de jugadores, el sistema de referidos y un leaderboard dinámico.

## ✨ Características Principales

*   **Trivia Desafiante:** Un amplio cuestionario que abarca el cómic original y la adaptación de Netflix.
*   **Estética Inmersiva:** Interfaz gráfica con múltiples referencias visuales, tipográficas y temáticas que remiten al universo de El Eternauta y la cultura argentina.
*   **Sistema de Puntuación:** Gana puntos por cada respuesta correcta.
*   **Leaderboard Dinámico:** Comprueba cómo te clasificas contra otros sobrevivientes. Los mejores puntajes se actualizan en tiempo real.
*   **Sistema de Referidos:** ¡Invita a tus amigos! Si un nuevo jugador indica tu email al registrarse (y juega para el sorteo), sumarás puntos extra.
*   **Sorteo (Ejemplo):** Configurado con una promoción de ejemplo para los mejores jugadores (¡Los 3 primeros podrían participar en un sorteo por 2 meses de Canva Pro! Fecha límite: 30/06).
*   **Soporte Multilenguaje:** Incluye el widget de Google Translate para una mayor accesibilidad.
*   **Tecnologías Usadas:** HTML, CSS, JavaScript, Google Apps Script, Google Sheets.

## 🕹️ ¿Cómo Jugar?

<!-- Si tienes el juego desplegado online, reemplaza el siguiente párrafo con un enlace directo -->
Actualmente, para jugar, necesitas descargar los archivos y abrir `https://adrianpizzurno.github.io/eternautagame/` en tu navegador.
<!-- Ejemplo de enlace a demo:
**[¡JUEGA AQUÍ!](https://tu-usuario.github.io/tu-repositorio/)**](https://adrianpizzurno.github.io/eternautagame/)
-->

## 🛠️ Configuración (Para Desarrolladores o si Quieres Hostearlo Tú Mismo)

Si deseas clonar este repositorio y poner en marcha tu propia instancia del juego con la funcionalidad de base de datos, necesitarás configurar Google Apps Script y Google Sheets:

1.  **Crear una Hoja de Google Sheets:**
    *   Crea una nueva hoja de cálculo en tu Google Drive.
    *   Nombra la primera pestaña exactamente `eternauta` (todo en minúsculas).
    *   En la primera fila de la hoja `eternauta`, añade los siguientes encabezados en este orden exacto:
        `Timestamp`, `Nombre`, `Puntuacion`, `Pais`, `Email`, `TipoRegistro`, `EmailReferente`

2.  **Configurar Google Apps Script:**
    *   Abre la hoja de cálculo que creaste. Ve a `Extensiones` > `Apps Script`.
    *   Copia el contenido del archivo `google-apps-script.gs` de este repositorio y pégalo en el editor de Apps Script, reemplazando cualquier código existente.
    *   Dentro del script `google-apps-script.gs`, actualiza las constantes `SPREADSHEET_ID` (con el ID de tu hoja de cálculo, que encuentras en su URL) y `SHEET_NAME` (con `eternauta`).
    *   Guarda el script.
    *   **Despliega el script como Aplicación Web:**
        *   Haz clic en **Implementar > Nueva implementación**.
        *   Tipo: **Aplicación web**.
        *   Descripción: (ej. "Juego Eternauta Leaderboard").
        *   Ejecutar como: **Yo** (tu cuenta de Google).
        *   Quién tiene acceso: **Cualquier persona**.
        *   Haz clic en **Implementar**.
        *   **Autoriza** los permisos que Google te solicite (esto es crucial para que el script pueda editar tu hoja).
        *   Copia la **URL de la aplicación web** que se genera.

3.  **Actualizar `script.js`:**
    *   Abre el archivo `script.js` de este repositorio.
    *   Busca la constante `GOOGLE_APPS_SCRIPT_URL`.
    *   Reemplaza el valor placeholder con la **URL de la aplicación web** que obtuviste en el paso anterior.
    *   Si lo deseas, actualiza la constante `YOUTUBE_CHANNEL_URL` con tu propio canal.

4.  **Imágenes:**
    *   Asegúrate de que todas las imágenes referenciadas en `index.html` y `style.css` estén presentes en una carpeta llamada `images/` al mismo nivel que `index.html`.

¡Ahora deberías poder abrir `index.html` en tu navegador y el juego debería funcionar con su propia base de datos!

## 🖼️ Imágenes del Juego

<!-- Reemplaza estos placeholders con tus propias capturas -->
![Screenshot del Juego](https://github.com/adrianpizzurno/eternautagame/blob/22755e6f2b6dbbf0a45c52b6a8e42a3dde082bfe/%7Beternauta%7D2_1.jpg)
![Screenshot del Juego](https://github.com/adrianpizzurno/eternautagame/blob/22755e6f2b6dbbf0a45c52b6a8e42a3dde082bfe/%7Beternauta%7D3_1.jpg)
![Screenshot del Juego](https://github.com/adrianpizzurno/eternautagame/blob/22755e6f2b6dbbf0a45c52b6a8e42a3dde082bfe/%7Beternauta%7D4_1.jpg)
![Screenshot del Juego](https://github.com/adrianpizzurno/eternautagame/blob/22755e6f2b6dbbf0a45c52b6a8e42a3dde082bfe/%7Beternauta%7D5_1.jpg)

## 🙏 Agradecimientos y Apoyo

Este juego es un humilde homenaje a la monumental obra de Héctor Germán Oesterheld y Francisco Solano López.

Si disfrutaste el juego y consideras apoyar al desarrollador para la creación de más proyectos interactivos y educativos, puedes hacerlo a través de:

*   🇦🇷 **En Argentina:** [Invítame un Cafecito](https://cafecito.app/adrianpizzurno)
*   🌍 **Internacional:** [Donar con PayPal](https://paypal.me/pizzurnoadrian?country.x=AR&locale.x=es_XC)

¡Tu apoyo es enormemente apreciado y ayuda a mantener viva la llama de la creatividad!

## 👨‍💻 Creador

*   **Adrian Pizzurno**
    *   YouTube: [@AdrianPizzurno](https://www.youtube.com/@AdrianPizzurno)
    *   Instagram: [@adripizzurno.ia](https://www.instagram.com/adripizzurno.ia)
    *   GitHub: [@adrianpizzurno](https://github.com/adrianpizzurno/) <!-- Reemplaza con tu usuario de GitHub si es diferente -->

---

"El único héroe válido es el héroe en grupo, nunca el héroe individual, el héroe solo." - H.G. Oesterheld
