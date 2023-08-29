let des = document.getElementById('des').getContext('2d')

let bg = new Bg(0,0,500,1000, 'assets/bg.png')
let bg2 = new Bg(0,-1000,500,1000, 'assets/bg.png')
let pika = new Pika(0,0,50,50, 'assets/pika1.png')
let agnes = new Agnes(200,500,100,100,'assets/agnes1.png')
let rocket = new Rocket(100,100,100,100,'assets/rocket1.png')
let texto_pontos = new Texto()
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let imgGameOver = new Image();
imgGameOver.onload = function() {
    imgGameOver.width = 500; 
    imgGameOver.height = 700
}
imgGameOver.src = 'assets/gameover.png';
let jogar = 1

// let rocket = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        agnes.dir = - 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        agnes.dir = 5
    }else if(event.key === 's'){
        console.log('pressionado a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('pressionado a tecla "w" ')
    }
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        agnes.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        agnes.dir = 0
    }else if(event.key === 's'){
        console.log('soltou a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('soltou a tecla "w" ')
    }
})

function game_over(){
    if(agnes.vidas <= 0){
        jogar = 4
    }
}

function colisao(){
    if(agnes.colid(rocket)){
        rocket.recomeca()
        agnes.vidas -=1
    }
    if(agnes.colid(pika)){
        pika.recomeca()
        agnes.pts +=1
    } if(agnes.pts>=15){
    jogar = 2
    }if(agnes.pts>=30){
    jogar = 3
    }
}

function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar==1){        
        agnes.desenha_obj()
        rocket.desenha_obj()
        pika.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        val_pts.des_texto(agnes.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(agnes.vidas,120,40, 'white','30px Times')
    }else if(jogar==2){
        agnes.desenha_obj()
        rocket.desenha_obj()
        pika.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        val_pts.des_texto(agnes.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(agnes.vidas,120,40, 'white','30px Times')
    }else if(jogar==3){
        agnes.desenha_obj()
        rocket.desenha_obj()
        pika.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        val_pts.des_texto(agnes.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(agnes.vidas,120,40, 'white','30px Times')
    }else{
    const x = (des.canvas.width - imgGameOver.width) / 2;
    const y = (des.canvas.height - imgGameOver.height) / 2;
    des.drawImage(imgGameOver, x, y, imgGameOver.width, imgGameOver.height);
            }
         }  

         function atualiza(){
            bg.move(2,1000,0)
            bg2.move(2,0,-1000)
            if(jogar==1){
                agnes.move()
                agnes.anim('agnes')
                rocket.move(4)
                rocket.anim('rocket')
                pika.move(4)
                pika.anim('pika')
                colisao()
                game_over()
            }else if(jogar==2){
                agnes.move()
                agnes.anim('agnes')
                rocket.move(6)
                rocket.anim('rocket')
                pika.move(4)
                pika.anim('pika')
                colisao()
                game_over()
            }else if(jogar==3){
                agnes.move()
                agnes.anim('agnes')
                rocket.move(8)
                rocket.anim('rocket')
                pika.move(4)
                pika.anim('pika')
                colisao()
                game_over()
            }
            
        }

function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()
}

setInterval(main,10)