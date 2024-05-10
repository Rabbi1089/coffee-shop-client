const CoffeeCard = ({ coffee }) => {
  const { coffeeName, chef, supplier, taste, category, details, photoUrl } =
    coffee;
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
        <div className="btn-group btn-group-vertical border w-1/4 my-2">
          <button className="btn btn-active m-3 p-2">View</button>
          <button className="btn m-3 p-2">Edit</button>
          <button className="btn m-3 p-2">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
