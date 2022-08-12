// array of all the coin values
// make sure is sorted
val coins = listOf(25, 10, 5, 1)
// change to be given
var change: Int = 72
// keep track of how many coins
var howManyCoins: Int = 0

// go through all the coins
for (coin in coins) {
    // check if change value is bigger than coin
    // if it is we subtrack the value of the coin from the change
    // and we increment the count of the coins by one
    while (change >= coin) {
        change -= coin
        howManyCoins++
    }
    // if change is 0 we break the loop, no need to continue looping
    if (change == 0) {
        break
    }
}
