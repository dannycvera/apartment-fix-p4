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
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let id = props.currentUser.id;
          props.userEditSubmit(formData, id);
        }}
      >
        {formData ? (
          <>
            <h3>Edit User</h3>
            <br />
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
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
                value={formData.first_name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <button>Submit</button>
          </>
        ) : (
          <></>
        )}
      </form>
    </>
  );
}

export default UserEdit;
