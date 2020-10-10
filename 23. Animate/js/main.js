$(document).ready( function () {
   $('#button-create-item').on('click', function() {
     let name = $('#input-create-item').val();
     $('#input-create-item').val('');

     let html = '';
    html += '<div class="item">';
    html += '<div class="name">' +name+ '</div>';
    html += '<img src="assets/orb.jpg"></img>';
    html += '<div class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequuntur ex eum error vel! Aspernatur sint perspiciatis quos magni iste pariatur cupiditate harum dignissimos.Amet mollitia dolores odio aperiam placeat.</div>';
    html += '<div class="price">499</div>';
    html += '<button class= "item-add" > Add to cart</button>';
    html += '<button class= "item-remove" > Remove </button>';
    html += '<br>';
    html += '<a class= "more-info-link" href="#">More Info</a>';
    html += '<div class="more-info">Lorem ipsum, dolor sit amet</div>';
    html += '</div>';

    $('#container').prepend(html);    
});

$('#container').on('click','.more-info-link', function (event) {
    event.preventDefault();
    $(this).parent().find('.more-info').slideToggle();
    $(this)
        .animate({"opacity":0.5, 'margin-left': 10}, 'fast')
        .animate({"opacity":1.0, 'margin-left': 0}, 'fast');
});

$('#container').on('click','.item-remove',function () {
        $(this).parent().remove();
});


});


