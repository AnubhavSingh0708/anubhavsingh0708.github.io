//import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1900 );
window.setTimeout(function(){
document.getElementById("alert").classList.add("invisible");
},4900)

const cube=[];
scene.background=new THREE.Color( 0x1c1e24 );
var factor =510000/window.innerWidth;
var camm =200;
camera.position.set( 0+camm, 0, factor-camm);
camera.lookAt( 0, 0, 0);
for (let i=1;i<=random.length;i+=3){

    const geometry = new THREE.TetrahedronGeometry(2,0);
const material = new THREE.PointsMaterial( { color: 0xfaf0ed } );
 cube.push(new THREE.Mesh( geometry, material ));
    cube[cube.length-1].position.set((random[i-1]),random[i],random[i+1]);
    cube[cube.length-1].rotation=random[i];
    scene.add( cube[cube.length-1]);
}


/*
for (let i=1;i<=text.length;i+=2){

    const geometry = new THREE.TetrahedronGeometry(2,0);
const material = new THREE.PointsMaterial( { color: 0xffffff } );
 cube.push(new THREE.Mesh( geometry, material ));
    cube[cube.length-1].position.set((text[i-1]),((text[i]-90)),-100);
scene.add( cube[cube.length-1]);
}*/


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);
renderer.render(scene,camera);


window.addEventListener("scroll", textify,false);

window.addEventListener("resize", function(event){

   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   camera.position.set( 0+camm, 0, factor-camm);
camera.lookAt( 0, 0, 0);
   renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render(scene,camera);
},true);

function textify()
{
   // window.removeEventListener("scroll", textify,true);
    trigger();
}
var s=0;
var purge=false;
let arrangement=false; 




 function trigger(){



   
   var scrollam=1;
   if (window.innerHeight<window.scrollY ){
scrollam=window.scrollY-window.innerHeight;
let scrollama;


if (scrollam <200){
   
   scrollama=scrollam/200;
for(let i=0;i<cube.length;i++){
   cube[i].position.set((random[i*3]*scrollama),(random[i*3+1]*scrollama),(random[i*3+2]*scrollama));
}
camera.position.set( 0+camm, 0, factor-camm);
camera.lookAt( 0, 0, 0);
}
else if(((scrollam-200 < 4) && (200 - scrollam <4 )) || !arrangement){
   for(let i=0;i<cube.length;i++){
   cube[i].position.set((random[i*3]),(random[i*3+1]),(random[i*3+2]));
arrangement=true;
}
camera.position.set( 0+camm, 0, factor-camm);
camera.lookAt( 0, 0, 0);
}
else if(4*window.innerHeight<scrollam){
   generateGalaxy();
   scrollama=scrollam - window.innerHeight*2;
scrollama=scrollama/1200;
var camr=27 -scrollama*3.5;

camera.position.set(Math.cos(scrollama)*camr,camr/6,Math.sin(scrollama)*camr);
camera.lookAt(0,0,0);
if(camr<0.01){
   window.removeEventListener("scroll", textify,false);
  //document.getElementById("rickroll").play();
  document.getElementById("rickroll").style.display="block";
}
}
else if(238<scrollam){
scrollama=scrollam-37;
scrollama=scrollama/1200;
camera.position.set(0,Math.cos(scrollama)*(factor-camm),Math.sin(scrollama)*(factor-camm));
camera.lookAt(0,0,0);
}
renderer.render(scene,camera);
   }
   else{

if(camm>10){
   camm-=19;
   camera.position.set( 0+camm, 0, factor-camm);
   camera.lookAt( 0, 0, 0);
} else if(camm>1){
   camm-=1;
   camera.position.set( 0+camm, 0, factor-camm);
   camera.lookAt( 0, 0, 0);
}
for(let j=0;j<cube.length;j++){


   let coor=cube[j].position;
   let x=text[j*2],y=text[j*2-1]-90,z=-100;
   if (coor.x - text[j*2]  >50){
s=1
x=coor.x-50;
   }
   else if(coor.x - text[j*2]  >20){
    s=1;
    x=coor.x-20;
       } 
       else if(coor.x - text[j*2]  >5){
        s=1;
        x=coor.x-4;
           } 
       else if(coor.x - text[j*2]  >2){
        s=1;
        x=coor.x-1;
           }
           else if(coor.x - text[j*2]  >-1){
            
            x=text[j*2];
               } 
           else if(coor.x - text[j*2]  >-2){
            s=1;
            x=coor.x+1;
               } 
               else if(coor.x - text[j*2]  >-5){
                s=1;
                x=coor.x+4;
                   }
               else if(coor.x - text[j*2]  >-20){
                s=1;
                x=coor.x+20;
                   }
   else if(coor.x - text[j*2]  <-50){
s=1;
x=coor.x+50;
   }


   if (coor.y - text[(j*2)+1]  >140){
    s=1
    y=coor.y-100;
       }
       else if(coor.y - text[(j*2)+1]  >110){
        s=1;
        y=coor.y-20;
           } 
           else if(coor.y - text[(j*2)+1]  >95){
            s=1;
            y=coor.y-4;
               } 
           else if(coor.y - text[(j*2)+1]  >92){
            s=1;
            y=coor.y-0.5;
               }
               else if(coor.y - text[(j*2)+1]  >-89){
                  y=text[(j*2)+1];
                }
               else if(coor.y - text[(j*2)+1]  >-88){
                s=1;
                y=coor.y+1;
                   } 
                   else if(coor.y - text[(j*2)+1]  >-85){
                    s=1;
                    y=coor.y+5;
                       }
                   else if(coor.y - text[(j*2)+1]  >-70){
                    s=1;
                    y=coor.y+20;
                       }
       else if(coor.y - text[(j*2)+1]  <-10){
    s=1;
    y=coor.y+100;
       }
    

       if (coor.z +100  >50){
        s=1
        z=coor.z-50;
           }
           else if(coor.z +100  >20){
            s=1;
            z=coor.z-20;
               } 
               else if(coor.z +100  >5){
                s=1;
                z=coor.z-5;
                   }
               else if(coor.z +100  >2){
                s=1;
                z=coor.z-0.5;
                   }
                   else if(coor.z +100  >-1){
                     z=-100;
                    }
                   else if(coor.z +100  >-2){
                    s=1;
                    z=coor.z+1;
                       } 
                       else if(coor.z +100  >-5){
                        s=1;
                        z=coor.z+4;
                           }
                       else if(coor.z +100  >-20){
                        s=1;
                        z=coor.z+20;
                           }
           else if(coor.z +100  <-50){
        s=1;
        z=coor.z+50;
           }

           cube[j].position.set(x,y,z);
         
    }
   
    if (s==1 && (!purge)){
      s=0;
  setTimeout( trigger,60);
} 
           renderer.render(scene,camera);

     
}}

