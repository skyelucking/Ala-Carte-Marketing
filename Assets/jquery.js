// Rule of thumb for better organization.  Order
// 1) Global variable declarations
// 2a) Function definitions
// 2b) Good to define a function for initializing things/setup
// 2c) Put code that initializes things or setup things inside the initialize function
// 3) Last should be functional invocations or if using $(document).ready(function() { ... }),
// put the function that kicks off the app inside it

// Contact Form Elements
  var contactButton = document.getElementById("#contactBtn");
  var contactNameText = document.getElementById("#contactName");
  var contactEmailText = document.getElementById("#contactEmail");
  var contactZipText = document.getElementById("#contactZip");
  var contactPhoneText = document.getElementById("#contactPhone");
//Drop Down will be populated by API
  var businessCategoryText = document.getElementById("#businessCategory");
  var serviceIndex = 0;

// Services Survey Elements
var _quoteButton = document.getElementById("#quoteBtn");

// Services Box Containers in Grid - Going from Left to Right and Top to Bottom

// Service Box 1
  var _servicesGrid = document.getElementById("#servicesGrid");
  var _serv1Key = document.getElementById("#serv1Key");
  var _serv1Box = document.getElementById("#serv1Box");
  var _serv1Img = document.getElementById("#serv1Img");
  var _serv1Name = document.getElementById("#serv1Name");
  var _serv1Desc = document.getElementById("#serv1Desc");
  var _serv1Price = document.getElementById("#serv1Price");
  var _serv1Comment = document.getElementById("#serv1Comment");

// Set Service List Data
var servicesDataList = [
  {
    serviceName: "Logo Design",
    description:
      "Lets get your Logo to represent your company and your values. ",
    price: 100,
    btnImage: ".sushi1.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Landing Page",
    description:
      "We will customize your home page and make sure that its visually pleasing, and also captures the viewer. ",
    price: 100,
    btnImage: ".sushi2.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Weekly Posts",
    description:
      "We will help you design weekly Social Media Posts that will help draw in more followers and a broader audience. ",
    price: 100,
    btnImage: ".sushi3.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Photo Editing and Design",
    description:
      "Do your photos look bland, and unprofessional? Lets spruce them up! ",
    price: 100,
    btnImage: ".sushi4.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Aesthetic Design",
    description:
      "We will help create a cohesive theme that will stretch across all your platforms. ",
    price: 100,
    btnImage: ".sushi1.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Competitive Advantage",
    description:
      "Want to have insight on what you competitors and the marker is currently doing? Then this is for you!",
    price: 100,
    btnImage: ".sushi2.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Business Cards",
    description:
      "Keep these on hand so you will never miss an opportunity to get your name out there!",
    price: 100,
    btnImage: ".sushi3.png",
    userComment: "",
    selected: false,
  },
  {
    serviceName: "Creating Testimonials",
    description:
      "We will interview your customers, send them surveys and then create a testimonial so you can show your prospective prospect.",
    price: 100,
    btnImage: ".sushi3.png",
    userComment: "",
    selected: false,
  },
];

// Quote Adding Mechanism
var quotePrice = 0;

// Example Service Container
{
  /* 
  <div class="col-4 float-left p-8" id="serv1Box" class="servBox">
  <img src="Assets/sushi1.png" alt="" id="serv1Img" class="servImg" >
  
  <span id="serv1Key" class="servKey">Service Key</span> <br>
  
  <span id="serv1Name" class="servName">Service Name</span> <br>
  
   <div id="serv1DetailsBox" class="container serveDetailsBox" style="visibility: visible; background-color: rgb(124, 122, 122);">
  <span id="serv1Desc" class="servDesc" >Service Desc</span><br>
  <span id="serv1Price" class="servPrice">Service Price</span><br>
   <input type="textarea" id="serv1Comment" placeholder="Service User Comment" class="servComment"></input> <br>
   Select Service <input id="serv1Select" type="checkbox" class="servSelect"> </input> 
</div></div> */
}

//Function That Initializes All Processes
function initialize(){
  console.log("This is the initialize Function - hey hey!")
  renderServiceGrid();
  reviewBuilder();
  setLocalStorage();
  getLocalStorage();
};

initialize();


//Function Creates the Services Grid by Looping Services Array
function renderServiceGrid(){
  
  // var row, col1, col2, col3, textArea, i;
  
  i = servicesDataList.key
  for (i = 0; i < servicesDataList.length; i++){
    service = servicesDataList[i];
    servicesDataList.serviceName = document.getElementById("#serv1Name"); 
    console.log("This is the servicesGrid Function - hi!")
    console.log(service);
    console.log(service.serviceName);
    _serv1Name = "m";
  }
};

// Function that Takes Contact Info. Including Autocomplete API
function getContact(){
  console.log("This is the getContact Function - hi!")
};

//Function That Adds Up the Selected Services for a Quote
function buildQuote(){
  console.log("This is the buildQuote Function - hola!")
};;

//Perhaps a QR Builder Function with QR Monkey API?
function makeQRcode(){
  console.log("This is the QR Builder Function - how YOU doin?!")
};;

//Function that renders the reviews
function reviewBuilder(){
  console.log("This is the reviewBuilder Function - What's the good word?")
};;

//Function that Saves to Local Storage
function setLocalStorage(){
  console.log("This is the setLocalStorage Function - WHATSUUUUP?")
};

function getLocalStorage(){
  console.log("This is the getLocalStorage Function - YO YO YO!")
};

//Function That Allows for the Page to Load first
$(document).ready(function () {
  initialize();
});


