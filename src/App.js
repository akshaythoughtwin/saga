import { useDispatch, useSelector } from "react-redux";
import { getAPIRequest } from "./redux/actions";
import MyImage from "./tenor.gif";
import logo from "./logo.png";

export const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const getAPIData = () => {
    dispatch(getAPIRequest());
  };

  return (
    <div className="maindiv">
      <img src={logo} alt="loader" width="100px" />
      <div>
        <button className="addbutton" onClick={getAPIData}>
          GET API DATA
        </button>
      </div>
      <br></br>
      {data.loading ? (
        <img src={MyImage} alt="loader" width="300px" />
      ) : (
        data.apidata.map((el) => (
          <div className="listdivitem" key={el.id}>
            <li>{el.name}</li>
          </div>
        ))
      )}
    </div>
  );
};
