// State
let gameState = {
    totalNumOfProperties: 0,
    numOfMonthlyIncome: 0,
    intervalLoopID: undefined
};

// Variables
let MonthlyIncomeText = document.getElementByID("monthly-income");
let amountOfMoneyNumEle = document.getElementById("amount-of-money-num");

// Event Listeners
let amountOfMoneyElement = document.getElementByID("amount-of-money");

function amountOfMoneyIncrementer(){
    gameState.totalNumOfProperties = gameState.totalNumOfProperties + 1;
    amountOfMoneyNumEle.textContent = gameState.totalNumOfProperties;
};

// Event Listener
amountOfMoneyElement.addEventListener("click", amountOfMoneyIncrementer);

// Income Producers
    // First Producer
    let homeOwnerGrantBttnEle = document.getElementByID("home-grant");
    
    function homeGrantPurchaser(){
        if (gameState.totalNumOfProperties >= 5){
            gameState.totalNumOfProperties -= 5;
            amountOfMoneyNumEle.textContent = gameState.totalNumOfProperties;
            gameState.numOfMonthlyIncome += 1;
            MonthlyIncomeText.textContent = gameState.numOfMonthlyIncome;
        }
    };
    // Callback
    moneyGrantBttnEle.addEventListener("click", homeGrantPurchaser);
    // Set Interval & Clear Interval






let passiveIncomeGenerated: 


let totalNumOfResources = 0;

// Access Element through DOM via getElementById
let moneyBag.Element = document.getElementById ("amount-of-money");
console.log ("Here is your money. "), 




// Set up lisener.
moneyClickerElement.addEventListener("Click, ")


function cashIncrementer() {
    let 
};

// Setting Up RE Producer
let homeGrantBttnEle = document.getElementById("home-grant-bttn");

// Event Listener


// Pause Button

let pauseBttnEle = document.getElementByID("pause-bttn");

function pauseIntervalLoop(){
    clearInterval(gameState.intervalLoopID);
};

pauseBttnEle.addEventListener("click", [PauseIntervalLoop])