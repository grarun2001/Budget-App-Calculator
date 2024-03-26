let wamount = 0
const updatewallet = () => {
    let amount = prompt("Enter the amount to update your wallet");
    wamount += parseInt(amount)
    document.getElementById("walletamount").innerHTML = wamount;
    console.log(wamount);
}
document.getElementById("updatewallet").addEventListener("click", updatewallet);

let amount = 0
console.log(balance);
console.log(wamount);
console.log(amount);
const addexpense = () => {
    let expensename = prompt("Enter the expense name:");
    let expenseamount = prompt("Enter the expense amount:");
    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${expensename}</td><td>${expenseamount}</td><td><input type="button" value="📝" class="editbtn"/><input type="button" value="🚮" class="deletebtn"/></td>`;
    amount += parseInt(expenseamount)
    document.getElementById("expenses").innerHTML = amount
    let balance = wamount - amount
    document.getElementById("balance").innerHTML = balance
    document.getElementById("tablebody").appendChild(newRow);
}
document.getElementById("addexpense").addEventListener("click", addexpense);

document.getElementById("tablebody").addEventListener("click", editdelete = (event) => {
    if (event.target.classList.contains('editbtn')) {
        let expensename = prompt("Enter the updated expense name:");
        let expenseamount = parseInt(prompt("Enter the updated expense amount:"));
        let row = event.target.parentElement.parentElement;
        row.children[0].textContent = expensename;
        row.children[1].textContent = expenseamount;

    } else if (event.target.classList.contains('deletebtn')) {
        event.target.parentElement.parentElement.remove();
    }
});


