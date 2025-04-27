let tIconLike=document.querySelector('.t-icon__like');
let tFavorites=document.querySelector('.t-favorites');
export class tFavorite{
     constructor(buttonClassOpen,buttonClassClose) {
         document.querySelector(buttonClassOpen)
             .addEventListener( "click", this.buttonClicked );
         document.querySelector(buttonClassClose)
             .addEventListener( "click", this.buttonClickeClose );
     }
    buttonClickeClose (){
        tFavorites.classList.remove('t-favorites_show');
    }
    buttonClicked (){
        tFavorites.classList.add('t-favorites_show');
    }
}
