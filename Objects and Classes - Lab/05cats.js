function cats(input) {
    class cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let info of input) {
        let [name, age] = info.split(' ');
        let newCat = new cat(name, age)
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])