// script.js
document.getElementById('goalTrackerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const goal = document.getElementById('goal').value;

  // Add data to the leaderboard
  const leaderboard = document.getElementById('leaderboard');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${subject}</td>
    <td>${goal}</td>
    <td>${Math.floor(Math.random() * 101)}%</td>
  `;

  leaderboard.appendChild(row);

  // Clear the form
  document.getElementById('goalTrackerForm').reset();
});
