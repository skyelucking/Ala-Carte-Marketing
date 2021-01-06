// Rule of thumb for better organization.  Order
// 1) Global variable declarations
// 2a) Function definitions
// 2b) Good to define a function for initializing things/setup
// 2c) Put code that initializes things or setup things inside the initialize function
// 3) Last should be functional invocations or if using $(document).ready(function() { ... }),
// put the function that kicks off the app inside it

//City Search Elements
var $searchInput = $("#contactCity");
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

// Set Services Local Storage
var selectedServiceList = [];

// Set Service List Data
var servicesDataList = [
  {
    serviceName: "Logo Design",
    description:
      "Lets get your Logo to represent your company and your values. ",
    price: 100,
    btnImage: "sushi1.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Landing Page",
    description:
      "We will customize your home page and make sure that its visually pleasing, and also captures the viewer. ",
    price: 100,
    btnImage: "sushi2.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Weekly Posts",
    description:
      "We will help you design weekly Social Media Posts that will help draw in more followers and a broader audience. ",
    price: 100,
    btnImage: "sushi3.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Photo Editing and Design",
    description:
      "Do your photos look bland, and unprofessional? Lets spruce them up! ",
    price: 100,
    btnImage: "sushi4.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Aesthetic Design",
    description:
      "We will help create a cohesive theme that will stretch across all your platforms. ",
    price: 100,
    btnImage: "sushi5.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Competitive Advantage",
    description:
      "Want to have insight on what you competitors and the marker is currently doing? Then this is for you!",
    price: 100,
    btnImage: "sushi6.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Business Cards",
    description:
      "Keep these on hand so you will never miss an opportunity to get your name out there!",
    price: 100,
    btnImage: "sushi7.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Creating Testimonials",
    description:
      "We will interview your customers, send them surveys and then create a testimonial so you can show your prospective prospect.",
    price: 100,
    btnImage: "sushi8.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Vision and Mission Statements",
    description:
      "If you don't have a vision your business is blind. Let us help you get clarity on what you want to do.",
    price: 100,
    btnImage: "sushi1.png",
    userComment: "",
    selected: false,
  },
];


function initGoogleMaps() {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("contactCity"),
    { types: ["geocode"] }
  );
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
    console.log(near_place);
    $latitudeInput.value = near_place.geometry.location.lat();
    customerInfoList._contactLat = near_place.geometry.location.lat();
    customerInfoList._contactLong = near_place.geometry.location.lng();
    cityName = near_place.address_components[0].short_name;
  });
}

//Function That Initializes All Processes
function initialize() {
  renderServiceGrid();
  initGoogleMaps();
  getLocalStorage();
  checkCheckBoxes ();
  checkUserComments();
  checkContact();
}

//Function That Checks Boxes on Previously Selected Services
function checkCheckBoxes (){
  if (localStorage.getItem("servicesInfoStored")){
  servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
  for (i = 0; i < servicesDataList.length; i++) {
    if (servicesDataList[i].selected !== "" && servicesDataList[i].selected) { 
    document.getElementById("serv" + [i] + "Select").checked = true;
   } else if (servicesDataList[i].selected = ""){
    document.getElementById("serv" + [i] + "Select").checked = false;
   }

}
}
};

//Function That Checks Comments on Previously Commented On Services
function checkUserComments (){
  if (localStorage.getItem("servicesInfoStored")){
  servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
  for (i = 0; i < servicesDataList.length; i++) {
    if (servicesDataList[i].userComment !== "") { 
    document.getElementById("serv" + [i] + "Comment").value = servicesDataList[i].userComment;
   } else if (servicesDataList[i].selected = ""){
    document.getElementById("serv" + [i] + "Comment").placeholder = "Service User Comment!";
   }

}}
};

function checkContact(){
  if (localStorage.getItem("customerInfoStored")) {
    // Then retrieve the associated value from LS
    customerDataList = JSON.parse(localStorage.getItem("customerInfoStored"));
    document.getElementById("contactFName").value = customerDataList._contactFName;
    document.getElementById("contactLName").value = customerDataList._contactLName; 
    document.getElementById("contactEmail").value = customerDataList._contactEmail;
    document.getElementById("contactPhone").value = customerDataList._contactPhone;
    document.getElementById("contactStreet").value = customerDataList._contactStreet;
    document.getElementById("contactCity").value = customerDataList._contactCity;
    document.getElementById("contactZip").value = customerDataList._contactZip;
    if (customerDataList._contactQuoteComment !== ""){
    document.getElementById("getQuoteComment").value = customerDataList._contactQuoteComment;
  } else {
    document.getElementById("getQuoteComment").placeholder = "Cat got your tongue?";
  }
    console.log(customerDataList );
      }

};


