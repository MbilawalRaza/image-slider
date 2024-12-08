let imgSlider = document.querySelector('.img-slider');

let data = [
    { imgSrc: './IMAGE/1.jpg' },
    { imgSrc: './IMAGE/2.jpg' },
    { imgSrc: './IMAGE/3.jpg' },
    { imgSrc: './IMAGE/4.jpg' }
];

console.log(data);
let count = 0; 

function next() {
    count++;



if(count>=data.length){
    count =0
}
imgSlider.src = data[count].imgSrc

}

// function prev() {
   
//    if(count.length||count){
//     count = count -1
//     console.log(count ,'if')
//    }
   
//    else if (count==0){
//     count = count +4
//     console.log(count,'else if')
//    }
// console.log(count)
//    imgSlider.src = data[count].imgSrc
   
// }




function prev() {
   
   if(count.length||count){
    count = count -1
    console.log(count ,'if')
   }
   
   else if (count==0){
    count = data.length -1
    console.log(count,'else if')
   }

   imgSlider.src = data[count].imgSrc
   
}