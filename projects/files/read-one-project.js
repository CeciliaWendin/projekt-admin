$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-project-button', function(){
       // get project id
var id = $(this).attr('data-id');
// read project record based on given ID
$.getJSON("http://localhost:8888/projectapi/project/read_one.php?id=" + id, function(data){
    // start html
var read_one_project_html=`
 
<!-- when clicked, it will show the project's list -->
<div id='read-project' class='btn btn-primary pull-right m-b-15px read-project-button'>
    <span class='glyphicon glyphicon-list'></span> Se alla
</div>
<!-- project data will be shown in this table -->
<table class='table table-bordered table-hover'>
 
    <!-- Title -->
    <tr>
        <td class='w-30-pct'>Titel</td>
        <td class='w-70-pct'>` + data.title + `</td>
    </tr>
 
    <!-- url -->
    <tr>
        <td>Länk</td>
        <td>` + data.url + `</td>
    </tr>
 
    <!-- description -->
    <tr>
        <td>Beskrivning</td>
        <td>` + data.description + `</td>
    </tr>
    <!-- img -->
    <tr>
        <td>Bildlänk</td>
        <td>` + data.img_url + `</td>
    </tr>
 
</table>`;
// inject html to 'page-content' of our app
$("#page-content").html(read_one_project_html);
 
// change page title
changePageTitle("Kurs");
});
    });
 
});