document.getElementById('cont').scrollTo(0,350);

var triggered=false;
document.getElementById("cont").addEventListener("scroll",function(event){
document.getElementById("scrollbtns").style.display="block";
if(document.getElementById("cont").scrollTop < window.innerHeight)   {
   document.getElementById("texth").innerHTML="Html";
}
else if (document.getElementById("cont").scrollTop<=2*window.innerHeight-100){
   document.getElementById("texth").innerHTML="Javascript";
   if(!triggered){
   triggered=true;
   
   rodonut();}
}
else if (document.getElementById("cont").scrollTop<=3*window.innerHeight-200 ){
   document.getElementById("texth").innerHTML="CSS";
}
else if (document.getElementById("cont").scrollTop<=4*window.innerHeight-200 ){
   document.getElementById("texth").innerHTML="AI Ml";
}else if (document.getElementById("cont").scrollTop<=5*window.innerHeight-200 ){
   document.getElementById("texth").innerHTML="More";
}
},false);




var px=9,py=9;
document.getElementById("html").addEventListener("mousemove",function(event){
 let y,x;
 y=parseInt(event.screenY/10);
 x=parseInt(event.screenX/5);
 if ((x-3 >=0 && y-3 >=0) &&(x+1 <htmltext[0].length && y+1 <htmltext.length) ){
 htmltext[py-1][px-1]=">";

 htmltext[py-1][px]=">";
 htmltext[py][px-1]="<";
 htmltext[py-2][px-1]="<";
 htmltext[py-1][px-2]=">";

 htmltext[py][px]=">";
 htmltext[py-2][px-2]="<";
 htmltext[py][px-2]=">";
 htmltext[py-2][px]="<";

 htmltext[py-1][px-3]="<";
 htmltext[py+1][px-1]=">";
 htmltext[py-1][px+1]=">";
 htmltext[py-3][px-1]="<";

 px=x;py=y;

 
 htmltext[y-1][x-1]="a";

 htmltext[y-1][x]="b";
 htmltext[y][x-1]="b";
 htmltext[y-2][x-1]="b";
 htmltext[y-1][x-2]="b";

 htmltext[y][x]="c";
 htmltext[y-2][x-2]="c";
 htmltext[y][x-2]="c";
 htmltext[y-2][x]="c";

 htmltext[y-1][x-3]="c";
 htmltext[y+1][x-1]="c";
 htmltext[y-1][x+1]="c";
 htmltext[y-3][x-1]="c";
rendert();}
},true);
var htmltext=[];
var rows=parseInt(window.innerHeight/10);
var cols=parseInt(window.innerWidth/10);
for(let nr=1;nr<=rows;nr++){
   var row=[];
for (let nc=1;nc<=cols;nc+=1){
row.push("<");
row.push(">");
}
htmltext.push(row);
}
function rendert(){
var printext="";
for(let pr=1; pr<=htmltext.length;pr++){
   for(let pc=1;pc<=htmltext[pr-1].length;pc++){
     if(htmltext[pr-1][pc-1]==="a"){
      printext+="<span class='c1'>a</span>";
     } else  if(htmltext[pr-1][pc-1]==="b"){
      printext+="<span class='c2'>b</span>";
     }
    else if(htmltext[pr-1][pc-1]==="c"){
      printext+="<span class='c3'>c</span>";
     }
     else{
      printext+= htmltext[pr-1][pc-1];}
   }
   printext+="<br>"
   
}
document.getElementById("html").innerHTML=printext;
}


 rendert();

 function rodonut(){
   const pre = document.createElement("pre");
document.getElementById("javascript").appendChild(pre);
   let x=1760,
          z=0,y=0;setInterval
       (()=>{z+=.07,y+=.03;const
      a=[...new Array(x)].map( (a,r
    )=>r % 80 === 79 ?"\n":" "),r=new
   Array(x).fill(0), t= Math.cos(z),e=
  Math.sin(z),n=Math.cos(y), o=Math.sin
(y);for(let s=0;s<6.28; s+=.07){const c
 =Math.cos(s),h=      Math.sin(s);for(let
  s=0;s<6.28;s+=          .02){const v=Math
  .sin(s),M=Math          .cos(s),i=c+2,l=1
   /(v*i*e+h*t+5          ),p=v*i*t-h*e,d=0
   |40+30*l*(M*i*n      -p*o),m=0|12+15*l*
    (M*i*o+p*n),f=0|8*((h*e-v*c*t)*n-v*c*
      e-h*t-M*c*o), y=d+80*m;m<22&&m>=0
        &&d>=0&&d<79&&l>r[y] &&(r[y]=l,
         a[y]= ".,-~:;=!*#$@"[f>0?f:0
         ])}}pre.innerHTML=a.join
            ("")},50); /* JS by 
               @housamz */




 }




 for(let i=0;i<50;i++){
   document.getElementById("all").children[i].style.animationDelay = Math.random()*30+"s";
 }

 
 const parameters = {};
