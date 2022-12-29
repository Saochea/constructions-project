import "bulma/css/bulma.css";
import { useState } from "react";
import axios from "axios";
function App() {
  const [cate, setCate] = useState({
    categoryName: "",
    desc: "",
    image: "",
  });

  console.log(cate);

  const handleChange = (e) => {
    setCate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("categoryName", cate.categoryName);
      formData.append("desc", cate.desc);
      formData.append("image", cate.image);

      const res = await axios.post(
        "http://localhost:3001/categories",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App container is-max-desktop section">
      <div className="field">
        <label className="label">Category Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            name="categoryName"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            name="desc"
            type="text"
            placeholder="Text input"
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Photo</label>
        <div className="control">
          <input
            className="input"
            type="file"
            placeholder="Text input"
            name="image"
            onChange={(e) => {
              setCate((prev) => ({
                ...prev,
                [e.target.name]: e.target.files[0],
              }));
            }}
          />
        </div>
      </div>
      <button className="button is-success" onClick={handleClick}>
        submit
      </button>
    </div>
  );
}

export default App;
