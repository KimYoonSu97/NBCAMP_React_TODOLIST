function SortingCard(item) {
  if (item !== true) {
    return "workingCard";
  } else {
    return "doneCard";
  }
}
function SortingBtn(item) {
  if (item !== true) {
    return "Done";
  } else {
    return "Cancel";
  }
}

export { SortingBtn, SortingCard };
