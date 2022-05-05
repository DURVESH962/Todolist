let form=document.getElementById("addForm")
//console.log(form)
let itemList= document.getElementById("items")
//console.log(itemList)
let filter=document.getElementById("filter")
console.log(filter)
form.addEventListener("submit",function(e){
    e.preventDefault()// please prevent the default nature of form(not reload the page)
    let newitem = document.querySelector("#item").value
   // console.log(item)
   let li=document.createElement('li')
   li.className="list-group-item"
   let btn = document.createElement("button")
   btn.className ="btn btn-danger btn-sm float-right delete"
   btn.appendChild(document.createTextNode("X"))
   li.appendChild(document.createTextNode(newitem))
   li.appendChild(btn)
   
  // console.log(li)
  itemList.appendChild(li)
  document.querySelector("#item").value=''
})

itemList.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
      if(confirm("Are you sure want to remove items")){
      //  console.log(e.target.parentElement)
   itemList.removeChild(e.target.parentElement)
}else{

    alert("bro i am just kidding")
}
}
})

filter.addEventListener("keyup",function(y){
  let text = y.target.value.toLowerCase()
  // console.log(text)
  let items = document.getElementsByTagName("li")
  // console.log(items)

  Array.from(items).forEach(function(content){
   let itemName = content.firstChild.textContent
   if(itemName.toLowerCase().indexOf(text) !=-1){
      content.style.display = "block"

    }else{
         content.style.display="none"
    }
    
  })
  // let itemArray = Array.from(items);
  // for(let i=0;i<itemArray.length;i++){
  //   console.log(itemArray[i])
  //    }
  })