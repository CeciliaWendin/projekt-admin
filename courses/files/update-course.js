$(document).ready(function(){
 
    // show html form when 'update course' button was clicked
    $(document).on('click', '.update-course-button', function(){
        // get course id
var id = $(this).attr('data-id');
// read one record based on given courseid
$.getJSON("http://localhost:8888/projectapi/course/read_one.php?id=" + id, function(data){
 
    // values will be used to fill out our form
    var university = data.university;
    var name = data.name;
    var startdate = data.startdate;

     
   // store 'update course' html to this variable
var update_course_html=`
<div id='read-course' class='btn btn-primary pull-right m-b-15px read-course-button'>
    <span class='glyphicon glyphicon-list'></span> Se alla
</div>
!-- build 'update course' html form -->
<!-- we used the 'required' html5 property to prevent empty fields -->
<form id='update-course-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- university field -->
        <tr>
            <td>Lärosäte</td>
            <td><input value=\"` + university + `\" type='text' name='university' class='form-control' required /></td>
        </tr>
 
        <!-- name field -->
        <tr>
            <td>Namn</td>
            <td><input value=\"` + name + `\" type='text' name='name' class='form-control' required /></td>
        </tr>
 
        <!-- startdate field -->
        <tr>
            <td>Startdatum</td>
            <td><input value=\"` + startdate + `\" type='text' name='startdate' class='form-control' required /></td>
        </tr>
 
        <tr>
 
            <!-- hidden 'course id' to identify which record to delete -->
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
$("#page-content").html(update_course_html);
 
// chage page title
changePageTitle("Uppdatera kurs");
});
});
    });
     
   // will run if 'create course' form was submitted
$(document).on('submit', '#update-course-form', function(){
     
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost:8888/projectapi/course/update.php",
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
//});