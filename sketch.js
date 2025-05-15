let agents = [];
let phrases = [
    "Hello World",
    "JavaScript",
    "p5.js",
    "Creative Coding",
    "Generative Art",
    "const x = 0;",
    "for (let i = 0; i < 10; i++)",
    "function name() { }",
    "if (condition) { }",
    "return value;",
    "class Agent { }",
    "this.position = createVector();",
    "background(255);",
    "translate(x, y);",
    "rotate(angle);"
];

const block = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pixelify Sans", sans-serif;
    background-image: url(./assets/cloud.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: padding-box;  
    background-clip: padding-box;    
  }

  .level-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .level {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 100px;
    padding-left: 100px;
  }

  .level .top-text {
    margin-top: 10px;
  }
  
  .level .pointer-container {
    margin-top: 20px;
    opacity: 0;
  }

  .level-container {
    position: relative;
    width: 240px;
    height: 240px;
    display: inline-block;
    cursor: pointer;
  }

  .level-container img {
    display: block;
    width: 100%;
    height: auto;
  }

  .level-container #broken-sprite {
    position: absolute;
    top: 33;
    left: 65;
    width: 50%;
    height: 70%;
  }

  .level-container .overlay {
    position: absolute;
    top: -24;
    left: -28;
    width: 120%;
    height: 120%;
    opacity: 0;
    transition: 0.1s;
  }

  .level-container .subbase-container {
    position: absolute;
    top: -30;
    left: -30;
    width: 40%;
    height: 40%;
  }

  .subbase-container .subbase-content {
    position: absolute;
    top: 15;
    left: 20;
    width: 55;
    height: auto;
  }

  .level-container .content {
    position: absolute;
    top: 25;
    left: 40;
    width: 70%;
    height: 70%;
  }

  #boss-container .subbase-content {
    top: 18;
    left: 23;
    width: 50;
    height: auto;
  }

  .level-container:hover .base {
    animation: jump-shaking 0.83s infinite;
  }

  .level-container:hover .subbase-container {
    animation: jump-shaking 0.83s infinite;
  }
  

  .level-container:hover .overlay {
    animation: jump-shaking 0.83s infinite;
    opacity: 1;                
  }

  .level-container:hover .content {
    animation: jump-shaking 0.83s infinite;
  }

  .level-container:hover ~ .pointer-container {
    opacity: 1;
  }
  
  #boss-container:hover .base {
    animation: skew-x-shaking 0.83s infinite;
  }

  #boss-container:hover .subbase-container {
    animation: skew-x-shaking 0.83s infinite;
  }
  

  #boss-container:hover .overlay {
    animation: skew-x-shaking 0.83s infinite;
    opacity: 1;                
  }

  #boss-container:hover .content {
    animation: skew-x-shaking 0.83s infinite;
  }

  #boss-container:hover ~ .pointer-container {
    animation: skew-x-shaking 0.83s infinite;
    opacity: 1;
  }

  *:has(#pikachu-container:hover) + .dialogue-container .dialogue {
    --text: "Ahhh... Pikachu... Although not my personal favorite pokemon, I can't help but to choose for my ASCII mosaic project! ";
  }

  *:has(#boss-container:hover) + .dialogue-container .dialogue {
    --text: "WArnInG... dANgeRouS enEMYy aHEaD, ANd IT GEts a BIt... 'PERSONAL'";
  }

  *:has(#stillife-container:hover) + .dialogue-container .dialogue {
    --text: "I used to be a horrible artist. Then I took a CSS lesson in the knee...";
  }


  .dialogue-container {
    position: relative;
    width: 805px;
    height: 301px;
    padding-top: 50px;
  }

  .dialogue-container .title {
    position: absolute;
    font-size: 40px;
    color: #6b4b5b;
    top: 85;
    left: 295;
  }

  .dialogue-container img {
    width: inherit;
    height: inherit;
  }

  .dialogue-container .dialogue {
    width: 430px;
    position: absolute;
    font-size: 20px;
    top: 165;
    left: 310;
    color: #6b4b5b;
    --text: "Welcome to my portfolio! Feel free to explore around."
  }

  .dialogue-container .dialogue::before {
    content: var(--text);
  }
  
  
  @keyframes jump-shaking {
    0% { transform: translateX(0) }
    25% { transform: translateY(-9px) }
    35% { transform: translateY(-9px) rotate(5deg) }
    55% { transform: translateY(-9px) rotate(-5deg) }
    65% { transform: translateY(-9px) rotate(5deg) }
    75% { transform: translateY(-9px) rotate(-5deg) }
    100% { transform: translateY(0) rotate(0) }
}

@keyframes skew-x-shaking {
    0% { transform: skewX(-15deg); }
    5% { transform: skewX(15deg); }
    10% { transform: skewX(-15deg); }
    15% { transform: skewX(15deg); }
    20% { transform: skewX(0deg); }
    100% { transform: skewX(0deg); }
}

