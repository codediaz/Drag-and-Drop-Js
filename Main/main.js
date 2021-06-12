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



//container 

const container = document.querySelector('#container')
container.addEventListener('dragenter', e =>{
    console.log('Drag Enter')
})
container.addEventListener('dragleave', e =>{
    console.log('Drag Leave')
})
container.addEventListener('dragover', e =>{
    e.preventDefault();
    console.log('Drag Over')
})
container.addEventListener('drop', e =>{
    console.log('Drop')
    container.appendChild(box);
})
