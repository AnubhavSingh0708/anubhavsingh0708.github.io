import './style.css';
import * as THREE from 'three';
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0,350 );
camera.lookAt( 0, 0, 0);
//const controls = new OrbitControls( camera, renderer.domElement );
//controls.update();
scene.add(camera);
renderer.render( scene, camera );
function addStar() {
  const geometry = new THREE.BoxGeometry(1,1.2,1 );
  const material = new THREE.LineBasicMaterial( {
   
    linewidth: 0.01,
    linecap: 'round', 
    linejoin:  'round' 
  } );
  const mesh = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
  .fill()
    .map(() => THREE.MathUtils.randFloatSpread(250));

  mesh.position.set(x, y, z);
  scene.add(mesh);
}
Array(3000).fill().forEach(addStar);
const bgTexture = new THREE.TextureLoader().load('bg.png');
scene.background = bgTexture;

var lastScrollTop = 0;
var scrolldeg=0;
function moveCamera() {
const t = document.body.getBoundingClientRect().top;
 var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){
     scrolldeg-=(t/1000);
  } else {
     scrolldeg+=(t/1000);
  }
  lastScrollTop = st <= 0 ? 0 : st;
  
  
  if (scrolldeg>=90){scrolldeg-=90;}else if(scrolldeg<0){
scrolldeg+=90
  }


  var scrolldeg2=scrolldeg*(Math.PI / 180);
  camera.position.z = Math.sin(scrolldeg2) * 250;
  camera.position.y = Math.cos(scrolldeg2) * 250;
  camera.lookAt(0,0,0);
}

document.body.onscroll = moveCamera;
moveCamera();

function animate(){
  requestAnimationFrame(animate);
//controls.update();

  renderer.render(scene, camera);
}
animate();
function prank(){
  Array(60000).fill().forEach(addStar);
  window.setTimeout(() => {
   location.assign("bsod.html");
   }, 3000);
  
  rotate();
}
function rotate(){
  document.body.style.transform = "rotate(45deg)";
  setTimeout(function(){ rotate2()}, 100);
}
function rotate2(){
  document.body.style.transform = "rotate(315deg)";
  setTimeout(function(){ rotate3()}, 100);
}
function rotate3(){
  document.body.style.transform = "rotate(45deg)";
  setTimeout(function(){ rotate4()}, 100);
}
function rotate4(){
  document.body.style.transform = "rotate(315deg)";
  setTimeout(function(){ rotate()}, 100);
}
const observer =new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if (entry.isIntersecting){
  entry.target.classList.add('show');
}else{
  entry.target.classList.remove('show');
}
});
});
const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));
document.getElementById("scroll").addEventListener("scroll", prank);
