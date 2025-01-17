$(document).ready(function() {
    let counter = 0;
    const responses = [];

    $('button').on('click', function() {
        const username = $('#username').val().trim();
        const age = $('#age').val().trim();
        const color = $(this).data('color');
        const cookie = $(this).data('cookie');

        if (username === "" || age === "") {
            $('#result').text('Please enter your name and age before selecting a color.');
            return;
        }

        counter++;
        const response = `${counter}. ${username}, you are ${age} and chose ${color} which shows that you are a ${cookie}.`;
        responses.push(response);

        $('#result').text(response);
        $('#response-list').html(responses.map(res => `<li>${res}</li>`).join(''));
        $('#counter').text(`Quiz Taken: ${counter} times`);

        // Clear the input fields after a button is clicked
        $('#username').val('');
        $('#age').val('');
    });
});
