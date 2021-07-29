const constructJson = (name, score) => {
  score = Number(score);
  const user = {
    user: name,
    score,
  };
  return user;
};

export default constructJson;
