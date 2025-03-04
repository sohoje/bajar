
// google map
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

//Google map
$(function(){
  $('.flexslider').flexslider({
    controlNav : false,
    nextText : '',
    prevText : '',
    });
  loadGoogleMap();
});

// Hide mobile menu after clicking on a link
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    // flow shake 

    function shakeChild(index) {
        var flowChildren = document.querySelectorAll('.flow-child');
        flowChildren.forEach(function(child, idx) {
            if (idx === index) {
                child.classList.add('shaking');
            } else {
                child.classList.remove('shaking');
            }
        });
    }
    
    function shakeLoop() {
        var index = 0;
        setInterval(function() {
            shakeChild(index);
            index = (index + 1) % 4;
        }, 3000); // Repeat the animation every 3 seconds
    }
    
    shakeLoop();

 /** @@@@@@@@@@@@@ MY CODES START FROM HERE@@@@@@@@@@@@@@@@@@ **/


//******************************************** DYNAMIC Block APPEAR BY DISTRICT********************************* */

 // Get the first select input
 const districtSelect = document.getElementById('District');

 // Get the second select input
 const blockSelect = document.getElementById('Block');

 // Define the blocks for each district
 const blocks = {
  N_24_PGS: ['Select Block/City', 'Akaipur','Balia','Bongaon','Bhashanpota', 'Chowberia', 'Chandpara','Chhaigharia','Ganrapota','Gobardanga', 'Gopalnagar','Habra','Helencha','Kalupur','Media Bazar','Nahata','Nataberia','Palla','Thakurnagar'],
  S_24_PGS: ['Upcoming soon', ],
  Nadia: ['Select Block/City','Gangnapur','Kupars','Majhergram','Rainagar','Ranaghat'],
 };

 // Function to populate the block select input based on the selected district
 function populateblocks() {
   // Clear the block select input
   blockSelect.innerHTML = '';

   // Get the selected district
   const selecteddistrict = districtSelect.value;

   // If a valid district is selected, populate the block select input
   if (selecteddistrict !== 'chose') {
     // Get the blocks for the selected district
     const districtblocks = blocks[selecteddistrict];

     // Create option elements for each block and append them to the block select input
     districtblocks.forEach(block => {
       const option = document.createElement('option');
       option.value = block;
       option.text = block;
       blockSelect.appendChild(option);
     });

     // Show the block select input
     blockSelect.style.display = 'block';
   } else {
     // Hide the block select input if no district is selected
     blockSelect.innerHTML = '';
   }
 }

 // Add an event listener to the district select input
 districtSelect.addEventListener('change', populateblocks);


 // idenhi ivdi balvisi likki 10 arba 

var clickCount = 0;
var clickDiv = document.getElementById("clickDiv");
var hiddenDiv = document.getElementById("hdn");

if (!clickDiv || !hiddenDiv) {
  console.error("Could not find clickDiv or hiddenDiv");
} else {
  clickDiv.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 10) {
      hiddenDiv.style.display = "block";
    }
  });
}




//******************************************** NO INTERNET ********************************* */

// Internet connection checker
function connection_checker() {
  // Getting full screen connection status
  const full_screen_widget = document.getElementById("connection-checker-full-screen")
  // Getting "offline-error-activated" status
  const offline_error_activated = document.getElementsByClassName("offline-error-activated")[0]
  // If the user is online and disconnection error is activated
  if (navigator.onLine == true && offline_error_activated != undefined) {
      // Add a green background color for disconnection error
      full_screen_widget.style.backgroundColor = "#5bff29"
      location.reload();
      // Adding 1 second delay to avoid interference with changing background color smoothly
      setTimeout(function () {
          // Hiding disconnection error with animation
          full_screen_widget.setAttribute("class", "flip-out-diag-2-tl")
      }, 1000)
      // Adding 2 seconds delay to avoid interference with hiding animation
      setTimeout(function () {
          // Hiding disconnection error element
          full_screen_widget.style.visibility = "hidden"
      }, 2000)
      // Enable all elements click and selection
      document.body.style.userSelect = "auto"
      document.body.style.pointerEvents = "auto"
  } else if (navigator.onLine == false) { // If user is offline
      // Display disconnection error with animation
      full_screen_widget.setAttribute("class", "flip-in-diag-2-br offline-error-activated")
      // Display disconnection error element
      full_screen_widget.style.visibility = "visible"
      // Add a red background color for disconnection error
      full_screen_widget.style.backgroundColor = "#fff"
      // Disable all elements click and selection
      document.body.style.userSelect = "none"
      document.body.style.pointerEvents = "none"
  }
}

// Checking the user internet connection every 1 second
setInterval(connection_checker, 1000)




//share button

function shareVideo(buttonElement) {
    const videoContainer = buttonElement.closest('.Videos');
    const videoId = videoContainer.id;
    const videoTitle = videoContainer.querySelector('h4').childNodes[0].textContent.trim();
    const websiteUrl = 'https://8mbets.social/'; // Replace with your website URL
    const shareUrl = `${websiteUrl}#${videoId}`;
    const shareText = `${videoTitle} এখানে ক্লিক করে :- ${shareUrl}`;

    // Copy the share text to the clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        console.log('Link copied to clipboard');

        // Show the custom notification
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000); // Hide notification after 2 seconds
    }).catch(console.error);

    if (navigator.share) {
        navigator.share({
            text: shareText
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support the Web Share API
        prompt('Copy this link to share:', shareText);
    }
}


  
  
