const RegisterPage = () => {
  return (
    <div className="mx-auto w-100">
      <form className="grid">
        <div className="grid-cols-2">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="grid-cols-2">
          <label>Email</label>
          <input type="text" />
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <div className="grid-cols-1">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="grid-cols-1">
          <label>Confirm Password</label>
          <input type="text" />
        </div>
        <div className="grid-cols-1">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
