$(document).ready(function(){
 
    // show list of Work on first load
    showWork();
    // when a 'read work button was clicked
$(document).on('click', '.read-work-button', function(){
    showWork();
});
 
});
 
// function to show list of Work
function showWork(){

    // get list of Work from the API
$.getJSON("http://localhost:8888/projectapi/work/read.php", function(data){
        // html for listing Work
var read_work_html=`
<div id='create-work' class='btn btn-primary pull-right m-b-15px create-work-button'>
    <span class='glyphicon glyphicon-plus'></span> Lägg till ny
</div>
<!-- start table -->
<table class='table table-bordered table-hover'>
 
    <!-- creating our table heading -->
    <tr>
        <th class='w-10-pct'>Arbetsplats</th>
        <th class='w-10-pct'>Titel</th>
        <th class='w-20-pct'>Beskrivning</th>
        <th class='w-10-pct'>Startdatum</th>
        <th class='w-25-pct text-align-center'>Administrera</th>
    </tr>`;
     
    // loop through returned list of data
$.each(data.records, function(key, val) {
 
    // creating new table row per record
    read_work_html+=`
        <tr>
 
            <td>` + val.workplace + `</td>
            <td>` + val.title + `</td>
            <td>` + val.workdesc + `</td>
            <td>` + val.startdate + `</td>
 
            <!-- 'action' buttons -->
            <td>
                <!-- read work button -->
                <button class='btn btn-primary m-r-10px read-one-work-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span> Läs
                </button>
 
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-work-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Uppdatera
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-work-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Radera
                </button>
            </td>
 
        </tr>`;
});
 
// end table
read_work_html+=`</table>`;
// inject to 'page-content' of our app
$("#page-content").html(read_work_html);
// chage page title
changePageTitle("Tidigare arbeten");
 
});
 
}