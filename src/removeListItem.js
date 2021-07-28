function removeListItems() {
  const ul = document.getElementById('ulList');
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
}

export default removeListItems;
