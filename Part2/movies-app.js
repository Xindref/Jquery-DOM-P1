// this will delete our table row for the movie entry
$('#entry-table').on('click', '.delete-button', function () {
    // remove entire tr from tbody
    $(this).parentsUntil('tbody').remove();
})

$('#movie-form').on('submit', function (event) {
    event.preventDefault();
    // this code won't run unless the input is empty, otherwise it will utilize
    // the minlength alert from the HTML file
    if ($('#title').val().length <= 2) {
        alert('Movie Title must be more than 2 characters!');
    }
    // this code won't run unless the browser fails to utilize min/max value
    else if ($('#rating').val() > 10 || $('#rating').val() < 1 || $('#rating').val() === undefined) {
        alert('Rating must be between 1-10!');
    }
    // if we have valid input, create our tr with current inputs
    else {
        let entry = $(`<tr class="entry">
    <td><input type="button" class="delete-button" value="X"></td>
    <td>${$('#title').val()}</td>
    <td>${$('#rating').val()}</td>
    </tr>`)
        // append our entry to the table
        $('#entry-table').children('tbody').append(entry);
        // set our title and rating values to be empty
        $('#title').val('');
        $('#rating').val('');
    }
})

$('#delete-all').on('click', function () {
    $('.entry').remove();
})

$('#sort-title').on('click', function () {
    // Select all the rows in the table
    var rows = $('table tr.entry');

    // Sort the rows based on the rating in the third td element
    rows.sort(function (a, b) {
        var aValue = $(a).find('td:nth-child(2)').text().toUpperCase();
        var bValue = $(b).find('td:nth-child(2)').text().toUpperCase();
        return aValue.localeCompare(bValue);
    });

    // Replace the existing table rows with the sorted rows
    $.each(rows, function (index, item) {
        $('#entry-table').children('tbody').append(item);
    })
})

$('#sort-rating').on('click', function () {
    // Select all the rows in the table
    var rows = $('table tr.entry');

    // Sort the rows based on the rating in the third td element
    rows.sort(function (a, b) {
        var aValue = parseFloat($(a).find('td:nth-child(3)').text());
        var bValue = parseFloat($(b).find('td:nth-child(3)').text());
        return bValue - aValue;
    });

    // Replace the existing table rows with the sorted rows
    $.each(rows, function (index, item) {
        $('#entry-table').children('tbody').append(item);
    })
})