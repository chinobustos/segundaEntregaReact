const productos =[
    {
        id:"gibsonSg",
        nombre:"Gibson SG",
        img:"/img/gibson-sg.webp",
        detalles:"",
        stock:"disponibles: 1",
        precio:"5000",
        categoria:"guitarras",
    },
    {
        id:"LesPaul",
        nombre:"Gibson Les Paul",
        img:"/img/les-paul.jpg",
        detalles:"",
        stock:"disponibles: 2",
        precio:"2000",
        categoria:"guitarras",

    },
    {
        id:"bajoFender",
        nombre:"Bajo Fender Jazz Bazz",
        img:"/img/fender-jazz-bass.jpg",
        detalles:"",
        stock:"disponibles: 3",
        precio:"2000",
        categoria:"bajos",

    },
    {
        id:"Parquer",
        nombre:"Bajo Electrico Parquer",
        img:"/img/bajo-parquer.jpg",
        detalles:"",
        stock:"disponibles: 1",
        precio:"1500",
        categoria:"bajos",

    },
    {
        id:"Strato",
        nombre:"Fender StratoCaster",
        img:"/img/strato-caster.jpg",
        detalles:"",
        stock:"disponibles: 3",
        precio:"3500",
        categoria:"guitarras",

    },
    {
        id:"mapex",
        nombre:"Bateria Mapex",
        img:"/img/bateria-mapex.webp",
        detalles:"",
        stock:"disponibles: 1",
        precio:"6000",
        categoria:"baterias",

    },
    {
        id:"wha",
        nombre:"Pedal wah-wah Cry Baby",
        img:"/img/wah-wah.webp",
        detalles:"",
        stock:"disponibles: 2",
        precio:"900",
        categoria:"accesorios",

    },
    {
        id:"baqueta",
        nombre:"Baquetas",
        img:"/img/baquetas.webp",
        detalles:"",
        stock:"disponibles: 5",
        precio:"300",
        categoria:"accesorios",

    },
    {
        id:"puas",
        nombre:"Puas Fender",
        img:"/img/puas.jpg",
        detalles:"",
        stock:"disponibles: 10",
        precio:"100",
        categoria:"accesorios",

    },
    {
        id:"ampli",
        nombre:"Amplificador Marshall ",
        img:"/img/ampli.jpg",
        detalles:"",
        stock:"disponibles: 1",
        precio:"450",
        categoria:"accesorios",
    },

]
const obtenerProductos = new Promise ((resolve)=> {
    setTimeout(()=> {
        resolve(productos);
    },2000 );
});
export default obtenerProductos