export default function dateFormat(val) {
  let date = new Date(val);
  let year = date.getFullYear();
  let month = date.getMonth();
  let dateNum = date.getDate();
  return `${year}/${month}/${dateNum}`;
}
