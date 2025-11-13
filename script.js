//memu bar for mobile devices
document.getElementById("toggler").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("menubar");
});//If the <nav> element does not have the class "menubar", it will add it.If it already has the class "menubar", it will remove it.
const popup=document.getElementById("popup-message");
const addToCartButtons = document.getElementsByClassName("add-to-cart");//array of all icons with bag heart class
// Loop through all icons and attach click event
for (let btn of addToCartButtons) {//btn is the variable that points icon in the list of add to cart 
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // stop <a href="#"> from reloading the page
    const productBox=btn.closest(".box");//closest helps to get the element that matches with selector here the box div block of btn icon is stored in productBox with further helps to get the name, img etc things from the box 
    const name=productBox.querySelector(".content h3").textContent;//get the name of the product
    const price=productBox.querySelector(".content .price").childNodes[0].textContent;//get the discount price
    const image=productBox.querySelector(".image img").src;
    const product ={name,price,image};//key and value name are same { name: name, price: price, image: image }
    let cart =JSON.parse(localStorage.getItem("cart"))||[];
    //convert json file to java script array localstorage is like a built-in database data stays even after page is closed . it looks for item cart if it doesn't exist use empty array if user has items in cart we load if not we start new empty cart
    const exists = cart.find(item => item.name === product.name);// find is array method that returns the first element that satisfies a given condition here item goes throuh every element in cart array and find which matches with product name
    if(!exists){
      cart.push(product);
      localStorage.setItem("cart",JSON.stringify(cart));//saves data in browser converts js array into string here "cart(key)" stores all the cart data ({ name: "Red Roses", price: "₹499", image: "roses.jpg" }) in sting (complete text)
    }
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 2500);
  });
}
