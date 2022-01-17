class Game {
    constructor(start) {

        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this)); // pobranie przycisku z id start i nasłuchiwanie na klik z odpaleniem funkcji startGame()
        this.spanWallet = document.querySelector('.panel span.wallet'); //sekcja z klasą panel w niej span z klasą wallet
        this.boards = [...document.querySelectorAll('div.color')] //pobranie wszystkich div z klasą color
        this.inputBid = document.getElementById('bid'); // pobieranie po id
        this.spanResault = document.querySelector('.score span.resault') // pobieranie po przez klase
        this.spanGames = document.querySelector('.score span.number') // pobieranie po przez klase
        this.spanWins = document.querySelector('.score span.win') // pobieranie po przez klase
        this.spanLosses = document.querySelector('.score span.loss') // pobieranie po przez klase

        this.render()
    }
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = " ", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        // console.log('gramy');

        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i]
        })

        this.spanWallet.textContent = money;
        if (result) {
            result = `wygrałeś ${wonMoney}`;
        } else if (!result && result !== "") {
            result = `przegrałeś ${bid}`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBid.value = "";
    }
    startGame() {
        if (this.inputBid.value < 1) return alert('kwota za mała')
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPley(bid)) {
            return alert("masz za mało kasy lub podana zosyała nieprawidłowa wartość")

        }
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors)
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney,);
        this.stats.addGameToStatistics(win, bid)
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)

    }
}
const game = new Game(200)