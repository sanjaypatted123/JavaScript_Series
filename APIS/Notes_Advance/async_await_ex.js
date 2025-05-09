let rawMaterials={
    Fruits:[apple,strawberry,banana],
    Liquid:[ice,water],
    holder:[stick,cone,cup],
    toppings:[chocolate,peanuts]
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
        console.log(`${rawMaterials.Fruits[0]} was selected`);

    }
    catch(error){}
    finally{}
    
}

kitchen();