$(function() {



  // 마우스 
  // $('.img-area').mousemove(function(e) {
  //   const pointerHeight = $('.pointer').height();
  //               const mouseY = e.offsetY - (pointerHeight / 2);
  //               $('.pointer').css("top", mouseY + "px");
  // });
  


  
  
  // --------------- lenis --------------- 
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 700)
    })
    gsap.ticker.lagSmoothing(0)








  // --------------- intro --------------- 
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
  .to('header',{autoAlpha:1}, 'display-main')
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






  // --------------- sc-visual --------------- 
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
  .set('body',{
    'background-color' : '#000',
  },'mainTxt')
  .to('.sc-visual .main-cont',{
    scale:0.4,
  },'mainTxt')
  .to('.sc-visual .hero-line-4',{
    autoAlpha: 0.1,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-3',{
    autoAlpha: 0.1,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-2',{
    autoAlpha: 0.1,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-1',{
    autoAlpha: 0.1,
    'color' : '#000'
  },'mainTxt')
  .to('.sc-visual .hero-line-5',{
    'transform': 'translateY(-50vh)',
    autoAlpha: 1,
    scale : 1,
  })








  // --------------- sc-intro 00 -> 01 --------------- 
  const count_01 = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-intro-1",
      start:"20% 50%",
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
  .to('.sc-visual .main-cont',{
    autoAlpha: 0
  },'count_01')
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






  // --------------- myprj --------------- 
  const froprj = gsap.timeline({
    scrollTrigger:{
      trigger:'.myprj-wrap .sticky-wrapper',
      start:"0% 0%",
      end:"100% 100%",
      scrub:1,
      ease: "slow(0.1,0.1,false)",
      skewY: 7,
      stagger: {
        amount: 1
      },
    },
  })

  froprj
  // section 01
  .to('.myprj-wrap .sticky-wrapper .fix-txt-cont', {
    width: '100vw',
    height: '100vh',
    ease: "none",
    delay:500,
    duration: 1500,
  }, 'froprj01-start')
  .to('.myprj-wrap .sticky-wrapper .fix-txt', {
    autoAlpha: 1,
    ease: "none",
    duration: 1500,
  }, 'froprj01-start')
  .set('.myprj-wrap section:nth-child(1)', {
    autoAlpha: 1,
    ease: "none",
    'z-index' : '100',
    delay:1000,
    duration: 1500,
  }, 'froprj01-start')
  .set('.myprj-wrap section:nth-child(1) .img-area', { 
    autoAlpha: 1,
    scale : 0.5,
    duration: 1500,
  }, 'froprj01-cont')
  .to('.myprj-wrap section:nth-child(1) .img-area', { 
    scale: 1,
    bottom: '10vh',
    ease: 'none', 
    duration: 1500,
  }, 'froprj01-cont')
  .to('.myprj-wrap section:nth-child(1) .img-area img', { 
    width: '100%',
    height: 'calc(100vh - 20vh)',
    ease: 'none', 
    duration: 1500,
  }, 'froprj01-cont')
  .to('.myprj-wrap section:nth-child(1) .img-area', { 
    bottom: '100vh',
    scale : 0.5,
    autoAlpha: 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj01-cont-end')
  .to('.myprj-wrap section:nth-child(1) .img-area img', { 
    scale : 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj01-cont-end')
  .to('.myprj-wrap section:nth-child(1)', {
    autoAlpha: 0,
    ease: "none",
    duration: 1500,
  }, "+=10")


  // section 02
  .set('.myprj-wrap section:nth-child(2)', {
    autoAlpha: 1,
    ease: "none",
    'z-index' : '100',
    delay:1000,
    duration: 1500,
  }, 'froprj02-start')
  .set('.myprj-wrap section:nth-child(2) .img-area', { 
    autoAlpha: 1,
    scale : 0.5,
    duration: 1500,
  }, 'froprj02-cont')
  .to('.myprj-wrap section:nth-child(2) .img-area', { 
    scale: 1,
    bottom: '10vh',
    ease: 'none', 
    duration: 1500,
  }, 'froprj02-cont')
  .to('.myprj-wrap section:nth-child(2) .img-area img', { 
    width: '100%',
    height: 'calc(100vh - 20vh)',
    ease: 'none', 
    duration: 1500,
  }, 'froprj02-cont')
  .to('.myprj-wrap section:nth-child(2) .img-area', { 
    bottom: '100vh',
    scale : 0.5,
    autoAlpha: 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj02-cont-end')
  .to('.myprj-wrap section:nth-child(2) .img-area img', { 
    scale : 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj02-cont-end')
  .to('.myprj-wrap section:nth-child(2)', {
    autoAlpha: 0,
    ease: "none",
    duration: 1500,
  }, "+=10")



  // section 03
  .set('.myprj-wrap section:nth-child(3)', {
    autoAlpha: 1,
    ease: "none",
    'z-index' : '100',
    delay:1000,
    duration: 1500,
  }, 'froprj03-start')
  .set('.myprj-wrap section:nth-child(3) .img-area', { 
    autoAlpha: 1,
    scale : 0.5,
    duration: 1500,
  }, 'froprj03-cont')
  .to('.myprj-wrap section:nth-child(3) .img-area', { 
    scale: 1,
    bottom: '10vh',
    ease: 'none', 
    duration: 1500,
  }, 'froprj03-cont')
  .to('.myprj-wrap section:nth-child(3) .img-area img', { 
    width: '100%',
    height: 'calc(100vh - 20vh)',
    ease: 'none', 
    duration: 1500,
  }, 'froprj03-cont')
  .to('.myprj-wrap section:nth-child(3) .img-area', { 
    bottom: '100vh',
    scale : 0.5,
    autoAlpha: 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj03-cont-end')
  .to('.myprj-wrap section:nth-child(3) .img-area img', { 
    scale : 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj03-cont-end')
  .to('.myprj-wrap section:nth-child(3)', {
    autoAlpha: 0,
    ease: "none",
    duration: 1500,
  }, "+=10")



   // section 04
  .set('.myprj-wrap section:nth-child(4)', {
    autoAlpha: 1,
    ease: "none",
    'z-index' : '100',
    delay:1000,
    duration: 1500,
  }, 'froprj04-start')
  .set('.myprj-wrap section:nth-child(4) .img-area', { 
    autoAlpha: 1,
    scale : 0.5,
    duration: 1500,
  }, 'froprj04-cont')
  .to('.myprj-wrap section:nth-child(4) .img-area', { 
    scale: 1,
    bottom: '10vh',
    ease: 'none', 
    duration: 1500,
  }, 'froprj04-cont')
  .to('.myprj-wrap section:nth-child(4) .img-area img', { 
    width: '100%',
    height: 'calc(100vh - 20vh)',
    ease: 'none', 
    duration: 1500,
  }, 'froprj04-cont')
  .to('.myprj-wrap section:nth-child(4) .img-area', { 
    bottom: '100vh',
    scale : 0.5,
    autoAlpha: 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj04-cont-end')
  .to('.myprj-wrap section:nth-child(4) .img-area img', { 
    scale : 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj04-cont-end')
  .to('.myprj-wrap section:nth-child(4)', {
    autoAlpha: 0,
    ease: "none",
    duration: 1500,
  }, "+=10")


  // section 05
  .set('.myprj-wrap section:nth-child(5)', {
    autoAlpha: 1,
    ease: "none",
    'z-index' : '100',
    delay:1000,
    duration: 1500,
  }, 'froprj05-start')
  .set('.myprj-wrap section:nth-child(5) .img-area', { 
    autoAlpha: 1,
    scale : 0.5,
    duration: 1500,
  }, 'froprj05-cont')
  .to('.myprj-wrap section:nth-child(5) .img-area', { 
    scale: 1,
    bottom: '10vh',
    ease: 'none', 
    duration: 1500,
  }, 'froprj05-cont')
  .to('.myprj-wrap section:nth-child(5) .img-area img', { 
    width: '100%',
    height: 'calc(100vh - 20vh)',
    ease: 'none', 
    duration: 1500,
  }, 'froprj05-cont')
  .to('.myprj-wrap section:nth-child(5) .img-area', { 
    bottom: '100vh',
    scale : 0.5,
    autoAlpha: 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj05-cont-end')
  .to('.myprj-wrap section:nth-child(5) .img-area img', { 
    scale : 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj05-cont-end')
  .to('.myprj-wrap section:nth-child(5)', {
    autoAlpha: 0,
    ease: "none",
    duration: 1500,
  }, "+=10")



  // section 05
  .set('.myprj-wrap section:nth-child(6)', {
    autoAlpha: 1,
    ease: "none",
    'z-index' : '100',
    delay:1000,
    duration: 1500,
  }, 'froprj06-start')
  .set('.myprj-wrap section:nth-child(6) .img-area', { 
    autoAlpha: 1,
    scale : 0.5,
    duration: 1500,
  }, 'froprj06-cont')
  .to('.myprj-wrap section:nth-child(6) .img-area', { 
    scale: 1,
    bottom: '10vh',
    ease: 'none', 
    duration: 1500,
  }, 'froprj06-cont')
  .to('.myprj-wrap section:nth-child(6) .img-area img', { 
    width: '100%',
    height: 'calc(100vh - 20vh)',
    ease: 'none', 
    duration: 1500,
  }, 'froprj06-cont')
  .to('.myprj-wrap section:nth-child(6) .img-area', { 
    bottom: '100vh',
    scale : 0.5,
    autoAlpha: 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj06-cont-end')
  .to('.myprj-wrap section:nth-child(6) .img-area img', { 
    scale : 1,
    ease: 'none', 
    delay:3000,
    duration: 1500,
  },'froprj06-cont-end')
  .to('.myprj-wrap section:nth-child(6)', {
    autoAlpha: 0,
    ease: "none",
    duration: 1500,
  }, "+=10")
  .to('.myprj-wrap .video-wrapper', {
    autoAlpha: 0,
    ease: "none",
    delay:500,
    duration: 1500,
  })
  .to('body', {
    'background-color' : '#fff',
    ease: "none",
  })









  // --------------- sc-intro 01 -> 02 --------------- 
  const count_02 = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-intro-2",
      start:"20% 50%",
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
    ease:'none',
    color : '#000'
  },'count_02')
  .to('.sc-intro-2 .intro-cont .curr',1, { 
    y:'-100%',
    ease:'none',
        color : '#000'
  },'count_02')
  .to('.sc-intro-2 .section-title',1, { 
    autoAlpha: 1,
    ease:'none',
        color : '#000'
  },'count_02')







  // sc-work
  $(".work-item").each(function (index, element){
    var tl = new TimelineLite({paused:true});
    tl
    .to($(element).find(".thumb-area p"), 0.5, {
        yPercent: '-300',
      },'img')
      .to($(element).find(".hover-item:nth-child(1) img"), 0.5, {
        yPercent: '100',
      },'img')
      .to($(element).find(".hover-item:nth-child(2) img"), 0.5, {
        delay: 0.1,
        yPercent: '100',
      },'img')
      .to($(element).find(".hover-item:nth-child(3) img"), 0.5, {
        delay: 0.2,
        yPercent: '100',
      },'img')
    element.animation = tl;
  })
  $(".work-item").mouseenter(function(){
    this.animation.play();
  })
  $(".work-item").mouseleave(function(){
    this.animation.reverse(0.2);
  })




  // --------------- sc-intro 02 -> 03 --------------- 
  const count_03 = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-intro-3",
      start:"20% 50%",
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
  .to('body', {
    'background-color' : '#000',
    ease: "none",
  })
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




  
  // sc-banner
  bannertl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-banner',
      start:"0% 50%",
      end:"100% 0%",
      scrub:0,
      duration: 10,
    },
  })
  bannertl.to('.sc-banner .line-1 .banner-line', {xPercent:-40 },'banner')
  bannertl.to('.sc-banner .line-2 .banner-line', {xPercent:40 },'banner')
  const mainheadTxt = new SplitType('.sc-banner .gtspan', { types: 'words, chars',});
  bannertl.to('.sc-banner .gtspan .char', {
    color : "#fff",
    ease: "power4.out",
    stagger: {
       amount: 1
    }
  },'banner')   
  






  // sc-fepj
  const fetlbox = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-fepj",
      start:"0% 100%",
      end:"100% 100%",
      scrub:1,
      ease: "power4.out",
      delay : 10,
      stagger: {
        amount: 1
      },
    }
  })
  fetlbox.from('.sc-fepj .fepj-list .fepj-item', {
    width : 0,
    scrub:1,
    ease: "power4.out",
    stagger: {
      amount: 1
    },
    duration: 10
  })   






})