
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
  N_24_PGS: ['আপনার ব্লক/শহর বাছুন', 'আকাইপুর','বনগাঁ','বাগদা','গাইঘাটা','গাঁড়াপোতা','গোবরডাঙ্গা', 'গোপালনগর','মামুদপুর','সিদ্রানি','হেলেঞ্চা','মেদিয়াবাজার','নহাটা'],
  S_24_PGS: ['আসতে চলেছে..', ],
  Nadia: ['আপনার ব্লক/শহর বাছুন','গাগ্নাপুর','কুপার্স','মাঝেরগ্রাম','রায়নগর','রানাঘাট'],
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

//******************************************** Notice ********************************* */

        // Show the popup after 10 seconds
        window.onload = function() {
          setTimeout(function() {
              document.getElementById('popup').classList.add('active');
          }, 10000); // 10000 milliseconds = 10 seconds
      };

      // Close the popup when the close button is clicked
      document.getElementById('closeBtn').onclick = function() {
          document.getElementById('popup').classList.remove('active');
      };

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


//******************************************** share website ********************************* */

document.getElementById('share_apk').addEventListener('click', function() {
  const shareText = "😮 দারুন একটা স্পেশাল এপ একবার ট্রাই করে দেখো 😮\n\nএখানে কি সমস্যার সমাধান চাই ? বাড়ির টাটকা বাজার থেকে বাড়ির যেকোনো সমস্যার জন্যে মিস্ত্রী পাওয়া যাবে খুবই সহজে আর সস্তায়! এছাড়া কোনো কিছু যদি স্পেশালী আনিয়ে নিতে হয় সেটাও এখানে জানানো যাবে যেমন সাহারা মরুভূমির বালি অথবা জাপানের অর্কিড। এক কথায় যা প্রয়োজন সকল কিছু!\n \n🌐 ওয়েব সাইট লিংক : https://sohoje.in/ \n📱 অ্যাপ লিংক : https://sohoje.in/app/Sohoje.apk "; // Customize your share text here

  // Copy to clipboard
  navigator.clipboard.writeText(shareText).then(() => {
      const notification = document.getElementById('copyNotification');
      notification.classList.add('show');
      setTimeout(() => notification.classList.remove('show'), 2000);
  }).catch(console.error);

  // Web Share API
  if (navigator.share) {
      navigator.share({
          text: shareText
      }).catch(console.error);
  } else {
      // Fallback if Web Share API is not supported
      prompt('Copy this link to share:', shareText);
  }
});


//******************************************** Typing effect for the placeholder ********************************* */
const placeholderTexts = [
  "টমেটো ১ কেজি, চিকেন ৫০০ গ্রাম...",
"জমির দলিল হারিয়ে গেছে... ",
"বাইক বা গাড়ি ক্লিনিং করতে চাই...",
"জলের ট্যাংকি পরিষ্কার করতে লোক চাই... ",
"বাথরুমের ট্যাপ লিক করছে...",
"ফ্যান খারাপ হয়ে গেছে মিস্ত্রী চাই... ",
"আমার  আইসল্যান্ডের লাভা রক চাই... ",
"আমি  ইতালিয়ান হ্যান্ডমেড শু চাই... ",
"এয়ার কন্ডিশনার মেরামত করতে একজন টেকনিশিয়ান চাই...",
"পূজা আয়োজনের জন্য ফুল এবং ফল চাই...",
"জমি রেজিস্ট্রি করার জন্যে উকিল প্রয়োজন... ",
"দশম শ্রেনীর বাংলা , ইংরেজি , ভুগোলের সহায়িকা বই চাই...  ",
"একজন ব্রাইডাল মেকাপের লোক চাই...",
"বাড়ির বাগান পরিস্কার করতে লোক চাই...",
"২৪ আগস্টে একটি গাড়ি চাই পিকনিকের জন্যে...",
"১ কেজি টমেটো, ৫০০ গ্রাম শিম, ১ কেজি মিষ্টি কুমড়া...",
"১ কেজি খাটি মধু চাই... ",
"ফ্যানের সুইচ কাজ করছে না একজন মিস্ত্রী চাই... ",
"বাড়ি রং করার জন্যে পেন্টার চাই... ",
"জাপানি রাইস কেক (মোচি) চাই...",
"১ কেজি আঙ্গুর, ২ কেজি আপেল, ৫০০ গ্রাম কমলা...",
"বাড়িতে টাইলস কাজ করার জন্যে মিস্ত্রী চাই... ",
"৩ দিন বাড়িতে থাকব না বাড়ি দেখাশোনার জন্যে লোক চাই... ",
"১ কেজি রুই মাছ, ২ কেজি আলু, ৫০০ গ্রাম পেঁয়াজ..."

];
const textarea = document.getElementById("Product1");
let currentTextIndex = 0;
let currentCharIndex = 0;

