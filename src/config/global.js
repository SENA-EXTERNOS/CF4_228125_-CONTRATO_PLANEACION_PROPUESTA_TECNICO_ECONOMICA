export default {
  global: {
    componenteFormativo:
      'Contrato y planeación de propuesta técnico económica ',
    descripcionCurso:
      '​En este recorrido temático, vamos a plantear una propuesta de manera técnico-económica de acuerdo con las necesidades del cliente y respetando los requerimientos. Lo anterior se hará teniendo en cuenta las normativas, legislaciones y condiciones contractuales de este proceso. Se realiza también una estimación de desarrollo, costos y el talento humano requerido para el proyecto en curso; además del uso de las herramientas para calcular los costos y generar recursos económicos monetizando un servicio o un producto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aspectos mínimos en un contrato de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Contrato de <i>software</i>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de contratos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Normativa y legislaciones en la contratación de <i>software</i>',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cálculo de costos de <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de estimación de proyectos de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas de estimación del tamaño del <i>software</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Técnicas de estimación de esfuerzo (cantidad de personas necesarias)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estimación de cronogramas (tiempo)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Licenciamiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de estimación de proyectos de <i>software</i>',
      referencia:
        'Iacono, M. (2021, marzo 8). <i>Técnicas de estimación de proyectos de software</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=47DKIbfcVlY',
    },
    {
      tema: 'Contrato de <i>software</i>',
      referencia:
        'Código ISC (2020, diciembre 15). <i>Partes del contrato de software o contrato informático</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SKWQSGjufg4',
    },
    {
      tema: 'Licenciamiento',
      referencia:
        'OpenWebinars (2019, agosto 11). <i>Licencias de Software (y sus tipos de licencia)</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Sz07vfAlqYo',
    },
    {
      tema: 'Estimación',
      referencia:
        'Infortech (2021, julio 24). <i>Presupuesto y Estimación de Proyecto de software</i> [Video]. YouTube. ',
      tipo: '',
      link: 'https://youtu.be/Scz9te0Ylfo',
    },
  ],
  glosario: [
    {
      termino: 'Administración de proyectos',
      significado:
        'es una estrategia usada por empresas e instituciones para alcanzar objetivos en un tiempo determinado. También puede usarse para objetivos personales.',
    },
    {
      termino: 'Contrato',
      significado:
        'es un instrumento jurídico que regula la ejecución de una obra, prestación de un servicio o suministro de bienes, incluidas las órdenes de compras y órdenes de servicio, que contendrían, al menos, las siguientes condiciones: precio, cantidades, forma de pago, tiempo y forma de entrega y especificaciones contenidas en el pliego de condiciones, si fuere necesario.',
    },
    {
      termino: '<i>Copyright</i>',
      significado:
        'es la forma de atribuir la autoría a alguien que ha creado una obra, además de proporcionarle una serie de derechos como autor.',
    },
    {
      termino: 'Estimación',
      significado:
        'es un cálculo que se realiza a partir de la evaluación estadística. Dicho estudio suele efectuarse sobre una muestra y no sobre toda la población objetivo.',
    },
    {
      termino: 'Gestión de costos del proyecto',
      significado:
        'proceso relacionado con planificación, estimación, determinación y control de los costos que busca completar la ejecución del proyecto dentro del presupuesto aprobado.',
    },
    {
      termino: 'Inflación',
      significado:
        'en economía, es el crecimiento generalizado y sostenido de los precios de bienes y servicios durante un periodo de tiempo determinado.',
    },
    {
      termino: 'Proyecto',
      significado:
        'es una planificación que consiste en un conjunto de actividades que se encuentran interrelacionadas y coordinadas entre sí y que cumplen los objetivos de calidad esperados.',
    },
    {
      termino: 'Licenciamiento',
      significado:
        'son un tipo de acuerdo contractual que establece las normas para el uso de un producto. Existen varias licencias en función de las condiciones para su uso o de su gratuidad.',
    },
    {
      termino: '<i>Software</i> libre:',
      significado:
        'es aquel que les da a sus usuarios la libertad de ejecutar, copiar, estudiar, modificar y distribuir el software.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'es la expectativa en función del crecimiento económico, el bienestar social y la conservación del ambiente producto del logro exitoso de los objetivos del proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Colombia Compra Eficiente (2020). Guía de buenas prácticas en la adquisición de Software y servicios asociados. Departamento Nacional de Planeación.',
      link:
        'https://www.colombiacompra.gov.co/sites/cce_public/files/cce_documents/guia_de_buenas_practicas_software_ver1_logo01.pdf',
    },
    {
      referencia:
        'Iteckne vol.17 no.2 Bucaramanga July/Dec. 2020  Epub Mar 01, 2021',
      link: '',
    },
    {
      referencia:
        'Méndez, E. R. (2018). Estimación de esfuerzo en proyectos de desarrollo de software con metodologías ágiles. [Tesis de máster en Gestión y Dirección de Proyectos, Universitat Politècnica de València]',
      link: '',
    },
    {
      referencia:
        'Pérez, I.; López, P.; Varona, E.; Piñero, P. y García, R. (2018): Construcción de resúmenes lingüísticos a partir de rasgos de la personalidad y el desempeño en el desarrollo de software. Revista Cubana de Ciencias Informáticas, 12, 135-150.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. R. (2005). Gestión de Proyectos Informáticos: Métodos, herramientas y casos. Editorial UOC.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
