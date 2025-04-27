let tFilterMini=document.querySelector('.t-goods-t-filter__mini');
let tFilterBig=document.querySelector('.t-goods-t-filter__big');
let tGoodsWrap =document.querySelector('.t-goods-wrap');
let tGoodsColonkaGorizont=document.querySelector('.t-goods-colonka-gorizont');

let tGoodsTFilterMini=document.querySelector('.t-goods-t-filter__mini');
let tGoodsTFilterBig=document.querySelector('.t-goods-t-filter__big');





export class tFiltersMini{
    constructor() {
        document.querySelector('.t-goods-t-filter__mini')
            .addEventListener( "click", this.buttontGoodsWrap );
        document.querySelector('.t-goods-t-filter__big')
            .addEventListener( "click", this.buttontGoodsWrapBig );
    }
    buttontGoodsWrapBig (){
        tGoodsWrap.classList.remove('t-goods-colonka-gorizont');
        tGoodsTFilterMini.classList.remove('colonka_hide');
        tGoodsTFilterBig.classList.add('colonka_hide');
    }
    buttontGoodsWrap (){
        tGoodsWrap.classList.add('t-goods-colonka-gorizont');
        tGoodsTFilterMini.classList.add('colonka_hide');
        tGoodsTFilterBig.classList.remove('colonka_hide');
    }
}