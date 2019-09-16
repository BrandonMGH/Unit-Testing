

class ElementaryFunctions {
    constructor(x, y){
        this.x = x
        this.y = y
        
    }
    additionFunc () {
        return this.x + this.y
    }
    subtractionFunc () {
        return this.x - this.y
    }
}

const ElementaryFuncOne = new ElementaryFunctions(5,3)

console.log(ElementaryFuncOne.additionFunc())

module.exports = ElementaryFuncOne