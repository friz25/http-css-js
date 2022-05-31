jQuery('document').ready(function(){

    jQuery('body').append('<a href="http://www.youtube.com">Перейти в YouTube!</a>');

    jQuery('#lorem').remove()

//    var p_clon;
//    p_clon= jQuery('p').clone();
//    jQuery('body').append(p_clon);
/* Пример Математики */
//    var katet1, katet2;
//
//    katet1 = 10
//    katet2 = 20
//
//    alert(Math.round(Math.sqrt((katet1 * katet2) + (katet1 * katet2))));

//СОБЫТИЯ

jQuery('button').on('click', function(){

    var value1, value2, value3;

    value1 = jQuery('#val1').val();
    value2 = jQuery('#val2').val();

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    value3 = value2 + value1;

//    alert('Значение 1:'+value1+'\nЗначение 2: '+value2);
    alert(value3)
    });
jQuery('input').on('keyup', function(){

    var value1, value2, value3;

    value1 = jQuery('#val1').val();
    value2 = jQuery('#val2').val();

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    value3 = value2 + value1;

//    alert('Значение 1:'+value1+'\nЗначение 2: '+value2);
    jQuery('#rez').html(value3);
    });

    var test1;

//    test1 = prompt('Введите Ваше имя :','');
    test1 = confirm('Вы гей?'); //ok cancel

    if(test1 == 1){ //1 - True, 0 - False
    alert('Я ЗНАЛ!!!');
    } else {
    alert('Да не пизди))))\nА если 300$ ?');
    }

    jQuery('#rez').html( test1 );
});