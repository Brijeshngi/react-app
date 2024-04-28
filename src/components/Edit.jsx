function Edit(props) {
  const dataForRow = props.dataFromTable;
  console.log(dataForRow);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
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
          {dataForRow.map((data) => (
            <tr>
              <td>
                <input type="text" placeholder="data" value={data.category} />
              </td>
              <td>
                <input type="text" placeholder="data" value={data.name} />
              </td>
              <td>
                <input type="text" placeholder="data" value={data.scope.name} />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="data"
                  value={data.scope.value}
                />
              </td>
              <td>
                <input type="text" placeholder="data" value={data.timestamp} />
              </td>
              <td>
                <input type="text" placeholder="data" value={`${data.value}`} />
              </td>

              <td>
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Edit;
