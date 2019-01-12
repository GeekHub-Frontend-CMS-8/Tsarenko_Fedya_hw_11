var active='';
function filteringSelect(color){
    if(active!=color){
        $('.photo').filter('.'+color).slideDown();
        $('.photo').filter(':not(.'+color+')').slideUp();active=color;}
}
$('.website-btn').click(function(){filteringSelect('website');});
$('.brochures-btn').click(function(){filteringSelect('brochures');});
$('.logos-btn').click(function(){filteringSelect('logos');});
$('.all-btn').click(function(){$('img').slideDown();active='all';});