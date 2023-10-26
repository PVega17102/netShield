const phishingQuestions = [
    {
    "question": "¿Qué es phishing?",
    "options": ["Engañar a las personas para obtener información confidencial", "Enviar correos electrónicos masivos", "Clonar correos electrónicos legítimos", "Realizar llamadas telefónicas alarmantes"],
    "correctAnswer": "Engañar a las personas para obtener información confidencial"
    },
    {
        "question": "¿Cómo se compara el phishing con la pesca en términos de concepto?",
        "options": ["No tienen similitudes", "Ambos implican el uso de anzuelos", "El phishing es un término técnico", "El phishing utiliza la misma tecnología que la pesca"],
        "correctAnswer": "Ambos implican el uso de anzuelos"
    },
    {
        "question": "¿Qué tipo de información confidencial intentan obtener los phishers?",
        "options": ["Información de tarjetas de crédito", "Contraseñas", "Número de seguro social", "Todas las anteriores"],
        "correctAnswer": "Todas las anteriores"
    },
    {
        "question": "¿Qué táctica común utilizan los phishers para asustar a sus víctimas?",
        "options": ["Enviar correos electrónicos amigables", "Clonar sitios web legítimos", "Crear un sentido de urgencia", "Enviar mensajes de texto"],
        "correctAnswer": "Crear un sentido de urgencia"
    },
    {
        "question": "¿Por qué se considera que el phishing ataca la 'mente humana'?",
        "options": ["Porque utiliza malware avanzado", "Porque afecta la memoria de la víctima", "Porque explota vulnerabilidades técnicas", "Porque se basa en la ingeniería social"],
        "correctAnswer": "Porque se basa en la ingeniería social"
    },
    {
        "question": "¿Cuál es el origen del nombre 'phishing'?",
        "options": ["Es una combinación de 'fishing' y 'fun'", "Es una combinación de 'fishing' y 'phony'", "Es un término técnico sin origen específico", "Es un acrónimo de 'Phishing Hacks'."],
        "correctAnswer": "Es una combinación de 'fishing' y 'phony'"
    },
    {
        "question": "En la década de 2000, ¿qué sistemas se convirtieron en un objetivo común para el phishing?",
        "options": ["Sistemas de juego en línea", "Servicios de pago bancario en línea", "Redes sociales", "Servicios de correo electrónico"],
        "correctAnswer": "Servicios de pago bancario en línea"
    },
    {
        "question": "¿Qué información personal en las redes sociales se volvió atractiva para los phishers?",
        "options": ["Nombres de mascotas", "Lugares de vacaciones favoritos", "Detalles personales registrados en los sitios", "Historial de navegación web"],
        "correctAnswer": "Detalles personales registrados en los sitios"
    },
    {
        "question": "¿Qué es el spear phishing y en qué se diferencia de otros tipos de phishing?",
        "options": ["Es un ataque dirigido a una persona u organización específica", "Implica el uso de anzuelos en lugar de correos electrónicos", "Requiere el uso de malware avanzado", "Se basa en la explotación de vulnerabilidades técnicas"],
        "correctAnswer": "Es un ataque dirigido a una persona u organización específica"
    },
    {
        "question": "¿Qué es el phishing de clonación y cómo funciona?",
        "options": ["Es un ataque que implica clonar el aspecto de las víctimas", "Es un ataque que clona correos electrónicos legítimos", "Es un ataque que roba contraseñas", "Es un ataque que envía mensajes de texto falsificados"],
        "correctAnswer": "Es un ataque que clona correos electrónicos legítimos"
    },
    {
        "question": "¿Qué son las '419/Estafas nigerianas'?",
        "options": ["Ataques de phishing dirigidos a bancos nigerianos", "Correos electrónicos de phishing procedentes de Nigeria", "Una forma de phishing que solicita ayuda para transferir dinero desde Nigeria", "Estafas relacionadas con el robo de identidad"],
        "correctAnswer": "Una forma de phishing que solicita ayuda para transferir dinero desde Nigeria"
    },
    {
        "question": "¿Qué es el phishing telefónico?",
        "options": ["Un tipo de phishing que se realiza solo a través de llamadas telefónicas", "Una táctica de phishing que utiliza malware", "Un tipo de phishing que se realiza mediante mensajes de texto", "El uso de llamadas telefónicas para asustar a las víctimas"],
        "correctAnswer": "Un tipo de phishing que se realiza solo a través de llamadas telefónicas"
    },
    {
        "question": "¿Qué es el 'smishing'?",
        "options": ["Un ataque de phishing a través de correo electrónico", "Una táctica de phishing que se dirige a personas mayores", "Un tipo de phishing a través de llamadas telefónicas", "Un ataque de phishing a través de mensajes de texto SMS"],
        "correctAnswer": "Un ataque de phishing a través de mensajes de texto SMS"
    },
    {
        "question": "¿Cómo se puede identificar un intento de phishing?",
        "options": ["No se puede identificar", "Mirar solo el remitente", "Buscar elementos inusuales en el mensaje", "Ignorar cualquier sospecha"],
        "correctAnswer": "Buscar elementos inusuales en el mensaje"
    },
    {
        "question": "¿Por qué es importante no abrir correos electrónicos de remitentes desconocidos?",
        "options": ["Porque siempre contienen malware", "Porque podría contener información irrelevante", "Porque podría ser phishing", "Porque los remitentes desconocidos son siempre spam"],
        "correctAnswer": "Porque podría ser phishing"
    },
    {
        "question": "¿Por qué se recomienda no hacer clic en un enlace en un correo electrónico sin saber a dónde lleva?",
        "options": ["Porque los enlaces en correos electrónicos siempre son peligrosos", "Porque podría abrir un virus", "Porque podría ser un enlace malicioso", "Porque los enlaces son generalmente irrelevantes."],
        "correctAnswer": "Porque podría ser un enlace malicioso"
    },
    {
        "question": "¿Por qué es peligroso abrir archivos adjuntos inesperados o extraños?",
        "options": ["Porque siempre contienen información valiosa", "Porque pueden contener virus o malware", "Porque los archivos adjuntos suelen ser irrelevantes", "Porque aumenta el rendimiento del correo electrónico"],
        "correctAnswer": "Porque pueden contener virus o malware"
    },
    {
        "question": "¿Qué es el HTTPS y por qué es relevante para la seguridad en línea?",
        "options": ["Un protocolo de transferencia de hipertexto", "Una extensión de HTTP para sitios web seguros", "Un acrónimo sin relevancia", "Una tecnología para sitios web lentos."],
        "correctAnswer":  "Una extensión de HTTP para sitios web seguros"
    },
    {
        "question": "¿Cómo se puede verificar la legitimidad de un sitio web?",
        "options": ["Haciendo clic en todos los enlaces en el sitio", "Comprobando si el sitio web es divertido", "Buscando el certificado digital del sitio", "Haciendo una llamada telefónica al sitio web."],
        "correctAnswer": "Buscando el certificado digital del sitio"
    },
    {
        "question": "¿Qué precauciones se deben tomar al recibir correos electrónicos de remitentes desconocidos?",
        "options": ["No tomar precauciones, abrir todo de inmediato", "Reenviarlos a amigos y familiares", "No abrirlos en absoluto", "Verificar la URL del remitente."],
        "correctAnswer": "No abrirlos en absoluto"
    },
    {
        "question": "¿Cuál es la importancia de no hacer clic en un enlace en un correo electrónico sin saber a dónde lleva?",
        "options": ["Para asegurarse de que los enlaces sean coloridos", "Para evitar hacer clic en enlaces", "Para garantizar que los enlaces sean relevantes", "Para asegurarse de que los enlaces sean seguros y auténticos."],
        "correctAnswer": "Para asegurarse de que los enlaces sean seguros y auténticos."
    },
    {
        "question": "¿Cómo se puede navegar manualmente a un sitio web desde un correo electrónico sospechoso?",
        "options": ["Llamando al sitio web", "Haciendo clic en cualquier enlace", "Escribiendo la dirección URL directamente en el navegador", "Reenviando el correo a otros."],
        "correctAnswer": "Escribiendo la dirección URL directamente en el navegador"
    },
    {
        "question": "¿Qué es un certificado digital de un sitio web y por qué es relevante?",
        "options": ["Una insignia de seguridad virtual", "Una firma digital para verificar la autenticidad del sitio", "Un premio para sitios web populares", "Una extensión de URL"],
        "correctAnswer": "Una firma digital para verificar la autenticidad del sitio"
    },
    {
        "question": "¿Cuál es la diferencia entre HTTP y HTTPS en las URL de los sitios web?",
        "options": ["HTTP es más rápido", "HTTP significa 'Hipertexto Transfer Protocol'", "HTTPS indica que el sitio web es seguro", "HTTPS es más fácil de recordar."],
        "correctAnswer": "HTTPS indica que el sitio web es seguro"
    },
    {
        "question": "¿Por qué se recomienda buscar en motores de búsqueda parte del texto de un correo sospechoso?",
        "options": ["Para evitar el correo electrónico", "Para confirmar la legitimidad del correo", "Para verificar si hay otros informes de ataques de phishing similares", "Para encontrar ofertas en línea."],
        "correctAnswer": "Para verificar si hay otros informes de ataques de phishing similares"
    },
    {
        "question": "¿Qué se puede descubrir al pasar el cursor del ratón sobre un enlace en un correo electrónico?",
        "options": ["El número de teléfono del remitente", "La ubicación del remitente", "La URL real a la que lleva el enlace", "La identidad del remitente."],
        "correctAnswer": "La URL real a la que lleva el enlace"
    },
    {
        "question": "¿Cuál es el objetivo principal de un ataque de phishing?",
        "options": ["Robar información confidencial", "Hacer bromas a las víctimas", "Promocionar productos", "Enviar correos electrónicos divertidos"],
        "correctAnswer": "Robar información confidencial"
    },
    {
        "question": "¿Cuáles son las consecuencias de caer en una estafa de phishing?",
        "options": ["Ninguna, no hay consecuencias", "Pérdida de información confidencial y posible robo de identidad", "Mejora de la seguridad en línea", "Obtención de premios y regalos."],
        "correctAnswer": "Pérdida de información confidencial y posible robo de identidad"
    },
    {
        "question": "¿Por qué es el phishing considerado una amenaza igualmente relevante en dispositivos de escritorio, portátiles, tabletas y teléfonos inteligentes?",
        "options": ["Porque solo afecta a dispositivos de escritorio", "Porque los teléfonos inteligentes son inmunes al phishing", "Porque los dispositivos móviles son más seguros", "Porque los phishers adaptan sus ataques a todos los dispositivos."],
        "correctAnswer": "Porque los phishers adaptan sus ataques a todos los dispositivos."
    },
    {
        "question": "¿Cuál es la importancia de la formación y la conciencia de seguridad en la prevención del phishing?",
        "options": ["No es importante", "Es importante solo para expertos en seguridad", "Es fundamental para prevenir ataques de phishing", "Es importante solo para las empresas."],
        "correctAnswer": "Es fundamental para prevenir ataques de phishing"
    },
    {
        "question": "¿Qué son las campañas de phishing masivo y cómo se diferencian del spear phishing?",
        "options": ["Son campañas de marketing", "Son ataques de phishing a gran escala", "Son campañas de publicidad", "No existen campañas de phishing masivo."],
        "correctAnswer": "Son ataques de phishing a gran escala"
    },
    {
        "question": "¿Cómo recopilan información los phishers para llevar a cabo un ataque de spear phishing?",
        "options": ["Mirando a través de ventanas", "Utilizando técnicas de ingeniería social y recopilación de datos", "Rastreando la ubicación de la víctima", "Hackeando computadoras."],
        "correctAnswer": "Utilizando técnicas de ingeniería social y recopilación de datos"
    },
    {
        "question": "¿Cómo se crea un correo electrónico de phishing creíble para un ataque dirigido?",
        "options": ["Copiando y pegando un correo electrónico anterior", "Utilizando una plantilla estándar", "Investigando y personalizando el correo para la víctima", "Enviando el mismo correo a múltiples destinatarios."],
        "correctAnswer": "Investigando y personalizando el correo para la víctima"
    },
    {
        "question": "¿Cómo clonan los phishers correos electrónicos legítimos en el phishing de clonación?",
        "options": ["Utilizando una fotocopiadora", "Copiando manualmente el contenido del correo", "Haciendo un escaneo de la pantalla", "Haciendo una copia exacta del correo anterior y reemplazando enlaces o archivos adjuntos."],
        "correctAnswer":"Haciendo una copia exacta del correo anterior y reemplazando enlaces o archivos adjuntos."
    },
    {
        "question": "¿Por qué es efectiva la táctica de sustituir enlaces o archivos adjuntos en el phishing de clonación?",
        "options": ["Porque hace que los correos electrónicos parezcan más atractivos", "Porque dificulta la lectura de los correos", "Porque engaña a las víctimas haciéndolas pensar que son correos legítimos", "Porque aumenta la velocidad de entrega de los correos."],
        "correctAnswer": "Porque engaña a las víctimas haciéndolas pensar que son correos legítimos"
    },
    {
        "question": "¿Cómo pueden los phishers hacerse pasar por remitentes de confianza en una organización?",
        "options": ["Mediante la creación de identidades falsas", "Mediante el uso de máscaras y disfraces", "Mediante el robo de credenciales de correo electrónico", "Mediante la persuasión y la ingeniería social."],
        "correctAnswer": "Mediante la persuasión y la ingeniería social."
    },
    {
        "question": "¿Cuáles son algunos ejemplos de estafas nigerianas?",
        "options": ["Promoción de productos de belleza", "Envío de premios por correo", "Solicitudes de ayuda para transferir grandes sumas de dinero", "Venta de propiedades de lujo en Nigeria."],
        "correctAnswer": "Solicitudes de ayuda para transferir grandes sumas de dinero"
    },
    {
        "question": "¿Por qué se utilizan palabras como 'urgente' o 'privado' en las estafas nigerianas?",
        "options": ["Para atraer a personas curiosas", "Para generar un sentido de urgencia y manipulación emocional", "Para mejorar la gramática del correo", "Porque son divertidas."],
        "correctAnswer": "Para generar un sentido de urgencia y manipulación emocional"
    },
    {
        "question": "¿Qué es el phishing telefónico y cómo funciona?",
        "options": ["Una técnica para pescar peces por teléfono", "Una estafa que implica llamadas telefónicas fraudulentas", "Una forma de enviar mensajes de texto en lugar de hacer llamadas", "Una técnica para reparar teléfonos dañados."],
        "correctAnswer": "Una estafa que implica llamadas telefónicas fraudulentas"
    },
    {
        "question": "¿Por qué los phishers suelen hacer llamadas telefónicas alarmantes en el phishing telefónico?",
        "options": ["Para asustar a las personas y nublar su juicio", "Porque quieren ser comediantes", "Para ofrecer consejos útiles", "Porque disfrutan haciendo bromas pesadas."],
        "correctAnswer": "Para asustar a las personas y nublar su juicio"
    },
    {
        "question": "¿Qué es el 'smishing' y cómo se compara con el vishing?",
        "options": ["El smishing es un tipo de pez pequeño", "El smishing es una técnica de phishing a través de mensajes de texto SMS, mientras que el vishing se hace por teléfono", "El smishing es un tipo de phishing para redes sociales", "El smishing es una técnica de phishing solo en redes sociales."],
        "correctAnswer": "El smishing es una técnica de phishing a través de mensajes de texto SMS, mientras que el vishing se hace por teléfono"
    },
    {
        "question": "¿Cuál es el propósito de los mensajes de texto SMS en el 'smishing'?",
        "options": ["Ofrecer recomendaciones de restaurantes", "Promocionar servicios de limpieza", "Engañar a las víctimas con enlaces o mensajes falsos", "Enviar mensajes de buenos deseos."],
        "correctAnswer": "Engañar a las víctimas con enlaces o mensajes falsos"
    },
    {
        "question": "¿Qué medidas de seguridad se deben tomar al recibir llamadas telefónicas sospechosas?",
        "options": ["Ignorar todas las llamadas", "Proporcionar toda la información que se solicita", "Verificar la identidad del llamante antes de proporcionar información", "Colgar inmediatamente sin preguntas."],
        "correctAnswer": "Verificar la identidad del llamante antes de proporcionar información"
    },
    {
        "question": "¿Cómo se puede diferenciar un correo electrónico legítimo de uno de phishing?",
        "options": ["Mirando la ortografía y gramática", "No se puede diferenciar, todos los correos son phishing", "Haciendo clic en todos los enlaces", "Leyendo los correos a alta velocidad."],
        "correctAnswer": "Mirando la ortografía y gramática"
    },{
        "question": "¿Cuáles son algunas recomendaciones para mantenerse seguro en línea?",
        "options": ["Compartir contraseñas en línea", "Hacer clic en todos los enlaces", "Mantener el software y los sistemas actualizados", "Ignorar las actualizaciones de seguridad."],
        "correctAnswer": "Mantener el software y los sistemas actualizados"
    },
    {
        "question": "¿Qué pasos deben seguir las personas para protegerse del phishing?",
        "options": ["No hacer nada, el phishing no es un problema real", "Estar atentos a los signos de phishing, verificar URLs y no proporcionar información confidencial", "Hacer clic en todos los enlaces para comprobar su autenticidad", "Compartir información personal con cualquier sitio web."],
        "correctAnswer":"Estar atentos a los signos de phishing, verificar URLs y no proporcionar información confidencial"
    },
    {
        "question": "¿Cuál es la importancia de la educación y la capacitación en seguridad cibernética?",
        "options": ["No es importante, todo el mundo sabe cómo mantenerse seguro en línea", "Es importante solo para los expertos en seguridad", "Es fundamental para prevenir ataques de phishing y otras amenazas cibernéticas", "Es importante solo para las organizaciones."],
        "correctAnswer": "Es fundamental para prevenir ataques de phishing y otras amenazas cibernéticas"
    },
    {
        "question": "¿Qué pueden hacer las organizaciones para protegerse y educar a sus empleados sobre el phishing?",
        "options": ["No hacer nada, el phishing no es un problema para las organizaciones", "Implementar políticas de seguridad y proporcionar capacitación en seguridad cibernética", "Solicitar a los empleados que proporcionen información personal en línea", "No preocuparse por la seguridad cibernética."],
        "correctAnswer": "Implementar políticas de seguridad y proporcionar capacitación en seguridad cibernética"
    },
    {
        "question": "¿Cómo ha evolucionado el phishing a lo largo de los años en respuesta a las medidas de seguridad?",
        "options": ["No ha evolucionado en absoluto", "Ha disminuido significativamente", "Se ha vuelto más sofisticado y adaptado a las medidas de seguridad", "Ha desaparecido por completo."],
        "correctAnswer": "Se ha vuelto más sofisticado y adaptado a las medidas de seguridad"
    },
    {
        "question": "¿Qué es la ingeniería social y cómo se relaciona con el phishing?",
        "options": ["La ingeniería social es un campo de la ingeniería de software", "La ingeniería social es un término para referirse a la construcción de puentes", "La ingeniería social es la manipulación psicológica para engañar a las personas, y es una técnica común en el phishing", "La ingeniería social es una técnica de seguridad en línea."],
        "correctAnswer": "La ingeniería social es la manipulación psicológica para engañar a las personas, y es una técnica común en el phishing"
    },
    {
        "question": "¿Por qué es importante que las organizaciones tengan una política de seguridad de la información?",
        "options": ["Porque las políticas son ineficaces", "Porque no es importante proteger la información", "Para establecer reglas y procedimientos que protejan la información confidencial", "Para complicar las operaciones de la organización."],
        "correctAnswer":  "Para establecer reglas y procedimientos que protejan la información confidencial"
    }
    
]

export default phishingQuestions;