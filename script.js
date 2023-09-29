let users = [];

function updateDisplay() {
  const currentDiv = document.getElementById("current");
  const queueList = document.getElementById("queue");

  if (users.length > 0) {
    currentDiv.innerHTML =
      users[0] + ' <button onclick="removeUser(0)">Remove</button>';
  } else {
    currentDiv.innerHTML = "None";
  }

  queueList.innerHTML = "";
  for (let i = 1; i < users.length; i++) {
    const li = document.createElement("li");
    li.innerHTML =
      users[i] + ' <button onclick="removeUser(' + i + ')">Remove</button>';
    queueList.appendChild(li);
  }
}

function addToQueue() {
  const nameInput = document.getElementById("name");
  if (nameInput.value.trim() !== "") {
    users.push(nameInput.value.trim());
    nameInput.value = "";
    updateDisplay();
  }
}

function removeUser(index) {
  users.splice(index, 1);
  updateDisplay();
}

updateDisplay();
