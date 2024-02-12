$(document).ready(function () {
    let clickCounter = 0;

    $('#btn-story').click(function () {
        clickCounter++;
        $('#counter').text(clickCounter);


        const person = $('#person').val();
        const adjective = $('#adjective').val();
        const noun = $('#noun').val();


        const story = `${person} likes ${adjective} ${noun}.`;
        $('#story').text(story);


        let clickMessage = `You have clicked me ${clickCounter} times`;
        $('p').last().text(clickMessage);
    });
});
