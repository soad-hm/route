// ✌ :))
let btnback=document.querySelector('#back')
let ie=document.querySelector('img')
let H= document.querySelector('h1')
let P=document.querySelector('p')

let procut=[
    {id:1,title:'womanshoes',price:23,img:'Images/1.png',discript:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?(womanshoes)"},
    {id:2,title:'sportshoes',price:43,img:'Images/2.png', discript:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?(sportshoes)"},
    {id:3,title:'boots',price:29,img:'Images/3.png',discript:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?(_boots)"}

]

let getId = new URLSearchParams(location.search)
let resultId = getId.get('id')
let fainalId=procut.find(function(i){
return i.id===Number(resultId)

})
if(fainalId){
H.innerHTML=fainalId.title
// imge.setAttribute('src',fainalId.img)
ie.setAttribute('src',fainalId.img)
P.innerHTML=fainalId.discript
}else{
    location.href="file:///C:/Users/acer/Desktop/js/project25(dynamicroute)/index.html"
}
console.log(fainalId)
btnback.addEventListener('click',function(){
    history.back()
})