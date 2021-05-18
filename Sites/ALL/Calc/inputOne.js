function calc(whichAmount)
{
    var am = "amount" + whichAmount.toString();
    window.document.getElementById(am).style.backgroundColor = "lightgreen";
    window.document.getElementById(am).style.color = "steelblue";

    var vat = 0.17;
    var ord = 15;
    var price1 = parseFloat(window.document.getElementById("price1").innerHTML.substring(7,9));
    var price2 = parseFloat(window.document.getElementById("price2").innerHTML.substring(7,9));
    var price3 = parseFloat(window.document.getElementById("price3").innerHTML.substring(7,9));
    var price4 = parseFloat(window.document.getElementById("price4").innerHTML.substring(7,9));
    var price5 = parseFloat(window.document.getElementById("price5").innerHTML.substring(7,9));
    var price6 = parseFloat(window.document.getElementById("price6").innerHTML.substring(7,9));
    var price7 = parseFloat(window.document.getElementById("price7").innerHTML.substring(7,9));
    var price8 = parseFloat(window.document.getElementById("price8").innerHTML.substring(7,9));
    var price9 = parseFloat(window.document.getElementById("price9").innerHTML.substring(7,9));
    var price10 = parseFloat(window.document.getElementById("price10").innerHTML.substring(7,9));
    var amount1 = window.document.getElementById("amount1").value;
    var amount2 = window.document.getElementById("amount2").value;
    var amount3 = window.document.getElementById("amount3").value;
    var amount4 = window.document.getElementById("amount4").value;
    var amount5 = window.document.getElementById("amount5").value;
    var amount6 = window.document.getElementById("amount6").value;
    var amount7 = window.document.getElementById("amount7").value;
    var amount8 = window.document.getElementById("amount8").value;
    var amount9 = window.document.getElementById("amount9").value;
    var amount10 = window.document.getElementById("amount10").value;

    var match1 = /[0-9]/;

    if (amount1 == "")
        amount1 = 0;
    if (amount2 == "")
        amount2 = 0;
    if (amount3 == "")
        amount3 = 0;
    if (amount4 == "")
        amount4 = 0;
    if (amount5 == "")
        amount5 = 0;
    if (amount6 == "")
        amount6 = 0;
    if (amount7 == "")
        amount7 = 0;
    if (amount8 == "")
        amount8 = 0;
    if (amount9 == "")
        amount9 = 0;
    if (amount10 == "")
        amount10 = 0;


    if(amount1.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount1").value = "";
        document.getElementById("subTotal1").innerHTML.toString() = "0";
    }

    if(amount2.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount2").value = "";
        document.getElementById("subTotal2").innerHTML.toString() = "0";
    }

    if(amount3.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount3").value = "";
        document.getElementById("subTotal3").innerHTML.toString() = "0";
    }

    if(amount4.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount4").value = "";
        document.getElementById("subTotal4").innerHTML.toString() = "0";
    }

    if(amount5.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount5").value = "";
        document.getElementById("subTotal5").innerHTML.toString() = "0";
    }

    if(amount6.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount6").value = "";
        document.getElementById("subTotal6").innerHTML.toString() = "0";
    }

    if(amount7.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount7").value = "";
        document.getElementById("subTotal7").innerHTML.toString() = "0";
    }

    if(amount8.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount8").value = "";
        document.getElementById("subTotal8").innerHTML.toString() = "0";
    }

    if(amount9.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount9").value = "";
        document.getElementById("subTotal9").innerHTML.toString() = "0";
    }

    if(amount10.toString().replace(match1, '').length > 0){
        alert("הזן את מספר המנות, לא יותר מ -10");
        document.getElementById("amount10").value = "";
        document.getElementById("subTotal10").innerHTML.toString() = "0";
    }

    var subTotal1 = price1 * amount1;
    var subTotal2 = price2 * amount2;
    var subTotal3 = price3 * amount3;
    var subTotal4 = price4 * amount4;
    var subTotal5 = price5 * amount5;
    var subTotal6 = price6 * amount6;
    var subTotal7 = price7 * amount7;
    var subTotal8 = price8 * amount8;
    var subTotal9 = price9 * amount9;
    var subTotal10 = price10 * amount10;


    window.document.getElementById("subTotal1").innerHTML = "&nbsp;&#8362;" +  subTotal1;
    window.document.getElementById("subTotal2").innerHTML = "&nbsp;&#8362;" +  subTotal2;
    window.document.getElementById("subTotal3").innerHTML = "&nbsp;&#8362;" +  subTotal3;
    window.document.getElementById("subTotal4").innerHTML = "&nbsp;&#8362;" +  subTotal4;
    window.document.getElementById("subTotal5").innerHTML = "&nbsp;&#8362;" +  subTotal5;
    window.document.getElementById("subTotal6").innerHTML = "&nbsp;&#8362;" +  subTotal6;
    window.document.getElementById("subTotal7").innerHTML = "&nbsp;&#8362;" +  subTotal7;
    window.document.getElementById("subTotal8").innerHTML = "&nbsp;&#8362;" +  subTotal8;
    window.document.getElementById("subTotal9").innerHTML = "&nbsp;&#8362;" +  subTotal9;
    window.document.getElementById("subTotal10").innerHTML = "&nbsp;&#8362;" +  subTotal10;

    window.document.getElementById("total").innerHTML = "&nbsp;&#8362;" + (subTotal1 + subTotal2 + subTotal3 + subTotal4 + subTotal5 + subTotal6 + subTotal7 + subTotal8 + subTotal9 + subTotal10).toString();

    window.document.getElementById("vat").innerHTML = "&nbsp;&#8362;" + (parseFloat(window.document.getElementById("total").innerText.substring(2)) * vat).toFixed(2).toString();

    window.document.getElementById("ord").innerHTML = "&nbsp;&#8362;" + (ord).toString();

    window.document.getElementById("payment").innerHTML = "&nbsp;&#8362;" + (parseFloat(window.document.getElementById("total").innerText.substring(2)) + parseFloat(window.document.getElementById("vat").innerText.substring(2)) + parseFloat(window.document.getElementById("ord").innerText.substring(2))).toFixed(2).toString();
}

function changeBG(whichAmount)
{
    var am = "amount" + whichAmount.toString();
    window.document.getElementById(am).style.backgroundColor = "tomato";
    window.document.getElementById(am).style.color = "white";
}

function paintBoxes()
{
    var i, am;
    for (i=1; i<4; i++)
    {
        am = "amount" + i.toString();
        window.document.getElementById(am).style.backgroundColor = "lightgreen";
        window.document.getElementById(am).style.color = "steelblue";
    }
}
