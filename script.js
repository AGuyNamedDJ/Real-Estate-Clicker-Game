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

    // Second Producer
    let abandonedHouseBttnEle = document.getElementByID("abandoned-house");
    
    function abandonedHousePurchaser() {
        if (gameState.totalNumOfProperties >= 1000){
            gameState.totalNumOfProperties -= 1000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 1400;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    };

    // Callback
    abandonedHouseBttnEle.addEventListener("click", abandonedHousePurchaser);
   
    // Third Producer
    let abandoned2UnitHouseBttnEle = document.getElementByID("abandoned-2-unit-house");
    
    function abandonedHousePurchaser() {
        if (gameState.totalNumOfProperties >= 10000){
            gameState.totalNumOfProperties -= 10000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 3200;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    };

    // Callback
    abandoned2UnitHouseBttnEle.addEventListener("click", abandoned2UnitHousePurchaser);

    
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


