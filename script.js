const items = [...document.querySelectorAll('li.accordion')];

items.forEach(item => {
    item.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('li');
        const itemDetail = clickedItem.querySelector('.accordion__content');
        const clickedItemActive = clickedItem.classList.contains('active');
        clickedItem.classList.toggle('active');
        if (clickedItemActive) {
            itemDetail.style.maxHeight = null;
        } else {
            constscrollHeight = itemDetail.constscrollHeight;
            itemDetail.style.maxHeight = `${scrollHeight}px`;
        }
    })
})