class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult()
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let color = [];
        // uzupełnianie po przez losowanie
        for (let i = 0; i < this.options.length; i++)
            const index = Math.floor(Math.random() * this.options.length)
        const color = this.options[index]
        console.log(color);
        color.push(color)
        return color
    }
}


// const draw = new Draw()