$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-work-button', function(){
       // get work id
var id = $(this).attr('data-id');
// read work record based on given ID
$.getJSON("http://localhost:8888/projectapi/work/read_one.php?id=" + id, function(data){
    // start html
var read_one_work_html=`
 
<!-- when clicked, it will show the work's list -->
<div id='read-work' class='btn btn-primary pull-right m-b-15px read-work-button'>
    <span class='glyphicon glyphicon-list'></span> Se alla
</div>
<!-- work data will be shown in this table -->
<table class='table table-bordered table-hover'>
 
    <!-- workplace -->
    <tr>
        <td class='w-30-pct'>Arbetsplats</td>
        <td class='w-70-pct'>` + data.workplace + `</td>
    </tr>
 
    <!-- title -->
    <tr>
        <td>Titel</td>
        <td>` + data.title + `</td>
    </tr>
    <!-- description -->
    <tr>
        <td>Beskrivning</td>
        <td>` + data.workdesc + `</td>
    </tr>
 
    <!-- startdate -->
    <tr>
        <td>Startdatum</td>
        <td>` + data.startdate + `</td>
    </tr>
 
 
</table>`;
// inject html to 'page-content' of our app
$("#page-content").html(read_one_work_html);
 
// change page title
changePageTitle("Arbetsplats");
});
    });
 
});