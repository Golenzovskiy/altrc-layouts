$(document).ready(function () {
    $("#from").datepicker({
        dateFormat: "dd.mm.yy",
        defaultDate: -365,
        changeYear: true,
        numberOfMonths: 1,
        onClose: function (selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        dateFormat: "dd.mm.yy",
        changeYear: true,
        numberOfMonths: 1,
        onClose: function (selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });

    $('#filter').click(function (e) {
        e.preventDefault();
        var l = Ladda.create(this);
        l.start();
        $.post("filter.php",
            {data: $('form').serialize()},
            function (response) {
                $('#amount').text(response.amount);
                $("#searchResult").removeClass('hidden');
            }, "json")
            .always(function () {
                l.stop();
            });
        return false;
    });

    var sampleTags = ['пищёвка', 'стройка', 'абвгд', 'еёжз'];
    $('#FieldTags').tagit({
        availableTags: sampleTags
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".tag").on("click", function () {
        var selectedTag = $(this).data("tag");
        $("#filterResult").find("tr[data-tags]").each(function () {
            if ($.inArray(selectedTag, $(this).data('tags')) == -1) {
                $(this).addClass('hidden');
            }
        })
        $("#tags-button").find("span").removeClass("label-primary").addClass("label-default");
        $(this).children("span").removeClass("label-default").addClass("label-primary");
    })
});