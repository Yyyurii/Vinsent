import $ from 'jquery';
import slick from 'slick-carousel';

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

    $('.vinsent-left-column__vinsent-review').slick();
    
    $('.insta-photos').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        // prevArrow: '<button type="button"><img src="images/instaArrowLeft.svg"></button>',
        // nextArrow: '<button type="button"><img src="images/instaArrowRight.svg"></button>'

    });


});


