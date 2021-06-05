var form =document.getElementById('add-form');
var items= document.getElementById('list-group');

form.addEventListener('submit',addItem);
items.addEventListener('click',removeItem);
items.addEventListener('click',editItem);

function addItem(e){
    e.preventDefault();

    //get input value 
    var newItem= document.getElementById('Item').value;

    //new item
    var  li= document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //same way delete button
    var deleteBtn= document.createElement('button');
    deleteBtn.className='danger-button';
    deleteBtn.appendChild(document.createTextNode('X'));

    //edit button
    var editBtn=document.createElement('button');
    editBtn.className='edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    //append both edit and X button to our list
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    items.appendChild(li);
}

//removing items 
function removeItem(e){
    if(e.target.classList.contains('danger-button')){
        if(confirm('Are you sure about this?')){
            var li=e.target.parentElement;
            items.removeChild(li);
        }
    }
}

//edit items
function editItem(e){
    if(e.target.classList.contains('edit')){
        var newItem= prompt("Please Enter the Item", "like Banana"); 
        if(newItem!=null){
            e.target.parentElement.firstChild.textContent=newItem;
        }   
    }
}

//filter items
