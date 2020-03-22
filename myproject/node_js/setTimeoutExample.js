function customerOrder(orderNo)
{
    console.log("Customer orderNo is "+orderNo);
cookAndDeliverFood(function(){
    console.log("Delivered Food on orderNo  "+orderNo);
})
}
function cookAndDeliverFood(callback)
{
    setTimeout(callback,4000);
}
// customerOrder(1);
// customerOrder(2);
// customerOrder(3);
// customerOrder(4);