for(let i = 0; i<16; i++){
$('#squareContainer').append('<div class="squares"></div>');
}
$('#squareContainer').on('click', '.squares',function(){
  $(this).toggleClass('darken');
});