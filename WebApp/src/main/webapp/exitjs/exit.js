function myFunction() {myFunction:{
    console.log('i get executed');
    break myFunction;
    console.log('i do not get executed');
}}