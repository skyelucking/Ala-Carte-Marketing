// Rule of thumb for better organization.  Order
// 1) Global variable declarations
// 2a) Function definitions
// 2b) Good to define a function for initializing things/setup
// 2c) Put code that initializes things or setup things inside the initialize function
// 3) Last should be functional invocations or if using $(document).ready(function() { ... }),
// put the function that kicks off the app inside it

//City Search Elements
var $searchInput = $("#contactCi");
var $latitudeInput = $("#latitude_input");
var $longitudeInput = $("#longitude_input");
var longData = "";
var latData = "";

//Final Quote Variable
var finalQuote = 0;

//Getting Services from Local Storage
var servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
// console.log(servicesDataList);

//Getting Customer Data from Local Storage
var customerDataList = JSON.parse(localStorage.getItem("customerInfoStored"));
// console.log("Customer info:" + customerDataList._contactFName );


//Function That Initializes All Processes
function initialize() {
getLocalStorage();
renderServiceLine();
renderCustomerData();
renderQuoteLine();
 
}


//Rendering the Services Listing
function renderServiceLine(){
  var servicesInfoStored = JSON.parse(localStorage.getItem("servicesInfoStored"));
  $(".quoteContainer").empty();
  for (i = 0; i < servicesInfoStored.length; i++){
    if (servicesInfoStored[i].selected == true){
      
      // console.log(servicesInfoStored[i].serviceName, servicesInfoStored[i]);
      
      var serviceLine = $("<div>")
      .attr("id", "service" + [i] + "Line")
      .attr("class", "quoteLine")
      .css("border-width", "5px");

      serviceLine.text(  "    |    " + servicesInfoStored[i].serviceName + " | " + servicesInfoStored[i].userComment  + " | " +  "$" + servicesInfoStored[i].price ).
      prepend("<img src='Assets/" + servicesInfoStored[i].btnImage + "' style='width: 25px;' />");
     
    $(".quoteContainer")
        .append(serviceLine)
        .css("font-weight", "bolder");

      finalQuote = finalQuote + servicesInfoStored[i].price;
      // console.log("Final Quote: ", finalQuote);

    }
    else {
      // console.log("Not Selected:" + servicesInfoStored[i].serviceName);
    }
  }

};
//Rendering the Final Quote Line
function renderQuoteLine(){
  var servicesInfoStored = JSON.parse(localStorage.getItem("servicesInfoStored"));
  $(".finalQuoteContainer").empty();
      var quoteLine = $("<div>")
      .attr("id", "quote" + [i] + "Line")
      .attr("class", "quoteLine")
      .css("border-width", "5px");

      quoteLine.text("Final Quote: " + "$" +finalQuote);
     
    $(".finalQuoteContainer")
        .append(quoteLine)
        .css("font-weight", "bolder");

          };
    

//Rendering the Customer Information
function renderCustomerData(){
var customerDataList = JSON.parse(localStorage.getItem("customerInfoStored"));
// console.log("Customer info:" + customerDataList._contactFName + " " + customerDataList._contactLName);
document.getElementById("quoteFName").innerText = customerDataList._contactFName + " "; 
document.getElementById("quoteLName").innerText = customerDataList._contactLName;
document.getElementById("quoteEmail").innerText = customerDataList._contactEmail;
document.getElementById("quotePhone").innerText = customerDataList._contactPhone;
document.getElementById("quoteStreet").innerText = customerDataList._contactStreet;
document.getElementById("quoteCity").innerText = customerDataList._contactCity;
document.getElementById("quoteZip").innerText = customerDataList._contactZip;
if (customerDataList._contactQuoteComment != null ){
document.getElementById("quoteComment").innerText = customerDataList._contactQuoteComment;
} else {
  document.getElementById("quoteComment").innerText = "";
}
}


//Getting info. from Local Storage
function getLocalStorage() {
  // Check if local storage (LS) key exists
  if (localStorage.getItem("servicesInfoStored")) {
    // Then retrieve the associated value from LS
   var servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
    
      }
}

//Function That Allows for the Page to Load first
$(document).ready(function () {
  initialize();
 });
