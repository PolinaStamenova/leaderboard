import axios from 'axios';
import constructJson from './constructJson.js';

const sendData = () => {
  axios
    .post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wwkGIA4V1TgaiFdJxS1PX0cI73nUXzQQnx5UI2Pc/scores',
      constructJson(),
    )
    .then((res) => res.data);
};

export default sendData;
