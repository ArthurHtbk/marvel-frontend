const Pagination = ({ skipped, setSkipped, data }) => {
  return (
    <div className="pagination">
      {skipped >= 100 && (
        <button
          className="skip-button"
          onClick={() => {
            setSkipped(0);
            // console.log(skipped);
          }}
        >
          First Page
        </button>
      )}
      {skipped >= 100 && (
        <button
          className="skip-button"
          onClick={() => {
            setSkipped(skipped - 100);
            // console.log(skipped);
          }}
        >
          Previous page
        </button>
      )}
      {skipped < data.count - 100 && (
        <button
          className="skip-button"
          onClick={() => {
            setSkipped(skipped + 100);
            // console.log(skipped);
          }}
        >
          Next page
        </button>
      )}
    </div>
  );
};

export default Pagination;
