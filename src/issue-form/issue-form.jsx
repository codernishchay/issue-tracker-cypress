import bcryptjs from "bcryptjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./issue-form.css";

export default function IssueForm({ setissuelist }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    var salt = bcryptjs.genSaltSync(10);
    data.issueId = bcryptjs.hashSync(data.toString(), salt);
    setissuelist((pre) => [...pre, data]);
  };
  return (
    <div className="form-container" data-tag="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          data-tag="description"
          {...register("description")}
          required
          placeholder="Description"
        />
        <select {...register("severity")} data-tag="severity">
          <option value="A">Low</option>
          <option value="B">Medium</option>
          <option value="C">High</option>
        </select>
        <textarea
          data-tag="assigned_to"
          {...register("assigned_to")}
          required
          placeholder="Assigned To"
        />
        <input type="submit" data-tag="submit" />
      </form>
    </div>
  );
}
