let img
let cnv
let button
let output
let cx,cy


function setup() {
cnv =createCanvas(800, 30);
cnv.parent("colorbox")
 //cx = floor((windowWidth - cnv.width) / 2);
  // cy = floor((windowHeight - cnv.height) / 2);
 // cnv.position(cx, cy);
  getStreet()
  background(128)
  textSize(30);
  textWrap(WORD);

  // Display the text.
  text('Wait for image',0, 0, 800);
  button = createButton("Click for new image, (change of color shows you have clicked)")
  button.parent("buttonholder")
  button.mousePressed(doit)
  button.size(300,300)
  
  //button.position(cx,cy+cnv.height+30)
  button.style('font-size', '30px');
  //output.position(button.x,button.y+60)
}

 async function doit(){
    background(random(255),random(255),random(255))
    await getStreet()
   

 }

async function getStreet(){
  /* 
  if (img) {
    img.remove();
    //uncomment to delete old image;
  }
   */
  let loc = random([
    "in a house",
    "in a field",
    "floating in space",
    "on an asteroid",
    "in a brick building",
    "in a creepy office building",
    "in a forest",
    "on a beach",
    "in a mountain cabin",
    "in a desert",
    "in an underwater city",
    "in a sky castle",
    "on a suburban street",
    "in an abandoned factory",
    "in a hidden cave",
    "in an urban alleyway",
    "in an enchanted garden",
    "in a ruined temple",
    "in a modern skyscraper",
    "in an ancient pyramid"
]);

 let door = random([
    "Old Wooden Door",
    "Shiny Steel Door",
    "Rusted Door",
    "Large Stone Door",
    "Glass Sliding Door",
    "Modern Fiberglass Door",
    "Carved Oak Door",
    "Antique Mahogany Door",
    "Reclaimed Barn Door",
    "French Double Door",
    "Iron Wrought Door",
    "Stained Glass Door",
    "Reinforced Security Door",
    "Rustic Cottage Door",
    "Industrial Metal Door",
    "Japanese Shoji Door",
    "Medieval Castle Door",
    "Minimalist White Door",
    "Vintage Panel Door",
    "Heavy Bronze Door",
    "Flesh Door",
    "Plant Door",
    "Glowing Crystal Door",
    "Waterfall Door",
    "Fire Door",
    "Invisible Door",
    "Cloud Door",
    "Mirror Door",
    "Ice Door",
    "Electric Door"
]
);
  img = await createImg("https://image.pollinations.ai/prompt/a"+door+loc+"?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")
 //img.position(cx,cy)
 img.parent("sketch-holder")
 
 //cnv.image(img,0,0)
   
}