$(document).ready(function(){
 
    // will run if the delete button was clicked
    $(document).on('click', '.delete-work-button', function(){
        // get the work id
var work_id = $(this).attr('data-id');
// bootbox for good looking 'confirm pop up'
bootbox.confirm({
 
    message: "<h4>Är du säker?</h4>",
    buttons: {
        confirm: {
            label: '<span class="glyphicon glyphicon-ok"></span> Ja',
            className: 'btn-danger'
        },
        cancel: {
            label: '<span class="glyphicon glyphicon-remove"></span> Avbryt',
            className: 'btn-primary'
        }
    },
    callback: function (result) {
        if(result==true){
 
            // send delete request to api / remote server
            $.ajax({
                url: "http://localhost:8888/projectapi/work/delete.php",
                type : "POST",
                dataType : 'json',
                data : JSON.stringify({ id: work_id }),
                success : function(result) {
         
                    // re-load list of works
                    showWork();
                },
                error: function(xhr, resp, text) {
                    console.log(xhr, resp, text);
                }
            });
         
        }
    }
});
    });
});