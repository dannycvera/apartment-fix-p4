import React, { useState, useEffect } from "react";

function UserEdit(props) {
  const { currentUser } = props;
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    address: "",
    image_url: "",
    phone: "",
    email: "",
  });

  const {
    username,
    // password,
    first_name,
    last_name,
    address,
    image_url,
    phone,
    email,
  } = formData;

  useEffect(() => {
    let tempUser = { ...currentUser };
    delete tempUser.id;
    delete tempUser.created_at;
    delete tempUser.updated_at;
    setFormData(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const defaultSrc = (e) => {
    e.target.src = require("../img/noImage.svg");
  };

  return (
    <>
      <form
        className="user-forms"
        onSubmit={(e) => {
          e.preventDefault();
          let id = props.currentUser.id;
          props.userEditSubmit(formData, id);
        }}
      >
        <>
          <img
            onError={defaultSrc}
            className="user-forms-img"
            alt={username}
            src={image_url}
          ></img>
          <h3>Edit User</h3>
          <br />
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br /> */}
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address:
            <textarea name="address" value={address} onChange={handleChange} />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="image_url"
              value={image_url}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button>Submit</button>
        </>
      </form>
    </>
  );
}

export default UserEdit;
