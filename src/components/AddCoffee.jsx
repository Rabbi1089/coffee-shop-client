import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const coffee = {
      coffeeName,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };

    // console.log(coffee)
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
       // console.log("from coffee client", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You Data inserted!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="max-w-[1320px] bg-[#F4F3F0] p-12 rounded-lg">
      <h1 className=" text-6xl font-serif font-extrabold">add a coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="">
          <div className="md:flex">
            {/* Name and chef row */}
            <div className="form-control md:w-1/2 md:p-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="coffeeName"
                placeholder="Enter a coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:flex md:w-1/2 md:p-4">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter Chef name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/*  Supplier row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 md:p-4">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter a coffee Supplier"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2 md:p-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee Taste"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="form-control md:w-1/2 md:p-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter a coffee Category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2 md:p-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee Details"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control md:full md:p-4">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter Photo URL"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-block bg-[#D2B48C] uppercase md:m-2 md:p-4 mt-4">
            add coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
