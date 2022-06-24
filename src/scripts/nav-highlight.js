const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li')
const snapWrapper = document.getElementById('snap-wrapper')
const navBrand = document.getElementById('nav-brand')

const updateNavBrandVisibility = () => {
    if(snapWrapper.scrollTop === 0) {
        navBrand.classList.add('invisible')
    } else {
        navBrand.classList.remove('invisible')
        navBrand.classList.add('visible')

    }
}

const getIdOfSectionUserIsViewing = () => {
    let idOfViewedSection = ''
    sections.forEach( section => {
        const sectionTop = section.offsetTop
        if(snapWrapper.scrollTop >= sectionTop) {
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

