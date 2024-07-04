$(function() {


    // --------------- 전체 부드러운 스크롤 --------------- 
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 700)
    })
    gsap.ticker.lagSmoothing(0)




  // --------------- 인트로 --------------- 
 for (let i = 1; i < 16; i++) {
    firstClass=(i==1)?'on':'';
    $('.img-wrap').prepend(`<img src="./assets/img/ico-intro-${i}.png" alt="" class="${firstClass}">`)  
  }

  setInterval(() => {
    introLoop();
  }, 1000*16);
  
  introLoop();
  function introLoop(){
    for (let idx = 0; idx < 16; idx++) {
      setTimeout(() => {
        $('.img-wrap img').eq(idx).addClass('on').siblings().removeClass('on');
      }, 150*idx);
    }
  }

  
  const introMotion = gsap.timeline({
    onComplete:function(){
      $('.intro').remove();
    }
  })
  introMotion
  
  .to('.guage-area',{width : '100vw', height: '100vh', 'border-radius' : '0'}, 'display+=3')
  .set('.guage-area img',{autoAlpha :0}, 'display+=3')
  .to('.intro',{autoAlpha:0}, 'display-main')
  .from(".sc-visual .hero-line span", 1.8, {
      y: 100,
      ease: "power4.out",
      skewY: 7,
      yPercent:100,
      stagger: {
        amount: 1
      },
   }, 'display-main'
  )






  // --------------- 메인 텍스트 스크롤 --------------- 
  const mainTxt = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-visual .sticky-wrapper',
        start:"0% 0%",
        end:"100% 100%",
        scrub:1,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 1
        },
      },
  })

  mainTxt
  .to('.sc-visual .main-cont',{
    scale:0.4,
  },'mainTxt')
  .to('.sc-visual .hero-line-4',{
    autoAlpha: 0.1,
    scale:0.4,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-3',{
    autoAlpha: 0.1,
    scale:0.4,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-2',{
    autoAlpha: 0.1,
    scale:0.4,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-1',{
    autoAlpha: 0.1,
    scale:0.4,
    'color' : '#000'
  },'mainTxt')
  
  .to('.sc-visual .hero-line-5',{
    'transform': 'translateY(-60vh)',
    autoAlpha: 1,
    scale : 5,
    'font-weight' : 'bold'
  },'mainTxt')
  .to('.sc-visual .hero-line-5',{
    'transform': 'translateY(-50vh)',
    autoAlpha: 0,
    scale : 0,
  })








  // --------------- 00 -> 01 카운트 --------------- 
  const count_01 = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-intro-1",
      start:"20% 70%",
      end:"100% 100%",
      scrub:1,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 1
      },
    }
  })
  count_01
  .to('.sc-visual .main-cont', {
    autoAlpha: 0,
    ease: 'none',
  }, 'count_01')
  .to('.sc-intro-1 .intro-cont .prev',1, { 
    y:'-100%',
    ease:'none'
  },'count_01')
  .to('.sc-intro-1 .intro-cont .curr',1, { 
    y: '-100%',
    ease:'none'
  },'count_01')
  .to('.sc-intro-1 .section-title',1, { 
    autoAlpha: 1,
    ease:'none'
  },'count_01')






// --------------- projects --------------- 
const myprj = gsap.timeline({
  scrollTrigger:{
    trigger:'.section-wrap .sticky-wrapper',
    start:"0% 0%",
    end:"100% 100%",
    scrub:1,
    ease: "power4.out",
    skewY: 7,
    stagger: {
      amount: 1
    },
  },
})

