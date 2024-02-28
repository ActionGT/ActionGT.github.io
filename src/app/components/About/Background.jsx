export default class Background {
    constructor(scene, backgroundImage1, backgroundImage2) {
        this.scene = scene;
        this.backgrounds = [];
        // Load your background images here
    
        this.backgrounds.push(this.scene.add.image(0, 0, 'background1').setOrigin(0));
        this.backgrounds.push(this.scene.add.image(0, -this.backgrounds[0].height, 'background2').setOrigin(0));

        
        
        
    }

    

    update() {
        const scrollSpeed = 1; // Adjust the scrolling speed as needed
        this.backgrounds.forEach((background) => {
            background.y += scrollSpeed;
            if (background.y > this.scene.sys.game.config.height) {
                background.y = -background.height;
            }
        });

        
    }
}
