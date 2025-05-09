//data flow: in a ice cream parlor
//place order:2 sec
//select fruit:2 seconds
//add water and ice:1 sec
//start machine:1 sec
//select holder:1sec
//slect toppings:3 sec
//serve icecream:2 sec

let rawMaterials={
    Fruits:['apple','strawberry','banana'],
    Liquid:['ice','water'],
    holder:['stick','cone','cup'],
    toppings:['chocolate','peanuts']
};

let shop_open=true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if (shop_open){
            setTimeout(resolve,ms)

        }else{
            reject(console.log('shop is closed'));
        }

    });
}


async function kitchen() {
    try{
        await time(2000)
        console.log(`${rawMaterials.Fruits[0]} was selected`)

        await time(1000)
        console.log(`${rawMaterials.Liquid[0]} and  ${rawMaterials.Liquid[1] } were added`)

        await time(1000)
        console.log(`machine was started`)

        await time(1000)
        console.log(`${rawMaterials.holder[2]} was selected`)

        await time(3000)
        console.log(`${rawMaterials.toppings[1]} topping was added`)

        await time(2000)
        console.log(`Ice cream  was served`)
    }
    catch(error){
        console.log('shop is closed')
    }
    finally{
        console.log('day ended thank you')
    }
    
}

kitchen();