import { foodItem } from "./fooditem.js";

console.log(foodItem);

function displayItems(){
    var biryani=document.querySelector(".biryani-logo");
   var south_indian=document.querySelector(".South-Indian-logo");
   var north_indian=document.querySelector(".North-Indian-logo");

    const biryaniData=foodItem.filter(item => item.category=='Biryani');
    console.log(biryaniData);
    const SouthIndianData=foodItem.filter(item => item.category=='South Indian');
    console.log(SouthIndianData);
    const NorthIndianData=foodItem.filter(item => item.category=='North Indian');
    console.log(NorthIndianData);
    biryaniData.map(item =>{
        var carditem=document.createElement('div');
        carditem.setAttribute('class','card-item');

        var ratings=document.createElement('div');
        ratings.setAttribute('class','ratings');

        var rate=document.createElement('i');
        rate.setAttribute('class','fa-solid fa-star');
        rate.setAttribute('id','rate');
        rate.innerText=''+item.rating;
        
        var heart=document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart heart add-to-cart');
        heart.setAttribute('id',item.id);
        
        ratings.appendChild(rate);
        ratings.appendChild(heart);

        var image=document.createElement('img');
        image.src=item.img;

        var item_name=document.createElement('p');
        item_name.setAttribute('class','item-name');
        item_name.innerText=item.name;

        var price=document.createElement('p');
        price.setAttribute('class','price');
        price.innerText='Price : $'+item.price;
        
        carditem.appendChild(ratings);
        carditem.appendChild(image);
        carditem.appendChild(item_name);
        carditem.appendChild(price);
        
        console.log(carditem);
        biryani.appendChild(carditem);
    }),
    SouthIndianData.map(item =>{
        var carditem=document.createElement('div');
        carditem.setAttribute('class','card-item');

        var ratings=document.createElement('div');
        ratings.setAttribute('class','ratings');

        var rate=document.createElement('i');
        rate.setAttribute('class','fa-solid fa-star');
        rate.setAttribute('id','rate');
        rate.innerText=''+item.rating;
        
        var heart=document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart heart add-to-cart');
        heart.setAttribute('id',item.id);
        
        ratings.appendChild(rate);
        ratings.appendChild(heart);

        var image=document.createElement('img');
        image.src=item.img;

        var item_name=document.createElement('p');
        item_name.setAttribute('class','item-name');
        item_name.innerText=item.name;

        var price=document.createElement('p');
        price.setAttribute('class','price');
        price.innerText='Price : $'+item.price;
        carditem.appendChild(ratings);
        carditem.appendChild(image);
        carditem.appendChild(item_name);
        carditem.appendChild(price);
        
        console.log(carditem);
        south_indian.appendChild(carditem);
    })

    NorthIndianData.map(item =>{
        var carditem=document.createElement('div');
        carditem.setAttribute('class','card-item');

        var ratings=document.createElement('div');
        ratings.setAttribute('class','ratings');

        var rate=document.createElement('i');
        rate.setAttribute('class','fa-solid fa-star');
        rate.setAttribute('id','rate');
        rate.innerText=''+item.rating;
        
        var heart=document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart heart add-to-cart');
        heart.setAttribute('id',item.id);
        // heart.setAttribute('class','heart');
        
        ratings.appendChild(rate);
        ratings.appendChild(heart);

        var image=document.createElement('img');
        image.src=item.img;

        var item_name=document.createElement('p');
        item_name.setAttribute('class','item-name');
        item_name.innerText=item.name;

        var price=document.createElement('p');
        price.setAttribute('class','price');
        price.innerText='Price : $'+item.price;

        carditem.appendChild(ratings);
        carditem.appendChild(image);
        carditem.appendChild(item_name);
        carditem.appendChild(price);
        console.log(carditem);
        north_indian.appendChild(carditem);
    })
}
displayItems();

//   Category List
const categoryListData=[...new Map(foodItem.map(item=>[item['category'],item])).values()];
console.log(categoryListData);

function categorylists(){
   var categorylist=document.querySelector("#category-list");
   console.log(categorylist);
   categoryListData.map(item =>{
    var carditems=document.createElement('div');
    carditems.setAttribute('class','card-items');

    var image=document.createElement('img');
    image.src=item.img;
    var itemname=document.createElement('a');
    itemname.setAttribute('class','item-name');
    itemname.innerText=item.category;
    itemname.setAttribute('href','#'+item.category);

    carditems.appendChild(image);
    carditems.appendChild(itemname);
    var cloneCardItems=carditems.cloneNode(true);
    console.log(carditems);
    categorylist.appendChild(carditems);
    document.querySelector('.category-header').appendChild(cloneCardItems);
   })
}
categorylists();

document.querySelectorAll(".add-to-cart").forEach(item=>{
    item.addEventListener('click',addToCart);
})

