$(document).ready(function () {
    let clickCounter = 0;
    let alertShown = false;

    // Hide the alert initially
    $('.alert').hide();

    $('#btn-story').click(function () {
        clickCounter++;
        $('#counter').text(clickCounter);

        const person = $('#person').val();
        const fabricMaterial = $('#Fabric_Material').val();
        const color = $('#Color').val();

        const story = `${person} customized a ${fabricMaterial} ${color}.`;
        $('#story').text(story);

        let clickMessage = `Thank you for placing an order! Your order is on the way`;
        $('p').last().text(clickMessage);

        // Show the alert when the button is clicked
        if (!alertShown) {
            $('.alert').show();
            alertShown = true;
        }
    });
});
