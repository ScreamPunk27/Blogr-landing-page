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

/*DESKTOP*/
const productDesktop=document.getElementById('a-product-desktop');
const productUlDesktop=document.getElementById('ul-product-desktop');
const productArrow=document.getElementById('product-arrow');

let visibleProductDesktop=false;


const companyDesktop=document.getElementById('a-company-desktop');
const companyUlDesktop=document.getElementById('ul-company-desktop');
const companyArrow=document.getElementById('company-arrow');

let visibleCompanyDesktop=false;


const connectDesktop=document.getElementById('a-connect-desktop');
const connectUlDesktop=document.getElementById('ul-connect-desktop');
const connectArrow=document.getElementById('connect-arrow');

let visibleConnectDesktop=false;


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


productDesktop.addEventListener('click',()=>{
    if(visibleProductDesktop===true){
        productUlDesktop.style.display="none";
        productArrow.style.rotate="none";
        visibleProductDesktop=false;
    }else{
        productUlDesktop.style.display="block";
        productArrow.style.rotate="180deg";
        visibleProductDesktop=true;
    }
});

companyDesktop.addEventListener('click',()=>{
    if(visibleCompanyDesktop===true){
        companyUlDesktop.style.display="none";
        companyArrow.style.rotate="none";
        visibleCompanyDesktop=false;
    }else{
        companyUlDesktop.style.display="block";
        companyArrow.style.rotate="180deg";
        visibleCompanyDesktop=true;
    }
});

connectDesktop.addEventListener('click',()=>{
    if(visibleConnectDesktop===true){
        connectUlDesktop.style.display="none";
        connectArrow.style.rotate="none";
        visibleConnectDesktop=false;
    }else{
        connectUlDesktop.style.display="block";
        connectArrow.style.rotate="180deg";
        visibleConnectDesktop=true;
    }
});