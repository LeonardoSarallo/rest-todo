var url = 'http://157.230.17.132:3015/todos';
var wrapper = $('.wrapper');
var deleteNotes = $('.delete');
var button = $('#mybutton');
var input = $('#modifytext');
var select = $('#modifyselect');

$(document).ready(function () {
    getData();

    $(document).on('click', '.delete', function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: url + '/' + id,
            method: 'DELETE',
            success: function (data) {
                getData();
            },
            error: function (err) {
                alert('si è verificato un errore');
            }
        });
    });

    button.click(function () {

        var text = input.val();
        var idData = $(".prova:selected").attr("data-id");
        $.ajax({
            url: url + '/' + idData,
            method: 'PUT',
            success: function (data) {
                getData();
            },
            error: function (err) {
                alert('si è verificato un errore');
            },
            data: {"text": text}
        });

    });
});

function printData(data) {
    wrapper.html('<ul>');
    select.html('');
    for (var i = 0; i < data.length; i++) {
        var notes = data[i].text;
        var idData = data[i].id;
        select.append("<option class='prova' value='" + notes + "' data-id='" + idData + "'>" + notes + "</option>");
        wrapper.children('ul').append('<li><span class="delete" data-id="' + idData + '">x:</span>' + notes + '</li>');
    }
    wrapper.append('</ul>');
}

function getData() {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            printData(data);
        },
        error: function (err) {
            alert('si è verificato un errore');
        }

    });
}
