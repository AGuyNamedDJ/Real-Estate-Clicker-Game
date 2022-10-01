// State
let gameState = {
    totalNumOfProperties: 0,
    numOfMonthlyIncome: 0,
    intervalLoopID: undefined
};

// Variables
let MonthlyIncomeText = document.getElementByID("monthly-income");
let accountBalanceEle = document.getElementById("account-balance");

// Event Listeners
let amountOfMoneyElement = document.getElementByID("amount-of-money");

function amountOfMoneyIncrementer() {
    gameState.totalNumOfProperties = gameState.totalNumOfProperties + 1;
    accountBalanceEle.textContent = gameState.totalNumOfProperties;
};

// Event Listener
amountOfMoneyElement.addEventListener("click", amountOfMoneyIncrementer)

// Income Producers
    // First Producer
    let homeOwnerGrantBttnEle = document.getElementByID("home-owner-grant");
    
    function homeGrantPurchaser() {
        if (gameState.totalNumOfProperties >= 0){
            gameState.totalNumOfProperties -= 0;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 1000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    };

    // Callback
    homeOwnerGrantBttnEle.addEventListener("click", homeGrantPurchaser);

    // Set Interval & Clear Interval
    let startBttnEle = document.getElementById("start-bttn"); 
   
// Begin Game
function startIncrementingMoney() {
    gameState.totalNumOfProperties += gameState.numOfMonthlyIncome;
    accountBalanceEle.textContent = gameState.totalNumOfProperties; 
};

// Begin Looping
function setUpIncrementationInterval() {
    gameState.intervalLoopID = setInterval(startIncrementingMoney, 1000) 
    console.log(gameState.intervalLoopID);
};

// Start Bttn
startBttnEle.addEventListener("click", setUpIncrementationInterval);

// Pause Bttn
let pauseBttnEle = document.getElementById("pause-bttn");

function pauseIntervalLoop() {
    clearInterval(gameState.intervalLoopID);
};

pauseBttnEle.addEventListener("click", pauseIntervalLoop);

// -------END-----------


