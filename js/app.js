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

            e.preventDefault();
            var l = Ladda.create(this);
            l.start();
            $.post("filter.php",
                {data: $('form').serialize()},
                function (response) {
                    console.log(response);
					$('#amount').text(response.amount);
					$("#searchResult").removeClass('hidden');
                }, "json")
                .always(function () {					
                    l.stop();
                });
            return false;
        });
    });
    
    $(function () {
        var sampleTags = ['пищёвка', 'стройка', 'абвгд', 'еёжз'];
        $('#FieldTags').tagit({
            availableTags: sampleTags
        });
    });
    $('#readOnlyTags').tagit({
        readOnly: true
    });
    
});