#stillife-container .subbase-content {
  position: absolute;
  top: 15;
  left: 28;
  width: 40;
  height: auto;
}

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    @keyframes jump-shaking {
        0% { transform: translateX(0) }
        25% { transform: translateY(-9px) }
        35% { transform: translateY(-9px) rotate(17deg) }
        55% { transform: translateY(-9px) rotate(-17deg) }
        65% { transform: translateY(-9px) rotate(17deg) }
        75% { transform: translateY(-9px) rotate(-17deg) }
        100% { transform: translateY(0) rotate(0) }
    }

    @keyframes tilt-n-move-shaking {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(5px, 5px) rotate(5deg); }
        50% { transform: translate(0, 0) rotate(0eg); }
        75% { transform: translate(-5px, 5px) rotate(-5deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
    }

    @keyframes vertical-shaking {
        0% { transform: translateY(0) }
        25% { transform: translateY(5px) }
        50% { transform: translateY(-5px) }
        75% { transform: translateY(5px) }
        100% { transform: translateY(0) }
    }
    
    body {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "Pixelify Sans", sans-serif;
    }
    
    .center-row {
      display: flex;
      flex-direction: row;
      justify-content: space-around; 
      align-items: center;
      width: 90vw; 
      max-width: 1200px;
    }
    

    .center-row img {
      width: 10vw;
      height: auto;
      max-height: 30vh;
      margin: 0 5px;
    }


    #sus_pokeball:hover {
        animation: tilt-n-move-shaking 0.15s infinite;
    }

    .center-row img:hover {
        animation: jump-shaking 0.83s infinite;
    }

    h1 {
        margin-top: 5vh;
        font-weight: 500;
        font-size: calc(30px + 1vw);
    }

    #hidden-message {
        margin-bottom: 5vh;
        font-weight: 400;
        display: none;
    }

    .selector_menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        align-items: center;
        width: 40vw;
        height: auto;
        max-width: 600px;
    }

    .selector_menu_item {
        display: flex;
        flex-direction: row;
        max-height: 5vh;
        margin-bottom: 3vh;
    }


    .selector_menu_item img {
        max-width: .5vw;
        max-height: 2vh;
        margin-right: .5vw;
        margin-top: 1vh;
        display: none;
    }

    .selector_menu_item h5 {
        font-weight: 300;
        font-size: 30;
    }

    .selector_menu_item #z-a {
        background: linear-gradient(#4bb77d, #3a3a3b);
        color: transparent;
        background-clip: text;
    }

    .selector_menu_item #arceus {
        background: linear-gradient(#fad709, #3a3a3b);
        color: transparent;
        background-clip: text;
    }

    .selector_menu_item:hover > img {
        display: block;
    }

    .pokedex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center;
        width: 60vw; 
        max-width: 800px;
        margin-top: 3vh;
    }

    .pokedex-row img {
        display: none;
        max-width: 8vw;
        max-height: 8vh;
    }

    .pokedex-row img:hover {
        animation: vertical-shaking 0.7s infinite;
    }


    .modal {
        display: none;             
        position: fixed;          
        z-index: 1;                
        left: 0;
        top: 0;
        width: 100%;              
        height: 100%;              
        overflow: auto;           
        background-color: rgba(0,0,0,0.5); 
      }
      
      .modal-content {
        position: absolute;         
        top: 50%;                  
        left: 50%;  
        transform: translate(-50%, -50%);               
        border-radius: 10px;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
        padding: 20px;
        align-items: center;
        text-align: center;
        transform-style: preserve-3d;
        transition: 0.25s ease-in;
        max-width: 210px;
        min-width: 210px;
        min-height: 330px;
        max-height: 330px;
      }

      .modal-content .pokemon-look {
        max-width: 150px;
        min-width: 150px;
        min-height: 150px;
        max-height: 150px;
      }

      .type-row {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around; 
        align-items: center;
        max-width: 170px;
        min-width: 170px;
        min-height: 80px;
        max-height: 80px;
      }

      .type-row #type_1 {
        display: none;
        width: 60px;
        height: 60px;
        transition: all 0.3s ease;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        background-color: black;
      }

      .type-row #type_2 {
        display: none;
        width: 60px;
        height: 60px;
        transition: all 0.3s ease;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        background-color: black;
      }

      .type-row:hover > img {
        transform: scale(1.2);
      }

      #sus_pokeball.after-hover:hover {
        animation: jump-shaking 0.83s infinite;
      }
