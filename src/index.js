import sendData from './sednDataAPI.js';
import getUser from './getDataAPI.js';
import removeListItems from './removeListItem.js';
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wwkGIA4V1TgaiFdJxS1PX0cI73nUXzQQnx5UI2Pc/scores';

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('userName').value;
  const score = document.getElementById('userScore').value;
  if (name.length > 0 && score.length > 0) {
    sendData();
    document.getElementById('userName').value = '';
    document.getElementById('userScore').value = '';
  }
});

getUser(url);

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  removeListItems();
  getUser(url);
});
