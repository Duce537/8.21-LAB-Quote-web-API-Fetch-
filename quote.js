window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

       // Get values from drop-downs
       const topicDropdown = document.querySelector("#topicSelection");
       const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
       const countDropdown = document.querySelector("#countSelection");
       const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

       // Get and display quotes
       fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   fetch("https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count)
   .then(response => response.json())
   .then(data => {
      let qoute = JSON.stringify(data)
      document.getElementById('quotes').innerHTML = "<ol>" + "<li>" + qoute + "</li>" + "</ol>";
   });
}
