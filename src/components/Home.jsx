import Table from "./Table";
import Footer from "./Footer";
import Navbar from "./Navbar";
import View from "./View";
import Edit from "./Edit";
import { useState } from "react";

function Home() {
  const [environment, setEnvironment] = useState("");
  const [viewMode, setViewMode] = useState("table"); // view, edit, table
  const [tableData, setTableData] = useState();
  // console.log("viewMode", viewMode);
  const updateEnvironment = (newEnvironment) => {
    // console.log("New environment selected: ", newEnvironment);
    setEnvironment(newEnvironment);
  };
  const changeToView = (data) => {
    setViewMode("view");
    setTableData(data);
  };
  const changeToEdit = (data) => {
    setViewMode("edit");
    setTableData(data);
  };

  return (
    <>
      <Navbar changeEnvironment={updateEnvironment} />
      {(() => {
        switch (viewMode) {
          case "view":
            return <View dataFromTable={tableData} />;
          case "edit":
            return <Edit dataFromTable={tableData} />;
          case "table":
            return (
              <Table
                environment={environment}
                viewMode={viewMode}
                onViewClick={changeToView}
                onEditClick={changeToEdit}
              />
            );
          default:
            return <p>Nothing to show</p>;
        }
      })()}
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
