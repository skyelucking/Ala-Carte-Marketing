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

// Contact Form Elements
var customerInfoList = {
  _contactFName: "",
  _contactLName: "",
  _contactEmail: "",
  _contactPhone: "",
  _contactStreet: "",
  _contactZip: "",
  _contactLat: "",
  _contactLong: "",
  _contactCity: "",
  _contactQuoteComment: "",
};
var servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
console.log(servicesDataList);

// let selectedServices = [];
// for (let i = 0; i < selectedServiceList.length; i++) {
//     if (selectedServiceList[i].selected == 'false') {
//       selectedServices.push(selectedServiceList[i]);
//     }
// }
// console.log(selectedServices);

// var _servicesGrid = document.getElementById("servicesGrid");

// Set Services Local Storage
var selectedServiceList =  JSON.parse(localStorage.getItem("servicesInfoStored"));

// console.log(selectedServiceList)

// Quote Adding Mechanism
var quotePrice = 0;


//Function That Initializes All Processes
function initialize() {
renderSelectedServices();
  //  initGoogleMaps();
  // saveToLocalStorage();
  getLocalStorage();
 
}

function renderSelectedServices(){
  for (i = 0; i < selectedServiceList.length; i++) {
    if (selectedServiceList[i].selected === 'true'){
      console.log("Selected Services: ", selectedServiceList[i].serviceName, selectedServiceList[i].selected);
      
    } else {
      
    }
}
console.log("Selected Services: ", selectedServiceList);
};

// //Function that Saves to Local Storage
// function saveToLocalStorage() {
//   localStorage.setItem("servicesInfoStored", JSON.stringify(servicesDataList));
//   localStorage.setItem("customerInfoStored", JSON.stringify(customerInfoList));
// }

//Function that Gets Local Storage
function getLocalStorage() {
  // Check if local storage (LS) key exists
  if (localStorage.getItem("servicesInfoStored")) {
    // Then retrieve the associated value from LS
   var servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
    // console.log(servicesDataList);
      }
}

//Function That Allows for the Page to Load first
$(document).ready(function () {
  initialize();
  renderSelectedServices();
});
