// State
let gameState = {
    totalNumOfProperties: 0,
    numOfMonthlyIncome: 0,
    intervalLoopID: undefined
}

// Variables
let MonthlyIncomeText = document.getElementById("monthly-income");
let accountBalanceEle = document.getElementById("account-balance");


// Event Listeners
let amountOfMoneyElement = document.getElementById("amount-of-money");

function amountOfMoneyIncrementer() {
    gameState.totalNumOfProperties = gameState.totalNumOfProperties + 1;
    amountOfMoneyElement.textContent = gameState.totalNumOfProperties;
};

// Event Listener
amountOfMoneyElement.addEventListener("click", amountOfMoneyIncrementer)


// Income Producers
    // First Producer
    let homeOwnerGrantBttnEle = document.getElementById("home-owner-grant");
    
    function homeGrantPurchaser() {
        if (gameState.totalNumOfProperties >= 0){
            gameState.totalNumOfProperties -= 0;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 1000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    homeOwnerGrantBttnEle.addEventListener("click", homeGrantPurchaser);


    // Second Producer
    let abandonedHouseBttnEle = document.getElementById("abandoned-house");
    
    function abandonedHousePurchaser() {
        if (gameState.totalNumOfProperties >= 1000){
            gameState.totalNumOfProperties -= 1000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 1400;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    abandonedHouseBttnEle.addEventListener("click", abandonedHousePurchaser);
   
    // Third Producer
    let abandonedTwoUnitHouseBttnEle = document.getElementById("abandoned-two-unit-house");
    
    function abandonedTwoUnitHousePurchaser() {
        if (gameState.totalNumOfProperties >= 10000){
            gameState.totalNumOfProperties -= 10000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 3200;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    abandonedTwoUnitHouseBttnEle.addEventListener("click", abandonedTwoUnitHousePurchaser);

    // Fourth Producer
    let fourUnitMultiBttnEle = document.getElementById("four-unit-multi");
    
    function fourUnitMultiPurchaser() {
        if (gameState.totalNumOfProperties >= 300000){
            gameState.totalNumOfProperties -= 300000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 7500;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    fourUnitMultiBttnEle.addEventListener("click", fourUnitMultiPurchaser);

    // Fifth Producer
    let twentyUnitMultiBttnEle = document.getElementById("twenty-unit-multi");
    
    function twentyUnitMultiPurchaser() {
        if (gameState.totalNumOfProperties >= 2500000){
            gameState.totalNumOfProperties -= 2500000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 35000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    twentyUnitMultiBttnEle.addEventListener("click", twentyUnitMultiPurchaser);
    
    // Sixth Producer
    let fiftyUnitMultiBttnEle = document.getElementById("fifty-unit-multi");
    
    function fourUnitMultiPurchaser() {
        if (gameState.totalNumOfProperties >= 15000000){
            gameState.totalNumOfProperties -= 15000000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 90000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    fiftyUnitMultiBttnEle.addEventListener("click", fiftyUnitMultiPurchaser);
    
    // Seventh Producer
    let oneHundredUnitMultiBttnEle = document.getElementById("ond-hundred-unit-multi");
    
    function fourUnitMultiPurchaser() {
        if (gameState.totalNumOfProperties >= 30000000){
            gameState.totalNumOfProperties -= 30000000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 200000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    ondhundredUnitMultiBttnEle.addEventListener("click", oneHundredUnitMultiPurchaser);
    
    // Eigth Producer
    let threeHundredUnitMultiBttnEle = document.getElementById("three-hundred-unit-multi");
    
    function fourUnitMultiPurchaser() {
        if (gameState.totalNumOfProperties >= 75000000){
            gameState.totalNumOfProperties -= 75000000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 600000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

    // Callback
    threeHundredUnitMultiBttnEle.addEventListener("click", threeHundredUnitMultiPurchaser);
    
    // Ninth Producer
    let sixHundredUnitMultiBttnEle = document.getElementById("six-hundred-unit-multi");
    
    function fourUnitMultiPurchaser() {
        if (gameState.totalNumOfProperties >= 125000000){
            gameState.totalNumOfProperties -= 125000000;
            accountBalanceEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 1800000;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    }

// Callback
sixHundredUnitMultiBttnEle.addEventListener("click", sixHundredUnitMultiPurchaser);
    
// Set Interval Timer
setInterval(nameOfCallbackFunc, numOfMSThatThisLoopWillRepeat);
    
// Clear Interval Timer
clearInterval(idNumOfTheIntervalLoop);


    // --- 
    // Complete

let startBttnEle = document.getElementById("start-bttn"); 


// Begin Game
function startIncrementingMoney() {
    gameState.totalNumOfProperties += gameState.numOfMonthlyIncome;
    accountBalanceEle.textContent = gameState.totalNumOfProperties; 
}

// Begin Looping
function setUpIncrementationInterval() {
    gameState.intervalLoopID = setInterval(startIncrementingMoney, 1000) 
    console.log(gameState.intervalLoopID);
}

// Start Bttn
startBttnEle.addEventListener("click", setUpIncrementationInterval);

// Pause Bttn
let pauseBttnEle = document.getElementById("pause-bttn");

function pauseIntervalLoop() {
    clearInterval(gameState.intervalLoopID);
}

let count = 0;

pauseBttnEle.addEventListener("click", pauseIntervalLoop);

// -------END-----------


