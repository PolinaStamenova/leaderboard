function constructJson() {
  const name = document.getElementById('userName').value;
  let score = document.getElementById('userScore').value;

  score = Number(score);
  const user = {
    user: name,
    score,
  };
  return user;
}

export default constructJson;
