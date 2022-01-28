$(document).ready(function() {
    $('div').fadeIn(1500).removeClass('hidden');
    console.log('help');
});

const items = document.querySelectorAll('.masonry-item');

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