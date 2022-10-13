// main.js

// 오토배너

const banner = document.querySelector(".banner_list");
const bannerList = document.querySelectorAll(".banner_list>li");
const controler = document.querySelectorAll(".controler>span");

let bannerNum = 0;
function autoBanner(){
    bannerNum++;
    if(bannerList.length-1 < bannerNum){
        bannerNum=0;
        controler.forEach(order => {
        order.classList.remove("on");
        });
    }
    banner.style.left = `${-bannerNum * 100}%`;
    controler[bannerNum].classList.add("on");

    setTimeout(autoBanner,5000);
}
let autoBn = setTimeout(autoBanner,5000);

// familysite list
const familySite = document.querySelector(".family_sites>li>button");
const familySites = document.querySelector(".family_sites>li>ul");

familySite.addEventListener("click",()=>{
    familySites.classList.toggle("on");
})



//모바일 footer list클릭
const footerList = document.querySelectorAll(".footer_list>ul>li>a");
const footerUl = document.querySelectorAll(".footer_list>ul>li>ul")
for(let i=0; i<footerList.length; i++){
    footerList[i].addEventListener("click",(e)=>{
        e.preventDefault();
    const footList =  e.currentTarget.parentNode.children[1];
    footerUl.forEach(list => {
        if(list !== footList){
            list.style.maxHeight = null;
         }
    });
    footList.style.maxHeight = (footList.style.maxHeight) ? null : footList.scrollHeight + "px";
        // e.currentTarget.parentNode.children[1].classList.toggle("on");
    })
}
    
// header
const gnbList = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");
const subList = document.querySelectorAll(".gnb>ul>li>ul");
const separate = document.querySelectorAll(".separate>ul");
const body = document.querySelector("body");
const bg = document.querySelector(".bg");
for(let i=0; i<gnbList.length; i++){
    gnbList[i].addEventListener("mouseover", (e)=>{
        headerWrap.classList.add("on");
        e.currentTarget.children[1].classList.add("on");
        body.classList.add("on");
        bg.classList.add("on");
        window.addEventListener("wheel",()=>{
            header.style.display = "block"
        })
       if(i == 1){
        separate.forEach(list => {
            headerWrap.classList.remove("on");
            headerWrap.classList.add("on2");
            list.classList.add("on");
       });
    }
    })
    gnbList[i].addEventListener("mouseout", (e)=>{
        headerWrap.classList.remove("on")
        e.currentTarget.children[1].classList.remove("on");
        body.classList.remove("on");
        bg.classList.remove("on");
        window.addEventListener("wheel",(e)=>{
            if(e.deltaY == 100){
               header.style.display = "none"
            }else{
                header.style.display = "block"
            }
        })
        separate.forEach(list => {
            list.classList.remove("on");
            headerWrap.classList.remove("on2");
            
       });
    })
}
// 모바일 검색박스
const Msearch = document.querySelector(".m_search");
Msearch.addEventListener("click",(e)=>{
    e.preventDefault();
    searchBox.classList.add("on");
    body.classList.add("on2");
    bg.classList.add("on");
    Msearch.style.display = "none";
    hamberger.style.display = "none";
window.addEventListener("wheel",()=>{
    header.style.display = "block"
})
    if(bg.classList.contains("on")){
        bg.addEventListener("click",()=>{
            searchBox.classList.remove("on");
            body.classList.remove("on2");
    bg.classList.remove("on");
    Msearch.style.display = "block";
    hamberger.style.display = "block";
        })
    }
})
// 모바일 메뉴 클릭 후 리스트클릭시
const mobileMenuList = document.querySelectorAll(".mobile_menu>.m_gnb>ul>li>a");
const Mgnb = document.querySelectorAll(".m_gnb>ul>li>div>ul");
for(let i=0; i<mobileMenuList.length; i++){
    mobileMenuList[i].addEventListener("click",(e)=>{
    const gnbList = e.currentTarget.parentNode.children[1].children[0];
    Mgnb.forEach(list => {
        if(list !== gnbList){
            list.style.maxHeight = null;
         }
    });
    gnbList.style.maxHeight = (gnbList.style.maxHeight) ? null : gnbList.scrollHeight + "px";
})
}
const Mtitle = document.querySelectorAll(".m_title>li>a");
const Mhide = document.querySelectorAll(".m_hide");
let bl = true;
for(let i=0; i<Mtitle.length; i++){
    Mtitle[i].addEventListener("click",(e)=>{
        const hideList = e.currentTarget.parentNode.children[1];
        Mhide.forEach(list => {
            if(list !== hideList){
               list.style.maxHeight = null;
            }
        });
        hideList.style.maxHeight = (hideList.style.maxHeight) ? null : hideList.scrollHeight + "px";

    })
}
const mobileMenu = document.querySelector(".mobile_menu");
const hamberger = document.querySelector(".hamberger");
// 모바일 메뉴 클릭시 화면띄우기
hamberger.addEventListener("click",()=>{
    mobileMenu.classList.add("on");
    hamberger.style.display = "none";
    Msearch.style.display = "none";
    body.classList.add("on2");
    bg.classList.add("on");
    window.addEventListener("wheel",()=>{
        header.style.display = "block"
    })
    if(bg.classList.contains("on")){
        bg.addEventListener("click",()=>{
            mobileMenu.classList.remove("on");
            body.classList.remove("on2");
    bg.classList.remove("on");
    Msearch.style.display = "block";
    hamberger.style.display = "block";
        })
    }
})
// 모바일 메뉴 클릭시 화면지우기
const Mclose = document.querySelector(".m_close");
Mclose.addEventListener("click",()=>{
    mobileMenu.classList.remove("on");
    hamberger.style.display = "block";
    Msearch.style.display = "block";
    body.classList.remove("on2");
    bg.classList.remove("on");
})

