/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let divItems = document.getElementsByClassName("small-box");
const defaultColor = 'aquamarine'

function selected(item) {
    //this.clear(); //reset rest colors
    item.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function clear() {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = defaultColor;
    }
}