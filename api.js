


// working api for placeholder reviews


$.ajax({
    url: "https://app.reviewapi.io/api/v1/reviews?apikey=e09d1d90-43b4-11eb-934e-4547053c6c30&url=https%3A%2F%2Fwww.consumeraffairs.com%2Fhomeowners%2Fhome_depot_appliances.html&amount=25",
    method: "GET",
}).then(function(response) {
    console.log(response);
})


