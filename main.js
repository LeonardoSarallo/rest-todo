var url = 'http://157.230.17.132:3015/todos';
var wrapper = $('.wrapper');
var deleteNotes = $('.delete');
var button = $('#mybutton');
var input = $('#modifytext');
var select = $('#modifyselect');


$(document).ready(function() {
  getData();

  $(document).on('click', '.delete', function() {
    var id = $(this).attr('data-id');
    $.ajax({
      url: url + '/' + id,
      method: 'DELETE',
      success: function(data)
      {
        getData();
      },
      error: function (err) {
        alert('si è verificato un errore');
      }
    });
  });

  button.click(function() {

    var text = input.val();
    var id = select.val();
    console.log(id);

    $.ajax({
      url: url + '/' + id,
      method: 'PUT',
      success: function(data)
      {
        getData();
      },
      error: function (err) {
        alert('si è verificato un errore');
      }
    });

  });
});

function printData(data) {
  wrapper.html('<ul>');
  select.html('');
  for (var i = 0; i < data.length; i++) {
    var notes = data[i].text;
    var idData = data[i].id;
    select.append('<option value="'+ notes +'">' + notes + '</option>');
    wrapper.children('ul').append('<li><span class="delete" data-id="' + idData + '">x:</span>' + notes + '</li>');
  }
  wrapper.append('</ul>');
}

function getData() {
  $.ajax({
    url: url,
    method: 'GET',
    success: function (data)
    {
      console.log(data);
      printData(data);
    },
    error: function (err)
    {
      alert('si è verificato un errore');
    }

  });
}
