(() => {
    // YOUR CODE HERE
  
    let n = prompt("Enter a number"); 
    let t = n;
    let sum = 0;
    do { let i = parseInt(prompt("Enter a number again"));
    n--;
    sum += i;
    } while (n);
     

    alert(`The sum of numbers that you entered ${t} times is ${sum}`);

  
})();