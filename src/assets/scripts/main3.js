import $ from 'jquery';
import jQuery from 'jquery';
(function($) {
    var widthMobileMenu=0;
    $( window ).on( "resize", function() {
        widthMobileMenu=$( window ).width();
        if(widthMobileMenu >= 768){
            $('body').removeClass('t-body-overflow_hidden');
            $('.t-menu-mobile').removeClass('t-menu-mobile_show');
        }
    } );
    $('.t-banner .t-banner-wrap .t-header .t-header-wrap .t-menu-mobile .t-menu-mobile-wrap .t-mobile-top ').on('click','.t-mobile-top__logo .close_menu',function (){
        $('.t-menu-mobile').removeClass('t-menu-mobile_show');
        $('body').removeClass('t-body-overflow_hidden');
    })
    $('.show_mobile_menu').on('click',function (){
        $('.t-menu-mobile').addClass('t-menu-mobile_show');
        $('body').addClass('t-body-overflow_hidden');
    })



    $('.t-logo').on('click',function (){
        $('.t-modal').addClass('t-modal_show');
        $('body').addClass('t-body-overflow_hidden');
    })

    $('.t-modal-close').on('click',function (){
        $('.t-modal').removeClass('t-modal_show');
        $('body').removeClass('t-body-overflow_hidden');
    })

})(jQuery);

const formSelectPhone=document.querySelector('.form-select-phone');
const formSelectEmail=document.querySelector('.form-select-email');

const formRegisterInputEmail=document.querySelector('.form-register__input-email');
const formRegisterInputTel=document.querySelector('.form-register__input-tel');

const formRegisterInputCode=document.querySelector('.form-register__input-code');
const formRegisterSubmit=document.querySelector('.form-register__submit');
const formRegisterBtn=document.querySelector('.form-register-btn');

const tRegisterWrap=document.querySelector('.t-register-wrap');

formRegisterSubmit.addEventListener('click', function(event) {
    tRegisterWrap.classList.add('t-register-wrap_big-height');
    formRegisterInputCode.classList.remove('form-register__input-code_hide');
    formRegisterBtn.innerHTML = 'ВХОД';
    setTimeout(() => formRegisterBtn.classList.add('form-register-btn-enter'), 1000);

})




const tProfile=document.querySelector('.t-profile');
const page=document.querySelector('.page');
const tRegister=document.querySelector('.t-register');

const tProfileLogoClose =document.querySelector('.t-profile-logo-close');
tProfileLogoClose.addEventListener('click', function(event) {
    tProfile.classList.remove('t-profile_show');
    setTimeout(() => formRegisterBtn.classList.remove('form-register-btn-enter'), 2);
})


document.addEventListener('click', function(event) {
    const tProfile=document.querySelector('.t-profile');

    let tRegister=document.querySelector('.t-register');
    let page=document.querySelector('.page');
    let tRegisterWrap=document.querySelector('.t-register-wrap');
    let formRegisterInputCode=document.querySelector('.form-register__input-code');
    const formRegisterBtn=document.querySelector('.form-register-btn');
    // console.log(tRegister);
    // console.log(event.target);
    // console.log(event.target.dataset.registerClose );
    // console.log(event.target.classList );


    if (event.target.classList.contains("form-register-btn-enter") ) {
        tProfile.classList.add('t-profile_show');


        tRegister.classList.remove('t-register_show');
        tRegisterWrap.classList.remove('t-register-wrap_big-height');
        formRegisterInputCode.classList.add('form-register__input-code_hide');
        page.classList.remove("t-body-overflow_hidden");
        formRegisterBtn.innerHTML = 'ОТПРАВИТЬ КОД';
    }

    if (event.target.dataset.enterLk ) {
        tRegister.classList.add('t-register_show');
        page.classList.add("t-body-overflow_hidden");
    }
    if (event.target.classList.contains("t-register-close") ) {
        tRegister.classList.remove('t-register_show');
        tRegisterWrap.classList.remove('t-register-wrap_big-height');
        formRegisterInputCode.classList.add('form-register__input-code_hide');
        page.classList.remove("t-body-overflow_hidden");
        formRegisterBtn.innerHTML = 'ОТПРАВИТЬ КОД';

    }
    if (event.target.dataset.selectNumber ) {
        formSelectEmail.classList.remove('show_underline');
        formSelectPhone.classList.remove('show_underline');
        formSelectPhone.classList.add('show_underline');

        formRegisterInputEmail.classList.remove('hide_input_select');
        formRegisterInputTel.classList.remove('hide_input_select');
        formRegisterInputEmail.classList.add('hide_input_select');
    }

    if (event.target.dataset.selectEmail ) {
        formSelectEmail.classList.remove('show_underline');
        formSelectPhone.classList.remove('show_underline');
        formSelectEmail.classList.add('show_underline');

        formRegisterInputEmail.classList.remove('hide_input_select');
        formRegisterInputTel.classList.remove('hide_input_select');
        formRegisterInputTel.classList.add('hide_input_select');
    }

});


import {tFavorite} from './anycode/favorite.js';
new tFavorite('.t-icon__like','.t-favorite-close');

import {tFiltersMini} from './anycode/filter-mini.js';
new tFiltersMini();

