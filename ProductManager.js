class ProductManager{
    constructor(){
        this.products = [];
        this.id = 1;
    }
    getProducts(){
        return this.products;
    }
    addProduct(title, description, price,link,stock){
        const producto = {
            titulo: title,
            descripcion: description,
            precio: price,
            thumbnail: link,
            cantidad: stock 
        }
        if(title === "" || description === ""|| price === "" ||link ==="" || stock ===""){
            console.log('Su producto no puede ser cargado');
            return false
        }
        else{
            producto.id = this.id;
            this.products.push(producto);
            this.id +=1
            return true
        }
    }
    getProductById(id){
        if (this.products[id] === undefined){
            console.log('Su id no existe');
        }
        else{
            console.log(this.products[id]);
        }
    }
}
let producto1 = new ProductManager();
producto1.addProduct("1","2","3","2","5");
/* producto1.addProduct("1","1","","2","5"); */
/* producto1.getProductById(2); */
let variable = producto1.addProduct("1","1","3","2","5");
if(variable){
    producto1.getProductById(1);
}