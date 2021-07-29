import axios from "axios";

const sendData = (data) => {
  axios
    .post(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wwkGIA4V1TgaiFdJxS1PX0cI73nUXzQQnx5UI2Pc/scores",
      data
    )
    .then((res) => res.data);
};

export default sendData;
