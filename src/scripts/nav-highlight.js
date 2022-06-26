const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li')
const snapWrapper = document.getElementById('snap-wrapper')
const navBrand = document.getElementById('nav-brand')
const nav = document.querySelector('nav')

const updateNavBrandVisibility = () => {
    if(snapWrapper.scrollTop < snapWrapper.clientHeight) {
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
        if(Math.ceil(snapWrapper.scrollTop) >= sectionTop) {
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

snapWrapper.addEventListener('scroll', ()=> {
    updateNavBrandVisibility()
    let sectionBeingViewed = getIdOfSectionUserIsViewing()
    updateActiveNavListItem(sectionBeingViewed)
})

