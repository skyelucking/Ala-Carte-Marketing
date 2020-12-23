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
var quoteButton = document.getElementById("#quoteBtn");
var serviceNameText = document.getElementById("#serviceName");
var serviceDescText = document.getElementById("#serviceDesc");
var serviceBtnImg = document.getElementById("#serviceBtn");
var servicePriceNum = document.getElementById("#servicePrice");
var userCommentText = document.getElementById("#userComment");

// Set Service List Data
var servicesDataList = [
    {
      serviceName: "Logo Design",
      description: "Lets get your Logo to represent your company and your values. ",
      price: 100,
      btnImage: ".sushi1.png",
      userComment: "",
      selected: false,
      
    },
    {
        serviceName: "Landing Page",
        description: "We will customize your home page and make sure that its visually pleasing, and also captures the viewer. ",
        price: 100,
        btnImage: ".sushi2.png",
        userComment: "",
        selected: false,
        
      },
      {
        serviceName: "Weekly Posts",
        description: "We will help you design weekly Social Media Posts that will help draw in more followers and a broader audience. ",
        price: 100,
        btnImage: ".sushi3.png",
        userComment: "",
        selected: false,
        
      },
      {
        serviceName: "Photo Editing and Design",
        description: "Do your photos look bland, and unprofessional? Lets spruce them up! ",
        price: 100,
        btnImage: ".sushi4.png",
        userComment: "",
        selected: false,
        
      },
      {
        serviceName: "Aesthetic Design",
        description: "We will help create a cohesive theme that will stretch across all your platforms. ",
        price: 100,
        btnImage: ".sushi1.png",
        userComment: "",
        selected: false,
        
      },
      {
        serviceName: "Competitive Advantage",
        description: "Want to have insight on what you competitors and the marker is currently doing? Then this is for you!",
        price: 100,
        btnImage: ".sushi2.png",
        userComment: "",
        selected: false,
        
      },
      {
        serviceName: "Business Cards",
        description: "Keep these on hand so you will never miss an opportunity to get your name out there!",
        price: 100,
        btnImage: ".sushi3.png",
        userComment: "",
        selected: false,
        
      },
      {
        serviceName: "Creating Testimonials",
        description: "We will interview your customers, send them surveys and then create a testimonial so you can show your prospective prospect.",
        price: 100,
        btnImage: ".sushi3.png",
        userComment: "",
        selected: false,
        
      },
  ];

  // Quote Adding Mechanism
var quotePrice = 0;

// Render Survey
function renderSurvey(servicesDataList) {
    serviceNameText.textContent = servicesDataList[serviceIndex].serviceName;
    serviceDescText.textContent = servicesDataList[serviceIndex].description;
    servicePriceNum.textContent = servicesDataList[serviceIndex].price;
    serviceBtnImg.textContent = servicesDataList[serviceIndex].btnImage;
      
}
  