//Function Creates the Services Grid by Looping Services Array
function renderServiceGrid() {
  i = servicesDataList.key;
  for (i = 0; i < servicesDataList.length; i++) {
    //Service Details
    // document.getElementById("serv"+[i]+"Key").textContent = " ID and Section Container = " + [i];
    document.getElementById("serv" + [i] + "Name").textContent =
      servicesDataList[i].serviceName;
    document.getElementById("serv" + [i] + "Desc").textContent =
      servicesDataList[i].description;
    document.getElementById("serv" + [i] + "Price").textContent =
      "$" + servicesDataList[i].price;
    document.getElementById("serv" + [i] + "Img").src =
      "Assets/" + servicesDataList[i].btnImage;

    // Image Click to show Details
    var servButton = document.getElementById("serv" + [i] + "Img");

    //This is an  'immediately invoked function' which helps retain the i variable and pass it along with in the loop//
    (function (i) {
      // This button makes the details of the service visible
      servButton.addEventListener("click", function () {
        // console.log("serv" + [i] + "DetailsBox");
        var _servDetails = servicesDataList[i];
        //  console.log(servicesDataList);
        if (
          (document.getElementById(
            "serv" + [i] + "DetailsBox"
          ).style.visibility == "hidden")
        ) {
          document.getElementById(
            "serv" + [i] + "DetailsBox"
          ).style.visibility = "visible";
        } else if (
          (document.getElementById(
            "serv" + [i] + "DetailsBox"
          ).style.visibility == "visible")
        ) {
          document.getElementById(
            "serv" + [i] + "DetailsBox"
          ).style.visibility = "hidden";
        }
      });

      // 'Tell Us' button Click to save a user's comments
      var CommentBtn = document.getElementById("serv" + [i] + "CommentBtn");
      CommentBtn.addEventListener("click", function (e) {
        // console.log("commentBtn " + [i]);
        servicesDataList[i].userComment = document.getElementById(
          "serv" + [i] + "Comment"
        ).value;
        localStorage.setItem("servicesInfoStored", JSON.stringify(servicesDataList));;

        
       
      });
      // Select service Checkbox to Select a Service
      var servSelectBtn = document.getElementById("serv" + [i] + "Select");
      // console.log(document.getElementById("serv" + [i] + "Select"), servicesDataList[i].selected)
      if (servicesDataList[i].selected === "true"){
        document.getElementById("serv" + [i] + "Select").checked = true;
       } else if (servicesDataList[i].selected = ""){
        document.getElementById("serv" + [i] + "Select").checked = false;
       }

      servSelectBtn.addEventListener("click", function (e) {
        var boxChecked = document.getElementById("serv" + [i] + "Select")
          .checked;
        // console.log(boxChecked);
        servicesDataList[i].selected = boxChecked;
       
        
               
      });
    })(i);
  }
 
}



// Get Quote Function
var getQuoteBtn = document.getElementById("getQuoteBtn");
getQuoteBtn.addEventListener("click", function () {
  var customer = customerInfoList;
  customerInfoList._contactFName = document.getElementById(
    "contactFName"
  ).value;
  customerInfoList._contactLName = document.getElementById(
    "contactLName"
  ).value;
  customerInfoList._contactEmail = document.getElementById(
    "contactEmail"
  ).value;
  customerInfoList._contactPhone = document.getElementById(
    "contactPhone"
  ).value;
  customerInfoList._contactStreet = document.getElementById(
    "contactStreet"
  ).value;
  customerInfoList._contactCity = document.getElementById(
    "contactCity"
  ).value;
  customerInfoList._contactZip = document.getElementById("contactZip").value;
  customerInfoList._contactCity = document.getElementById("contactCity").value;
  customerInfoList._contactQuoteComment = document.getElementById(
    "getQuoteComment"
  ).value;
  saveToLocalStorage();
  window.location.href = "Quote.html";
});

//Function that Saves to Local Storage
function saveToLocalStorage() {
  localStorage.setItem("servicesInfoStored", JSON.stringify(servicesDataList));
  localStorage.setItem("customerInfoStored", JSON.stringify(customerInfoList));
}

//Function that Gets Local Storage
function getLocalStorage() {
  // Check if local storage (LS) key exists
  if (localStorage.getItem("servicesInfoStored")) {
    // Then retrieve the associated value from LS
    servicesDataList = JSON.parse(localStorage.getItem("servicesInfoStored"));
    // console.log(servicesDataList );
      }
}


//Function That Allows for the Page to Load first
$(document).ready(function () {
  initialize();
});
