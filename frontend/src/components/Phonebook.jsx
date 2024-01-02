import React, { useEffect, useState } from "react";
import axios from "axios";
import db from "./../utils/fetchUtility";
import "./Phonebook.css";

const Phonebook = (props) => {
  const { data } = props;
  const [detail, setDetail] = useState(data);
  const [name, setName] = useState("");
  const [form, setForm] = useState({
    // id: "",
    name: "",
    number: "",
  });
  // fetching online data
  useEffect(() => {
    db.getAll()
      .then((response) => {
        console.log("Fetched Data : ", response.data);
        setDetail(response.data);
      })
      .catch((error) => {
        console.log("Fetching Error @getAll : ", error);
      });
  }, []);

  function searchField(e) {
    e.preventDefault();
    const newData = detail.filter((item) => {
      return item.name.includes(name.toString());
    });
    setDetail(newData);
  }
  function handleInputValue(e) {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      id: detail[detail.length - 1].id + 1,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setDetail((prevArr) => prevArr.concat(form));
    db.create(form)
      .then((response) => {
        console.log("response.data for Create : ", response.data);
        setDetail(detail.concat(response.data));
      })
      .catch((error) => console.log("error found in post request", error));
    setForm({
      // id: "",
      name: "",
      number: "",
    });
  }
  console.log("detail are here", detail);

  function handleDelete(e) {
    e.preventDefault();
    const { id } = e.target;
    console.log(id);
    if (window.confirm("Do you want to delete that number from phonebook")) {
      db.remove(id).then((response) => {
        console.log("Successfully delete id: ", id);
      });
    } else {
      console.log("user declined to delete!");
    }
  }

  return (
    <div class="phonebook">
      <h2>Add Detail</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputValue}
        />
        <br />
        <label htmlFor="name">Number :</label>

        <input
          type="number"
          name="number"
          value={form.number}
          onChange={handleInputValue}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Search Directory</h2>
      <form onSubmit={searchField}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Phone Directory Here</h2>
      {detail &&
        detail.map((tushar) => {
          return (
            <div>
              <li key={tushar.id}>
                {tushar.name} --- {tushar.number}
                <button id={tushar.id} onClick={handleDelete}>
                  Delete
                </button>
              </li>
            </div>
          );
        })}
    </div>
  );
};

export default Phonebook;
