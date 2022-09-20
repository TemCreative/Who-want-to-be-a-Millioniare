// const a = document.getElementById("a");
// myElement.style.color = "red";
// const b = document.getElementById("b");
// myElement.style.color = "blue";

// function submit(){
//     alert("correct")
// }
function dispalyItem (itemArray) {
    let itemHTML = ""
  itemArray.map((item, index) => {
  itemHTML +=`<div class="row bg-light mb-3 rounded">
    <div class="col-12 col-md-3">${item.item_name}</div>
    <div class="col-12 col-md-3">${item.item_qty}</div>
    <div class="col-12 col-md-3">${item.item_price}</div>
    <div class="col-12 col-md-3">${item.total_price}</div>
    </div>`
  })
  itemDisplay.innerHTML = itemHTML;
  }
