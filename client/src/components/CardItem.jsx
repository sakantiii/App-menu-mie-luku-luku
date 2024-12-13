function CardItem({ menu, addToCart }) {
  return (
    <>
      <div className="col p-3">
        <div className="card">
          <img
            src={menu.imageUrl}
            className="card-img-top"
            alt="image-poster"
            style={{ height: "300px", objectFit: "cover", padding: "10px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{menu.title}</h5>
            <p className="card-text">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}
            {menu.status ? ` - ` : ''} {/* Only show hyphen if status has a value */}
            {menu.status && <span className="badge text-bg-warning">{menu.status}</span>}
            </p>
            <a
              href="#"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target={"#modal" + menu.id}
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={"modal" + menu.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {menu.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={menu.imageUrl}
                className="card-img-top"
                alt="image-poster"
              />
              <p>
              <br/>
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(menu.price)}
              {menu.status ? ` - ` : ''} {/* Only show hyphen if status has a value */}
              {menu.status && <span className="badge text-bg-warning">{menu.status}</span>}
              </p>
              <p>
                {menu.deskripsi}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  addToCart(menu);
                }}
                type="button"
                className="btn btn-success"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
