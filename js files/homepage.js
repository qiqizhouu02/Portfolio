$(document).ready(function() {
    $('div').fadeIn(1500).removeClass('hidden');
    console.log('help');
});

const items = document.querySelectorAll('.figure');

const active = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('viewscroll');
        } else {
            entry.target.classList.remove('viewscroll');
        }
    });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
    io2.observe(items[i]);
}

// var firstsec = document.getElementById('fig1');
// var secondsec = document.getElementById('fig2');
// var thirdsec = document.getElementById('fig3');
// var lastScrollTop = 0;
// window.onscroll = function() {
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > seccondsec.scrollIntoView) {
//         thirdsec.scrollIntoView({ behaviour: "smooth" });
//     } else { secondsec.scrollIntoView({ behaviour: "smooth" }) }
//     if (st > lastScrollTop) {
//         secondsec.scrollIntoView({ behavior: "smooth" });
//     } else {
//         firstsec.scrollIntoView({ behavior: "smooth" });
//     }
//     lastScrollTop = st <= 0 ? 0 : st;
// }