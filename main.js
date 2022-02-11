function start_classification(){
    navigator.mediaDevices.getUserMedia({oudio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8F7DvGQ4q/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);

}
else{
console.log(results);
random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
document.getElementById("result_confidence").innerHTML='Acuracy-'+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
img=document.getElementById('alien1');
img1=document.getElementById('alien2');
img2=document.getElementById('alien3');
img3=document.getElementById('alien4');
if(results[0].label=="Backgound Noise"){
img.src='bi9g booty sheeo dancing.gif';
img1.src='big booty cat.png';
img2.src='big booty lion.png';
img3.src='big booty dog.png';
}
else if(results[0].label=="lion"){
    img.src='bi9g booty sheep.jpg';
    img1.src='';
    img2.src='';
    img3.src='';  
}
else if(results[0].label=="cat"){
    img.src='';
    img1.src='';
    img2.src='';
    img3.src='';  
}
else {
    img.src='';
    img1.src='';
    img2.src='';
    img3.src='';  
}
}
}