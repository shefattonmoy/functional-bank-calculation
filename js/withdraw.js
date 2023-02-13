document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Step 01: Get withdraw amount by using getInputFieldValueByID function
    const newWithdrawAmount = getInputFieldValueByID('withdraw-field');

    // Step 02: Previous Withdraw amount by using getTextElementValueByID function
    const previousWithdrawTotal = getTextElementValueByID('withdraw-total');

    // Step 03: Calculate new withdraw total and set the value
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // Step 04: Set new withdraw total by using setTextElementValueByID function
    setTextElementValueByID('withdraw-total', newWithdrawTotal);

    // Step 05: Get previous balance total by using getTextElementValueByID function
    const previousBalanceTotal = getTextElementValueByID('balance-total');

    // Step 06: Calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // Step 07: Set balance total by using setTextElementValueByID function
    setTextElementValueByID('balance-total', newBalanceTotal);
})