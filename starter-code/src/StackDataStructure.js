class StackDataStructure  {
    constructor (MAX_SIZE = 10){       // see in ./spec/DataStructuresSpec.js -> Line 15
        // o Jasmine espera instanciar o stackcontrol
        this.stackControl = [];         // see in ./spec/DataStructuresSpec.js -> Line 05
        this.MAX_SIZE = MAX_SIZE;       // see in ./spec/DataStructuresSpec.js -> Line 15
        this.size = 0                   // We want our class to be able to tell its current size; it depend on us to remmember updating this value so it is correct
        
    }


    isEmpty(){              // see in ./spec/DataStructuresSpec.js -> Line 20
        return this.size === 0;
    }


    canPush() {             // see in ./spec/DataStructuresSpec.js -> Line 23
        return this.size < this.MAX_SIZE; // to Avoid stack Overflow
    }

    push(item) {                // see in ./spec/DataStructuresSpec.js -> Line 28

        if (!this.canPush()){        // see in ./spec/DataStructuresSpec.js -> Line 53
            return "Stack Overflow" // see in ./spec/DataStructuresSpec.js -> Line 70
        }
        this.stackControl[this.size] = item;     // see in ./spec/DataStructuresSpec.js -> Line 47
        // we don't want to dependo on third-party methods so we want to push(theElement) manually
        this.size += 1; 
        return this.stackControl; // see in ./spec/DataStructuresSpec.js -> Line 59
        
    }

    pop (){                 // see in ./spec/DataStructuresSpec.js -> Line 32
        if (this.isEmpty()) {
            return "Stack Underflow"; // see in ./spec/DataStructuresSpec.js -> Line 91
        }

        const lastItemIdx = this.size -1;
        const lastItem = this.stackControl.splice(lastItemIdx,1)[0]; 
        this.size -= 1 ;
        return lastItem;
    }

}
