$("#server_bajo").change(function(){
    if ($(this).is(":checked")) {
        $("#serverbasico").slideDown();
        $("#server_medio , #server_premium").attr('checked', false);
        $("#servermedio , #serverpremium").hide();
    } else {
        $("#serverbasico , #servermedio , #serverpremium").hide();
    };
});
$("#server_medio").change(function(){
    if ($(this).is(":checked")) {
        $("#servermedio").slideDown();
        $("#server_bajo , #server_premium").attr('checked', false);
        $("#serverbasico , #serverpremium").hide();
    } else {
        $("#serverbasico , #servermedio , #serverpremium").hide();
    };
});
$("#server_premium").change(function(){
    if ($(this).is(":checked")) {
        $("#serverpremium").slideDown();
        $("#server_bajo , #server_medio").attr('checked', false);
        $("#serverbasico , #servermedio").hide();
    } else {
        $("#serverbasico , #servermedio , #serverpremium").hide();
    };
});