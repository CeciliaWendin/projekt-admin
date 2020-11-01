$(document).ready(function(){
 
    // show html form when 'update project' button was clicked
    $(document).on('click', '.update-project-button', function(){
        // get project id
var id = $(this).attr('data-id');
// read one record based on given projectid
$.getJSON("http://localhost:8888/projectapi/project/read_one.php?id=" + id, function(data){
 
    // values will be used to fill out our form
    var title = data.title;
    var url = data.url;
    var description = data.description;
    var img_url = data.img_url;
     
     
   // store 'update project' html to this variable
var update_project_html=`
<div id='read-project' class='btn btn-primary pull-right m-b-15px read-project-button'>
    <span class='glyphicon glyphicon-list'></span> Se alla
</div>
<!-- build 'update project' html form -->
<!-- we used the 'required' html5 property to prevent empty fields -->
<form id='update-project-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- title field -->
        <tr>
            <td>Titel</td>
            <td><input value=\"` + title + `\" type='text' name='title' class='form-control' required /></td>
        </tr>
 
        <!-- url field -->
        <tr>
            <td>Länk</td>
            <td><input value=\"` + url + `\" type='text' name='url' class='form-control' required /></td>
        </tr>
 
        <!-- description -->
        <tr>
            <td>Beskrivning</td>
            <td><input value=\"` + description + `\" type='text' name='description' class='form-control' required /></td>
        </tr>
        <!-- img -->
        <tr>
            <td>Bildlänk</td>
            <td><input value=\"` + img_url + `\" type='text' name='img_url' class='form-control' required /></td>
        </tr>
 
        <tr>
 
            <!-- hidden 'project id' to identify which record to delete -->
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
$("#page-content").html(update_project_html);
 
// chage page title
changePageTitle("Uppdatera projekt");
});
});
    });
     
   // will run if 'create project' form was submitted
$(document).on('submit', '#update-project-form', function(){
     
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost:8888/projectapi/project/update.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // project was created, go back to project list
        showProjects();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
     
    return false;
});
//});