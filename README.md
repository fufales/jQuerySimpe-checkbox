jQuery Simpe-checkbox
=====================

Simples selecciones con jQuery y los checkbox.

<a target="_new" href="http://jsfiddle.net/5Wj2U/">
DEMO ONLINE
</a>

<b>
Como se usa jQuery básicamente?
<b />

Lo que se hace es llamar al ID del input de tipo checkbox llamado <code>#server_bajo</code> y con el evento <code>.change()</code> de jQuery iniciar un control para saber si el <b>input</b> está o no está checked. Una vez determinado el estado del check se hace alguna acción al respecto. 

    $("#server_bajo").change(function(){    /*Llamando al ID del check*/
      if ($(this).is(":checked")) {         /*Controlando si está Checked*/
          
             /*Acciones a tomar si el check está checked*/
          $("#serverbasico").slideDown();
          $("#server_medio , #server_premium").attr('checked', false);
          $("#servermedio , #serverpremium").hide();
             /*Acciones a tomar si el check está checked*/
        } else {
             /*Acciones a tomar si el check NO! está checked*/
            $("#serverbasico , #servermedio , #serverpremium").hide();
             /*Acciones a tomar si el check NO! está checked*/
        };
    });

<br>
<b>
Como está en el HTML?
<b />

    <input id="server_bajo" name="server_bajo" type="checkbox">
    <label for="server_bajo">
        Servidor Básico
    </label>
