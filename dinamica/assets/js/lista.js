/**
 * Created by PabloVictor on 23/04/2015.
 */

$(document).ready(function(){
    $(".form-horizontal").submit(function(event){
        if($("#nomeDoAssunto").val() == "" || $("#nomeDoAssunto").val().trim() == ""){
            $(".alert").show();
        }else{
            $(".alert").hide();
            var nomeDoAssunto = $("#nomeDoAssunto").val();
            var radio = $('input[name=assuntosDeInteresse]');
            var checkedValue = radio.filter(':checked').val();
            if(checkedValue == "sim"){
                $(".jaAprendi").append(
                    "<tr class='success'>" +
                    "<td>"+ nomeDoAssunto + "</td>" +
                    "<td>   <a href='javascript:void(0);' class='btn btn-danger remove'><i class='icon-trash icon-white'></i> Remover</a>" +
                    "</td>"+
                    "</tr>");
            }else{
                $(".desejoAprender").append(
                    "<tr class='warning'>" +
                    "<td>"+ nomeDoAssunto + "</td>" +
                    "<td>" +
                    "<a href='javascript:void(0);' value="+"'"+ nomeDoAssunto +"'"+" class='btn btn-warning mover'><i class='icon-move icon-white'></i> Mover</a>" +
                    " <a href='javascript:void(0);' class='btn btn-danger remove'><i class='icon-trash icon-white'></i> Remover</a>" +
                    "</td>"+
                    "</tr>");
            }
        }
        event.preventDefault();

        $(document).on('click', 'a.mover', function () {
            var assunto = $(this).attr('value');
            $(".jaAprendi").append(
                "<tr>" +
                "<td>"+ assunto + "</td>" +
                "<td>   <a href='javascript:void(0);' class='btn btn-danger remove'><i class='icon-trash icon-white'></i> Remover</a>" +
                "</td>"+
                "</tr>");
            $(this).closest('tr').remove();
        });

        $(document).on('click', 'a.remove', function () {
            $(this).closest('tr').remove();
        });
    });

});