// 마우스휠이벤트
const header = document.querySelector("#header");

window.addEventListener("wheel",(e)=>{
    if(e.deltaY == 100){
       header.style.display = "none"
    }else{
        header.style.display = "block"
    }
})


// 언어
const languageBtn = document.querySelector(".util > .language_btn");
const kor = document.querySelector(".util > .language_btn> .kor");
const eng = document.querySelector(".util >.language_btn > .eng");
const headerHover = document.querySelectorAll("#header a");
const searchIcon = document.querySelector(".search");
let flag = true;
languageBtn.addEventListener("click", ()=>{
    if(flag){
        eng.style.display = "block";
        headerHover.forEach(item => {
            item.classList.add("on");
        });
        searchIcon.classList.add("on");
        headerWrap.classList.add("bgc");
        kor.classList.add("on");
        kor.innerHTML = `KOR<i class="fa-solid fa-chevron-up"></i>`
        window.addEventListener("wheel",()=>{
            header.style.display = "block"
        })
        flag = false;
    } else{
        eng.style.display = "none";
        headerHover.forEach(item => {
            item.classList.remove("on");
        });
        searchIcon.classList.remove("on");
        headerWrap.classList.remove("bgc");
        kor.classList.remove("on");
        kor.innerHTML = `KOR<i class="fa-solid fa-chevron-down"></i>`
        window.addEventListener("wheel",(e)=>{
            if(e.deltaY == 100){
               header.style.display = "none"
            }else{
                header.style.display = "block"
            }
        })
        flag = true;
    }
})
// 검색박스
const search = document.querySelector(".search");
const searchBox = document.querySelector(".search_box");
const close = document.querySelector(".close");
search.addEventListener("click",(e)=>{
        e.preventDefault();
        searchBox.classList.add("on");
        body.classList.add("on2");
        bg.classList.add("on");
window.addEventListener("wheel",()=>{
        header.style.display = "block"
    })
})
// 검색박스끄기
close.addEventListener("click", ()=>{
    searchBox.classList.remove("on");
    body.classList.remove("on2");
    bg.classList.remove("on");
    Msearch.style.display = "block";
    hamberger.style.display = "block";
    window.addEventListener("wheel",(e)=>{
        console.log(e.deltaY);
        if(e.deltaY == 100){
           header.style.display = "none"
        }else{
            header.style.display = "block"
        }
    })
})


// content6

const prev = document.querySelector(".content6 .control>.prev"); 
const next = document.querySelector(".content6 .control>.next");
const content6 = document.querySelector(".content6 ul");
const order = document.querySelector(".content6 .control>span");
const progressBar = document.querySelector(".progress_bar>span");
    let contentNum = 0;
    let Gauge = 1;
prev.addEventListener("click",()=>{
    contentNum--;
    Gauge--;
    content6.style.left = `${-contentNum * 100}%`;
    order.innerText = `${contentNum+1} / 3`;
    progressBar.style.width = `${33.3*Gauge}%`;
    if(contentNum == 0){
        prev.disabled = true;
    }  
    if(contentNum < 3){
        next.disabled = false;
    }
})
next.addEventListener("click",()=>{
    contentNum++;
    Gauge++;
    content6.style.left = `${-contentNum * 100}%`;
    order.innerText = `${contentNum+1} / 3`;
    progressBar.style.width = `${300*Gauge}px`;
    if(contentNum != 0){
        prev.disabled = false;
    }  
    if(contentNum == 2){
        next.disabled = true;
    }

})



