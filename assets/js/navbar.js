const navMenuMobile=document.querySelector('.nav-links-menu');
const btnBurger=document.getElementById('btn-hamburger');
const btnClose=document.getElementById('btn-close');
const productLabel=document.getElementById('product');
const productList=document.getElementById('product-list');
const companyLabel=document.getElementById('company');
const companyList=document.getElementById('company-list');
const connectLabel=document.getElementById('connect');
const connectList=document.getElementById('connect-list');



let visibleProduct=false;
let visibleCompany=false;
let visibleConnect=false;

btnBurger.addEventListener('click',()=>{
        navMenuMobile.style.display="block";
        btnClose.style.display="block";
        btnBurger.style.display="none";
});

btnClose.addEventListener('click',()=>{
    navMenuMobile.style.display="none";
    btnClose.style.display="none";
    btnBurger.style.display="block";
});


productLabel.addEventListener('click',()=>{
    if(visibleProduct===true){
        productList.style.display="none";
        visibleProduct=false;
       
    }else{
        productList.style.display="block";
        visibleProduct=true;
        
    }
});

companyLabel.addEventListener('click',()=>{
    if(visibleCompany===true){
        companyList.style.display="none";
        visibleCompany=false;
    }else{
        companyList.style.display="block";
        visibleCompany=true;
       
    }
});

connectLabel.addEventListener('click',()=>{
    if(visibleConnect===true){
        connectList.style.display="none";
        visibleConnect=false;
    }else{
        connectList.style.display="block";
        visibleConnect=true;
    }
});