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
let VariableElements=document.querySelector(".tab2");
let Elements=document.querySelector(".contenu3");
let BoutonDonation=document.querySelector(".tab6");
let donnation=document.querySelector(".contenu5");

//page principal
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

//page Teaser
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

//page Gameplay
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



//page Elements 

VariableElements.addEventListener("click",function(){
    tabs.forEach(function(tab){
        tab.classList.remove("Bouton-active");
    });
    VariableElements.classList.add("Bouton-active");

    ContenuListe.forEach(function(contenu){
        contenu.classList.remove("contenu-active");
    });
    Elements.classList.add("contenu-active");
    BoutonCommunication.classList.remove("Bouton-disapear");
    BoutonMarketing.classList.remove("Bouton-disapear");
});


//page donnation 

BoutonDonation.addEventListener("click",function(){
    tabs.forEach(function(tab){
        tab.classList.remove("Bouton-active");
    });
    BoutonDonation.classList.add("Bouton-active");

    ContenuListe.forEach(function(contenu){
        contenu.classList.remove("contenu-active");
    });
    donnation.classList.add("contenu-active");
    BoutonCommunication.classList.add("Bouton-disapear");
    BoutonMarketing.classList.add("Bouton-disapear");
});



