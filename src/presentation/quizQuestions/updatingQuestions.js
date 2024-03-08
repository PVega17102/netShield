const updatingQuestions = [
  {
    "question": "¿Cuál de los siguientes es el propósito principal de las actualizaciones de software?",
    "options": ["Proteger su computadora de las amenazas de seguridad", "Mejorar el rendimiento de su computadora", "Agregar nuevas funciones a su computadora", "Corregir errores y vulnerabilidades"],
    "correctAnswer": "Agregar nuevas funciones a su computadora"
  },
  {
    "question": "¿Qué tipo de vulnerabilidades de seguridad pueden corregir las actualizaciones?",
    "options": ["Vulnerabilidades que permiten que los piratas informáticos accedan a su computadora", "Vulnerabilidades que permiten que los piratas informáticos roben sus datos", "Vulnerabilidades que permiten que los piratas informáticos saboteen su computadora", "Todas las anteriores"],
    "correctAnswer": "Vulnerabilidades que permiten que los piratas informáticos roben sus datos"
  },
  {
    "question": "¿Cómo pueden las actualizaciones mejorar el rendimiento de su computadora?",
    "options": ["Corregiendo errores que pueden ralentizar su computadora", "Optimizando el código para que su computadora funcione más rápido", "Eliminando funciones innecesarias que pueden ralentizar su computadora", "Todas las anteriores"],
    "correctAnswer": "Corregiendo errores que pueden ralentizar su computadora"
  },
  {
    "question": "¿Qué tipo de software es más probable que tenga vulnerabilidades de seguridad?",
    "options": ["Software de código abierto", "Software de código cerrado", "Software gratuito", "Software propietario"],
    "correctAnswer": "Software propietario"
  },
  {
    "question": "¿Cuál es la mejor manera de protegerse de las amenazas de seguridad?",
    "options": ["Actualizar su software con regularidad", "Utilizar un antivirus y un firewall actualizados ademas de actualizar el equipo", "Tener un buen sentido común en línea", "Todas las anteriores"],
    "correctAnswer": "Utilizar un antivirus y un firewall actualizados ademas de actualizar el equipo"
  },
  {
    "question": "¿Por qué es importante mantener su software actualizado?",
    "options": ["Para proteger su computadora de las amenazas de seguridad", "Para mejorar el rendimiento de su computadora", "Para aprovechar las últimas funciones y mejoras", "Todas las anteriores"],
    "correctAnswer": "Para proteger su computadora de las amenazas de seguridad"
  },
  {
      "question": "¿Cuál es el plazo de tiempo recomendado para instalar las actualizaciones de seguridad?",
      "options": ["Dentro de las 24 horas de su publicación", "Dentro de los 7 días de su publicación", "Dentro de los 30 días de su publicación", "En cualquier momento"],
      "correctAnswer": "Dentro de las 24 horas de su publicación"
    },
    {
      "question": "¿Qué es un ransomware?",
      "options": ["Un tipo de malware que cifra los archivos de su computadora y exige un rescate para descifrarlos", "Un tipo de malware que roba sus datos y los envía a un tercero", "Un tipo de malware que se utiliza para robar su identidad", "Todas las anteriores"],
      "correctAnswer": "Un tipo de malware que cifra los archivos de su computadora y exige un rescate para descifrarlos"
    },
    {
      "question": "¿Qué es un malware?",
      "options": ["Un software malicioso que se utiliza para dañar o robar datos", "Un software que no funciona correctamente", "Un software que no es seguro", "Todas las anteriores"],
      "correctAnswer": "Un software malicioso que se utiliza para dañar o robar datos"
    },
    {
      "question": "¿Cuáles son los tipos de malware más comunes?",
      "options": ["Virus", "Troyanos", "Malware de día cero", "Todas las anteriores"],
      "correctAnswer": "Todas las anteriores"
    },
    {
      "question": "¿Cómo puedo proteger mi computadora del malware?",
      "options": ["Instalar un antivirus y un firewall actualizados", "Tener un buen sentido común en línea", "Evitar descargar archivos de fuentes desconocidas", "Todas las anteriores"],
      "correctAnswer": "Todas las anteriores"
    },
    {
      "question": "¿Cómo se clasifican las vulnerabilidades de seguridad?",
      "options": ["Las vulnerabilidades de seguridad se pueden clasificar según su gravedad, impacto y tipo", "Las vulnerabilidades de seguridad se pueden clasificar según su gravedad, impacto y causa", "Las vulnerabilidades de seguridad se pueden clasificar según su gravedad, impacto y frecuencia", "Todas las anteriores"],
      "correctAnswer": "Las vulnerabilidades de seguridad se pueden clasificar según su gravedad, impacto y tipo"
    },
    {
      "question": "¿Qué debo hacer si una actualización de software causa problemas con mi computadora?",
      "options": ["Puede desinstalar la actualización o restaurar su computadora a un estado anterior", "Si la actualización causa problemas con su computadora, puede comunicarse con el desarrollador del software para obtener ayuda", "Si la actualización causa problemas con su computadora, puede instalar una versión anterior del software", "Todas las anteriores"],
      "correctAnswer": "Puede desinstalar la actualización o restaurar su computadora a un estado anterior"
    },
    {
      "question": "¿Qué es una actualización de seguridad crítica?",
      "options": ["Una actualización de seguridad que corrige una vulnerabilidad de seguridad que podría permitir que un pirata informático acceda a su computadora o robe sus datos", "Una actualización de seguridad que corrige una vulnerabilidad de seguridad que podría permitir que un pirata informático ejecute código malicioso en su computadora", "Una actualización de seguridad que corrige una vulnerabilidad de seguridad que podría permitir que un pirata informático se niegue a servir a su computadora", "Todas las anteriores"],
      "correctAnswer": "Una actualización de seguridad que corrige una vulnerabilidad de seguridad que podría permitir que un pirata informático acceda a su computadora o robe sus datos"
    },
    {
      "question": "¿Cuál es el riesgo de no instalar actualizaciones de seguridad?",
      "options": ["Su computadora puede ser vulnerable a ataques de piratas informáticos", "Su computadora puede funcionar mal", "Su computadora puede perder datos", "Todas las anteriores"],
      "correctAnswer": "Su computadora puede ser vulnerable a ataques de piratas informáticos"
    },
      {
        "question": "¿Qué tipo de actualizaciones existen?",
        "options": ["Actualizaciones de seguridad", "Actualizaciones de funciones", "Actualizaciones de rendimiento", "Actualizaciones de correcciones de errores"],
        "correctAnswer": "Actualizaciones de seguridad"
      },
      {
        "question": "¿Qué es un punto de restauración?",
        "options": ["Una copia de seguridad de su computadora que se puede usar para restaurarla a un estado anterior", "Una copia de seguridad de su sistema operativo que se puede usar para restaurarlo a un estado anterior", "Una copia de seguridad de su software que se puede usar para restaurarlo a un estado anterior", "Todas las anteriores"],
        "correctAnswer": "Una copia de seguridad de su computadora que se puede usar para restaurarla a un estado anterior"
      },
      {
        "question": "¿Cuándo se recomienda hacer un punto de restauración?",
        "options": ["Antes de instalar una actualización de software", "Antes de realizar cambios importantes en su computadora", "Antes de ejecutar un programa nuevo", "Todas las anteriores"],
        "correctAnswer": "Antes de ejecutar un programa nuevo"
      },
      {
        "question": "¿Qué beneficios puedo obtener al actualizar mi software?",
        "options": ["Mejorar el rendimiento de mi computadora", "Corregir errores y fallas", "Mejorar la seguridad de mi computadora", "Todas las anteriores"],
        "correctAnswer": "Todas las anteriores"
      },
      {
        "question": "¿Cómo puedo mantener mi software actualizado?",
        "options": ["Habilitar las actualizaciones automáticas", "Comprobar manualmente las actualizaciones", "Instalar las actualizaciones que se ofrecen", "Todas las anteriores"],
        "correctAnswer": "Instalar las actualizaciones que se ofrecen"
      },
      {
        "question": "¿Cómo puedo actualizar mi software?",
        "options": ["A través del centro de actualizaciones de Windows", "A través de la App Store de Apple", "A través del sitio web del desarrollador de software", "Todas las anteriores"],
        "correctAnswer": "A través del sitio web del desarrollador de software"
      },
      {
        "question": "En qué librería se descubrió la vulnerabilidad Hearthbleed",
        "options": ["OpenSSL", "Python", "Java", "PHP"],
        "correctAnswer": "OpenSSL"
      },
      {
        "question": "¿Qué roba la vulnerabilidad hearthbleed?",
        "options": ["Memoria RAM", "Datos personales y tarjetas de credito", "Credenciales de inicio de sesión", "Todas las anteriores"],
        "correctAnswer": "Datos personales y tarjetas de credito"
      },
      {
        "question": "En que año se descubrió la vulnerabilidad hearthbleed",
        "options": ["2014", "2015", "2016", "2017"],
        "correctAnswer": "2014"
      },
      {
        "question": "Para que se usa OpenSSL",
        "options": ["Para cifrar y descifrar datos", "Para autenticar usuarios", "Para generar certificados Fisicos", "Todas las anteriores"],
        "correctAnswer": "Para cifrar y descifrar datos"
      },
      {
        "question": "¿Cómo pueden los desarrolladores de software mitigar las vulnerabilidades de seguridad?",
        "options": ["Realizando pruebas de seguridad", "Utilizando diferentes lenguajes de programacion", "Publicando actualizaciones de seguridad", "Todas las anteriores"],
        "correctAnswer": "Realizando pruebas de seguridad"
      },
      {
        "question": "¿Qué tipos de vulnerabilidades de seguridad pueden explotarse para acceder a una computadora?",
        "options": ["Vulnerabilidades de acceso remoto", "Vulnerabilidades de ejecución remota de código", "Vulnerabilidades fisicas", "Todas las anteriores"],
        "correctAnswer": "Vulnerabilidades de acceso remoto"
      },
      {
        "question": "¿Qué pasa si no se actualiza una computadora?",
        "options": ["Su computadora puede estar expuesta a vulnerabilidades de seguridad", "Su computadora puede funcionar mal", "Su computadora puede perder datos", "Todas las anteriores"],
        "correctAnswer": "Su computadora puede estar expuesta a vulnerabilidades de seguridad"
      },
      {
        "question": "¿Qué tipos de malware hay?",
        "options": ["RandsomeWare", "Troyanos", "Malware", "Todas las anteriores"],
        "correctAnswer": "Todas las anteriores"
      },
      {
          "question": "¿Qué es un parche de seguridad?",
          "options": ["Una actualización de seguridad que corrige una vulnerabilidad de seguridad", "Una actualización de software que agrega nuevas funciones o mejoras al software", "Una actualización de software que corrige un error en el software", "Todas las anteriores"],
          "correctAnswer": "Una actualización de seguridad que corrige una vulnerabilidad de seguridad"
        },
        {
          "question": "¿Qué es la seguridad informática?",
          "options": ["La práctica de proteger sistemas, redes y datos de ataques cibernéticos", "La práctica de desarrollar software seguro", "La práctica de instalar actualizaciones de seguridad", "Todas las anteriores"],
          "correctAnswer": "La práctica de proteger sistemas, redes y datos de ataques cibernéticos"
        },
        {
          "question": "¿Cómo pueden los usuarios aprovechar los beneficios de las actualizaciones de software?",
          "options": [
            "Instalando actualizaciones con regularidad",
            "Evitando instalar actualizaciones",
            "Instalando actualizaciones solo cuando haya problemas",
            "Ninguna de las anteriores"
          ],
          "correctAnswer": "Instalando actualizaciones con regularidad"
        },
        {
          "question": "¿Cuál de los siguientes es un ejemplo de una vulnerabilidad de seguridad?",
          "options": [
            "Un error en el código que podría ser explotado por un pirata informático",
            "Una debilidad en el diseño de un sistema que podría ser explotada por un pirata informático",
            "Una configuración incorrecta que podría ser explotada por un pirata informático",
            "Todas las anteriores"
          ],
          "correctAnswer": "Todas las anteriores"
        },
        {
          "question": "¿Cuál es el objetivo principal de la ciberseguridad?",
          "options": [
            "Proteger los datos de los ataques cibernéticos",
            "Mantener los sistemas informáticos seguros",
            "Proteger la infraestructura crítica",
            "Todas las anteriores"
          ],
          "correctAnswer": "Todas las anteriores"
        },
        {
          "question": "¿Cuál de los siguientes es un ejemplo de una amenaza cibernética?",
          "options": [
            "Un ataque de ransomware",
            "Golpe de estado",
            "Revolucion",
            "Guerra Cibernetica"
          ],
          "correctAnswer": "Un ataque de ransomware"
        },

        {
          "question": "¿Cómo se pueden verificar y realizar actualizaciones de software en un sistema operativo Windows?",
          "options": [
            "Automáticamente y sin intervención del usuario.",
            "Escribiendo 'Buscar actualizaciones' en el navegador.",
            "A través del Panel de Control.",
            "Descargando actualizaciones de fuentes no confiables en línea."
          ],
          "correctAnswer": "Escribiendo 'Buscar actualizaciones' en el navegador."
        },
        {
          "question": "¿Por qué se consideran críticas las actualizaciones de seguridad?",
          "options": [
            "Porque añaden nuevas características al software.",
            "Porque mejoran el rendimiento de la computadora.",
            "Porque corrigen vulnerabilidades que pueden permitir que los ciberdelincuentes accedan a la computadora o datos.",
            "Porque son opcionales y no es necesario instalarlas."
          ],
          "correctAnswer": "Porque corrigen vulnerabilidades que pueden permitir que los ciberdelincuentes accedan a la computadora o datos."
        },
        {
          "question": "¿Puedes mencionar un ejemplo de una vulnerabilidad que se aprovechó debido a la falta de actualizaciones?",
          "options": [
            "Heartbleed",
            "Meltdown",
            "Wannacry",
            "Stuxnet"
          ],
          "correctAnswer": "Heartbleed"
        },
        {
          "question": "¿Cuáles son algunas de las amenazas de seguridad a las que tu computadora está expuesta si no se actualiza el software?",
          "options": [
            "Virus informáticos",
            "Pérdida de datos personales",
            "Ralentización del sistema",
            "Todas las anteriores"
          ],
          "correctAnswer": "Todas las anteriores"
        },
        {
          "question": "¿Qué tipo de software malicioso se utiliza para secuestrar y encriptar datos en un ordenador, exigiendo un rescate a cambio de su liberación?",
          "options": [
            "Virus informáticos",
            "Malware",
            "Trojano",
            "Randsomware"
          ],
          "correctAnswer": "Randsomware"
        },
        {
          "question": "¿Cuál es el propósito de un software tipo 'Trojano'?",
          "options": [
            "Mejorar el rendimiento de la computadora.",
            "Añadir nuevas características al software.",
            "Registrar todas las teclas que el usuario usa.",
            "Optimizar la velocidad de navegación en línea."
          ],
          "correctAnswer": "Registrar todas las teclas que el usuario usa."
        },
        {
          "question": "¿Por qué se recomienda instalar actualizaciones en las primeras 24 horas de su publicación?",
          "options": [
            "Porque así se evitan las actualizaciones problemáticas.",
            "Porque se descubren errores y se realizan modificaciones en las primeras 24 horas.",
            "Porque las actualizaciones no son importantes y no es necesario instalarlas pronto.",
            "Porque el proceso de instalación es más rápido en ese período."
          ],
          "correctAnswer":  "Porque se descubren errores y se realizan modificaciones en las primeras 24 horas."
        },
        {
          "question": "¿Cuál es la principal diferencia entre las actualizaciones de seguridad y las actualizaciones de rendimiento?",
          "options": [
            "Las actualizaciones de seguridad corrigen errores, mientras que las actualizaciones de rendimiento mejoran el rendimiento de la computadora.",
            "Las actualizaciones de seguridad mejoran el rendimiento, mientras que las actualizaciones de rendimiento corrigen errores.",
            "No hay diferencia, ambas actualizaciones tienen el mismo propósito.",
            "Las actualizaciones de seguridad solo son necesarias en redes corporativas."
          ],
          "correctAnswer":               "Las actualizaciones de seguridad mejoran el rendimiento, mientras que las actualizaciones de rendimiento corrigen errores."

        },
        {
          "question": "¿Por qué es importante tener un buen sentido común al navegar en línea en relación con la seguridad informática?",
          "options": [
            "Porque los ciberdelincuentes no existen en línea.",
            "Porque el sentido común no tiene relevancia en seguridad informática.",
            "Para evitar descargar archivos de fuentes desconocidas y no visitar sitios web sospechosos.",
            "Para instalar actualizaciones automáticamente sin cuestionarlas."
          ],
          "correctAnswer": "Para evitar descargar archivos de fuentes desconocidas y no visitar sitios web sospechosos."
        },
        {
          "question": "¿Cuál es el propósito de las actualizaciones automáticas en sistemas operativos como Windows?",
          "options": [
            "Incrementar la velocidad de navegación en línea",
            "Mejorar la estabilidad del sistema operativo",
            "Corregir errores y vulnerabilidades sin necesidad de intervención del usuario",
            "Agregar nuevas funciones al sistema operativo"
          ],
          "correctAnswer": "Corregir errores y vulnerabilidades sin necesidad de intervención del usuario"
        },
        {
          "question": "¿Qué tipo de software se utiliza para proteger una computadora contra amenazas de seguridad?",
          "options": [
            "Software de productividad",
            "Software de entretenimiento",
            "Software de seguridad, como antivirus y firewall",
            "Software de edición de imágenes"
          ],
          "correctAnswer": "Software de seguridad, como antivirus y firewall"
        },
        {
          "question": "¿Por qué es importante realizar pruebas de seguridad durante el desarrollo de software?",
          "options": [
            "Para optimizar la velocidad de navegación en línea",
            "Para añadir nuevas características al software",
            "Para evitar errores y vulnerabilidades que puedan ser explotados por ciberdelincuentes",
            "Para reducir el rendimiento de la computadora"
          ],
          "correctAnswer": "Para evitar errores y vulnerabilidades que puedan ser explotados por ciberdelincuentes"
        },{
          "question": "¿Qué hace un punto de restauración del sistema?",
          "options": [
            "Protege contra ataques de seguridad",
            "Permite revertir cambios en el sistema en caso de problemas después de una actualización importante",
            "Acelera el proceso de instalación de software",
            "Elimina por completo el sistema operativo"
          ],
          "correctAnswer": "Permite revertir cambios en el sistema en caso de problemas después de una actualización importante"
        },
        {
          "question": "¿Qué tipo de actualización suele corregir errores que pueden hacer que una computadora sea vulnerable a ataques?",
          "options": [
            "Actualizaciones de funciones",
            "Actualizaciones de calidad",
            "Actualizaciones de rendimiento",
            "Actualizaciones de seguridad"
          ],
          "correctAnswer":"Actualizaciones de rendimiento"
        },
        {
          "question": "¿Por qué es importante leer las notas de cambios en las actualizaciones?",
          "options": [
            "Brindan informacion util acerca de el sistema operativo",
            "Informan acerca de los cambios en el mundo",
            "Dan informacion acerca de los cambios realizados en la actualizacion",
            "Todas las anteriores"
          ],
          "correctAnswer": "Dan informacion acerca de los cambios realizados en la actualizacion"
        },
        {
          "question": "¿Por qué es importante evitar descargar archivos de fuentes desconocidas?",
          "options": [
            "Para mejorar el rendimiento de la computadora",
            "Porque los archivos de fuentes desconocidas siempre son dañinos",
            "Porque estos archivos pueden contener malware o software malicioso",
            "Para aumentar la velocidad de navegación en línea"
          ],
          "correctAnswer":  "Porque estos archivos pueden contener malware o software malicioso"
        }
        
        
        
]

export default updatingQuestions;