class ProductManager{
    constructor(){
        this.products = []
    }
    static id = 10

    
    addProduct(title, description, price, thumbnail, code, stock) {
        ProductManager.id++
        this.products.push({title,description,price,thumbnail,code,stock, id:ProductManager.id})
    }

    getProducts(){
        return this.products;
    } 

    getProductsById(id){
        if(this.products.find((producto)=>producto.id===id)){
        alert('Id Existe')
    } else{
        alert('Id no Existe')}} 
}

const productos = new ProductManager

/* console.log(productos.getProducts()); */

productos.addProduct('Titulo1','descripcion1', 500, 'Imagen1', 'cod001', '10')
productos.addProduct('Titulo2','descripcion2', 500, 'Imagen2', 'cod002', '10')
productos.addProduct('Titulo3','descripcion3', 500, 'Imagen3', 'cod003', '10')

console.log(productos.getProducts());

productos.addProduct()