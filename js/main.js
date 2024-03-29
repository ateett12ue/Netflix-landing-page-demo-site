const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select tab content Item
function selectItem(e) {
  //Add border to current tab
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show Class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

tabItems.forEach(item => item.addEventListener("click", selectItem));
