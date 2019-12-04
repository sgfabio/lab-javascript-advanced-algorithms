const stack = new StackDataStructure ();

console.log(stack);

// Getting parent
const ulStack = document.getElementById('stack');


// creating li elements basedo on MAX_SIZE - inverted
for (i = stack.MAX_SIZE ; i> 0 ; i-= 1){
    console.log(i);
    const newLi = document.createElement("li");
    newLi.classList.add("list-group-item", "list-group-item-dark");
    newLi.id = i;
    newLi.dataset.stack = i;
    ulStack.appendChild(newLi);

}
// Getting the button
const addStackButton = document.getElementById("add-stack")
    console.log(addStackButton);

// getting the input
addInput = document.getElementById("add-element-stack")


addStackButton.onclick = () => {
    // Desconstrução do objeto
    let {                   
        value,
        name,
    } = addInput; // We want only "value" value

    if (!value) {
        errorMsg ('Please, choose a value');
        return;
    }

    if (stack.canPush() && value) {
        
        const nextLiNum = stack.size +1 ;
        // getting li item 
        const liStack = document.querySelector(`li[data-stack="${nextLiNum}"]`)    //Let's work with the CSS selector using [] notation
        liStack.innerHTML = value;

        // pushing to stack
        stack.push(value);  // insere o valor e atualiza o size para inserir o próximo item
        console.log(name);
        addInput.value = "";
        addInput.focus();
    } else {
        errorMsg('Stack overflow');
    }
    
    function errorMsg (message) {
        console.log("Not here!");
        // if (value){
        //     message = 'please, choose a value'
        // }
        // Getting last li element so we can use on insertBefore method
        const lastLi = document.querySelector(`li[data-stack="${stack.MAX_SIZE}"]`)
        // creating new li element for stack overflow 
        const newLi = document.createElement('li');
        newLi.classList.add('list-group-item', 'list-group-item-danger')
        newLi.innerHTML = message;
        // inserting the stack overflow li element in the DOM
        ulStack.insertBefore(newLi, lastLi);
        setTimeout ( () => ulStack.removeChild(newLi), 500 );
        addInput.focus();
        
    }

}
