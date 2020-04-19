import $ from 'jquery';

$(document).ready(function onDocumentReady() {
    var $one = $('.one')
    var val = $('.one').html();
    $('.plus').on('click', function () {
        val++;
        $one.empty();
        $one.prepend(val);
    });

    $('.minus').on('click', function () {
        if (val > 1) {
            val--;
            $one.empty();
            $one.prepend(val);
        }      
    });
    
});
