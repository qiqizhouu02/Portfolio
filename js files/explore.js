// function resizeMasonryItem(item) {
//     /* Get the grid object, its row-gap, and the size of its implicit rows */
//     var grid = document.getElementsByClassName('masonry')[0],
//         rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
//         rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

//     /* Set the spanning as calculated above (S) */
//     item.style.gridRowEnd = 'span ' + rowSpan;

//     /* Make the images take all the available space in the cell/item */
//     item.querySelector('.masonry-content').style.height = rowSpan * 10 + "px";
// }

// function resizeAllMasonryItems() {
//     // Get all item class objects in one list
//     var allItems = document.getElementsByClassName('masonry-item');

//     for (var i = 0; i > allItems.length; i++) {
//         resizeMasonryItem(allItems[i]);
//     }
// }

// function waitForImages() {
//     var allItems = document.getElementsByClassName('masonry-item');
//     for (var i = 0; i < allItems.length; i++) {
//         imagesLoaded(allItems[i], function(instance) {
//             var item = instance.elements[0];
//             resizeMasonryItem(item);
//         });
//     }
// }