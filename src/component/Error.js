import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-md-6 text-center">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Oops!</h4>
            <p>Something went wrong. Please try again later.</p>
            <hr />
            <p className="mb-0">{err.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
