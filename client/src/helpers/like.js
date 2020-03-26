let like = (event) => {
    let target = event.target;
    let classList = target.classList;
    console.log(target.style)
    if (classList[2] === ("rs-icon-heart-o")) {
        classList.remove("rs-icon-heart-o");
        classList.add("rs-icon-heart");
        target.style.cursor = "initial"
    }
}
export default like