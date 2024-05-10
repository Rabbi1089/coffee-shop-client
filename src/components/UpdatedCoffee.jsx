import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedCoffee = () => {
  const coffee = useLoaderData();
  const {_id, coffeeName, chef, supplier, taste, category, details, photoUrl } =
    coffee;
  const handleUpdatedCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const updatedCoffee = {
      coffeeName,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };

    console.log(updatedCoffee)
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
         console.log("from update", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "coffee updated successfully !",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="max-w-[1320px] bg-[#F4F3F0] p-12 rounded-lg">
      <h1 className=" text-6xl font-serif font-extrabold">
        Update {coffeeName}
      </h1>
      <form onSubmit={handleUpdatedCoffee}>
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
                defaultValue={coffeeName}
                placeholder="coffeeName"
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
                defaultValue={chef}
                placeholder="chef"
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
                defaultValue={supplier}
                placeholder="supplier"
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
                defaultValue={taste}
                placeholder="taste"
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
                defaultValue={category}
                placeholder="category"
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
                defaultValue={details}
                placeholder="details"
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
              defaultValue={photoUrl}
              placeholder="PhotoUrl"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-block bg-[#D2B48C] uppercase md:m-2 md:p-4 mt-4">
            Update coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedCoffee;
