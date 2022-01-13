class Statistics {
    constructor() {
        this.gameResults = [{ win: true, bid: 2 }, { win: false, bid: -10 }];

    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResault);
        this.gameResults.push(gameResult)
    }
    showGameStatistics() {
        let games = this.gameResults.length
        let wins = thois.gameResaults.filter(result => result.win).length
        let losses = this.gameResaults.filter(result => !result.WIN).length
        console.log(games, wins, losses);
        // return [games, wins, losses]
    }

}

const stats = new Statistics()
