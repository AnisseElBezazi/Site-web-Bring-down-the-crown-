let variableTeaser=document.querySelector(".tab1");
let ContenuListe=document.querySelectorAll(".contenu");
let tabs=document.querySelectorAll(".tab");
let Teaser=document.querySelector(".contenu2");
let logoboutton=document.querySelector(".page1");
let pageprincipal=document.querySelector(".mid");
let variableGameplay=document.querySelector(".tab3")
let Gameplay=document.querySelectorAll(".contenu4");
let BoutonCommunication=document.querySelector(".tab4");
let BoutonMarketing=document.querySelector(".tab5");


logoboutton.addEventListener("click",function(){
    tabs.forEach(function(tab){
        tab.classList.remove("Bouton-active");
    });
    ContenuListe.forEach(function(contenu){
        contenu.classList.remove("contenu-active");
    });
    pageprincipal.classList.add("contenu-active");
    BoutonCommunication.classList.remove("Bouton-disapear");
    BoutonMarketing.classList.remove("Bouton-disapear");
});


variableTeaser.addEventListener("click",function(){
    tabs.forEach(function(tab){
        tab.classList.remove("Bouton-active");
    });
    variableTeaser.classList.add("Bouton-active");

    ContenuListe.forEach(function(contenu){
        contenu.classList.remove("contenu-active");
    });
    Teaser.classList.add("contenu-active");
    BoutonCommunication.classList.remove("Bouton-disapear");
    BoutonMarketing.classList.remove("Bouton-disapear");
});


variableGameplay.addEventListener("click",function(){
    tabs.forEach(function(tab){
        tab.classList.remove("Bouton-active");
    });
    variableGameplay.classList.add("Bouton-active");
    ContenuListe.forEach(function(contenu){
        contenu.classList.remove("contenu-active");
    });
    Gameplay.forEach(function(contenu4){
        contenu4.classList.add("contenu-active");
    })
    BoutonCommunication.classList.add("Bouton-disapear");
    BoutonMarketing.classList.add("Bouton-disapear");
});
