<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.texto-blanco
      h1 Introducción

    .row.justify.content-center.mb-3
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='')        

      .col-lg-8
        p Bienvenido a una nueva experiencia de aprendizaje, en este componente se tiene como objetivo encontrar un punto de equilibrio entre la oferta del cliente, el pago al equipo de trabajo y las ganancias para la empresa, en el marco del desarrollo de un #[i software] web. 
        p Este componente tendrá un carácter teórico, en el cual tendremos la oportunidad de explorar las normativas y legislaciones en un proyecto de #[i software], así mismo, se podrá realizar una buena estimación en el equipo de desarrollo y el talento necesario para el desarrollo y la manera óptima de calcular el costo de un proyecto, diseñando un plan de ventas y de monetización en un proyecto de #[i software].  

    .row.mb-5
      p Adicionalmente, se busca desarrollar en el aprendiz las principales habilidades para identificar y aplicar los conceptos básicos que aquí se exponen. Veamos a continuación el siguiente video para profundizar con detalle en los temas mencionados: 

    .row.mb-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)








</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
