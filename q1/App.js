import axios from 'axios';

import { useEffect, useState } from 'react';
//import "./App.css";


export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const addUser = async () => {
    if (message == "") {
      alert("Error")
      return;

    };

    const url = "http://localhost:4000/user";
    const data = {
      message: message,
    };

    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);

    setMessage("");
  };

  const getUser = async () => {
    const url = "http://localhost:4000/user"



    const result = await fetch(url);
    const list = await result.json();
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getUser(), []);
  return (
    <div>
      <h2 className="bg-dark text-light p-1 mb-0">ChatApp</h2>
      <h6 className="bg-dark text-light p-2 mb-3">
        Shriya, Id: 210940520093
      </h6>

      <div className="row">
        <div className="col-10">
          <input
            className="form-control form-control-lg m-2"
            type="text"
            name=""
            id=""
            value={message}
            onChange={handleMessageChange}
            placeholder="Lets chat here.."
          />
        </div>

        <div className="col-2">
          <input
            className="btn btn-primary w-75 p-2 m-2"
            type="button"
            name=""
            value="SEND"
            onClick={addUser}
          />
        </div>

        {list.map((item, index) => (
          <div key={index} className="alert alert-secondary fs-3">
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );

}