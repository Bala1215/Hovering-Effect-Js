//create div tags
let mainDivContainer = (tagName,className,val='')=>{

    let divElement = document.createElement(tagName);
    divElement.setAttribute('class',className);
    divElement.innerHTML = val;

    return divElement;

}

let subDivContainer = (val='',imgSrc='')=>{
    
    let h1Tag = document.createElement('h1');
    h1Tag.innerHTML = val;
    h1Tag.setAttribute('class','h1Tag');

    let imgTag = document.createElement('img');
    imgTag.src=imgSrc;
    imgTag.classList.add('image');  
    //imgTag.style.display=none;

    let subDiv = document.createElement('div');
    subDiv.setAttribute('class','subDiv');
    subDiv.append(h1Tag,imgTag);

    return subDiv;
}



//store div element in it's corresponding variable
let mainDiv_1 = mainDivContainer('div','main_div_1');
let mainDiv_2 = mainDivContainer('div','main_div_2');

//store sub div tags 
let div_1 = subDivContainer('Google','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png');
let div_2 = subDivContainer('Google','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png');
let div_3 = subDivContainer('Google','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png');
let div_4 = subDivContainer('Google','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png');
let div_5 = subDivContainer('Google','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png');
let div_6 = subDivContainer('Google','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png');

mainDiv_1.append(div_1,div_2,div_3);
mainDiv_2.append(div_4,div_5,div_6);

let divContainer = document.createElement('div');
divContainer.append(mainDiv_1,mainDiv_2);
divContainer.setAttribute('class','divContainer');

//add two div tag into body 
document.body.append(divContainer);


//Functionality

let hoverEffect = document.querySelectorAll('.subDiv');

hoverEffect.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        e.lastChild.style.display='block';
       // e.lastChild.style.text.align='center';

    })
    e.addEventListener('mouseleave',()=>{
        e.lastChild.style.display='none';
    })
})