var cartData=[];
function addToCart(){
    console.log(this.parentNode);
    console.log(this.parentNode.nextSibling);
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd=this.parentNode.nextSibling.nextSibling.innerText;
    console.log(itemToAdd);
    var itemObj=foodItem.find(element =>element.name==itemToAdd)
    console.log(itemObj);
    var index=cartData.indexOf(itemObj);
    if(index==-1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData=[...cartData,itemObj];
        console.log(cartData);
    }
    else if(index >-1){
        alert("Item has already been added to the cart");
    }
    document.getElementById('cart-plus').innerHTML=' '+cartData.length+' ITEM';
    document.getElementById('m-cart-plus').innerText=' '+cartData.length;
    totalAmount();
    cartItems();
}
function cartItems(){
    var Tablebody=document.getElementById('table-body');
    console.log(Tablebody);
    Tablebody.innerHTML='';
    cartData.map(item=>{
        var tablerow=document.createElement('tr');

        var tabledata1=document.createElement('td');
        var tableimage=document.createElement('img');
        tableimage.src=item.img;
        tabledata1.appendChild(tableimage);

        var tabledata2=document.createElement('td');
        tabledata2.innerText=item.name;

        var tabledata3=document.createElement('td');
        var button1=document.createElement('button');
        button1.setAttribute('class','decrease-item');
        button1.innerText='-';
        var span=document.createElement('span');
        span.innerText=item.quantity;
        var button2=document.createElement('button');
        button2.setAttribute('class','increase-item');
        button2.innerText='+';
        tabledata3.appendChild(button1);
        tabledata3.appendChild(span);
        tabledata3.appendChild(button2);

        var tabledata4=document.createElement('td');
        tabledata4.innerText=item.price;

        tablerow.appendChild(tabledata1);
        tablerow.appendChild(tabledata2);
        tablerow.appendChild(tabledata3);
        tablerow.appendChild(tabledata4);

        Tablebody.appendChild(tablerow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',IncreaseItem); 
    })
    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',DecreaseItem);
    })
}
var currPrice=0;
function IncreaseItem(){
     var itemToInc=this.parentNode.previousSibling.innerText;
     console.log(itemToInc);
     var incObj=cartData.find(element=>element.name==itemToInc)
    incObj.quantity+=1;
    console.log(incObj);
    currPrice=(incObj.quantity*incObj.price - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    console.log(currPrice);
    incObj.price=currPrice*incObj.quantity;
    console.log(incObj);
    totalAmount();
    cartItems();
}


var flag=false;
function DecreaseItem(){
    var itemToDec=this.parentNode.previousSibling.innerText;
    console.log(itemToDec);
    var decObj=cartData.find(element=> element.name==itemToDec);
    //decObj.quantity-=1;
    console.log(decObj);
    let ind=cartData.indexOf(decObj);
    console.log(ind);
    if(decObj.quantity>1)
    {
        currPrice=(decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-=1;
        decObj.price=currPrice*decObj.quantity;
    }
    else{
        var hello=document.getElementById(decObj.id).classList.remove('toggle-heart');
        console.log(hello);
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML=' '+cartData.length+' item';
        document.getElementById('m-cart-plus').innerText=' '+cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag=false;
            alert('currently no item is present in the cart');
        } 
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+=item.price;
    })
    document.querySelector('#total-item').innerText=' Total Item :'+cartData.length;
    document.querySelector('#total-price').innerText=' Total price: $ '+ sum;
    document.querySelector('#m-total-amount').innerText=' Total Amount: $ '+ sum;
}
document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

function cartToggle(){
    if(cartData.length >0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category'); 
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag=true;
    }
    else{
        alert('currently their is no item in the cart');
    }
}
document.querySelector('#addAddress').addEventListener('click',addAddress);
document.querySelector('#m-addAddress').addEventListener('click',addAddress);
function addAddress(){
    var Address=prompt('Enter your Address here');
    if(Address){
        document.querySelector('#addAddress').innerText=' '+Address;
        document.querySelector('#m-addAddress').innerText=' '+Address;
    }
    else{
        document.querySelector('#addAddress').innerText='Your Address';
        alert('Address is not added');
        document.querySelector('#m-addAddress').innerText='Your Address';
    }
}
window.onresize= window.onload =function(){
    var size= window.screen.width;
    console.log(size);
    if(size < 800){
        var cloneFoodItems=document.getElementById('food-items').cloneNode(true);
        console.log(cloneFoodItems);
        var cloneCartPage=document.getElementById('cart-page').cloneNode(true);
        console.log(cloneCartPage);
        document.getElementById('food-items').remove();
        var hello=document.getElementById('cart-page').remove();
        console.log(hello);
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvent();
    }
    if(size > 800){
        var cloneFoodItems=document.getElementById('food-items').cloneNode(true);
        console.log(cloneFoodItems);
        document.getElementById('food-items').remove();
        document.getElementById('total-elements').after(cloneFoodItems);
        var cloneCartPage=document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvent();
    }
}
function addEvent(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',IncreaseItem); 
    })
    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',DecreaseItem);
    })
}