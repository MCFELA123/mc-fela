window.onload = () => {
    const Link = document.querySelectorAll('a')
    const sidePath = document.querySelectorAll('.side-path')
    const sideRelative = document.querySelector('.sub-control')
    const pageChild = document.querySelector('.page-child')

    function sideMediaChange(x) {
        sidePath.forEach(element => {
        if (x.matches) {
            element.addEventListener('click', () => {
                sideRelative.setAttribute('style','transform:translateX(0)')
                document.querySelector('.block-full').setAttribute('style','opacity:1;visibility:visible')
                document.querySelector('.block-full').addEventListener('click',()=>{
                    sideRelative.setAttribute('style','transform:translateX(-100%)')
                    document.querySelector('.block-full').setAttribute('style','opacity:0;visibility:hidden')
                    console.log('side bar has been minimized')
                })
                sideRelative.addEventListener('click',()=>{
                    sideRelative.setAttribute('style','transform:translateX(-100%)')
                    document.querySelector('.block-full').setAttribute('style','opacity:0;visibility:hidden')
                    console.log('side bar has been minimized')
                })
            })
            console.log('media queries matched, executing requested function')
        }

        else {
            element.addEventListener('click', () => {
               return false
            })
           }
    })
      }
      
      var x = window.matchMedia("(max-width: 972px)")
      
      sideMediaChange(x);
      
      x.addEventListener("change", function() {
        sideMediaChange(x);
      });

const linkHelper = document.querySelectorAll('.link-helper')
// const linkParent = document.querySelector('a')
    Link.forEach(element => {
        element.addEventListener('click', (event) => {
           element.parentElement.click()
           event.preventDefault()
        })
    });
    

    const checked = document.querySelectorAll('.checked')    
    checked.forEach(element => {
        element.checked=true
    });

    document.querySelector('.home-clicks').addEventListener('click', ()=> {
        document.querySelector('.ass').setAttribute('style','display:none !important')
    })
}