`;
const lines = block
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '' && line !== '}');

phrases.push(...lines);

let hoverColor = '#569CD6';

const mouseInfluenceRadius = 150;
const globalSpeedMultiplier = 2.5;
const backgroundColor = '#1E1E1E';

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    background(backgroundColor);
    textAlign(LEFT, CENTER);
    updateMouseIndicator();
    updateColorDisplay();
}

function updateMouseIndicator() {
    let indicator = document.querySelector('.mouse-indicator');
    if (indicator) {
        indicator.style.left = mouseX + 'px';
        indicator.style.top = mouseY + 'px';
        indicator.style.borderColor = hoverColor;
        indicator.style.borderWidth = '3px';
        indicator.style.boxShadow = `0 0 20px ${hoverColor}66`;
    }
}

function draw() {
    updateMouseIndicator();
    
    fill(red(backgroundColor), green(backgroundColor), blue(backgroundColor), 3); 
    noStroke();
    rect(0, 0, width, height);
    
    for (let i = agents.length - 1; i >= 0; i--) {
        agents[i].update();
        if (agents[i].isDead()) {
            agents.splice(i, 1);
        }
    }
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        agents.push(new Agent(mouseX, mouseY));
    }
}

function keyPressed() {
    if (key === ' ') {
        clearCanvas();
    }
    if (key === 's' || key === 'S') {
        saveImage();
    }
}

function selectColor(colorCode) {
    hoverColor = colorCode;
    updateColorSelection();
}

function updateColorSelection() {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.classList.remove('selected');
    });
    
    const selectedSwatch = document.querySelector(`.color-swatch[style*="${hoverColor}"]`);
    if (selectedSwatch) {
        selectedSwatch.classList.add('selected');
    }
    
    updateColorDisplay();
}

function updateColorDisplay() {
    const colorDisplay = document.getElementById('current-color');
    colorDisplay.style.background = hoverColor;
    colorDisplay.style.animation = 'none';
}

function clearCanvas() {
    background(backgroundColor);
    agents = [];
}

function saveImage() {
    save('generative-text-lines-' + year() + month() + day() + hour() + minute() + second() + '.png');
}

class Agent {
    constructor(x, y) {
        this.position = createVector(x || random(width), y || random(height));
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.acceleration = createVector(0, 0);
        
        this.baseMaxSpeed = 2 * globalSpeedMultiplier;
        this.maxSpeed = this.baseMaxSpeed;
        this.maxForce = 0.08;
        this.noiseOffset = random(1000);
        this.life = 0;
        this.maxLife = random(300, 600);
        this.repulsionRadius = mouseInfluenceRadius;
        
        this.fontSize = random(8, 35);
        this.baseColor = color(random(100, 200), random(100, 200), random(100, 200));
        this.textColor = this.baseColor;
        this.currentPhrase = random(phrases);
        this.charIndex = 0;
        this.lastPosition = this.position.copy();
        this.stepSize = 0;
        this.angleDistortion = random(-0.2, 0.2);
        
        this.targetSize = this.fontSize;
        this.currentSize = this.fontSize;
        
        textFont('monospace');
        textSize(this.fontSize);
    }
    
    update() {
        this.life++;
        
        this.applyForces();
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        if (this.position.x < 0) this.position.x = width;
        if (this.position.x > width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = height;
        if (this.position.y > height) this.position.y = 0;

        this.updateMouseProximityEffects();
        
        this.drawText();
    }
    
    updateMouseProximityEffects() {
        let mousePos = createVector(mouseX, mouseY);
        let distance = p5.Vector.dist(this.position, mousePos);
        
        if (distance < this.repulsionRadius) {
            let proximity = 1 - (distance / this.repulsionRadius);
            
            this.targetSize = this.fontSize * (1 + proximity * 0.8);
            
            this.textColor = lerpColor(this.baseColor, color(hoverColor), proximity);
        } else {
            this.targetSize = this.fontSize;
            this.textColor = this.baseColor;
        }

        this.currentSize = lerp(this.currentSize, this.targetSize, 0.1);
    }
    
    applyForces() {
        let noiseForce = createVector(
            cos(noise(this.noiseOffset, this.life * 0.008) * TWO_PI),
            sin(noise(this.noiseOffset + 100, this.life * 0.008) * TWO_PI)
        );
        noiseForce.mult(0.3);
        this.acceleration.add(noiseForce);
        
        let mousePos = createVector(mouseX, mouseY);
        let distance = p5.Vector.dist(this.position, mousePos);
        
        if (distance < this.repulsionRadius) {
            let attraction = p5.Vector.sub(mousePos, this.position);
            attraction.normalize();
            attraction.mult(this.maxForce * 2 * (1 - distance / this.repulsionRadius));
            this.acceleration.add(attraction);
        }
    }
    
    drawText() {
        let d = dist(this.position.x, this.position.y, this.lastPosition.x, this.lastPosition.y);
        
        let currentChar = this.currentPhrase.charAt(this.charIndex % this.currentPhrase.length);
        
        textSize(this.currentSize);
        textFont('monospace');
        
        this.stepSize = textWidth(currentChar);
        
        if (d > this.stepSize) {
            let angle = atan2(this.position.y - this.lastPosition.y, this.position.x - this.lastPosition.x);
            
            push();
            
            let alpha = map(this.life, 0, this.maxLife, 255, 0);
            let colorWithAlpha = color(this.textColor);
            colorWithAlpha.setAlpha(alpha);
            fill(colorWithAlpha);
            noStroke();
            
            translate(this.lastPosition.x, this.lastPosition.y);
            rotate(angle + this.angleDistortion);
            
            text(currentChar, 0, 0);
            pop();

            this.charIndex++;
            
            if (this.charIndex >= this.currentPhrase.length) {
                this.charIndex = 0;
                if (random() < 0.3) {
                    this.currentPhrase = random(phrases);
                }
            }

            this.lastPosition = this.position.copy();
        }
    }
    
    isDead() {
        return this.life > this.maxLife;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

selectColor('#569CD6');