myprj
// section 01
  .set('.section-wrap section:nth-child(1)', {
    autoAlpha: 1,
    duration: 10,
    ease: "none",
    'z-index' : '100',
  }, 'sect01-start')
  .to('body', {
    'background-color' : '#0a0255',
    duration: 1,
    ease: "none",
  }, 'sect01-start')
  .to('.section-wrap section:nth-child(1) img', { 
    opacity: 1, 
    ease: 'none', 
    duration: 5,
  }, 'sect01-cont')
  .to('.section-wrap section:nth-child(1) .title', {
    y: '35vh',
    ease: 'none',
    opacity: 5, 
    duration: 50,
  }, 'sect01-cont+=10')
  .to('.section-wrap section:nth-child(1)', {
    autoAlpha: 0,
    ease: "none",
    duration: 70,
  }, "+=10")

  // section 02
  .set('.section-wrap section:nth-child(2)', {
    autoAlpha: 1,
    ease: "none",
    duration: 1,
    'z-index' : '100',
  }, 'sect02-start')
  .to('body', {
    // 'background-color' : '#217790',
    'background-color' : '#e00011',
    // 'background-color' : '#9b262e',
    duration: 1,
    ease: "none",
  }, 'sect02-start')
  .to('.section-wrap section:nth-child(2) img', { 
    height: '100vh',
     opacity: 1, 
     ease: 'none' ,
     duration: 5,
  }, 'sect02-sub')
  .to('.section-wrap section:nth-child(2) .title', {
    y: '35vh',
    ease: 'none',
    opacity: 1, 
    duration: 50,
  }, 'sect02-sub+=10')
  .to('.section-wrap section:nth-child(2)', {
    autoAlpha: 0,
    ease: "none",
    duration: 70,
  }, "+=10")

  // section 03
  .set('.section-wrap section:nth-child(3)', {
    autoAlpha: 1,
    ease: "none",
    duration: 1,
    'z-index' : '100',
  }, 'sect03-start')
  .to('body', {
    // 'background-color' : '#9b262e',
    'background-color' : '#82dc28',
    duration: 1,
    ease: "none",
  }, 'sect03-start')
  .to('.section-wrap section:nth-child(3) img', { 
    height: '100vh',
     opacity: 1,
      ease: 'none',
      duration: 5, 
  }, 'sect03-sub')
  .to('.section-wrap section:nth-child(3) .title', {
    y: '35vh',
    ease: 'none',
    opacity: 1, 
    duration: 50,
  }, 'sect03-sub+=10')
  .to('.section-wrap section:nth-child(3)', {
    autoAlpha: 0,
    ease: "none",
    duration: 70,
  }, "+=10")

  // section 04
  .set('.section-wrap section:nth-child(4)', {
    autoAlpha: 1,
    ease: "none",
    duration: 1,
    'z-index' : '100',
  }, 'sect04-start')
  .to('body', {
    'background-color' : '#ff4b67',
    // 'background-color' : '#064e64',
    duration: 1,
    ease: "none",
  }, 'sect04-start')
  .to('.section-wrap section:nth-child(4) img', { 
    height: '100vh', 
    opacity: 1, 
    ease: 'none' ,
    duration: 5,
  }, 'sect04-sub')
  .to('.section-wrap section:nth-child(4) .title', {
    y: '35vh',
    ease: 'none',
    opacity: 1, 
    duration: 50,
  }, 'sect04-sub+=10')
  .to('.section-wrap section:nth-child(4)', {
    autoAlpha: 0,
    ease: "none",
    duration: 70,
  }, "+=10")

  // section 05
  .set('.section-wrap section:nth-child(5)', {
    autoAlpha: 1,
    ease: "none",
    duration: 1,
    'z-index' : '100',
  }, 'sect05-start')
  .to('body', {
    // 'background-color' : '#09182b',
    // 'background-color' : '#9fc1da',
    'background-color' : '#e3bd5a',
    duration: 1,
    ease: "none",
  }, 'sect05-start')
  .to('.section-wrap section:nth-child(5) img', { 
    height: '100vh', 
    opacity: 1, 
    ease: 'none' ,
    duration: 5,
  }, 'sect05-sub')
  .to('.section-wrap section:nth-child(5) .title', {
    y: '35vh',
    ease: 'none',
    opacity: 1, 
    duration: 50,
  }, 'sect05-sub+=10')
  .to('.section-wrap section:nth-child(5)', {
    autoAlpha: 0,
    ease: "none",
    duration: 70,
  }, "+=10")

  // section 06
  .set('.section-wrap section:nth-child(6)', {
    autoAlpha: 1,
    ease: "none",
    duration: 1,
    'z-index' : '100',
  }, 'sect06-start')
  .to('body', {
    // 'background-color' : '#01c73c',
    'background-color' : '#16a340',
    duration: 1,
    ease: "none",
  }, 'sect06-start')
  .to('.section-wrap section:nth-child(6) img', { 
    height: '100vh', 
    opacity: 1, 
    ease: 'none',
    duration: 5, 
  }, 'sect06-sub')
  .to('.section-wrap section:nth-child(6) .title', {
    y: '35vh',
    ease: 'none',
    opacity: 1, 
    duration: 50,
  }, 'sect06-sub+=10')
  .to('.section-wrap section:nth-child(6)', {
    autoAlpha: 0,
    ease: "none",
    duration: 70,
  }, "+=10")
  .to('body', {
    'background-color' : '#000',
    duration: 1,
    ease: "none",
  },)



  // $('.sub-tit a').hover(function() {
  //   var Idx = $(this).closest('.section').index() + 1; 
  //   console.log("Idx" + Idx)
  //   $('body').addClass('hover' + Idx);
  // }, function() {
  //   var Idx = $(this).closest('.section').index() + 1;  
  //   $('body').removeClass('hover' + Idx);
  // });


















  // --------------- 01 -> 02 카운트 --------------- 
  const count_02 = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-intro-2",
      start:"0% 70%",
      end:"100% 100%",
      scrub:1,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 1
      },
    }
  })
  count_02
  .to('.sc-intro-2 .intro-cont .prev',1, { 
    y:'-100%',
    ease:'none'
  },'count_02')
  .to('.sc-intro-2 .intro-cont .curr',1, { 
    y:'-100%',
    ease:'none'
  },'count_02')
  .to('.sc-intro-2 .section-title',1, { 
    autoAlpha: 1,
    ease:'none'
  },'count_02')
  .to('.sc-banner .line-1',1, { 
    'color' : '#333',
    'background-color' :'#eee'
  },'count_02')






  // --------------- fe projects --------------- 
  // --- bg 이미지 --- 
  // var feBgSlide = new Swiper('.sc-fropj .bg-slide', {
  //   effect:"fade",
  // });




  bannertl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-banner',
      start:"0% 100%",
      end:"100% 0%",
      scrub:0,
    },
  })
  bannertl.to('.sc-banner .line-1 .banner-line', {xPercent:-30 },'a')
  bannertl.to('.sc-banner .line-2 .banner-line', {xPercent:30 },'a')







  // --- 리스트 이미지 --- 

    var mainimgSlide = new Swiper('.sc-fropj .fropj-slide', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      speed: 1000,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".sc-fropj .fropj-slide .navi-next",
        prevEl: ".sc-fropj .fropj-slide .navi-prev",
      },
      pagination: {
        el: ".sc-fropj .fraction-box",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span class="curr">${current}</span>
                  <span>/</span>
                  <span class="total">${total}</span>`;
        }
      },
      on: {
        "init" : function() {
          $('.sc-fropj .curr').text(this.realIndex+1);
        },
        "slideChange" : function() {
          $('.sc-fropj .curr').text(this.realIndex+1);
        }
      }
    });
 

  // window.addEventListener('resize', function() {
  //   ww = window.innerWidth;
  //   responsiveSwiper();
  // });















  // --------------- 02 -> 03 카운트 --------------- 
  const count_03 = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-intro-3",
      start:"0% 70%",
      end:"100% 100%",
      scrub:1,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 1
      },
    }
  })
  count_03
  .to('.sc-intro-3 .intro-cont .prev',1, { 
    y:'-100%',
    ease:'none'
  },'count_03')
  .to('.sc-intro-3 .intro-cont .curr',1, { 
    y:'-100%',
    ease:'none'
  },'count_03')
  .to('.sc-intro-3 .section-title',1, { 
    autoAlpha: 1,
    ease:'none'
  },'count_03')







  // --------------- works --------------- 
  // const div_wraps = document.querySelectorAll('.div_wrap');
  // document.getElementById('list_ul').addEventListener('mousemove', function(e){
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   div_wraps.forEach(function(div){
  //     div.style.transform = `translate(${x}px, ${y}px)`;
  //   });
  // });

  const list = document.querySelectorAll('.list_li');
  // forEach의 arrow function
  list.forEach(li_img => {
    li_img.addEventListener('mouseover', function(){
      li_img.querySelector('.div_wrap').style.visibility = 'visible';
    });
    li_img.addEventListener('mouseleave', function(){
      li_img.querySelector('.div_wrap').style.visibility = 'hidden';
    });
  });




})