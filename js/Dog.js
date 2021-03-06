function Dog(owner) {
    this.owner = owner,
        this.x = 1 * 24,
        this.y = 16 * 24,
        this.col = 1,
        this.row = 1,
        this.speed = 1,
        this.step = 0,
        this.direction = "3",
        this.isRun = false,
        this.f = 0;
    this.bind();
    this.little = true;
    this.true=true;
}
//dog 和视野渲染
Dog.prototype.render = function () {
    this.col = Math.round(this.x / 24);
    this.row = Math.round(this.y / 24);
   
    this.owner.ctx.fillStyle ="rgba(255,255,255,.3)";
    if (this.little) {
        this.owner.ctx.fillRect(this.x - 40, this.y - 40, 120, 120)
    } else {
        this.owner.ctx.fillRect(this.x - 80, this.y - 80, 240, 240)
    }
    if(this.true){
        this.owner.ctx.drawImage(this.owner.R["dog.gif"], this.step * 64, this.direction * 64, 64, 64, this.x, this.y, 48, 48)

    }else{
        this.owner.ctx.drawImage(this.owner.R["2.png"], 0, 64, 128, 128, this.x,this.y, 128, 128)
            this.owner.logCtx.font='30px sans-serif';
            this.owner.logCtx.fillText("游戏结束",0,500,300)
    }
    
}
//dog移动
Dog.prototype.update = function () {
    if (this.isRun) {
        this.go()
        //移动，不超过界限
        if (this.direction == "1") {
            this.check()
            if (this.x > 0) {
                this.x -= this.speed

            } else {
                this.x = 0
            }
        } else if (this.direction == "2") {
            this.check()
            if (this.x < 696) {
                this.x += this.speed
            } else {
                this.x = 696
            }
        } else if (this.direction == "3") {
            this.check()
            if (this.y > 0) {
                this.y -= this.speed
            } else {
                this.y = 0
            }

        } else if (this.direction == "0") {
            this.check()
            if (this.y < 696) {
                this.y += this.speed
            } else {
                this.y = 696
            }

        }
    }
}
//键盘事件
Dog.prototype.bind = function () {
    var self = this;
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                self.isRun = true;
                self.direction = "1"
                break;
            case 38:
                self.isRun = true;
                self.direction = "3"
                break;
            case 39:
                self.isRun = true;
                self.direction = "2"
                break;
            case 40:
                self.isRun = true;
                self.direction = "0"
                break;
        }
    }
    document.onkeyup = function () {
        self.isRun = false;
    }
}
//行走更换精灵图位置
Dog.prototype.go = function () {
    if (this.f % 3 == 0) {
        this.step += 1;
    }
        if (this.step == 3) {
            this.step = 0
        }
    

}
//位置修正
Dog.prototype.check = function () {
    if (this.direction == "1" || this.direction == "2") {
        this.y = Math.round(this.y / 24) * 24;
    }
    if (this.direction == "0" || this.direction == "3") {
        this.x = Math.round(this.x / 24) * 24;
    }
}