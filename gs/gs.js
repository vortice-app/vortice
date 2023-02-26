$.getJSON('content.json', function (data) {

    "use strict";

    var content = data.content;

    $('#1 h1').html(content[0].header);
    $('#2 h1').html(content[1].header);
    $('#3 h1').html(content[2].header);

    $('#1 p').html(content[0].para);
    $('#2 p').html(content[1].para);
    $('#3 p').html(content[2].para);

});