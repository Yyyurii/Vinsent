import $ from 'jquery';

$(document).ready(function onDocumentReady() {
    var $one = $('.one');
    var oneVal = $('.one').html();
    var $price = $('.price-val');
    var priceVal = $('.price-val').html();
    var $realPrice = $('.real-price');
    var realPriceVal = $('.real-price').html;

    $('.plus').on('click', function () {
        oneVal++;
        $one.empty();
        $one.prepend(oneVal);

        actualPrice();
    });

    $('.minus').on('click', function () {
        if (oneVal > 1) {
            oneVal--;
            $one.empty();
            $one.prepend(oneVal);
        }

        actualPrice();
    });

    function actualPrice() {
        var newPrice = oneVal * priceVal;
        console.log('newPrice', newPrice);
        $price.empty();
        $price.prepend(newPrice);

        var realesePrice = Math.floor((newPrice * 100) / 73);
        $realPrice.empty();
        $realPrice.prepend(realesePrice);
    }

    var $questionImg = $('.question-img ');
    var $questionCont = $('.question-cont');
 
        $questionImg.on('click', function () {
            if ($questionCont.css('display', 'none')) {
                $questionCont.css('display', 'block');
            } else {
                $questionCont.css('display', 'none');
            }
        });

  


});


