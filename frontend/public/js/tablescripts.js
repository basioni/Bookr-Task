$(function () {
    $("#example3").DataTable({
      "responsive": true, 
      "lengthChange": false, 
      "autoWidth": true,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example3_wrapper .col-md-6:eq(0)');
    
  });