parameters.count = 1000;
parameters.size = 0.01;
parameters.radius = 6;
parameters.branches = 14;
parameters.spin = 1;
parameters.randomness = 0.3;
parameters.randomnessPower = 3;
parameters.insideColor = "#ff4f4f";
parameters.outsideColor = "#554fff";

const generateGalaxy = () => {
   // Destroy old galaxy
   // Geometry
   const geometry = new THREE.BufferGeometry();
   const positions = new Float32Array(parameters.count * 3);
 
   const colors = new Float32Array(parameters.count * 3);
   const colorInside = new THREE.Color(parameters.insideColor);
   const colorOutside = new THREE.Color(parameters.outsideColor);
 
   for (let i = 0; i < parameters.count; i++) {
     const i3 = i * 3;
     const radius = Math.random() * parameters.radius;
     const spinAngle = radius * parameters.spin;
     const branchAngle =
       ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
 
     const randomX =
       Math.pow(Math.random(), parameters.randomnessPower) *
       (Math.random() < 0.5 ? 1 : -1) *
       parameters.randomness *
       radius;
     const randomY =
       Math.pow(Math.random(), parameters.randomnessPower) *
       (Math.random() < 0.5 ? 1 : -1) *
       parameters.randomness *
       radius;
     const randomZ =
       Math.pow(Math.random(), parameters.randomnessPower) *
       (Math.random() < 0.5 ? 1 : -1) *
       parameters.randomness *
       radius;
 
     positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
     positions[i3 + 1] = randomY;
     positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
 
     const mixedColor = colorInside.clone();
     mixedColor.lerp(colorOutside, radius / parameters.radius);
     colors[i3] = mixedColor.r;
     colors[i3 + 1] = mixedColor.g;
     colors[i3 + 2] = mixedColor.b;
   }
   geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
   geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
 
   // Material
   const material = new THREE.PointsMaterial({
     size: parameters.size,
     sizeAttenuation: true,
     depthWrite: false,
     blending: THREE.AdditiveBlending,
     vertexColors: true,
   });
 
   // Points
   const points = new THREE.Points(geometry, material);
   scene.add(points);
 };
 //generateGalaxy();


if ('serviceWorker' in navigator) {
   navigator.serviceWorker
     .register('/home/sw.js')
     .then(() => { console.log('Service Worker Registered'); });
 }
 