$(document).ready(function() {
    $('div').fadeIn(1500).removeClass('hidden');
    console.log('help');
});

// var firstsec = document.getElementById('fig1');
// var secondsec = document.getElementById('fig2');
// var thirdsec = document.getElementById('fig3');
// var lastScrollTop = 0;
// window.onscroll = function() {
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > seccondsec) {
//         thirdsec.scrollIntoView({ behaviour: "smooth" });
//     } else { secondsec.scrollIntoView({ behaviour: "smooth" }) }
//     if (st > lastScrollTop) {
//         secondsec.scrollIntoView({ behavior: "smooth" });
//     } else {
//         firstsec.scrollIntoView({ behavior: "smooth" });
//     }
//     lastScrollTop = st <= 0 ? 0 : st;
// }