import $ from 'jquery';

$(document).ready(function onDocumentReady() {
    var $one = $('.one')
    $('.plus').on('click', function () {
        var val = $('.one').html();
        val++;
        $one.empty();
        $one.prepend(val);
    });
    
});
