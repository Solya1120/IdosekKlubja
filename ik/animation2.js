//Mi készítettük oldalon a cím


$(function() {
    setTimeout(function(){
        $('.fly-in-text').removeClass('hidden');
    },500);
    
});


//galéria

$(".gallery1").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
})

$(".gallery2").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
})

$(".gallery3").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
})

$(".gallery4").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
})
