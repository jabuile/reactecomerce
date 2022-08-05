class Item {
    constructor(codigo, foto, nombre, precio, stock){
        this.codigo = codigo;
        this.foto = foto;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
    }

}

const item1 = new Item ("1", "https://http2.mlstatic.com/D_NQ_NP_823068-MLA45334241103_032021-O.webp", "martillo", 1500, 5);
const item2 = new Item ("2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3M-aHlhKsLAhyAYkHWJRk523zNU5aa2Au-hQ25gyv4IST3a0OjrLqb6Hbs1LW0iZ_f8s&usqp=CAU","amoladora",8900, 6);
const item3 = new Item ("3","https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW508S_1.jpg","taladro", 7500, 3);
const item4 = new Item ("4","https://pintureriasagitario.com.ar/wp-content/uploads/2020/08/Lijadora.jpg","lijadora", 6500, 4);
const item5 = new Item ("5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZnzqLOB7jo2hyg1a7XplaYkC-zKvLQVqqSDGifiySjVFBnhlyK98mwmZUn0r99PkxL0&usqp=CAU", "sierra circular", 12000, 8);
const item6 = new Item ("6", "https://www.bultor.com.ar/wp-content/uploads/2017/03/STHR1232K-AR.jpg","Rotomartillo", 18000, 9);

const arrProductos =[];
arrProductos.push(item1);
arrProductos.push(item2);
arrProductos.push(item3);
arrProductos.push(item4);
arrProductos.push(item5);
arrProductos.push(item6);

export default arrProductos