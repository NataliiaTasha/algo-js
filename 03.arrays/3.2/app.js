(() => {
    let arr = [1, 2, 3, 4, 5];
    sum = 0;
    arr = [100, 101, 102];
    for (let elem of arr) {
        sum += elem;
  }
    let arrAverage = sum / arr.length;
    
    console.log(arrAverage);

    
})();
