function View(props) {
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
          </tr>
        </thead>
        <tbody>
          {dataForRow.map((data, i) => (
            <tr key={i}>
              <td>{data.category}</td>
              <td>{data.name}</td>
              <td>{data.scope.name}</td>
              <td>{data.scope.value}</td>
              <td>{data.timestamp}</td>
              <td>{`${data.value}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default View;
