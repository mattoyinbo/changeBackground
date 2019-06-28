(()=>{ 

//Array of colors
// const colors = ['#444444','#555555','#777777','#FF5E5B','#D8D8D8','#BA2C73'];


//get referenct to btn element in the dom
const btn = document.getElementById('btn');  
const hexValue = document.getElementById('hex');

// let backHexColor = gethexValue();
//add event listener of type click
btn.addEventListener('click',()=>{

    /**
     * 
     * Created a funtion called gethexValue to generate random Hexvalue 
     * 
     */
    // const colorIndex = Math.floor(Math.random() * colors.length);
    // let hexVal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    // let hexColor = [];
    // for(i=0;i<6;i++){
    //     let tempVal =  hexVal[Math.floor(Math.random() * hexVal.length)];
    //     hexColor[i] = tempVal;
    // }
    // let hexFinal = hexColor.join('');
    // hexFinal = '#' + hexFinal;

    //function call to generate Hexcolor

    let hexFinal2 = gethexValue()
    document.body.style.backgroundColor = hexFinal2;
    hexValue.textContent = `Hexcolor: ${hexFinal2}`;
    hexValue.style.backgroundColor = gethexValue();
    console.log(hexFinal2);
       
})

//Function to genrate random Hexcolor 
function gethexValue(){

    //Array of posible Hex values
        let hexVal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = [];
        for(i=0;i<6;i++){
            let tempVal =  hexVal[Math.floor(Math.random() * hexVal.length)];
            hexColor[i] = tempVal;
        }
        let hexFinal = hexColor.join('');
        hexFinal = '#' + hexFinal;
        return hexFinal;
         
    }





})(); 


// #00CECB
// #FFED66
// #FF5E5B
// #D8D8D8