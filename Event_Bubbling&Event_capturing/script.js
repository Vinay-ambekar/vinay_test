let child=document.getElementById('child')
let parent=document.getElementById('parent')
let grandparent=document.getElementById('grandparent')

child.addEventListener('click',()=>console.log("child"),false)
parent.addEventListener('click',()=>console.log("parnet"),false)
grandparent.addEventListener('click',()=>console.log("gradparent"),false)