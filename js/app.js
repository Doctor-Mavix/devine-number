const UIinput= document.getElementById('number')
const UIbtn = document.getElementById('btn-submit')
const UIresultat = document.getElementById('result')

const UIscore =document.getElementById('score')
const UItime =document.getElementById('time')
const UIbestScore=document.getElementById('best-score') 

const UImodal =document.getElementById('modal')
const UImodalBtn = document.getElementById('btn-modal')
const UImodalScore =document.getElementById('modal-score')

let best_point=10;
let times,point;

function innitialisation(){
    UItime.innerText="START"
    UImodal.style.display='none';
    point=10;
    times = 30;
    UIscore.innerText=point +' pts';
    UIbestScore.innerText=best_point +' pts';
    UItime.innerText=times;
    UIresultat.innerText='';
    // setTimeout((e)=>{
    //     alert('jkl')

    // },3000)
}
function randoms(){
    return Math.floor(Math.random()*5)+1 ;
}

function deviner(e){
    value =parseInt(UIinput.value);

    if( isNaN(value)){
        alert(`${UIinput.value} n est pas un nombre ,veuillez entrer un nombre` )
        UIinput.value='';
        return 
    }
    num=randoms();
    if(value ==num){
      UIresultat.innerHTML=`<p>Vous avez trouvé la réponse <br> <span> + 1 points </span></p>` ; 
      addScore(1)   
    }
    else{
      UIresultat.innerHTML=`<p>La réponse  était :${num}<br> <span> -1 points </span></p>` ; 
      removeScore(1)
    }
    UIinput.value='';
    main()
}

function addScore(value){
    point+=value;
    UIscore.innerText=point +'pts';
    times+=10;
}

function removeScore(value){
   if(value>0){
    point-=value;
    UIscore.innerText=point +'pts';
   }
}

function timeCount(){
    if(times>0 && point>0){
        times--;
        UItime.innerText=times;
    }
    else{
        main()
    }
}

function main(){
    if(times==0 || point==0){
    UImodal.style.display='block';
    UImodalScore.textContent= point + ' pts'

        if(point>best_point) {
            best_point=point;
        }
    }
}

innitialisation();

setInterval(timeCount, 1000);

UIbtn.addEventListener('click',deviner)
UImodalBtn.addEventListener('click', innitialisation)

