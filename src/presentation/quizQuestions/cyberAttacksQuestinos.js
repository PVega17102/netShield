const cyberAtacksQuestions = [
    {
        "question": "¿Qué es un ciberataque?",
        "options": ["Una celebración en línea", "Un intento malicioso de acceder, dañar o robar información de un sistema informático", "Un juego de video", "Una red social popular"],
        "correctAnswer": "Un intento malicioso de acceder, dañar o robar información de un sistema informático"
    },
    {
        "question": "¿Cuál de las siguientes no es una amenaza cibernética común?",
        "options": ["Malware", "Ransomware", "Hardware", "Phishing"],
        "correctAnswer": "Hardware"
    },
    {
        "question": "¿Qué hace el phishing?",
        "options": ["Ataca sistemas informáticos", "Bloquea el acceso a archivos", "Engaña a las personas para obtener información personal", "Cifra datos"],
        "correctAnswer": "Engaña a las personas para obtener información personal"
    },
    {
        "question": "¿Cuál es una forma de protegerse contra ciberataques?",
        "options": ["Compartir contraseñas", "No instalar actualizaciones", "Usar una red VPN", "Hacer clic en enlaces sospechosos"],
        "correctAnswer": "Usar una red VPN"
    },
    {
        "question": "¿Qué hace un software antivirus?",
        "options": ["Hace copias de seguridad de tus datos", "Protege tu conexión a Internet", "Detecta y elimina malware", "Envía correos electrónicos maliciosos"],
        "correctAnswer": "Detecta y elimina malware"
    },
    {
        "question": "¿Qué es la ingeniería social en el contexto de la ciberseguridad?",
        "options": ["La construcción de edificios", "La manipulación psicológica para obtener información confidencial", "Programación de software", "La creación de contraseñas seguras"],
        "correctAnswer": "La manipulación psicológica para obtener información confididencial"
    },
    {
        "question": "¿Qué debes hacer para mantener tus sistemas seguros?",
        "options": ["Mantenerlos desactualizados", "Compartir contraseñas en línea", "Mantenerlos actualizados con parches de seguridad", "Desactivar los firewalls"],
        "correctAnswer": "Mantenerlos actualizados con parches de seguridad"
    },
    {
        "question": "¿Qué tipo de contraseña es más segura?",
        "options": ["'password123'", "'12345'", "'P@ssw0rd!'", "'8Xq&$5z#uY'"],
        "correctAnswer": "'8Xq&$5z#uY'"
    },
    {
        "question": "¿Cuál de las siguientes no es una forma de proteger tu correo electrónico contra el phishing?",
        "options": ["No abrir correos electrónicos de remitentes desconocidos", "Verificar la ortografía y gramática en los correos electrónicos", "Hacer clic en enlaces de correo electrónico sin verificar", "Usar un filtro de correo no deseado"],
        "correctAnswer": "Hacer clic en enlaces de correo electrónico sin verificar"
    },
    {
        "question": "¿Qué significa VPN en el contexto de la ciberseguridad?",
        "options": ["Ventanas Personales de Navegación", "Red de Protección Virtual", "Virtual Private Network (Red Privada Virtual)", "Red de Virus de Protección"],
        "correctAnswer": "Virtual Private Network (Red Privada Virtual)"
    },
    {
        "question": "¿Cuál de las siguientes NO es una forma común de malware?",
        "options": ["Enviar un regalo virtual", "Un virus se propaga a través de archivos, mientras que un gusano se propaga de forma autónoma", "Redes sociales", "Hacer clic en un enlace en un correo electrónico no solicitado"],
        "correctAnswer": "Redes sociales"
    },
    {
        "question": "¿Qué es un ataque de fuerza bruta en ciberseguridad?",
        "options": ["Un ataque de alta velocidad", "Un ataque que usa fuerza física", "Un intento de adivinar contraseñas adivinando repetidamente", "Un ataque que infecta tu computadora con virus"],
        "correctAnswer": "Un intento de adivinar contraseñas adivinando repetidamente"
    },
    {
        "question": "¿Qué debe contener una contraseña segura?",
        "options": ["Tu nombre y fecha de nacimiento", "Letras mayúsculas y minúsculas, números y caracteres especiales", "La palabra 'contraseña'", "Una palabra en otro idioma"],
        "correctAnswer": "Letras mayúsculas y minúsculas, números y caracteres especiales"
    },
    {
        "question": "¿Qué es el 'criptojacking'?",
        "options": ["El robo de criptomonedas", "La encriptación de datos", "El secuestro de recursos de tu computadora para minar criptomonedas sin tu permiso", "Un tipo de ataque de fuerza bruta"],
        "correctAnswer": "El secuestro de recursos de tu computadora para minar criptomonedas sin tu permiso"
    },
    {
        "question": "¿Cuál de las siguientes NO es una medida de seguridad física para proteger tus datos?",
        "options": ["Cerrar sesión cuando termines de trabajar en un dispositivo", "Almacenar tus dispositivos en un lugar seguro", "Utilizar bloqueo de pantalla con contraseña", "Compartir tus contraseñas con colegas de confianza"],
        "correctAnswer": "Compartir tus contraseñas con colegas de confianza"
    },
    {
        "question": "¿Por qué es importante realizar copias de seguridad de tus datos regularmente?",
        "options": ["Para liberar espacio en tu disco duro", "Para proteger tus datos en caso de pérdida o daño", "Para acelerar tu computadora", "Para compartir tus datos con otros"],
        "correctAnswer": "Para proteger tus datos en caso de pérdida o daño"
    },
    {
        "question": "¿Qué acción no debes tomar al recibir un correo electrónico sospechoso?",
        "options": ["Abrir todos los archivos adjuntos", "Hacer clic en enlaces desconocidos", "Responder al remitente", "Eliminar el correo electrónico"],
        "correctAnswer": "Hacer clic en enlaces desconocidos"
    },
    {
        "question": "¿Cuál es la diferencia entre un virus y un gusano en el contexto de ciberseguridad?",
        "options": ["No hay diferencia, son sinónimos", "Un virus se propaga a través de archivos, mientras que un gusano se propaga de forma autónoma", "Un virus es un tipo de malware, y un gusano es un tipo de hardware", "Un virus solo afecta a computadoras personales, mientras que un gusano afecta a servidores"],
        "correctAnswer": "Un virus se propaga a través de archivos, mientras que un gusano se propaga de forma autónoma"
    },
    {
        "question": "¿Qué es un 'firewall de hardware'?",
        "options": ["Un cortafuegos virtual en la nube", "Un dispositivo físico que filtra el tráfico de red y protege contra amenazas en la red", "Una contraseña segura", "Un programa de edición de video"],
        "correctAnswer": "Un dispositivo físico que filtra el tráfico de red y protege contra amenazas en la red"
    },
    {
        "question": "¿Cuál de las siguientes es una medida de seguridad recomendada para proteger tu red Wi-Fi en casa?",
        "options": ["No configurar una contraseña", "Utilizar la encriptación WPA3", "Compartir la contraseña con todos tus vecinos", "Cambiar la contraseña una vez al mes"],
        "correctAnswer": "Utilizar la encriptación WPA3"
    },
    {
        "question": "¿Qué es un firewall?",
        "options": ["Un dispositivo para calentar la casa", "Un programa que protege tu computadora contra virus", "Un sitio web de redes sociales", "Un tipo de ciberataque"],
        "correctAnswer": "Un programa que protege tu computadora contra virus"
    },
    {
        "question": "¿Cuál de las siguientes NO es una señal de un correo electrónico de phishing?",
        "options": ["Errores ortográficos y gramaticales", "Un remitente conocido", "Solicitudes de información personal", "Enlaces sospechosos"],
        "correctAnswer": "Un remitente conocido"
    },
    {
        "question": "¿Cuál es la primera regla de la seguridad de contraseñas?",
        "options": ["Utilizar la misma contraseña para todo", "Compartir tu contraseña con amigos cercanos", "Nunca compartirla con nadie", "Cambiarla solo una vez al año"],
        "correctAnswer": "Nunca compartirla con nadie"
    },
    {
        "question": "¿Qué es un 'escaneo de puertos'?",
        "options": ["Un servicio de entrega de paquetes", "Una técnica para buscar vulnerabilidades en una red", "Un programa antivirus", "Un tipo de malware"],
        "correctAnswer": "Una técnica para buscar vulnerabilidades en una red"
    },
    {
        "question": "¿Cuál de las siguientes NO es una práctica segura al navegar en línea?",
        "options": ["Utilizar una red Wi-Fi pública sin protección", "Compartir información personal en redes sociales", "Usar una VPN al conectarse a una red pública", "Actualizar regularmente tu software"],
        "correctAnswer": "Utilizar una red Wi-Fi pública sin protección"
    },
    {
        "question": "¿Cuál de las siguientes es una medida de seguridad en la nube?",
        "options": ["Almacenar todos tus datos en una carpeta pública", "Encriptar tus archivos antes de cargarlos a la nube", "Compartir tus contraseñas con el proveedor de la nube", "No hacer copias de seguridad de tus datos"],
        "correctAnswer": "Encriptar tus archivos antes de cargarlos a la nube"
    },
    {
        "question": "¿Qué es un 'phishing de ingeniería social'?",
        "options": ["Un tipo de phishing que se realiza en el mar", "Un ataque cibernético que usa una contraseña débil", "Una forma avanzada de ransomware", "Un intento de manipular psicológicamente a una persona para obtener información confidencial"],
        "correctAnswer": "Un intento de manipular psicológicamente a una persona para obtener información confidencial"
    },
    {
        "question": "¿Qué deben hacer las empresas para protegerse contra ciberataques?",
        "options": ["Ignorar la seguridad en línea", "No capacitar a los empleados en ciberseguridad", "Implementar políticas de seguridad, capacitación y medidas de seguridad técnicas", "Utilizar contraseñas fáciles de adivinar"],
        "correctAnswer": "Implementar políticas de seguridad, capacitación y medidas de seguridad técnicas"
    },
    {
        "question": "¿Cuál es la diferencia entre un virus y un gusano en el contexto de ciberseguridad?",
        "options": ["No hay diferencia, son sinónimos", "Un virus se propaga a través de archivos, mientras que un gusano se propaga de forma autónoma", "Un virus es un tipo de malware, y un gusano es un tipo de hardware", "Un virus solo afecta a computadoras personales, mientras que un gusano afecta a servidores"],
        "correctAnswer": "Un virus se propaga a través de archivos, mientras que un gusano se propaga de forma autónoma"
    },
    {
        "question": "¿Cuál de las siguientes es una señal de un posible ataque de phishing por correo electrónico?",
        "options": ["Un enlace a un sitio web oficial", "Un remitente de confianza", "Solicitudes inusuales de información personal o financiera", "Correos electrónicos en la carpeta de entrada"],
        "correctAnswer": "Solicitudes inusuales de información personal o financiera"
    },
    {
        "question": "¿Qué significa 'HTTP' en una dirección web?",
        "options": ["HyperText Transfer Protocol", "High-Tech Password", "Hidden Technical Process", "Home to The Public"],
        "correctAnswer": "HyperText Transfer Protocol"
    },
    {
        "question": "¿Por qué es importante evitar el uso de contraseñas fáciles de adivinar, como '123456' o 'password'?",
        "options": ["Son más fáciles de recordar", "Son más seguras", "Son difíciles de escribir", "Son vulnerables a ataques de fuerza bruta"],
        "correctAnswer": "Son vulnerables a ataques de fuerza bruta"
    },
    {
        "question": "¿Cuál de las siguientes afirmaciones describe mejor un ataque de ransomware?",
        "options": ["Un ataque que roba contraseñas", "Un ataque que secuestra tus recursos de computadora para minar criptomonedas", "Un ataque que bloquea el acceso a tus archivos hasta que pagues un rescate", "Un ataque que se propaga a través de correos electrónicos no solicitados"],
        "correctAnswer": "Un ataque que bloquea el acceso a tus archivos hasta que pagues un rescate"
    },
    {
        "question": "¿Qué es un 'backup' en ciberseguridad?",
        "options": ["Un archivo que contiene todos tus datos personales", "Una copia de seguridad de tus datos importantes", "Un tipo de ataque de phishing", "Un programa antivirus"],
        "correctAnswer": "Una copia de seguridad de tus datos importantes"
    },
    {
        "question": "¿Qué significa '2FA' en seguridad cibernética?",
        "options": ["Two-Factor Authentication (Autenticación de Dos Factores)", "Two-Factor Authorization (Autorización de Dos Factores)", "Twice the Firewall Access (Doble Acceso al Firewall)", "To Find Answers (Encontrar Respuestas)"],
        "correctAnswer": "Two-Factor Authentication (Autenticación de Dos Factores)"
    },
    {
        "question": "¿Qué es un 'ciberataque de denegación de servicio' (DDoS)?",
        "options": ["Un ataque que roba información confidencial", "Un ataque que bloquea el acceso a tu computadora", "Un ataque que busca sobrecargar un sitio web o servicio en línea para que sea inaccesible", "Un ataque que utiliza contraseñas fuertes"],
        "correctAnswer": "Un ataque que busca sobrecargar un sitio web o servicio en línea para que sea inaccesible"
    },
    {
        "question": "¿Cuál de las siguientes es una buena práctica para proteger tus datos en un dispositivo móvil?",
        "options": ["Rootear o hacer jailbreak al dispositivo", "Descargar aplicaciones solo desde fuentes confiables", "Compartir tu contraseña de bloqueo con amigos", "No actualizar el sistema operativo"],
        "correctAnswer": "Descargar aplicaciones solo desde fuentes confiables"
    },
    {
        "question": "¿Por qué es importante educar a los empleados sobre la ciberseguridad en una organización?",
        "options": ["Para darles acceso ilimitado a los sistemas", "Para que puedan realizar ciberataques", "Para ayudarles a reconocer amenazas y proteger la organización", "Para aumentar la carga de trabajo de los empleados"],
        "correctAnswer": "Para ayudarles a reconocer amenazas y proteger la organización"
    },
    {
        "question": "¿Qué es un 'certificado SSL' en un sitio web?",
        "options": ["Un certificado para usar Internet de forma segura y sin restricciones", "Una licencia para software", "Un protocolo de transferencia de archivos", "Un certificado de seguridad que garantiza la conexión cifrada entre el usuario y el sitio web"],
        "correctAnswer": "Un certificado de seguridad que garantiza la conexión cifrada entre el usuario y el sitio web"
    },
    {
        "question": "¿Qué es el 'pharming'?",
        "options": ["Una técnica de pesca deportiva en la web.", "Un ataque que cambia la dirección IP de un sitio web legítimo a otra dirección maliciosa.", "Una red social popular.", "Un tipo de correo no deseado."],
        "correctAnswer": "Un ataque que cambia la dirección IP de un sitio web legítimo a otra dirección maliciosa."
    },
    {
        "question": "¿Qué es un 'parche de seguridad' en ciberseguridad?",
        "options": ["Un tipo de software malicioso.", "Una actualización que soluciona una vulnerabilidad de seguridad en un programa o sistema.", "Un certificado SSL.", "Una contraseña fuerte."],
        "correctAnswer": "Una actualización que soluciona una vulnerabilidad de seguridad en un programa o sistema."
    },
    {
        "question": "¿Cuál de las siguientes afirmaciones describe mejor un 'ataque de suplantación' (spoofing)?",
        "options": ["Un ataque que bloquea el acceso a un sitio web.", "Un ataque que modifica el contenido de una página web.", "Un ataque que falsifica la identidad de un sitio o una entidad legítima.", "Un ataque que cifra los datos de un usuario."],
        "correctAnswer": "Un ataque que falsifica la identidad de un sitio o una entidad legítima."
    },
    {
        "question": "¿Qué es una 'cookie' en el contexto de la seguridad en línea?",
        "options": ["Un archivo de texto que se almacena en tu computadora y rastrea la actividad en línea.", "Una contraseña fuerte.", "Una red de área local (LAN).", "Una dirección IP."],
        "correctAnswer": "Un archivo de texto que se almacena en tu computadora y rastrea la actividad en línea."
    },
    {
        "question": "¿Cuál de las siguientes es una medida de seguridad para proteger tus datos en redes sociales?",
        "options": ["Compartir tu ubicación en tiempo real.", "Utilizar contraseñas fáciles de adivinar.", "Limitar la información personal compartida y ajustar la configuración de privacidad.", "Agregar a todos los que te envíen solicitudes de amistad."],
        "correctAnswer": "Limitar la información personal compartida y ajustar la configuración de privacidad."
    },
    {
        "question": "¿Qué significa 'criptomonedas' en ciberseguridad?",
        "options": ["Monedas físicas fabricadas con materiales criptográficos.", "Monedas virtuales que utilizan tecnología de cifrado para garantizar transacciones seguras.", "Documentos falsificados.", "Una forma de malware."],
        "correctAnswer": "Monedas virtuales que utilizan tecnología de cifrado para garantizar transacciones seguras."
    },
    {
        "question": "¿Cuál de las siguientes NO es una medida para proteger tus datos en un dispositivo móvil?",
        "options": ["Mantener el sistema operativo actualizado.", "Instalar aplicaciones solo desde tiendas de aplicaciones oficiales.", "Compartir tu contraseña con amigos.", "Utilizar una contraseña o PIN para bloquear la pantalla."],
        "correctAnswer": "Compartir tu contraseña con amigos."
    },
    {
        "question": "¿Qué es un 'ciberseguro' o 'seguro cibernético'?",
        "options": ["Un seguro que protege contra ataques de piratas informáticos.", "Un programa antivirus.", "Una forma de malware.", "Un programa de edición de fotos."],
        "correctAnswer": "Un seguro que protege contra ataques de piratas informáticos."
    },
    {
        "question": "¿Cuál de las siguientes NO es una medida de seguridad de red inalámbrica?",
        "options": ["Cambiar la contraseña predeterminada del enrutador.", "No usar encriptación para la red.", "Configurar el filtrado de direcciones MAC.", "Ocultar el nombre de la red (SSID)."],
        "correctAnswer": "No usar encriptación para la red."
    },
    {
        "question": "¿Qué es un 'firewall de hardware'?",
        "options": ["Un cortafuegos virtual en la nube.", "Un dispositivo físico que filtra el tráfico de red y protege contra amenazas en la red.", "Una contraseña segura.", "Un programa de edición de video."],
        "correctAnswer": "Un dispositivo físico que filtra el tráfico de red y protege contra amenazas en la red."
    }
]

export default cyberAtacksQuestions;