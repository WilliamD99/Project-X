export default function onSelect(event) {
  let target = event.target;
  let options = document.getElementsByClassName("option");
  for (const option of options) {
    if (option.classList.value.indexOf("options-active") !== -1) {
      option.classList.remove("options-active");
    }
  }
  target.classList.add("options-active");
}
