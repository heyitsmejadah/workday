var saveButtons = document.getElementsByClassName("saveBtn");
// Display current date
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < saveButtons.length; i++) {
    var savedEventText = localStorage.getItem("eventText" + i);
    if (savedEventText) {
    // Update the ".description" element with the saved data
    var eventTextElement = saveButtons[i].parentNode.querySelector(".description");
    if (eventTextElement) {
      eventTextElement.value = JSON.parse(savedEventText);
    }
    }
  }
});

for (let i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", function(event) {
    event.preventDefault();

    // Traverse DOM to find the ".description" element
    var eventText = this.parentNode.querySelector(".description");

    console.log("Clicked save button:", this);
    console.log("Parent node of save button:", this.parentNode);
    console.log("Found .description element:", eventText);

    // Check if the ".description" element is found before saving
    if (eventText) {
      console.log("Content before saving:", eventText.value);
      localStorage.setItem("eventText" + i, JSON.stringify(eventText.value));
      console.log("Content saved:", eventText.value);
    } else {
      console.error("Error: '.description' element not found");
    }
  });
}


