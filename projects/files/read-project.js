$(document).ready(function(){
 
    // show list of projects on first load
    showProjects();
    // when a 'read project button was clicked
$(document).on('click', '.read-project-button', function(){
    showProjects();
});
 
});
 
// function to show list of projects
function showProjects(){

    // get list of projects from the API
$.getJSON("http://localhost:8888/projectapi/project/read.php", function(data){
        // html for listing projects
var read_projects_html=`
<div id='create-project' class='btn btn-primary pull-right m-b-15px create-project-button'>
    <span class='glyphicon glyphicon-plus'></span> Lägg till ny
</div>
<!-- start table -->
<table class='table table-bordered table-hover'>
 
    <!-- creating our table heading -->
    <tr>
        <th class='w-15-pct'>Titel</th>
        <th class='w-20-pct'>Länk</th>
        <th class='w-10-pct'>Beskrivning</th>
        <th class='w-10-pct'>Bildlänk</th>
        <th class='w-25-pct text-align-center'>Administrera</th>
    </tr>`;
     
    // loop through returned list of data
$.each(data.records, function(key, val) {
 
    // creating new table row per record
    read_projects_html+=`
        <tr>
 
            <td>` + val.title + `</td>
            <td>` + val.url + `</td>
            <td>` + val.description + `</td>
            <td>` + val.img_url + `</td>
 
            <!-- 'action' buttons -->
            <td>
                <!-- read button -->
                <button class='btn btn-primary m-r-10px read-one-project-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span> Läs
                </button>
 
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-project-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Uppdatera
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-project-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Radera
                </button>
            </td>
 
        </tr>`;
});
 
// end table
read_projects_html+=`</table>`;
// inject to 'page-content' of our app
$("#page-content").html(read_projects_html);
// change page title
changePageTitle("Projekt");
 
});
 
}