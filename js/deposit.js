document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueByID('deposit-field');

    // Step 01: Get previous deposit total by ID
    const previousDepositAmount = getTextElementValueByID('deposit-total');

    // Step 02: Calculate new deposit total
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    // Step 03: Set deposit total value
    setTextElementValueByID('deposit-total', newDepositTotal);

    // Step 04: Get previous balance by using the function
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueByID('balance-total', newBalanceTotal);
})