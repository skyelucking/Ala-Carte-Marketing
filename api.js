


// working api for placeholder reviews


// $.ajax({
//     url: "https://app.reviewapi.io/api/v1/reviews?apikey=e09d1d90-43b4-11eb-934e-4547053c6c30&url=https%3A%2F%2Fwww.consumeraffairs.com%2Fhomeowners%2Fhome_depot_appliances.html&amount=25",
//     method: "GET",
// }).then(function(response) {
//     console.log(response);
// })


// 1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y

$.getJSON('https://api.unsplash.com/users/goumbik/photos/?client_id=1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y', function(data){
    console.log(data)

    $.each(data, function(index, value) {
    console.log(value);

        var imageURL = value.urls.small;

        $('.image img').attr('src', imageURL);

    });
});


$.getJSON('https://api.unsplash.com/users/airfocus/photos/?client_id=1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y', function(data){
    console.log(data)

    $.each(data, function(index, value) {
    console.log(value);

        var imageURL = value.urls.small;

        $('.image1 img').attr('src', imageURL);

    });
});


$.getJSON('https://api.unsplash.com/users/neonbrand/photos/?client_id=1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y', function(data){
    console.log(data)

    $.each(data, function(index, value) {
    console.log(value);

        var imageURL = value.urls.small;

        $('.image2 img').attr('src', imageURL);

    });
});

$.getJSON('https://api.unsplash.com/users/roblaughter/photos/?client_id=1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y', function(data){
    console.log(data)

    $.each(data, function(index, value) {
    console.log(value);

        var imageURL = value.urls.small;

        $('.image3 img').attr('src', imageURL);

    });
});


$.getJSON('https://api.unsplash.com/users/austindistel/photos/?client_id=1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y', function(data){
    console.log(data)

    $.each(data, function(index, value) {
    console.log(value);

        var imageURL = value.urls.small;

        $('.image4 img').attr('src', imageURL);

    });
});


$.getJSON('https://api.unsplash.com/users/austinchan/photos/?client_id=1H0ylOdbFMDzCm9l4lW29Lc8CLgBneCb_bBDd2aun-Y', function(data){
    console.log(data)

    $.each(data, function(index, value) {
    console.log(value);

        var imageURL = value.urls.small;

        $('.image5 img').attr('src', imageURL);

    });
});
