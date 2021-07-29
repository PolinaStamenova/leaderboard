import axios from 'axios';
import sortScore from './sortScore.js';
import displayResult from './displayResult.js';

const getUser = async (url) => {
  try {
    const response = await axios.get(url);
    const users = sortScore(response.data.result);
    users.forEach((user) => {
      displayResult(user);
    });
    return users;
  } catch (error) {
    return error;
  }
};

export default getUser;
