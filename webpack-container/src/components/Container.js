
async function render () {
    let module = await import("card/Card");
    module.mount(document.querySelector("#my-card"), 'Container Title');
}

render()