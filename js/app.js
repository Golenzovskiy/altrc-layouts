$(document).ready(function () {
    $(function () {
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
    });

    $(function () {
        $('#filter').click(function (e) {
            $("#searchResult").removeClass('hidden');
            e.preventDefault();
            var l = Ladda.create(this);
            l.start();
            $.post("your-url",
                {data: data},
                function (response) {
                    console.log(response);
                }, "json")
                .always(function () {
                    l.stop();
                });
            return false;
        });
    });

    $(function () {
        var sampleTags = ['c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
        $('#FieldTags').tagit({
            availableTags: sampleTags
        });
    });
});