import "./RentedMoviesList.css";

const RentedMoviesList = () => {
  return (
    <div className="body-wrapper">
      <section className="your-movies">
        <h2 className="your-movies-header">Your movies</h2>
        <table id="your-movies-table"></table>
      </section>
    </div>
  );
};

export default RentedMoviesList;
