$(document).ready(function() {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})

$('.carousel').carousel({
    interval: false,

});

$("form").submit(function(e) {
    e.preventDefault();
    if (document.getElementById('agree').checked) {
        return true;
    } else {
        alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy');
        return false;
    }
});