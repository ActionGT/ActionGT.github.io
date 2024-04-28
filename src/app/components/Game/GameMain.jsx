"use client"
import { useEffect, useRef } from 'react'
import * as Phaser from 'phaser';
// import { Canvas } from "@react-three/fiber";
//import Background from './Background';



const gameState = {
    score:0,
    lastFired:0
}



class Bullet extends Phaser.GameObjects.Image {
    constructor(scene) {
        super(scene, 0, 0, 'bullet');

        //this.speed = Phaser.Math.GetSpeed(400, 1);
        this.speed = Phaser.Math.GetSpeed(200, 1);
    }

    fire(x, y) {
        this.setPosition(x, y - 50);

        this.setActive(true);
        this.setVisible(true);
    }

    update(time, delta) {
        this.y -= this.speed * delta;

        if (this.y < -50) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}



function preload() {
    // this.load.image('bg', 'img/bg3.png');
    // this.load.image('background1', 'img/space-transparent2.png');
    // this.load.image('background2', 'img/space-transparent2.png');
    this.load.image('player', 'img/ship.png');
    // this.load.image('css', 'icons/pixels/css_pixel_logo.png');
    // this.load.image('sql', 'icons/pixels/sql_plus_pixel_logo.png');
    // this.load.image('github', 'icons/pixels/github_pixel_logo.png');
    // this.load.image('html', 'icons/pixels/html_pixel_logo.png');
    // this.load.image('java', 'icons/pixels/java_pixel_logo.png');

    
   
    this.load.image('css', 'icons/css.png');
    this.load.image('react', 'icons/reactjs.png');
    this.load.image('github', 'icons/github.png');
    this.load.image('html', 'icons/html.png');
    this.load.image('tailwind', 'icons/tailwind.png');
    this.load.image('JavaScript', 'icons/javascript.png');
    this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png');
    this.load.image('bullet', 'img/bullet.png');
    //this.load.spritesheet('explosion','img/Explosion.jpg',{ frameWidth: 64, frameHeight: 64, endFrame: 23})
    //this.load.spritesheet('codey', 'https://content.codecademy.com/courses/learn-phaser/Cave%20Crisis/codey_sprite.png', { frameWidth: 72, frameHeight: 90 });
	this.load.spritesheet('boom', 'sprites/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
    
    
  

    // ...
}



function create() {


  
     const platforms = this.physics.add.staticGroup();
   
    //  platforms.create(950, 862, 'platform').setScale(4.3,1).refreshBody();

    //  this.background = new Background(this, 'background1', 'background2');


    gameState.player = this.physics.add.sprite(255, 510, 'player').setScale(1);
   
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.player.setCollideWorldBounds(true);
    this.physics.add.collider(gameState.player,platforms);

    const logos = this.physics.add.group();
    const logoGen = () => {

       const xCoord = Math.random() * 1850;
       //const logoGroup = ['css','sql','github','html','java'];

         const logoGroup = ['css','react','github','html','tailwind','JavaScript'];
       const logo = logos.create(xCoord, 10, logoGroup[Math.floor(Math.random()*logoGroup.length)]);
       logo.setFrame(0);

    
    if(logo.texture.key === 'css'){
        logo.setScale(0.3);}
        if(logo.texture.key === 'react'){
            logo.setScale(0.7);}
            if(logo.texture.key === 'github'){
                logo.setScale(0.15);}
                if(logo.texture.key === 'html'){
                    logo.setScale(0.3);}
                    if(logo.texture.key === 'tailwind'){
                        logo.setScale(0.3);}
                        if(logo.texture.key === 'JavaScript'){
                            logo.setScale(0.3);
                        }
       

      }

      const logoGenLoop = this.time.addEvent({
        delay: 1200,
        callback: logoGen,
        callbackScope: this,
        loop: true,
        
        
      })

      gameState.scoreText = this.add.text(195, 830, 'Score: 0', { fontSize: '35px', fill: '#0a0df0' });
      

      this.physics.add.collider(logos, platforms, function(met){
        met.destroy();
        
        gameState.score += 10;
        gameState.scoreText.setText(`Score: ${gameState.score}`);
      });
      

      this.bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: 1,
        runChildUpdate: true,
    });



    var explodeAnimation = {
        key: 'explode',
        frames: 'boom',
        hideOnComplete: true
    };

    this.anims.create(explodeAnimation);

 
    
    //this.anims.pauseAll();

    

      this.physics.add.collider(gameState.player,logos,()=>{
        gameState.player.play('explode');
        logoGenLoop.destroy()
        
        this.physics.pause()
        this.add.text(800, 400,'Game Over',{fontSize:'65px',fill:'#0a0df0'})
        this.add.text(810, 500, 'Click to Restart', { fontSize: '35px', fill: '#0a0df0' });
        this.input.on('pointerup',()=>{
          gameState.score = 0;
          this.scene.restart();
        });
      });

        this.physics.add.collider(this.bullets,logos,(bullet,met)=>{
            //met.play('explode');
           
            bullet.destroy();
            met.play('explode');
            met.setFrame(0);
            met.setScale(1);
          
            //gameState.techText = this.add.text(gameState.met.x, gameState.met.y, 'css', { fontSize: '35px', fill: '#0a0df0' });

            gameState.techText = this.add.text(495, 430, 'css', { fontSize: '35px', fill: '#0a0df0' });
            //gameState.techText.setText(`Css `);
            met.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                met.destroy(); // Remove the meteor after the animation is complete
            });
            gameState.score += 10;
            gameState.scoreText.setText(`Score: ${gameState.score}`);
        });

        
      this.physics.add.collider(logos, platforms, function(met){
        met.destroy();
        gameState.score += 10;
        gameState.scoreText.setText(`Score: ${gameState.score}`);
      });



        
    }

function update(time) {
  
//     alert("\n gameState.lastFired: " + gameState.lastFired);
    //alert('Time: ' + time);

    var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // this.background.update();


    if (gameState.cursors.right.isDown) {
        //gameState.player.x += 8;
        gameState.player.setVelocityX(160); 
        //gameState.player.anims.play('explode', true);
    }else if (gameState.cursors.left.isDown) {
        //gameState.player.x += -8
        gameState.player.setVelocityX(-160);
    }
    if (gameState.cursors.up.isDown) {
        gameState.player.y += -8
    }

    if (gameState.cursors.down.isDown) {
        gameState.player.y += 8
    }
    
    if (spaceBar.isDown && time > gameState.lastFired) {
       
        
        const bullet = this.bullets.get(); 

        if (bullet) {
            bullet.fire(gameState.player.x, gameState.player.y);

            this.lastFired = time + 50;
        }

        

}
}
export default function Game() {
    const gameRef = useRef(null)
  
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 900,
            height: 600,
            backgroundColor: "black",
            scale: {
                mode: Phaser.Scale.FIT, // Scale to fit the screen
                autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game on the screen
              
            },
            physics: { 
                default: 'arcade',
                arcade: {
                    gravity: { y: 10 },
                    enableBody: true,
                    debug: false
                }
            },
            scene: {
                preload,
                create,
                update
            }
        }

        const game = new Phaser.Game(config)

        // Attach the game canvas to the ref element
        gameRef.current.appendChild(game.canvas)

        return () => {
            // Clean up the game when the component unmounts
            game.destroy(true)
        }
    }, [])

    return (
        
        <div className=' w-full h-full' ref={gameRef} />
    )
}



