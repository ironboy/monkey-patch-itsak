export default class Product {

  // In JS the constructor is named constructor
  // (not after the class name)
  constructor(id, name, price, description, productList) {
    // transfer parameters to properties
    this.plist = productList;
    this.id = id;
    this.name = name;
    this.price = price * (this.plist.codeOk ? 0.8 : 1);
    this.description = description;
    this.image = '/api/image/' + name.split(' -')[0];
  }

  // A method that shows info about the product as html
  render() {
    let htmlDescription = '<p>' +
      this.description.replaceAll('\n\n', '</p><p>') + '</p>';
    // (why not just the number as id? because the id attribute
    // in html should start with a-z or A-Z according to specs)
    return `
      <div class="product" id="i${this.id}">
        <img src="${this.image}">
        <h3>${this.name}</h3>
        <div>${htmlDescription}</div>
         <p class="price">Price: ${this.price.toFixed(0)} kr</p>
      </div>
    `;
  }

  // A method that shows compact info about the product (in a list)
  renderInList() {
    return `
      <div class="productInList" id="i${this.id}">
        <img src="${this.image}">
        <h3>${this.name}</h3>
        <p class="price">Price: ${this.price.toFixed(0)} kr</p>
      </div>
    `;
  }

}