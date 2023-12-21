// javascript  'use strict'.
// In Javascript, 'use strict'; status that the code should  be executed in 'strict mode'. this makes it easier to write good and secure to write good  and secure JS code.

// 'use strict';

// {
//     myVariable = 9;
//     console.log(myVariable);
// }

// Headers, mayVariable is created without declaring. this works as as a global  variable in javscript. however , if you use this in strict Mede , the program will throw an error.


// strict mode in variable 

// in strict mode, using a variable without declaring it throw an error.

{
   // console.log('some code');

   // 'use strict' is ignored
   // "use strict";

   // x = 21; // does not an error
   // console.log(x);

}


// strict mode in Functtion 
// you can also use strict mode inside function.

{
    // myVariable = 9;
    // console.log(myVariable); //9

    // function hello(){
    //     'use strict';

    //     let string = 'hello'
    // }
    //   hello();
}

// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.

{
    // function hello(){
    //     string = 'hello'; // throws an error
    // }

    // hello;

    // note : strict mode doesn't apply to block ststement with {} bracks.
}

// thinks Not  allowed in strict mode.
// 1. underclared variable is not allowed.
{
    // 'use strict';

    // a = 'hello'; // throws an error
}