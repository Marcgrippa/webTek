/**
 * Created by Håvard on 18.10.2016.
 */

function CalculateTax() {
    var income = document.getElementById("income").value;
    var wealth = document.getElementById("wealth").value;
    var tax = ( 0.35 * income ) + ( 0.25 * wealth);
    console.log(tax)

    document.getElementById("tax").value = tax.toFixed(2);
}