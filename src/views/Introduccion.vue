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
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se estudiará el punto de equilibrio entre la oferta del cliente, el pago al equipo de trabajo y las ganancias para la empresa, en el marco del desarrollo de un #[i software] web. Afiance sus conocimientos y capacidades para realizar una buena estimación de un equipo y del talento necesarios; sepa calcular, de manera óptima, el costo del proyecto y diseñe con efectividad y acierto, un plan de ventas y monetización adecuados, para el proyecto de #[i software].
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mb-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/1qckE31gBeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)








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
