$(document).ready(function(){
    $("#stripes").on('input',function(){
        var val = ( $(this).val() == "" ) ? 0 : $(this).val();
        $('num').attr('style', '--num:' + val);
    });
});