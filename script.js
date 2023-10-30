$('.image-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    cssEase: 'linear'
});

$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var navbar = $("header");

      if (scroll > 400) { // Defina a altura em que você deseja que a mudança de estilo ocorra
        navbar.addClass("scroll");
      } else {
        navbar.removeClass("scroll");
      }
    });

    $("a[href^='#']").click(function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        
        var alvo = this.hash; // Obtém o valor do atributo href
        
        $("html, body").animate({
          scrollTop: $(alvo).offset().top - 100
        }, 800); // Ajuste a velocidade da animação conforme necessário
      });
     
  });

      
$("#modal-content button").click(() => {
  $("#ytplayer").remove()
    $("#modal").hide()
})
$("#navbar-icon").click(() => {
    $("#mobile-navbar").show()
    // $("#navbar-icon").hide()
    $("header").hide()
  })
$("#mobile-navbar i").click(() => {
    $("#mobile-navbar").hide()
    // $("#navbar-icon").show()
    $("header").show()
})
$("#mobile-navbar nav ul li").click(() => {
    $("#mobile-navbar").hide()
    // $("#navbar-icon").show()
    $("header").show()
})

const openModal = (code) => {
    $("#modal").show()
    console.log(code);
    var conteudo = `
      <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="http://www.youtube.com/embed/${code}?autoplay=1"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
    ></iframe>
    `

    $("#modal-content").append(conteudo)
   
}