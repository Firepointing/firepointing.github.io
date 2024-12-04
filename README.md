<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Goal Tracker for Kenyan High School Subjects</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>High School Goals Tracker</h1>
    <p>Track and compare your progress with friends!</p>
  </header>

  <main>
    <section id="goal-form">
      <h2>Set Your Goals</h2>
      <form id="goalTrackerForm">
        <label for="name">Your Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required>

        <label for="subject">Subject:</label>
        <select id="subject" required>
          <option value="">--Select Subject--</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Geography">Geography</option>
          <option value="History">History</option>
          <option value="CRE">CRE</option>
          <option value="Business">Business</option>
          <option value="Agriculture">Agriculture</option>
        </select>

        <label for="goal">Goal (e.g., improve by 10%, score A):</label>
        <input type="text" id="goal" placeholder="Enter your goal" required>

        <button type="submit">Add Goal</button>
      </form>
    </section>

    <section id="progress">
      <h2>Progress Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Goal</th>
            <th>Progress (%)</th>
          </tr>
        </thead>
        <tbody id="leaderboard">
          <!-- Data will be dynamically added here -->
        </tbody>
      </table>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 High School Goals Tracker. Stay motivated!</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
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
