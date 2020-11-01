$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-course-button', function(){
       // get course id
var id = $(this).attr('data-id');
// read course record based on given ID
$.getJSON("http://localhost:8888/projectapi/course/read_one.php?id=" + id, function(data){
    // start html
var read_one_course_html=`
 
<!-- when clicked, it will show the course's list -->
<div id='read-course' class='btn btn-primary pull-right m-b-15px read-course-button'>
    <span class='glyphicon glyphicon-list'></span> Se alla
</div>
<!-- course data will be shown in this table -->
<table class='table table-bordered table-hover'>
 
    <!-- university -->
    <tr>
        <td class='w-30-pct'>Lärosäte</td>
        <td class='w-70-pct'>` + data.university + `</td>
    </tr>
 
    <!-- name -->
    <tr>
        <td>Namn</td>
        <td>` + data.name + `</td>
    </tr>
 
    <!-- startdate -->
    <tr>
        <td>Startdatum</td>
        <td>` + data.startdate + `</td>
    </tr>
 
 
</table>`;
// inject html to 'page-content' of our app
$("#page-content").html(read_one_course_html);
 
// change page title
changePageTitle("Kurs");
});
    });
 
});