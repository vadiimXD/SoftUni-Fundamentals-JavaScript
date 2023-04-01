function cutAndReverse(text) {
    let mid = Math.ceil(text.length / 2);
    let text1 = text.slice(0, mid).split("").reverse().join("");
    let text2 = text.slice(mid).split("").reverse().join("");
     
    console.log(text1)
    console.log(text2)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');