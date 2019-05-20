var deposit;
var name;
var deposit123=[];
var amount123=[];
var number;


$(".newDeposit").click(function() {
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    deposit = parseInt(deposit);
        $(".ledger").append('<p>'+ name +'</p><p>'+"$"+deposit+"</p>");
    deposit123.push(deposit);
    number = deposit123.length;
        $(".number").text("交易数量:"+number);
    var total= 0;
    deposit123.forEach(function(price) {
    total=total+price;
});
        $(".total").text("存款总额:"+total);
    
    
});

 