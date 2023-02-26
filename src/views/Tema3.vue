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
          p.mb-3 Las licencias de #[i software] son un acuerdo entre el autor o propietario del #[i software] y el usuario final que determina las condiciones y términos en los que el usuario puede utilizar el #[i software].
          p Las licencias de #[i software] establecen las reglas para el uso del #[i software], incluyendo cómo se puede distribuir, modificar y redistribuir el #[i software]. Algunas licencias de #[i software] son gratuitas y permiten al usuario utilizar el #[i software] de forma libre y sin restricciones, mientras que otras licencias de #[i software] son de pago y requieren que el usuario pague una tarifa para utilizar el #[i software]. Es importante leer y entender las condiciones de la licencia de #[i software] antes de utilizar cualquier #[i software], ya que al hacerlo, se están aceptando los términos y condiciones de la licencia.

    .row.mb-5
      p Desde la década de 1980, el número de tipos de licencias de #[i software] ha estado en constante evolución debido a que las empresas de #[i software] comenzaron a restringir el uso del #[i software] de acuerdo a sus intereses. Para entender el mundo de las licencias de #[i software], es necesario diferenciar entre dos categorías principales.

    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              h4 El #[i software] libre no está protegido por derechos de autor
              p No tiene por qué ser gratis, pero el usuario tiene libertad sobre ese programa para modificarlo, usarlo, copiarlo y distribuirlo a su manera. Eso permite a los millones de desarrolladores del mundo, aumentar sus posibilidades y expandir el conocimiento.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              h4 El #[i software] de propietario
              p Es aquel que su creador/dueño legal, prohíbe la copia o delimita su redistribución y modificación, sin su autorización o sin un pago previo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Además de las licencias de #[i software] libre y de propiedad, existen otras opciones de licencias, como el #[i software] gratuito o de dominio público, que no está protegido por derechos de autor y se puede utilizar libremente. Sin embargo, el autor del #[i software] puede imponer ciertas restricciones en cuanto a la distribución y uso del #[i software] y de cualquier trabajo generado a partir del mismo. También existe la licencia de #[i software] semilibre, que pertenece a un dueño pero se permite la distribución, uso, copia y modificación del #[i software] por parte de individuos sin fines de lucro. Es importante leer y comprender las condiciones de cada tipo de licencia de #[i software] antes de utilizar el #[i software].

    .row.mb-5
      p Cuando se toma un programa, sea bajo el tipo de licencia que sea, lo que realmente se adquiere es una licencia de uso, nunca el programa en sí y, como norma principal, se otorga una licencia por punto de uso o dispositivo. Veamos algunos tipos de licencias:

    .row.mb-5
      .tarjeta.tarjeta--azul5.p-5
        SlyderA(tipo="b")
          .row
            .col-lg-7
              p #[b Licencias de #[i software] libre]: permiten a los usuarios utilizar el #[i software] de acuerdo a sus necesidades, incluyendo ejecutar el programa, estudiar su funcionamiento, modificarlo para adaptarlo a sus necesidades, copiar y redistribuir el #[i software] y mejorarlo y compartir esas mejoras con la comunidad. Estas licencias ofrecen una gran libertad y flexibilidad para el uso del #[i software] y son una buena opción para aquellos que deseen colaborar en el desarrollo y mejora del #[i software].
              p #[b Licencias de #[i software] libre no protegido con #[i copyright]]: son aquellas que permiten la redistribución y modificación del #[i software], pero también permiten añadir restricciones adicionales a algunas copias o versiones modificadas del #[i software]. Esto significa que algunas copias o versiones modificadas del #[i software] pueden no ser completamente libres y pueden requerir un #[i software] de pago para poder ejecutar ciertos elementos. Estas licencias pueden ser útiles para aquellos que deseen distribuir #[i software] libre, pero también deseen restringir ciertas formas de uso o modificación del #[i software].
              p #[b Licencias de #[i software] libre protegidas con #[i copyright]]: son aquellas que no permiten a quienes modifican o redistribuyen el #[i software] agregar restricciones adicionales. Esto significa que cualquier copia o modificación del #[i software] debe ser libremente utilizable y distribuible. El #[i copyright] es una práctica legal y común que consiste en utilizar los derechos de autor para promover el uso y la distribución libres de una obra y exigir las mismas libertades al distribuir copias y derivados de la obra. Esto se utiliza para garantizar que el #[i software] libre siga siendo libre a medida que se modifica y se redistribuye.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img4.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia de #[i software] de GPL (GNU LGPL):] es #[i software] libre y permite que se enlace con módulos no libres. Debe estar disponible y accesible para copias ilimitadas y a cualquier persona que lo solicite. 
              p #[strong Licencia BSD:] es una licencia permisiva, pues casi no impone condiciones sobre lo que un usuario puede hacer. Es la menos restrictiva para los desarrolladores. El #[i software] puede ser vendido y no hay responsabilidad de incluir el código fuente. 
              p #[strong Licencias de MPL:] son las de Mozilla Firefox, Mozilla Thunderbird y la mayoría de otros #[i software] de Mozilla. Son algo menos permisivas que las anteriores.
              p #[b Licencia de #[i software] de #[i Debian]]: su nombre completo es #[i Debian Free software Guidelines] (DFSG) y de ella deriva la licencia de #[i Open Source Initiative]. Decreta en sus criterios de distribución, la exigencia de la redistribución libre (también del trabajo derivado bajo la misma licencia del original), publicación del código fuente y que no puede excluir a grupo de personas o ninguna persona, ni el #[i software], ni ninguna forma de su utilización.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img5.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia#[i  Open Source Initiative]:] una de las licencias más conocidas y utilizadas, llamada también de fuentes abiertas o código abierto, que permite la libre distribución (también del código fuente), la variación del mismo, los desarrollos derivados y su redistribución en las mismas condiciones que el #[i software] original.
              p #[b Licencia de #[i software] de X.org (X #[i Windows System])]: distribuida por el Consorcio X (es la organización que controla su desarrollo), es usada en los sistemas operativos Linux y UNIX nacidos como una alternativa a la minoría de los sistemas gráficos como Microsoft. Es también #[i software] libre, aunque sin adherirse al #[i copyright].
              p #[strong Licencia de #[i software Freeware]:] autoriza el uso del #[i software] de forma gratuita y libre, pero en general a particulares y no a empresas u organismos oficiales. 
              p #[strong Licencia de #[i software de Donationware]:] es similar a la licencia #[i Freeware], pero solicita a cambio una donación, aunque no sea obligatorio hacerlo para poder utilizarla. La licencia de #[i software] de #[i Postcardware] es similar, pero, en lugar de una donación, suele solicitar el envío de una postal como confirmación de su utilización. 

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencias de prueba o #[i Shareware]:] todos los usuarios se han encontrado alguna vez con este tipo de licencia. Suelen pedir un registro previo y autoriza el uso de un programa para que el usuario lo evalúe y, posteriormente, lo compre. La licencia tipo Demo es una parte de un programa para su evaluación. Son muy populares en el caso de #[i software] de juegos, etc. 
              p #[strong Licencias de #[i software] de propietario:] con las licencias de #[i software] de código cerrado o #[i software] propietario o privativo (llamadas CLUFs o para usuario final), los propietarios establecen los derechos de modificación, uso, copia, distribución, redistribución, cesión y cualquier otra consideración necesaria. Los fabricantes de programas sometidos a este tipo de licencias ofrecen servicios de actualizaciones durante el tiempo de vida del producto y, además, soporte técnico. Este tipo de licencias no permiten que el #[i software] sea cambiado, copiado o distribuido, desensamblado; además, controlan el número de copias que pueden ser instaladas y los fines establecidos para los cuales puede ser utilizado.
              p #[strong Licencia de #[i software] de privativo:] su uso, redistribución o modificación está prohibida, o requiere de la solicitud de una autorización.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia de #[i software] de comercial:] es aquel que está desarrollado por una entidad que tiene la intención de monetizarlo por su uso.
              p #[strong Licencia de #[i software] de OEM:] supedita su venta a que ese #[i software] debe formar parte de un equipo nuevo (por ejemplo, el caso del sistema operativo Microsoft cuando nos compramos un nuevo ordenador). 
              p #[strong Licencia de #[i software] de Retail:] es #[i software] que se vende, el programa es cien por ciento propiedad del usuario nuevo y puede regalarlo o venderlo. 
              p #[strong Licencia de #[i software] de volumen:] su destino son los grandes usuarios (empresas) y el contrato de adquisición estipula un determinado número de equipos que pueden utilizar el mismo código.

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
