const box = document.querySelector('#box')
box.addEventListener('dragstart', e => {
    console.log('Drag Start')
})
box.addEventListener('dragend', e => {
    console.log('Drag End')
})
box.addEventListener('dragend', e => {
    console.log('Drag')
})