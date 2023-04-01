function pascalCaseSplitter(text) {
    let result = text.split(/(?=[A-Z])/);
    console.log(result.join(", "))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');