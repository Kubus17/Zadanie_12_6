var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) {
        countryName = 'Poland';
    }
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}
function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        resp.forEach(function (item) {
            $("ul").append("<h4>NAME: </h4>");
            $('<li>').text(item.name).appendTo(countriesList);
            $("ul").append("<h4>CAPITAL: </h4>");
            $('<li>').text(item.capital).appendTo(countriesList);
            $("ul").append("<h4>POPULATION: </h4>");
            $('<li>').text(item.population).appendTo(countriesList);
            $("ul").append("<h4>BORDERS: </h4>");
            $('<li>').text(item.borders).appendTo(countriesList);
            $("ul").append("<h4>SUBREGION: </h4>");
            $('<li>').text(item.subregion).appendTo(countriesList);
            $("ul").append("<h4>REGION: </h4>");
            $('<li>').text(item.region).appendTo(countriesList);
        });
    });
}