let tFiltersBlockWatch=document.querySelectorAll('.t-filters__block_watch');
let tFiltersBlock=document.querySelector('.t-filters__block');





export class filtersHide{
    constructor() {
        document.querySelector('.t-filters').addEventListener('click', (event)=>{
            const t = event.target.closest('.t-filters__block_watch');
            if(t){event.target.parentElement.classList.toggle('t-filters__block_open')}
        });
    }
}