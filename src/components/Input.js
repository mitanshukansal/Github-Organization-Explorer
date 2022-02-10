import React from "react";
import Repos from "./Repos";

export default function Input() {
  let org = "",
    n = 10,
    m = 5,
    flag = 0;
  const repo = (flag) => {
    if (flag) {
      console.log(flag);
      flag = 0;
      <Repos org={org} n={n} m={m} />;
    }
  };
  return (
    <>
      <form
        className="row m-3"
        onSubmit={(e) => {
          e.preventDefault();
          flag = 1;
        }}
      >
        <div className="col-2"></div>
        <div className="form-floating mb-3 col">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Google"
            onChange={(e) => {
              org = e.currentTarget.value;
              // console.log(org);
            }}
            // required
          />
          <label htmlFor="name">Organization</label>
        </div>

        <div className="form-floating mb-3 col">
          <input
            type="number"
            className="form-control"
            id="repo"
            placeholder="10"
            onChange={(e) => {
              n = e.currentTarget.value;
            }}
            // required
          />
          <label htmlFor="repo">N (Top repos)</label>
        </div>

        <div className="form-floating mb-3 col">
          <input
            type="number"
            className="form-control"
            id="fork"
            placeholder="5"
            onChange={(e) => {
              m = e.currentTarget.value;
            }}
            // required
          />
          <label htmlFor="fork">M (Oldest Forks)</label>
        </div>

        <div className="col">
          <button type="submit" className="btn btn-primary p-2 m-2">
            Fetch
          </button>
        </div>
      </form>
      {/* {flag?<RepoDisplay />:""} */}
      {repo(flag)}
    </>
  );
}
