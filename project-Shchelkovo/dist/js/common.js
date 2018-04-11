jQuery(document).ready(function($) {
    $('.popup-js').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        }}
    });
});

 $(document).ready(function() {

  //E-mail Ajax Send
  $(".callback-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Ваша заявка принята");
      window.location.href = "thanks.html";
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});