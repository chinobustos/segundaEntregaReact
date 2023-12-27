import "./Item.css"
const Item = ({producto}) => {
  return (
    <div className="card">
      <img src={producto.img} alt="" />
       <p>{producto.nombre}</p>
       <p>{producto.detalle}</p>
       <p>${producto.precio}</p>
       <p>{producto.stock}</p>
    </div> 
  );
};

export default Item