// content8

const esgImg = document.querySelector(".esg_img");
const esgText = document.querySelectorAll(".esg_txt>dl");
for(let i=0; i<esgText.length; i++){
    esgText[i].addEventListener("mouseover", (e)=>{
        e.currentTarget.classList.add("on");
        if(esgText[i].classList.contains("on") && i == 0){
            esgImg.innerHTML = `<img src="../images/esg_slider_lg_0${i+1}.jpg" />`
            esgText[1].classList.remove("on");
            esgText[2].classList.remove("on");
        }
        if(esgText[i].classList.contains("on") && i == 1){
            esgImg.innerHTML = `<img src="../images/esg_slider_lg_0${i+1}.jpg" />`
            esgText[0].classList.remove("on");
            esgText[2].classList.remove("on");
        }
        if(esgText[i].classList.contains("on") && i == 2){
            esgImg.innerHTML = `<img src="../images/esg_slider_lg_0${i+1}.jpg" />`
            esgText[0].classList.remove("on");
            esgText[1].classList.remove("on");
        }
    })
}


// content1~4 opacity

const content1Img = document.querySelector(".content1>img");
const content2Img = document.querySelector(".content2>img");
const content3Img = document.querySelector(".content3>img");
const content4Img = document.querySelector(".content4>img");
const contentInner1 = document.querySelector(".content1_inner");
const contentInner2 = document.querySelector(".content2_inner");
const contentInner3 = document.querySelector(".content3_inner");
const contentInner4 = document.querySelector(".content4_inner");
const content5H2 = document.querySelector(".content5>.content5_inner>h2");
const content5A = document.querySelector(".content5>.content5_inner>a");
const content5List = document.querySelectorAll(".content5>.content5_inner>ul>li");
const content6H2 = document.querySelector(".content6>.content6_inner>h2");
const content6A = document.querySelector(".content6>.content6_inner>a");
const content6List = document.querySelectorAll(".content6>.content6_inner>ul>li");
const content6Bar = document.querySelector(".progress_bar");
const contentt6Control = document.querySelector(".control");
const career = document.querySelector(".career");
const contactUs = document.querySelector(".contact_us");
const content8H2 = document.querySelector(".content8>.content8_inner>h2");
const conetnt8A = document.querySelector(".content8>.content8_inner>a");
const content9H2 = document.querySelector(".content9>.content9_inner>h2");
const content9A = document.querySelector(".content9>.content9_inner>a");
const content9List = document.querySelectorAll(".content9>.content9_inner>ul>li");


// 화면 스크롤 시 이벤트
window.addEventListener("scroll",(e)=>{
    let scroll = document.querySelector("html").scrollTop;
    
    console.log(scroll);
    if(scroll > 0 || scroll){
        content1Img .style.opacity = 1;
        contentInner1.style.opacity = 1;
    } if(scroll > 1000){
        content2Img .style.opacity = 1;
        contentInner2.style.opacity = 1;
    } if(scroll > 1900 ){
        content3Img .style.opacity = 1;
        contentInner3.style.opacity = 1;
    } if(scroll > 2900 ){
        content4Img.style.opacity = 1;
        contentInner4.style.opacity = 1;
    }  if(scroll > 3900){
        content5H2.style.opacity = 1;
        content5A.style.opacity = 1;
        content5H2.style.transform = "translateY(0)";
        content5A.style.transform = "translateY(0)";
    }
        if(scroll > 4100){
            for(let list of content5List){
                list.classList.add("on");
               }
        } if(scroll > 4700){
        content6H2.classList.add("on");
        content6A.classList.add("on");
    }if(scroll > 4900){
        for(let list of content6List){
            list.classList.add("on");
        }
    }if(scroll > 5400){
        content6Bar.classList.add("on");
        contentt6Control.classList.add("on");
    }
    if(scroll > 5600){
        career.classList.add("on");
        contactUs.classList.add("on");
    }
    if(scroll > 6300){
        content8H2.classList.add("on");
        conetnt8A.classList.add("on");
    }  
    if(scroll > 7900){
        content9H2.classList.add("on");
        content9A.classList.add("on");
    }
    if(scroll > 8050){
       for(let list of content9List){
        list.classList.add("on");
       }
    }

    // lnl_mall 스크롤 따라가기
    const lnlMall = document.querySelector(".lnl_mall");

})


// footer top버튼
const topBtn = document.querySelector(".top_btn"); 

topBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
