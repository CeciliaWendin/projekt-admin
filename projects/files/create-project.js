$(document).ready(function(){
 
    // show html form when 'create project' button was clicked
    $(document).on('click', '.create-project-button', function(){
        // load list of categories
$.getJSON("http://localhost:8888/projectapi/project/read.php", function(data){
    
var create_project_html=`
 
    <!-- 'read project' button to show list of projects -->
    <div id='read-projects' class='btn btn-primary pull-right m-b-15px read-project-button'>
        <span class='glyphicon glyphicon-list'></span> Se alla
    </div>
    <!-- 'create project' html form -->
<form id='create-project-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- title field -->
        <tr>
            <td>Titel</td>
            <td><input type='text' name='title' class='form-control' required /></td>
        </tr>
 
        <!-- name field -->
        <tr>
            <td>Länk</td>
            <td><input type='text' name='url' class='form-control' required /></td>
        </tr>
 
        <!-- startdate field -->
        <tr>
            <td>Beskrivning</td>
            <td><input type='text' name='description' class='form-control' required /></td>
        </tr>
        <!-- img field -->
        <tr>
            <td>Bildlänk</td>
            <td><input type='text' name='img_url' class='form-control' required /></td>
        </tr>
       
 
        <!-- button to submit form -->
        <tr>
            <td></td>
            <td>
                <button type='submit' class='btn btn-primary'>
                    <span class='glyphicon glyphicon-plus'></span> Lägg till
                </button>
            </td>
        </tr>
 
    </table>
</form>`;
// inject html to 'page-content' of our app
$("#page-content").html(create_project_html);
 
// chage page title
changePageTitle("Create project");
 
});
    });
 
    // will run if create project form was submitted
$(document).on('submit', '#create-project-form', function(){
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost:8888/projectapi/project/create.php",
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
});