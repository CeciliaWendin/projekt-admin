$(document).ready(function(){
 
    // show html form when 'create work' button was clicked
    $(document).on('click', '.create-work-button', function(){
        // load list of categories
$.getJSON("http://localhost:8888/projectapi/work/read.php", function(data){
    
var create_work_html=`
 
    <!-- 'read work' button to show list of work -->
    <div id='read-work' class='btn btn-primary pull-right m-b-15px read-work-button'>
        <span class='glyphicon glyphicon-list'></span> Visa alla
    </div>
    <!-- 'create work' html form -->
<form id='create-work-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- workplace field -->
        <tr>
            <td>Arbetsplats</td>
            <td><input type='text' name='workplace' class='form-control' required /></td>
        </tr>
 
        <!-- title field -->
        <tr>
            <td>Titel</td>
            <td><input type='text' name='title' class='form-control' required /></td>
        </tr>
        <!-- description field -->
        <tr>
            <td>Beskrivning</td>
            <td><input type='text' name='workdesc' class='form-control' required /></td>
        </tr>
 
        <!-- startdate field -->
        <tr>
            <td>Startdatum</td>
            <td><input type='text' name='startdate' class='form-control' required /></td>
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
$("#page-content").html(create_work_html);
 
// chage page title
changePageTitle("Lägg till ny arbetsplats");
 
});
    });
 
    // will run if create work form was submitted
$(document).on('submit', '#create-work-form', function(){
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost:8888/projectapi/work/create.php",
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
});