let data=[];
let states=[];
let w;
let btn;
let h;
let turn=0;
let radio;
function setup() {
  let cnv=createCanvas(windowWidth,windowHeight/1.3);
  cnv.position(0,windowHeight/2-height/2)
  rectMode(CENTER);
  slider=createSlider(2,150,10);
  slider.changed(reset);
  //btn=createButton("Switch");
  radio=createRadio();
  radio.changed(change);
  let r1=radio.option("Bubble Sort",1);
  let r2=radio.option("Merge Sort",2);
  let r3=radio.option("Quick Sort",3);
  radio.style("color","green");
  h=createElement("h1","Sorting Visualization");
  h.style("text-align","center");
  h.style("color","white");
  radio.position(windowWidth/2-130,windowHeight-35);

  slider.position(windowWidth/2-60,windowHeight-65)
  for(let i=0;i<slider.value();i++)
  {
    data.push(floor(random(1,height)));
    states[i]=0;
  }
  w=width/data.length;
  
}
function change()
{    data=[];
   for(let i=0;i<slider.value();i++)
  {
    data.push(floor(random(1,height)));
    states[i]=0;
  }
    if(radio.value()==1)
    {
       bubbleSort(); 
    }
 else if(radio.value()==3)
 {
   qs(data,0,data.length-1)
 }
 else if(radio.value()==2)
 {
   mergeSort(0,data.length-1);
 }
 turn=(turn+1)%3;
}
function draw() {
  background(0);
  for(let i=0;i<data.length;i++)
  {
    if(!states[i])
      fill(255);
    else if(states[i]==1)
      fill(255,0,0);
    else if(states[i]==2)
      fill(216, 247, 84);
    rect(w/2+i*w,height-data[i]/2,w,data[i]);
  }
}
function sleep(ms)
{
  return new Promise(resolve=>setTimeout(resolve,ms));
}
function reset()
{
  noLoop();
  data=[];
  for(let i=0;i<slider.value();i++)
  {
    data.push(floor(random(1,height)));
    states[i]=0;
  }
  print(data.length);
    w=width/data.length;
  loop();
}