import $ from 'jquery';

$(document).ready(function onDocumentReady() {
    var $one = $('.one');
    var oneVal = $one.html();
    var $price = $('.price-val');
    var priceVal = $price.html();
    var $realPrice = $('.real-price');
    var realPriceVal = $realPrice.html;
    var $savePersent = $('.save-persent');
    var savePersent = $savePersent.html();

    $('.plus').on('click', function () {
        oneVal++;
        $one.text(oneVal);

        actualPrice();
    });

    $('.minus').on('click', function () {
        if (oneVal > 1) {
            oneVal--;
            $one.text(oneVal);
        }

        actualPrice();
    });

    function actualPrice() {
        var newPrice = oneVal * priceVal;
        console.log('newPrice', newPrice);
        $price.text(newPrice);

        var realesePrice = Math.floor((newPrice * 100) / (100 - savePersent));
        $realPrice.text(realesePrice);
    }

    var $questionImg = $('.question-img ');
    var $questionCont = $('.question-cont');
 
        $questionImg.on('click', function () {
            if ($questionCont.css('display') === 'none') {
                $questionCont.css('display', 'block');
            } else {
                $questionCont.css('display', 'none');
            }
        });

  


});


