function CartItem({ cart }) {

  return (
    <div className="d-flex p-2 gap-2 border rounded-4">
      <img
        src={cart.imageUrl}
        alt="menu-poster"
        style={{
          width: "80px",
          height: "100px",
          objectFit: "cover",
        }}
        className="rounded-4"
      />
      <div>
        <h5 className="card-title">{cart.title}</h5>
        <p className="card-text">
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(cart.price)}
          {cart.status ? ` - ` : ''} 
          {cart.status && <span className="badge text-bg-warning">{cart.status}</span>}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