function typePlaceholder() {
  const currentText = placeholderTexts[currentTextIndex];
  if (currentCharIndex < currentText.length) {
    // Set the placeholder text by typing one character at a time
    textarea.setAttribute("placeholder", currentText.substring(0, currentCharIndex + 1));
    currentCharIndex++;
    setTimeout(typePlaceholder, 50); // Adjust typing speed here (in milliseconds)
  } else {
    // Once a placeholder is fully typed, move to the next one
    currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
    currentCharIndex = 0;
    setTimeout(typePlaceholder, 500); // Pause before starting the next one
  }
}

// Start the typing effect when the page loads
typePlaceholder();

//******************************************** form submit popup ********************************* */
 document.addEventListener('DOMContentLoaded', function() {
     const form = document.querySelector('form'); // ফর্ম সিলেক্ট করা
 
     form.addEventListener('submit', function(event) {
         event.preventDefault(); // ডিফল্ট সাবমিশন বন্ধ করা
 
         // পপ-আপ তৈরি করা
         const popup = document.createElement('div');
         popup.style.position = 'fixed';
         popup.style.top = '0';
         popup.style.left = '0';
         popup.style.width = '100%';
         popup.style.height = '100%';
         popup.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
         popup.style.color = 'white';
         popup.style.display = 'flex'; // ফ্লেক্সবক্স ব্যবহার করা
         popup.style.flexDirection = 'column'; // ভাটিক্যাল স্ট্যাক
         popup.style.justifyContent = 'center'; // উভয়ভাবে সেন্টার করা
         popup.style.alignItems = 'center'; 
         popup.style.textAlign = 'center';
         popup.style.fontSize = '24px';
         popup.style.zIndex = '9'; 
         popup.id = 'popup';
 
         // পপ-আপের কন্টেন্ট
         const message = document.createElement('p');
         message.innerText = 'অর্ডার প্রসেস চলছে 😍';
         message.style.margin = '10px 0'; // ভার্টিক্যাল মার্জিন
 
         const countdownText = document.createElement('p');
         countdownText.innerHTML = 'বাকি: <span id="countdown">21</span> সেকেন্ড';
         countdownText.style.margin = '10px 0'; // ভার্টিক্যাল মার্জিন
 
         popup.appendChild(message);
         popup.appendChild(countdownText);
 
         // পপ-আপ DOM এ অ্যাড করা
         document.body.appendChild(popup);
 
         // কাউন্টডাউন শুরু করা
         let countdown = 20;
         const countdownElement = document.getElementById('countdown');
 
         const countdownInterval = setInterval(function() {
             countdown--;
             countdownElement.innerText = countdown;
 
             if (countdown <= 0) {
                 clearInterval(countdownInterval); // কাউন্টডাউন বন্ধ করা
                 window.location.href = "https://sohoje.github.io/bajar/thank/index.html"; // নতুন লিংক লোড করা
             }
         }, 1000);
 
         // ফর্ম সাবমিট করা (১০০ মিলিসেকেন্ডের বিলম্ব দিয়ে)
         setTimeout(function() {
             form.submit(); // ফর্ম সাবমিট করা
         }, 100);
     });
 });

// //share button

// function shareVideo(buttonElement) {
//     const videoContainer = buttonElement.closest('.Videos');
//     const videoId = videoContainer.id;
//     const videoTitle = videoContainer.querySelector('h4').childNodes[0].textContent.trim();
//     const websiteUrl = 'https://8mbets.social/'; // Replace with your website URL
//     const shareUrl = `${websiteUrl}#${videoId}`;
//     const shareText = `${videoTitle} এখানে ক্লিক করে :- ${shareUrl}`;

//     // Copy the share text to the clipboard
//     navigator.clipboard.writeText(shareText).then(() => {
//         console.log('Link copied to clipboard');

//         // Show the custom notification
//         const notification = document.getElementById('copyNotification');
//         notification.classList.add('show');
//         setTimeout(() => {
//             notification.classList.remove('show');
//         }, 2000); // Hide notification after 2 seconds
//     }).catch(console.error);

//     if (navigator.share) {
//         navigator.share({
//             text: shareText
//         }).then(() => {
//             console.log('Thanks for sharing!');
//         }).catch(console.error);
//     } else {
//         // Fallback for browsers that don't support the Web Share API
//         prompt('Copy this link to share:', shareText);
//     }
// }

    

  
  
