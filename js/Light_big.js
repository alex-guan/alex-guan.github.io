function Light_big(owner){
    this.owner=owner;
    this.exist=false;
    this.des=false
}
Light_big.prototype.render=function(){
    if(this.exist){
        this.owner.ctx.drawImage(this.owner.R["light_big.png"],675,30,40,40);
    }
    if(this.des){
        this.owner.logCtx.fillText("恭喜获得光明书",0,390,300)
        this.owner.logCtx.fillText("出口已打开",0,420,300)
        this.owner.ctx.drawImage(this.owner.R["1.png"],668,24,52,46);
    }
   
}
