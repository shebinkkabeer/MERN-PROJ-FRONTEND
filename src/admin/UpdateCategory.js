import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {
  getCategories,
  getCategory,
  updateCategory
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {
  const { user, token } = isAutheticated();

  

  const [values, setValues] = useState({
    name: "",
    loading: false,
    error: "",
    getaRedirect: false,
    newName:""
  });

  const {
    name,
    loading,
    error,
    newName
  } = values;

  const preload = categoryId => {
    getCategory(categoryId).then(data => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
        });
      }
    });
  };



  useEffect(() => {
    preload(match.params.categoryId);
  }, []);
  console.log({token});
  console.log(user._id);
  console.log(match.params.categoryId);

  

  //TODO: work on it
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateCategory(match.params.categoryId, user._id,token,{name}).then(
      data => {
        if (data?.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            newName:true
          });
        }
      }
    );
  };

  const handleChange = name => event => {
    const value =event.target.value;
    setValues({ ...values, name: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: newName ? "" : "none" }}
    >
      <h4>Updation successfull</h4>
    </div>
  );
  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Type new category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange(name)}
          value={name}
          autoFocus
          required
          placeholder="for ex.Wildbore"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          update Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Update Category Here!"
      description="Welcome to Category Updation Section... "
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {myCategoryForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
