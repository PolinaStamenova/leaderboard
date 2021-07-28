function displayResult(user) {
  const ul = document.getElementById('ulList');

  const li = document.createElement('li');
  li.classList.add('table-row');

  const nameText = document.createElement('p');
  nameText.innerHTML = `${user.user}: ${user.score}`;

  li.appendChild(nameText);
  ul.appendChild(li);
}

export default displayResult;
