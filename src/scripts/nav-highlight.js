const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav div div ul li')
const navBrand = document.getElementById('nav-brand')
const nav = document.querySelector('nav')
const main = document.querySelector('main')


const updateNavBrandVisibility = () => {
    if(main.scrollTop < window.innerHeight / 2) {
        navBrand.classList.add('invisible')
        navBrand.classList.remove('visible')
        nav.classList.add('tp')
        nav.classList.remove('sh')
    } else {
        navBrand.classList.remove('invisible')
        navBrand.classList.add('visible')
        nav.classList.remove('tp')
        nav.classList.add('sh')
    }
}

const getIdOfSectionUserIsViewing = () => {
    let idOfViewedSection = ''
    sections.forEach( section => {
        const sectionTop = section.offsetTop
        if(Math.ceil(main.scrollTop) + nav.clientHeight >= sectionTop) {
            idOfViewedSection = section.getAttribute('id')
        }
    })
    return idOfViewedSection
}

const updateActiveNavListItem = (currentId) => {
    navLi.forEach( li => {
        if(li.classList.contains(currentId)) {
            li.classList.add('active')
        } else {
            li.classList.remove('active')
        }
    })
}

const updateNav = () => {
    updateNavBrandVisibility()
    let sectionBeingViewed = getIdOfSectionUserIsViewing()
    updateActiveNavListItem(sectionBeingViewed)
}

main.addEventListener('scroll', ()=> {
    updateNav()
})

updateNav()