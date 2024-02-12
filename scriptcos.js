$(document).ready(function () {
    let clickCounter = 0;

    $('#btn-story').click(function () {
        clickCounter++;
        $('#counter').text(clickCounter);

        const person = $('#person').val();
        const fabricMaterial = $('#Fabric_Material').val(); // Changed variable name to fabricMaterial
        const color = $('#Color').val();

        const story = `${person} customized a ${fabricMaterial} ${color}.`; // Fixed variable name here
        $('#story').text(story);

        let clickMessage = `You have Cuztomized me ${clickCounter} times`;
        $('p').last().text(clickMessage);
    });
});
