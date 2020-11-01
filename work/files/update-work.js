$(document).ready(function(){
 
    // show html form when 'update work' button was clicked
    $(document).on('click', '.update-work-button', function(){
        // get work id
var id = $(this).attr('data-id');
// read one record based on given workid
$.getJSON("http://localhost:8888/projectapi/work/read_one.php?id=" + id, function(data){
 
    // values will be used to fill out our form
    var workplace = data.workplace;
    var title = data.title;
    var workdesc = data.workdesc;
    var startdate = data.startdate;
    var enddate = data.enddate;
     
   // store 'update work' html to this variable
var update_work_html=`
<div id='read-work' class='btn btn-primary pull-right m-b-15px read-work-button'>
    <span class='glyphicon glyphicon-list'></span> Se alla
</div>
!-- build 'update work' html form -->
<!-- we used the 'required' html5 property to prevent empty fields -->
<form id='update-work-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- workplace field -->
        <tr>
            <td>Arbetsplats</td>
            <td><input value=\"` + workplace + `\" type='text' name='workplace' class='form-control' required /></td>
        </tr>
 
        <!-- title field -->
        <tr>
            <td>Namn</td>
            <td><input value=\"` + title + `\" type='text' name='title' class='form-control' required /></td>
        </tr>
        <!-- description field -->
        <tr>
            <td>Beskrivning</td>
            <td><input value=\"` + workdesc + `\" type='text' name='workdesc' class='form-control' required /></td>
        </tr>
 
        <!-- startdate field -->
        <tr>
            <td>Startdatum</td>
            <td><input value=\"` + startdate + `\" type='text' name='startdate' class='form-control' required /></td>
        </tr>

 
        <tr>
 
            <!-- hidden 'work id' to identify which record to delete -->
            <td><input value=\"` + id + `\" name='id' type='hidden' /></td>
 
            <!-- button to submit form -->
            <td>
                <button type='submit' class='btn btn-info'>
                    <span class='glyphicon glyphicon-edit'></span> Uppdatera
                </button>
            </td>
 
        </tr>
 
    </table>
</form>`;
// inject to 'page-content' of our app
$("#page-content").html(update_work_html);
 
// chage page title
changePageTitle("Uppdatera arbetsplats");
});
});
    });
     
   // will run if 'create work' form was submitted
$(document).on('submit', '#update-work-form', function(){
     
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost:8888/projectapi/work/update.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // work was created, go back to work list
        showWork();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
     
    return false;
});
//});