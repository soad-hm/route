// DOM => Document Object Model
// BOM => Browser Object Model
let append=document.querySelector('.container')
let procut=[
{
id:1,title:'womanshoes',price:23,img:'Images/1.png'
},
{
id:2,title:'sportshoes',price:43,img:'Images/2.png'
},
{
id:3,title:'boots',price:29,img:'Images/3.png'
}]
procut.forEach(function(i){
append.insertAdjacentHTML('beforeend',' <div class="product-card"><h1>'+i.title+'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+i.img+');"></div><div class="product-info"><div class="product-price">'+i.price+'</div><a class="product-button" href="product.html?id='+i.id+'">See More</a></div></div> ')

})
