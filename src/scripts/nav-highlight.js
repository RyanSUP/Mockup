const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li')
const navBrand = document.getElementById('nav-brand')
const nav = document.querySelector('nav')


const updateNavBrandVisibility = () => {
    if(window.scrollY < window.innerHeight / 2) {
        navBrand.classList.add('invisible')
        navBrand.classList.remove('visible')
        nav.classList.remove('bg-zinc-900')
    } else {
        navBrand.classList.remove('invisible')
        navBrand.classList.add('visible')
        nav.classList.add('bg-zinc-900')
    }
}

const getIdOfSectionUserIsViewing = () => {
    let idOfViewedSection = ''
    sections.forEach( section => {
        const sectionTop = section.offsetTop
        if(Math.ceil(window.scrollY) + nav.clientHeight >= sectionTop) {
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

window.addEventListener('scroll', ()=> {
    updateNav()
})

updateNav()