import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees , setCoffees}) => {
  const { _id, coffeeName, chef, supplier, taste, category, details, photoUrl } =
    coffee;
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5000/coffee/${id}` , 
               {
                method : 'DELETE'
               } 
              )
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                const remaining = coffees.filter(cof => cof._id !== _id)
                setCoffees(remaining)
                }
              })
            }
          });
    }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Movie" />
      </figure>
      <div className="flex justify-between">
        <div className="w-3/4">
          {" "}
          <h2>
            Name : {coffeeName} <br />
            Chef : {chef}
          </h2>
          <p>supplier : {supplier}.</p>
          <p>taste : {taste}.</p>
          <p>Details : {details}.</p>
          <span>Category : {category}</span>
        </div>
        <div className="btn-group btn-group-vertical w-1/4 my-2 space-y-4 p-2">
          <button className="btn btn-active w-full">View</button>
          <Link to={`/updatedCoffee/${_id}`}>
          <button className="btn  w-full">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn w-full bg-red-700 text-white">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
