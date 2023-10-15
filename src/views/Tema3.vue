<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Licenciamiento

    .row.mb-5
      .bloque-texto-g.color-secundario.p-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4
          p.mb-3 Las licencias de #[em software] son un acuerdo entre el autor o propietario del #[em software] y el usuario final que determina las condiciones y términos en los que el usuario puede utilizar el #[em software].
          p Las licencias de #[em software] establecen las reglas para el uso del #[em software], incluyendo cómo se puede distribuir, modificar y redistribuir el #[em software]. Algunas licencias de #[em software] son gratuitas y permiten al usuario utilizar el #[em software] de forma libre y sin restricciones, mientras que otras licencias de #[em software] son de pago y requieren que el usuario pague una tarifa para utilizar el #[em software]. Es importante leer y entender las condiciones de la licencia de #[em software] antes de utilizar cualquier #[em software], ya que al hacerlo, se están aceptando los términos y condiciones de la licencia.


    p Desde la década de 1980, el número de tipos de licencias de #[em software] ha estado en constante evolución debido a que las empresas de #[em software] comenzaron a restringir el uso del #[em software] de acuerdo a sus intereses. Para entender el mundo de las licencias de #[em software], es necesario diferenciar entre dos categorías principales.
    .row.mb-4
      .col-lg-6.my-3
        .tarjeta--azul.px-4.h-100.brad
          .row.justify-content-center           
            .col-lg-auto.my-3
              img(src='@/assets/curso/temas/tema3/img2.svg' alt='AvatarTop')
            .col.my-3.j
              h4 El #[em software] libre no está protegido por derechos de autor
              p.mb-0 No tiene por qué ser gratis, pero el usuario tiene libertad sobre ese programa para modificarlo, usarlo, copiarlo y distribuirlo a su manera. Eso permite a los millones de desarrolladores del mundo, aumentar sus posibilidades y expandir el conocimiento.

      .col-lg-6.my-3
        .tarjeta--azul.px-4.h-100.brad
          .row.justify-content-center           
            .col-lg-auto.my-3
              img(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
            .col.my-3.j
              h4 El #[em software] de propietario
              p.mb-0 Es aquel que su creador/dueño legal, prohíbe la copia o delimita su redistribución y modificación, sin su autorización o sin un pago previo.            


    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Además de las licencias de #[em software] libre y de propiedad, existen otras opciones de licencias, como el #[em software] gratuito o de dominio público, que no está protegido por derechos de autor y se puede utilizar libremente. Sin embargo, el autor del #[em software] puede imponer ciertas restricciones en cuanto a la distribución y uso del #[em software] y de cualquier trabajo generado a partir del mismo. También existe la licencia de #[em software] semilibre, que pertenece a un dueño pero se permite la distribución, uso, copia y modificación del #[em software] por parte de individuos sin fines de lucro. Es importante leer y comprender las condiciones de cada tipo de licencia de #[em software] antes de utilizar el #[em software].

    .row.mb-5
      p Cuando se toma un programa, sea bajo el tipo de licencia que sea, lo que realmente se adquiere es una licencia de uso, nunca el programa en sí y, como norma principal, se otorga una licencia por punto de uso o dispositivo. Veamos algunos tipos de licencias:

    .row.mb-5
      .tarjeta.tarjeta--azul5.p-5
        SlyderA(tipo="b")
          .row
            .col-lg-7
              p #[b Licencias de #[em software] libre]: permiten a los usuarios utilizar el #[em software] de acuerdo a sus necesidades, incluyendo ejecutar el programa, estudiar su funcionamiento, modificarlo para adaptarlo a sus necesidades, copiar y redistribuir el #[em software] y mejorarlo y compartir esas mejoras con la comunidad. Estas licencias ofrecen una gran libertad y flexibilidad para el uso del #[em software] y son una buena opción para aquellos que deseen colaborar en el desarrollo y mejora del #[em software].
              p #[b Licencias de #[em software] libre no protegido con #[em copyright]]: son aquellas que permiten la redistribución y modificación del #[em software], pero también permiten añadir restricciones adicionales a algunas copias o versiones modificadas del #[em software]. Esto significa que algunas copias o versiones modificadas del #[em software] pueden no ser completamente libres y pueden requerir un #[em software] de pago para poder ejecutar ciertos elementos. Estas licencias pueden ser útiles para aquellos que deseen distribuir #[em software] libre, pero también deseen restringir ciertas formas de uso o modificación del #[em software].
              p #[b Licencias de #[em software] libre protegidas con #[em copyright]]: son aquellas que no permiten a quienes modifican o redistribuyen el #[em software] agregar restricciones adicionales. Esto significa que cualquier copia o modificación del #[em software] debe ser libremente utilizable y distribuible. El #[em copyright] es una práctica legal y común que consiste en utilizar los derechos de autor para promover el uso y la distribución libres de una obra y exigir las mismas libertades al distribuir copias y derivados de la obra. Esto se utiliza para garantizar que el #[em software] libre siga siendo libre a medida que se modifica y se redistribuye.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img4.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia de #[em software] de GPL (GNU LGPL):] es #[em software] libre y permite que se enlace con módulos no libres. Debe estar disponible y accesible para copias ilimitadas y a cualquier persona que lo solicite. 
              p #[strong Licencia BSD:] es una licencia permisiva, pues casi no impone condiciones sobre lo que un usuario puede hacer. Es la menos restrictiva para los desarrolladores. El #[em software] puede ser vendido y no hay responsabilidad de incluir el código fuente. 
              p #[strong Licencias de MPL:] son las de Mozilla Firefox, Mozilla Thunderbird y la mayoría de otros #[em software] de Mozilla. Son algo menos permisivas que las anteriores.
              p #[b Licencia de #[em software] de #[em Debian]]: su nombre completo es #[em Debian Free software Guidelines] (DFSG) y de ella deriva la licencia de #[em Open Source Initiative]. Decreta en sus criterios de distribución, la exigencia de la redistribución libre (también del trabajo derivado bajo la misma licencia del original), publicación del código fuente y que no puede excluir a grupo de personas o ninguna persona, ni el #[em software], ni ninguna forma de su utilización.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img5.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia#[em  Open Source Initiative]:] una de las licencias más conocidas y utilizadas, llamada también de fuentes abiertas o código abierto, que permite la libre distribución (también del código fuente), la variación del mismo, los desarrollos derivados y su redistribución en las mismas condiciones que el #[em software] original.
              p #[b Licencia de #[em software] de X.org (X #[em Windows System])]: distribuida por el Consorcio X (es la organización que controla su desarrollo), es usada en los sistemas operativos Linux y UNIX nacidos como una alternativa a la minoría de los sistemas gráficos como Microsoft. Es también #[em software] libre, aunque sin adherirse al #[em copyright].
              p #[strong Licencia de #[em software Freeware]:] autoriza el uso del #[em software] de forma gratuita y libre, pero en general a particulares y no a empresas u organismos oficiales. 
              p #[strong Licencia de #[em software de Donationware]:] es similar a la licencia #[em Freeware], pero solicita a cambio una donación, aunque no sea obligatorio hacerlo para poder utilizarla. La licencia de #[em software] de #[em Postcardware] es similar, pero, en lugar de una donación, suele solicitar el envío de una postal como confirmación de su utilización. 

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencias de prueba o #[em Shareware]:] todos los usuarios se han encontrado alguna vez con este tipo de licencia. Suelen pedir un registro previo y autoriza el uso de un programa para que el usuario lo evalúe y, posteriormente, lo compre. La licencia tipo Demo es una parte de un programa para su evaluación. Son muy populares en el caso de #[em software] de juegos, etc. 
              p #[strong Licencias de #[em software] de propietario:] con las licencias de #[em software] de código cerrado o #[em software] propietario o privativo (llamadas CLUFs o para usuario final), los propietarios establecen los derechos de modificación, uso, copia, distribución, redistribución, cesión y cualquier otra consideración necesaria. Los fabricantes de programas sometidos a este tipo de licencias ofrecen servicios de actualizaciones durante el tiempo de vida del producto y, además, soporte técnico. Este tipo de licencias no permiten que el #[em software] sea cambiado, copiado o distribuido, desensamblado; además, controlan el número de copias que pueden ser instaladas y los fines establecidos para los cuales puede ser utilizado.
              p #[strong Licencia de #[em software] de privativo:] su uso, redistribución o modificación está prohibida, o requiere de la solicitud de una autorización.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia de #[em software] de comercial:] es aquel que está desarrollado por una entidad que tiene la intención de monetizarlo por su uso.
              p #[strong Licencia de #[em software] de OEM:] supedita su venta a que ese #[em software] debe formar parte de un equipo nuevo (por ejemplo, el caso del sistema operativo Microsoft cuando nos compramos un nuevo ordenador). 
              p #[strong Licencia de #[em software] de Retail:] es #[em software] que se vende, el programa es cien por ciento propiedad del usuario nuevo y puede regalarlo o venderlo. 
              p #[strong Licencia de #[em software] de volumen:] su destino son los grandes usuarios (empresas) y el contrato de adquisición estipula un determinado número de equipos que pueden utilizar el mismo código.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='')


    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros. 



</template>

<script>
export default {
  name: 'Tema3',
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
