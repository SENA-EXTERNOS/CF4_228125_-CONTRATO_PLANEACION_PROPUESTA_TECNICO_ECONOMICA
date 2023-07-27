<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de estimación de proyectos de #[i software]

    .row.mb-5
      p El primer elemento de un proyecto de #[i software], es la planificación. En esta etapa del proceso, una de las tareas con mayor valor es la estimación, tanto de recursos, esfuerzos, costos y tiempos para el buen desarrollo del proyecto.

    .row.mb-5
      .bloque-texto-g.color-secundario.p-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4
          p.mb-0 Evaluar los elementos que tienen relación con un proyecto (cronograma, esfuerzo, costo, personal, etc.), requiere conocer su alcance para estimar las posibles acciones, contrastar opciones y obtener cálculos de los costos, antes de decidirse por un enfoque determinado.

    .row.mb-5
      .tarjeta.tarjeta--azul5.p-5
        SlyderA(tipo="b")
          .row
            .col-lg-7
              p Dentro del entorno de un proyecto de #[i software], existen diferentes factores a estimar; por ejemplo, el cálculo del tiempo de ejecución de cada una de las actividades a realizar dentro del proyecto (análisis, gestión, desarrollo, pruebas, etc.), o del proyecto en general, así como las validaciones de los casos de prueba por los riesgos, casos de uso, el esfuerzo a realizar, entre distintos índices estimables.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', alt='')

          .row
            .col-lg-7
              p Cualquier esfuerzo por estimar los tiempos, costos o recursos a largo plazo, implica estimaciones. Cuando se realizan la planificación y la gestión de proyectos, lo primero que se hace es la estimación del tamaño del #[i software], para luego calcular el esfuerzo necesario y los posibles cronogramas.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img3.svg', alt='')

          .row
            .col-lg-7
              p La tarea de estimar los costos suele ser una de las primeras cosas que se hacen en un proyecto, a menudo después de definir los requisitos. Sin embargo, esta tarea se suele realizar de forma regular a lo largo de la ejecución del proyecto con el fin de ajustar la precisión de la estimación inicial.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img4.svg', alt='').p-1

          .row
            .col-lg-7
              p En otras palabras, estimar es difícil, y una forma adecuada de acercarse a esto puede ser desarrollando los requerimientos de manera incremental, detallando las estimaciones a medida que se obtiene más información. Estimar temprano puede ser peligroso, ya que al comienzo de un sistema, la cantidad de información que se tiene suele ser muy limitada, lo que dificulta el proceso.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img5.svg', alt='')

          .row
            .col-lg-7
              p Resulta útil tener muy claros los usos principales de la estimación de costos en la administración de proyectos:
              ul.lista-ul--color
                li 
                  i.fas.fa-circle.color-vineta
                  | La etapa de planteamiento posibilita indicar la cantidad de personas que se requieren para la ejecución del proyecto y establecer cronogramas correctos.
                li 
                  i.fas.fa-circle.color-vineta
                  p.mb-0 Durante el desarrollo del proyecto, permite conocer su alcance y calcular si el proyecto se está desarrollando según lo indicado en el cronograma. De lo contrario, se deberá crear un plan de acción a tiempo. Para lo anterior, es necesario contar con métricas que permitan calcular el nivel de cumplimiento del desarrollo del #[i software].

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='')

          .row
            .col-lg-7
              p En el campo de la ingeniería de #[i software], la estimación de costos se refiere a determinar el alcance del #[i software] y la cantidad de personas necesarias para desarrollar el producto. Existe una fuerte conexión entre calidad, costo y cronograma, ya que estos tres aspectos están estrechamente relacionados entre sí.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img7.svg', alt='')

          .row
            .col-lg-7
              p La complejidad de mejorar la calidad de un software sin aumentar su costo y/o su plazo de ejecución se señala en lo anterior. Como resultado, el plazo de desarrollo no puede reducirse significativamente sin afectar la calidad del producto y/o aumentar el costo de desarrollo. Los modelos de estimación tienen un papel importante en este sentido, ya que permiten equilibrar estos tres factores.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img8.svg', alt='')

    .bg2.p-lg-5
      .row.mt-5
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema2/img9-1.svg', alt='').img9-1-tm2    
        .col-lg-9.mt-5
          .tarjeta--azul4.p-3
            p.texto-blanco Una historia de usuario es una definición breve, informal y en lenguaje sencillo, de lo que un usuario quiere hacer dentro de un producto de #[i software], para conseguir algo que le resulte valioso.
            p.texto-blanco Es necesario resaltar que el proceso de estimación es impredecible dado que se intenta medir elementos como el esfuerzo, tamaño y costos de un proyecto que aún no ha iniciado y del cual es muy probable que se tenga poca información. Es muy importante que el representante de la gestión del proyecto posea buen conocimiento del tema, que tenga en cuenta trabajos pasados para no repetir los mismos problemas anteriores, y sea una persona con características que le permitan prever posibles riesgos. Además, hay que tener presente que la estimación en horas tempranas es de mayor riesgo, por lo que hay que realizar constantemente validaciones y ajustes a las estimaciones ya existentes. Las historias de usuario, suelen seguir el patrón rol – función – beneficio.


    h2.my-5(data-aos="fade-up-right") Técnicas de estimación del tamaño del #[i software] 

    .row.mb-5
      p Hay diferentes métodos para evaluar el tamaño del #[i software], como por ejemplo:

    h3(style="color: #0B5999").mb-4 Medición de líneas de código fuente producidas (SLOC)

    .row.justify-content-center.mb-3
      .col-6.col-lg-2.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='')        
      .col-lg-10
        p Es una de las técnicas más conocidas, pero requiere disponer del código, lo que representa una restricción para realizar estimaciones tempranas, debido a que la información que se obtiene en esos momentos y el tiempo del que se dispone para las primeras estimaciones del proyecto, son normalmente escasos. De todas las etapas en las cuales puede realizarse la estimación, cuando menos datos/información se tiene para realizarla, es en el momento inicial, cuando todavía se está revisando la factibilidad del proyecto. Desde el punto de vista del desarrollo y comercialización del #[i software] específico para terceros, esa estimación temprana tiene gran importancia. Sin embargo, la tarea de estimación no se realiza una sola vez en el proyecto, sino que, a medida que se cuenta con más datos/información, se realizan excelentes estimaciones que permiten una mejor planificación de lo que falta del proyecto.

    h3(style="color: #0B5999").mb-4 Puntos de Función (FP)

    .row.justify-content-center.mb-3
      .col-lg-10
        p El Análisis de Puntos de Función (FPA), provee un enfoque alternativo porque permite estimar el tamaño del #[i software], basándose en los requerimientos y luego la cantidad de SLOC se puede evaluar desde el tamaño en Puntos Función (FP). En etapas iniciales del ciclo de vida, se identifican los “Actores” y los “Casos de Uso del Sistema” y se documenta cada uno de estos, mediante una pequeña descripción. Ejecutando el Análisis de Puntos de Función a estos Casos de Uso, se podrá conseguir una estimación de mayor tamaño y, a partir de ella, el esfuerzo ejecutado. Más adelante, cuando se obtengan más datos acerca del sistema, se podrá refinar el análisis. Posteriormente, se aumenta la documentación de cada Caso de Uso, definiendo los escenarios que se producen dentro de los mismos. Un escenario explica la secuencia de pasos que deben efectuar los actores y el sistema durante la reproducción del Caso de Uso. Si se ejecuta nuevamente el Análisis de Puntos de Función sobre estos Casos de Uso con mayor detalle, la estimación del esfuerzo y tamaño será más puntual que la anterior. El FPA calcula el tamaño del #[i software] determinando la funcionalidad provista al usuario, basándose solamente en las especificaciones funcionales y el diseño lógico. Este método consiste en analizar los puntos de función, teniendo en cuenta:

      .col-6.col-lg-2.my-5
        figure
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='')        

    .row
      .col-lg-4
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Entradas al sistema.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Salidas del sistema.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Consultas.
          li 
      .col-lg-8
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Grupos de datos lógicos del sistema.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Grupos de datos lógicos que no pertenecen al sistema, pero que el sistema utiliza.
          li


    .row.mb-5
      .col-lg-7
        .row
          p La fórmula de Albrecht para calcular los puntos función, es la siguiente:
          p.ps-5 #[strong FP = UFP x TCF] donde:		 
          p.ps-5 UFP: son los Puntos Función No Ajustados
          p.ps-5 TCF: Factor de Complejidad Técnica.

        .row
          p Los UFP son deducidos mediante la sumatoria de los pesos de todos los parámetros identificados. 

        .row
          p Existen varios tipos de metodologías que estiman el tamaño del #[i software]; por ejemplo:
          ul.lista-ul--color.ps-5
            li 
              i.fas.fa-circle.color-vineta
              | IFPUG-FPA (#[i Function Point Analysis]).
            li 
              i.fas.fa-circle.color-vineta
              |  MKII (#[i Mark II]).
            li 
              i.fas.fa-circle.color-vineta
              | FFP (#[i Full Function Point]).
            li 
              i.fas.fa-circle.color-vineta
              i NESMA FPA (#[i Netherlands software Metrics Users Association Function Point Analysis]).

      .col-lg-5.mt-5
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='')


    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Este método también puede ser difícil de aplicar al comienzo del desarrollo del #[i software] debido a la falta de información sobre el sistema en ese momento.

    h3.mb-4 Puntos de Casos de Usos (UCP)

    .row.justify-content-center.mb-3
      .col-6.col-lg-2.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='')        
      .col-lg-10
        p El método UCP clasifica los casos de uso en simple, promedio y complejo con factores de peso 5, 10 y 15, respectivamente. La clasificación se realiza con base en el número de transacciones que contenga el caso de uso, 1 a 3 para simple, 4 a 7 para promedio y 8 o más para complejos. Cabe aclarar que se describe una transacción como un evento que ocurre entre el sistema a ser modelado y un actor. Luego de haber especificado los casos de uso del sistema ya se tiene un mayor nivel de detalle para poder estimar, de manera más precisa, los puntos de función. Posteriormente, con las transacciones de puntos de función (Consultas Externas, Entradas Externas y Salidas Externas) provocadas por las secuencias que forman un escenario, es posible definir la complejidad de Archivos Lógicos Internos y/o de Interfaz Externos.
        p A continuación, se específica de manera global el procedimiento para establecer Puntos Objeto (Casos de Uso) en un proyecto de #[i software]:

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          ul.lista-ul--color
            li 
              i.fas.fa-circle.color-vineta
              | Determinar la cantidad de objetos, estimar la cantidad de reportes, pantallas, componentes que contendrá la aplicación.        
            li 
              i.fas.fa-circle.color-vineta
              | Clasificar cada instancia de un objeto según sus grados de complejidad (difícil, media o simple).     
            li 
              i.fas.fa-circle.color-vineta
              | Dar el peso correspondiente a cada objeto según el grado de complejidad. Los pesos reflejan el esfuerzo relativo necesario para implementar una instancia de ese nivel de complejidad.
            li 
              i.fas.fa-circle.color-vineta
              | Determinar la porción de Puntos Objeto, sumando todos los pesos de las instancias de los tipos de objetos especificados.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-4
          .bloque-texto-g2__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.svg')})`}"
          )
          .bloque-texto-g2__texto.p-4
            p.mb-0 Se debe resaltar la característica de que los casos de uso no tienen un tamaño definido, por lo que un método basado en Casos de Uso debería tener en cuenta escenarios del mismo o el número de transacciones para determinar su peso. A medida que se van concluyendo las especificaciones de los Casos de Uso, se pueden ir depurando las estimaciones de los puntos de función.


    h2.my-5(data-aos="fade-up-right") Técnicas de estimación de esfuerzo (cantidad de personas necesarias) 

    .row.mb-5
      p Para cuantificar el posible esfuerzo en un proyecto de #[i software] se utiliza la medida de meses/persona (PM), lo que representa los meses de trabajo de una persona en el equipo de desarrollo del proyecto. Existen diferentes métodos de estimación del esfuerzo, entre esos están:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='')  

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris1")
          .row(titulo="Puntos de Función Ajustados y Coeficientes de Conversión")
            p Los Puntos de Función Ajustados, se obtienen como el producto de los Puntos de Función sin ajustar por el Factor de Ajuste:
            p FP = UFP x AF donde:
            p UFP son los puntos de función sin ajustar.
            p AF es el factor de ajuste.
            p Para nivelar los puntos de función, previamente calculados, hay que estimar cada una de las características del sistema, las cuales se deben tener en cuenta con su factor de peso asociado, el cual indica el grado de importancia de la característica asociada que se está revisando. Luego de calculados los puntos de función ajustados, se pueden ejecutar los coeficientes que permitan estimar el esfuerzo del proyecto, tiempo y costo.
          
          .row(titulo="Estimación del esfuerzo a partir de los Casos de Uso")
            p El esfuerzo en horas-persona viene dado por:
            p E = UCP x CF donde:
            p E: esfuerzo estimado en horas-persona.
            p UCP: Puntos de Casos de Uso ajustados.
            p CF: factor de conversión.
          
          .row(titulo="Modelo Composición de Aplicación")
            p Para este modelo, la fórmula que se propone es la siguiente:
            p PM = NOP / PROD donde:
            p NOP (Nuevos Puntos Objeto): tamaño del nuevo #[i software] a desarrollar, expresado en Puntos Objeto, se calcula de la siguiente manera:
            p NOP = OP x (100 - % reúso)/100, donde:
            p OP (Puntos Objeto): es el tamaño del software a desarrollar, representado en Puntos Objeto.
            p % reúso: porcentaje de reúso que se espera lograr en el proyecto.
            p PROD: es la productividad promedio, definida a partir del análisis de datos de proyectos.

          .row(titulo="Modelo Diseño Temprano")
            p Este modelo se utiliza, como su nombre lo indica, en etapas tempranas del proyecto de #[i software], cuando se conoce muy poco del sistema a desarrollar. El mismo, emplea para su cálculo, Multiplicadores de Esfuerzo, los cuales se clasifican en categorías; estas son:
            ul.lista-ul
              li 
                i.lista-ul__vineta.color-vineta2
                | Del producto:
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | RCPX: confiabilidad y complejidad del producto.
                  li 
                    i.lista-ul__vineta
                    | RUSE: reusabilidad requerida.
              li 
                i.lista-ul__vineta.color-vineta2
                | De la plataforma:
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | PDIF: dificultad de la plataforma.
              li 
                i.lista-ul__vineta.color-vineta2
                | Del personal:
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | PERS: aptitud del personal.
                  li 
                    i.lista-ul__vineta
                    | PREX: experiencia del personal.
              li 
                i.lista-ul__vineta.color-vineta2
                | Del proyecto:
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | FCIL: facilidades.
                  li 
                    i.lista-ul__vineta
                    | SCED: cronograma de desarrollo requerido.

          .row(titulo="Modelo Post-Arquitectura")
            p Este modelo utiliza:
            ul.lista-ul--color
              li
                i.fas.fa-circle.color-vineta
                p Puntos Función y/o Líneas de Código Fuente para realizar la estimación del tamaño, con modificadores que contemplan el reúso, con y sin traducción automática, y el "desperdicio" (#[i breakage]).
            ul.lista-ul--color
              li 
                i.fas.fa-circle.color-vineta
                |	Un grupo de 17 atributos, llamados factores de costo, que permiten estimar características del proyecto, referentes al personal, plataforma de desarrollo, etc., que tienen intervención en los costos.
            ul.lista-ul--color
              li 
                i.fas.fa-circle.color-vineta
                | Cinco factores que establecen un exponente, según el modelo del concepto de economía de escala y deseconomía de escala.
            
          .row(titulo="COCOMO II")
            p Cocomo II está compuesto por tres de los modelos previamente descritos: Composición de Aplicación, Diseño Temprano y Post-Arquitectura. El modelo Composición de Aplicación se usa en desarrollos de #[i software] que se encuentran en la etapa de prototipación; el modelo Diseño Temprano se utiliza en las primeras fases del desarrollo, en las cuales se estiman las alternativas de #[i hardware] y #[i software] de un proyecto; el modelo Post-Arquitectura se ejecuta en la etapa de desarrollo, después que se describe la arquitectura del sistema, y en la fase de mantenimiento.
          
    h2.my-5(data-aos="fade-up-right") Estimación de cronogramas (tiempo)

    .row.mb-5
      p La estimación de cronogramas consiste en realizar una estimación del número de períodos de trabajo (semanas, días, horas) que serán obligatorios para completar cada actividad dentro del proyecto, siempre es necesario tener en cuenta que se deben ajustar los cronogramas a la medida que el proyecto de #[i software] se va desarrollando. Existen múltiples técnicas para la estimación de la duración de un proyecto, entre las cuales podemos resaltar las siguientes:

    .row.justify-content-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul3")
        .row.p-5(titulo="Juicio de expertos")
          .col-lg-7
            p Utilizar la experiencia de las personas.
            
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', alt='') 

        .row.p-5(titulo="Estimación por analogía")
          .col-lg-7
            p Pueden basarse en la estimación hecha con anterioridad, para una actividad parecida (del mismo o de otro proyecto).
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img17.svg', alt='') 

        .row.p-5(titulo="Simulación")
          .col-lg-7
            p Se basa en medir múltiples estimaciones, partiendo de diferentes grupos de asunciones. El método más general es el Análisis de Monte Carlo, el cual dice que, a partir de una distribución de resultados probables para cada actividad, se cuantifica una distribución de resultados probables para todo el proyecto.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img18.svg', alt='') 

        .row.p-5(titulo="Métodos matemáticos")
          .col-lg-7
            p Proporcionan estimaciones directas, ejecutando técnicas estadísticas o fórmulas matemáticas (lineales o no lineales), sobre algunos datos empíricos; por ejemplo, Cocomo.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img19.svg', alt='') 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
