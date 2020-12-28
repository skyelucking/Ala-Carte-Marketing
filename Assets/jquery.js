// Rule of thumb for better organization.  Order
// 1) Global variable declarations
// 2a) Function definitions
// 2b) Good to define a function for initializing things/setup
// 2c) Put code that initializes things or setup things inside the initialize function
// 3) Last should be functional invocations or if using $(document).ready(function() { ... }),
// put the function that kicks off the app inside it

//City Search Elements
var $searchInput = $("#search_input");
var $latitudeInput = $("#latitude_input");
var $longitudeInput = $("#longitude_input");
var longData = "";
var latData = "";

// Contact Form Elements
var _hideBtn = document.querySelector(".hideBtn");
var contactButton = document.getElementById("#contactBtn");
var contactNameText = document.getElementById("#contactName");
var contactEmailText = document.getElementById("#contactEmail");
var contactStreetText = document.getElementById("#contactStreet");
var contactZipText = document.getElementById("#contactZip");
var contactPhoneText = document.getElementById("#contactPhone");

// Services Survey Elements
var _quoteButton = document.getElementById("#quoteBtn");

// Services Box Containers in Grid - Going from Left to Right and Top to Bottom

// Service Box 1
var _servicesGrid = document.getElementById("servicesGrid");


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

// Quote Adding Mechanism
var quotePrice = 0;

function initGoogleMaps() {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("search_input"),
    { types: ["geocode"] }
  );
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
    console.log(near_place);
    $latitudeInput.value = near_place.geometry.location.lat();
    cityName = near_place.address_components[0].short_name;
  });
}

//Function That Initializes All Processes
function initialize() {
  console.log("This is the initialize Function - hey hey!");
  renderServiceGrid();
  reviewBuilder();
  setLocalStorage();
  getLocalStorage();
  initGoogleMaps();
}

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
        console.log("serv" + [i] + "DetailsBox");
        var _servDetails = servicesDataList[i];
        //  console.log(servicesDataList);
        if (
          (document.getElementById(
            "serv" + [i] + "DetailsBox"
          ).style.visibility = "hidden")
        ) {
          document.getElementById(
            "serv" + [i] + "DetailsBox"
          ).style.visibility = "visible";
        }
      });

      // 'Tell Us' button Click to save a user's comments
      var CommentBtn = document.getElementById("serv" + [i] + "CommentBtn");
      CommentBtn.addEventListener("click", function (e) {
        console.log("commentBtn " + [i]);
        servicesDataList[i].userComment = document.getElementById(
          "serv" + [i] + "Comment"
        ).value;
        console.log(
          "comment: ",
          document.getElementById("serv" + [i] + "Comment").value
        );
        console.log("tell us button pushed!");
        console.log(servicesDataList[i].userComment);
      });
      // Select service Checkbox to Select a Service
      var servSelectBtn = document.getElementById("serv" + [i] + "Select");
      servSelectBtn.addEventListener("click", function (e) {
        var boxChecked = document.getElementById("serv" + [i] + "Select")
          .checked;
        console.log(boxChecked);
        servicesDataList[i].selected = boxChecked;
        console.log(
          servicesDataList[i].serviceName +
            " " +
            servicesDataList[i].selected +
            " " +
            servicesDataList[i].userComment
        );
      });
    })(i);
  }
  console.log(servicesDataList);
}

// Function: Shows Details of Service
function showService(e) {
  console.log("Show Service button clicked");
}

// Function: Saves User Comment
function saveComment() {
  console.log("save Comment button CLicked");
}
// Function: Adds Service to "Selected Services"
function serviceSelected() {
  console.log("Select Service Checkbox checked.");
}

// Function that Takes Contact Info. Including Autocomplete API
function getContact() {
  console.log("This is the getContact Function - hi!");
}

//Function That Adds Up the Selected Services for a Quote
function buildQuote() {
  console.log("This is the buildQuote Function - hola!");
}

//Perhaps a QR Builder Function with QR Monkey API?
function makeQRcode() {
  console.log("This is the QR Builder Function - how YOU doin?!");
}

//Function that renders the reviews
function reviewBuilder() {
  console.log("This is the reviewBuilder Function - What's the good word?");
}

//Function that Saves to Local Storage
function setLocalStorage() {
  console.log("This is the setLocalStorage Function - WHATSUUUUP?");
}

function getLocalStorage() {
  console.log("This is the getLocalStorage Function - YO YO YO!");
}

//Function That Allows for the Page to Load first
$(document).ready(function () {
  initialize();
});
