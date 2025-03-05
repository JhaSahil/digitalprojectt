// Initialize counters
let clickCount = 0;
let submissionCount = 0;

// Track button clicks
document.getElementById('click-button').addEventListener('click', function () {
  clickCount++;
  document.getElementById('click-count').textContent = clickCount;
  document.getElementById('table-click-count').textContent = clickCount;
});

// Track form submissions
document.getElementById('sample-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting
  submissionCount++;
  document.getElementById('submission-count').textContent = submissionCount;
  document.getElementById('table-submission-count').textContent = submissionCount;

  // Clear the form
  document.getElementById('sample-form').reset();
});