$(document).ready( () => {
    /* sidebar collapse */
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#display-cards').load("./cards.html");
});
