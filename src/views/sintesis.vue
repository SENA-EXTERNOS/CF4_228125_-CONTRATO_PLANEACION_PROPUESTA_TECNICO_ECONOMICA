<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 De acuerdo con las temáticas abordadas en este componente formativo, se observa que se ha realizado un barrido sobre los temas principales a tratar, a saber, la generación de una propuesta de manera técnico/económica de acuerdo con las necesidades del cliente, teniendo en cuenta las normativas, condiciones contractuales que del proceso, realizando el proceso de estimación de desarrollo, costos, además del uso de las fórmulas para calcular los costos del proyecto y generar recursos económicos monetizando un servicio o un producto dependiendo del tipo de licenciamiento que prefiere generar el proyecto. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
