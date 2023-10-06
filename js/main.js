// mobile nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle(navOpenedClass);
        // console.log(mobileNav.classList)

        closeBtnIcon.classList.toggle(arrowLeftClass);
        closeBtnIcon.classList.toggle(arrowRightClass);
    }
});

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/

    // And if we need scrollbar
    /*scrollbar: {
        el: '.swiper-scrollbar',
    },*/
});

// faq
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList = `${iconClass} text-2xl  transition-all duration-300`;
    })
})

