var url = 'http://157.230.17.132:3015/todos';
var wrapper = $('.wrapper');
var deleteNotes = $('.delete');

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

$(document).on('click', '.delete', function() {
  var id = $(this).attr('data-id');
  $.ajax({
    url: url + '/' + id,
    method: 'DELETE',
    success: function(data)
    {
      printData(data);
    },
    error: function (err) {
      alert('si è verificato un errore');
    }
  });
});


function printData(data) {
  wrapper.append('<ul>');
  for (var i = 0; i < data.length; i++) {
    var notes = data[i].text;
    var idData = data[i].id;
    wrapper.children('ul').append('<li><span class="delete" data-id="' + idData + '">x:</span>' + notes + '</li>');
  }
  wrapper.append('</ul>');
}
