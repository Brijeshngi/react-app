import axios from "axios";
import { useEffect, useState } from "react";
const Table = (props) => {
  console.log(props);
  const [dataShadow, setDataShadow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = dataShadow.slice(startIndex, endIndex);
  function shadowData(environmentLink) {
    axios
      .get(`/config_${environmentLink}.json`)
      .then((response) => {
        setDataShadow(response.data.configs);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    shadowData(props.environment);
  }, [props.environment]);

  const DeleteData = () => {};
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Category</th>
            <th scope="col">Name</th>
            <th scope="col">Scope name</th>
            <th scope="col">Scope value</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Value</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((data, i) => (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>{data.category}</td>
                <td>{data.name}</td>
                <td>{data.scope.name}</td>
                <td>{data.scope.value}</td>
                <td>{data.timestamp}</td>
                <td>{`${data.value}`}</td>
                <td>
                  <button
                    onClick={() => {
                      props.onViewClick([data]);
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      props.onEditClick([data]);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={DeleteData}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <p>No data fetched</p>
          )}
        </tbody>
      </table>
      {itemsToDisplay.length > 0 ? (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </button>
            </li>

            <li className="page-item">
              <button onClick={() => setCurrentPage(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        " "
      )}
    </>
  );
};

export default Table;
