$(document).ready(function(){
 
    // show list of courses on first load
    showCourses();
    // when a 'read course button was clicked
$(document).on('click', '.read-course-button', function(){
    showCourses();
});
 
});
 
// function to show list of courses
function showCourses(){

    // get list of courses from the API
$.getJSON("http://localhost:8888/projectapi/course/read.php", function(data){
        // html for listing courses
var read_courses_html=`
<div id='create-course' class='btn btn-primary pull-right m-b-15px create-course-button'>
    <span class='glyphicon glyphicon-plus'></span> Skapa kurs
</div>
<!-- start table -->
<table class='table table-bordered table-hover'>
 
    <!-- creating our table heading -->
    <tr>
        <th class='w-15-pct'>Lärosäte</th>
        <th class='w-20-pct'>Namn</th>
        <th class='w-10-pct'>Startdatum</th>
        <th class='w-25-pct text-align-center'>Administrera</th>
    </tr>`;
     
    // loop through returned list of data
$.each(data.records, function(key, val) {
 
    // creating new table row per record
    read_courses_html+=`
        <tr>
 
            <td>` + val.university + `</td>
            <td>` + val.name + `</td>
            <td>` + val.startdate + `</td>
 
            <!-- 'action' buttons -->
            <td>
                <!-- read course button -->
                <button class='btn btn-primary m-r-10px read-one-course-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span> Läs
                </button>
 
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-course-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Uppdatera
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-course-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Radera
                </button>
            </td>
 
        </tr>`;
});
 
// end table
read_courses_html+=`</table>`;
// inject to 'page-content' of our app
$("#page-content").html(read_courses_html);
// change page title
changePageTitle("Kurslista");
 
});
 
}