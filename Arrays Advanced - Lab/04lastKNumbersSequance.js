function lastKNumberSequence(n, k) {
    n = +n;
    k = +k;
  
    let sequence = new Array(n);
    sequence[0] = 1;
  
    for (let i = 1; i < sequence.length; i++) {
      let start = i - k < 0 ? 0 : i - k;
      sequence[i] = sequence.slice(start, k + start).reduce((acc, value) => acc + value, 0);
    }
  
    return sequence.join(' ');
  }
  

  console.log(lastKNumberSequence(6, 3));