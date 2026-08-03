export class BackgroundEngine {

    constructor(canvas){

        this.canvas = canvas;

        this.ctx = canvas.getContext("2d");

        this.resize();

        window.addEventListener(
            "resize",
            () => this.resize()
        );

        requestAnimationFrame(
            () => this.animate()
        );

    }

    resize(){

        this.canvas.width =
            window.innerWidth;

        this.canvas.height =
            window.innerHeight;

    }

    animate(){

        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        requestAnimationFrame(
            () => this.animate()
        );

        this.drawGrid();

    }

    drawGrid(){
        const spacing = 80;

        for(let x = 0; x < this.canvas.width; x += spacing){
            this.ctx.beginPath();

            this.ctx.moveTo(x,0);

            this.ctx.lineTo(
            x,
            this.canvas.height
            );

            this.ctx.stroke();
        }

        for(let y = 0; y < this.canvas.height; y += spacing){
            this.ctx.beginPath();

            this.ctx.moveTo(0,y);

            this.ctx.lineTo(
            this.canvas.width,
            y
            );

            this.ctx.stroke();
        }

        this.ctx.strokeStyle = "rgba(37,99,235,.1)";
        this.ctx.lineWidth = 1;
    }

}