$(document).ready(function(){
 
    // show html form when 'create course' button was clicked
    $(document).on('click', '.create-course-button', function(){
        // load list of categories
$.getJSON("http://localhost:8888/projectapi/course/read.php", function(data){
    
var create_course_html=`
 
    <!-- 'read course' button to show list of courses -->
    <div id='read-courses' class='btn btn-primary pull-right m-b-15px read-course-button'>
        <span class='glyphicon glyphicon-list'></span> Se alla
    </div>
    <!-- 'create course' html form -->
<form id='create-course-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- university field -->
        <tr>
            <td>Lärosäte</td>
            <td><input type='text' name='university' class='form-control' required /></td>
        </tr>
 
        <!-- name field -->
        <tr>
            <td>Namn</td>
            <td><input type='text' name='name' class='form-control' required /></td>
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
                    <span class='glyphicon glyphicon-plus'></span> Skapa kurs
                </button>
            </td>
        </tr>
 
    </table>
</form>`;
// inject html to 'page-content' of our app
$("#page-content").html(create_course_html);
 
// chage page title
changePageTitle("Create Course");
 
});
    });
 
    // will run if create course form was submitted
$(document).on('submit', '#create-course-form', function(){
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost:8888/projectapi/course/create.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // course was created, go back to course list
        showCourses();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
 
return false;
});
});