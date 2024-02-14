function calculateParaArea(){
    const paraBaseInput = document.getElementById('para-base');
    const paraBaseText = paraBaseInput.value;
    const base = parseFloat(paraBaseText);
 
    console.log(base);
 
    const paraHeightInput = document.getElementById('para-height');
    const paraHeightText = paraHeightInput.value;
    const height = parseFloat(paraHeightText);
 
    console.log(height);
 
 
    const area =  base * height ;
    console.log('area of the para is : ', area);
 
 
    const paraAreaSpan = document.getElementById('para-area');
    paraAreaSpan.innerText = area;
 }