var data = "";
data += "<h2>Preferred programming languages :</h2>";
data += "<ul></ul>";
document.querySelector("div").innerHTML = data;
listItems();

function listItems() {
  var items = "";
  items += "<li>Java</li>";
  items += "<li>C++</li>";
  items += "<li>Java Script</li>";
  document.querySelector("div ul").innerHTML = items;
}
