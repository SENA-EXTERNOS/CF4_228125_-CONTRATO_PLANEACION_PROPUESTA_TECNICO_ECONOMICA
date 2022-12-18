<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Licenciamiento

    .row.mb-5
      .bloque-texto-g.color-secundario.p-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4
          p.mb-3 Las licencias de #[i software] son un tipo de acuerdo contractual que plantea las normas para usarlas. Existen varias licencias en función de las condiciones para su uso o de su gratuidad. 
          p Las licencias de #[i software] se pueden entender como un contrato entre el autor de un programa informático y los usuarios. En ellas se implantan las condiciones, términos y cláusulas que se deben ejecutar para poder usar ese programa y cada usuario que lo instala, copia, descarga o utiliza debe aceptar esas condiciones.

    .row.mb-5
      p Desde los años ochenta del siglo XX, el número de tipos de licencias no ha parado de evolucionar, ya que las empresas de programación empezaron a limitar el uso de #[i software] en función de sus intereses. Para comprender el mundo de las licencias hay que diferenciar entre dos grandes tipos: 

    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              h4 El #[i software] libre carece de #[i copyright]
              p no tiene por qué ser gratis, pero el usuario tiene libertad sobre ese programa para modificarlo, usarlo, copiarlo y distribuirlo a su manera. Eso permite a los millones de desarrolladores del mundo aumentar sus posibilidades y expandir el conocimiento.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              h4 El #[i software] de propietario
              p es aquel que su creador/dueño legal prohíbe la copia o delimita su redistribución y modificación sin su autorización o sin un pago previo

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Además de estos dos tipos de licencias, se puede encontrar el #[i software] gratuito o de dominio público, que carece de #[i copyright] y se puede utilizar libremente, aunque el autor puede imponer limitaciones a la hora de transferir el programa y los trabajos generados del mismo. Por otro lado, existe la licencia de #[i software] semilibre, es decir, que tiene dueño, pero el programa viene con permisos para distribuir, usar, copiar y modificar si eres una persona particular y careces de ánimo de lucro.

    .row.mb-5
      p Cuando se toma un programa, sea bajo el tipo de licencia que sea, lo que realmente se adquiere es una licencia de uso, nunca el programa en sí y, como norma principal, se otorga una licencia por punto de uso o dispositivo. Veamos algunos tipos de licencias:

    .row.mb-5
      .tarjeta.tarjeta--azul5.p-5
        SlyderA(tipo="b")
          .row
            .col-lg-7
              p #[strong Licencias de #[i software] libre:] las licencias de #[i software] libre permiten ejecutar el programa, estudiar su funcionamiento, adaptarlo a las necesidades de cada usuario, copiarlo y redistribuirlo y, por supuesto, mejorarlo y poner esas mejoras al alcance y servicio de toda la comunidad. 
              p #[strong Licencias de #[i software] libre no protegido con #[i copyleft]:] son aquellas cuyo autor autoriza para redistribuir, modificar y añadir restricciones adicionales a algunas copias o versiones modificadas, que pueden no ser libres de manera completamente y requieren un #[i software] pago para que ejecute algunos elementos. 
              p #[strong Licencias de #[i software] libre protegidas con #[i copyleft]:] en contraposición al #[i copyright] o copia reservada (derechos de autor), son #[i software] libre que no permiten a quienes lo cambian o redistribuyen agregar ninguna restricción adicional. Así, cada copia del #[i software], aun si ha sido cambiado, debe ser #[i software] libre. #[i copyleft] es una práctica legal y común que consiste en el ejercicio del derecho de autor para motivar el libre uso y distribución de una obra y pide las mismas libertades al distribuir sus derivados y copias. 

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img4.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia de #[i software] de GPL (GNU LGPL):] es #[i software] libre y permite que se enlace con módulos no libres. Debe estar disponible y accesible para copias ilimitadas y a cualquier persona que lo solicite. 
              p #[strong Licencia BSD:] es una licencia permisiva, pues casi no impone condiciones sobre lo que un usuario puede hacer. Es la menos restrictiva para los desarrolladores. El #[i software] puede ser vendido y no hay responsabilidad de incluir el código fuente. 
              p #[strong Licencias de MPL:] son las de Mozilla Firefox, Mozilla Thunderbird y la mayoría de otros #[i software] de Mozilla. Son algo menos permisivas que las anteriores.
              p #[strong Licencia de #[i software] de #[i  Debian]:] su nombre completo es #[i  Debian] Free #[i software] Guidelines (DFSG) y de ella deriva la licencia de#[i  Open Source Initiative]. Decreta en sus criterios de distribución la exigencia de la redistribución libre (también del trabajo derivado bajo la misma licencia del original), publicación del código fuente y que no puede excluir a grupo de personas o ninguna persona, ni el #[i software] ni ninguna forma de su utilización. 

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img5.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia#[i  Open Source Initiative]:] una de las licencias más conocidas y utilizadas, llamada también de fuentes abiertas o código abierto, que permite la libre distribución (también del código fuente), la variación del mismo, los desarrollos derivados y su redistribución en las mismas condiciones que el #[i software] original.
              p #[strong Licencia de #[i software] de X.org (X Windows System):] distribuida por el Consorcio X (es la organización que controla su desarrollo), es usada en los sistemas operativos Linux y UNIX nacidos como una alternativa a la minoría de los sistemas gráficos como Microsoft. Es también #[i software] libre, aunque sin adherirse al #[i copyleft]. 
              p #[strong Licencia de #[i software Freeware]:] autoriza el uso del #[i software] de forma gratuita y libre, pero en general a particulares y no a empresas u organismos oficiales. 
              p #[strong Licencia de #[i software de Donationware]:] es similar a la licencia #[i Freeware], pero solicita a cambio una donación, aunque no sea obligatorio hacerlo para poder utilizarla. La licencia de #[i software] de #[i Postcardware] es similar, pero, en lugar de una donación, suele solicitar el envío de una postal como confirmación de su utilización. 

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img6.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencias de prueba o #[i Shareware]:] todos los usuarios se han encontrado alguna vez con este tipo de licencia. Suelen pedir un registro previo y autoriza el uso de un programa para que el usuario lo evalúe y, posteriormente, lo compre. La licencia tipo Demo es una parte de un programa para su evaluación. Son muy populares en el caso de #[i software] de juegos, etc. 
              p #[strong Licencias de #[i software] de propietario:] con las licencias de #[i software] de código cerrado o #[i software] propietario o privativo (llamadas CLUFs o para usuario final), los propietarios establecen los derechos de modificación, uso, copia, distribución, redistribución, cesión y cualquier otra consideración necesaria. Los fabricantes de programas sometidos a este tipo de licencias ofrecen servicios de actualizaciones durante el tiempo de vida del producto y, además, soporte técnico. Este tipo de licencias no permiten que el #[i software] sea cambiado, copiado o distribuido, desensamblado; además, controlan el número de copias que pueden ser instaladas y los fines establecidos para los cuales puede ser utilizado.
              p #[strong Licencia de #[i software] de privativo:] su uso, redistribución o modificación está prohibida, o requiere de la solicitud de una autorización.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img7.svg', alt='')

          .row
            .col-lg-7
              p #[strong Licencia de #[i software] de comercial:] es aquel que está desarrollado por una entidad que tiene la intención de monetizarlo por su uso.
              p #[strong Licencia de #[i software] de OEM:] supedita su venta a que ese #[i software] debe formar parte de un equipo nuevo (por ejemplo, el caso del sistema operativo Microsoft cuando nos compramos un nuevo ordenador). 
              p #[strong Licencia de #[i software] de Retail:] es #[i software] que se vende, el programa es cien por ciento propiedad del usuario nuevo y puede regalarlo o venderlo. 
              p #[strong Licencia de #[i software] de volumen:] su destino son los grandes usuarios (empresas) y el contrato de adquisición estipula un determinado número de equipos que pueden utilizar el mismo código.

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img8.svg', alt='')


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
