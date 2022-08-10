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
const item7 = new Item ("7", "https://http2.mlstatic.com/D_NQ_NP_859248-MLA42052826865_062020-O.webp","Prensa c", 2200, 7);
const item8 = new Item ("8", "data:image/jpeg;base64,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","Atornillador inalambrico", 55000, 4);
const item9 = new Item ("9", "data:image/jpeg;base64,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","Lijadora Banda",11000 , 3);
const item10 = new Item ("10", "https://http2.mlstatic.com/D_NQ_NP_777533-MLA29194648634_012019-O.jpg","Amoladora 180mm", 27000, 5);
const item11 = new Item ("11", "https://http2.mlstatic.com/D_NQ_NP_779312-MLA49982369514_052022-O.jpg","Percutor 60 j", 49000, 2);


const arrProductos =[];
arrProductos.push(item1);
arrProductos.push(item2);
arrProductos.push(item3);
arrProductos.push(item4);
arrProductos.push(item5);
arrProductos.push(item6);
arrProductos.push(item7);
arrProductos.push(item8);
arrProductos.push(item9);
arrProductos.push(item10);
arrProductos.push(item11);

export default arrProductos