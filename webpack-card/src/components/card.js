
const mount = (el, cardTitle = 'Card Title') => {
  el.innerHTML = `<div class="card">
  <img
    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
    class="card-img-top"
    style="width:200px;height:200px"
    alt="..."
  />
  <div class="card-body">
    <h2 class="card-title">${cardTitle}</h2>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk
      of the card's content.
      </p>
    <a href="#!" class="btn btn-primary">Button</a>
  </div>
</div>`
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#card-dev');

  if (el) {
    mount(el);
  }
}

export { mount };