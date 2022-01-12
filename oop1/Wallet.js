class Wallet {
    constructor(money) {
        let _money = money
        // pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        // sprawdzanie czy użytkownik ma odpowiednią ilość srodków

        this.checkCanPley = (value) => {
            if (_money >= value) return true;
            return false;
        }
        this.changeWallet = (value, typ = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (typeof === "+") {
                    return _money += value;

                } else if (typeof === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowy typ działania")
                }
            } else {
                console.log(typeof value);
                throw new Error("nieprawidłowa liczba")

            }
        }
    }
}
const wallet = new Wallet(200)