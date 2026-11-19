const RegisterPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10">Register</h1>
      <div className="mx-auto max-w-xl">
        <form className="grid gap-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-1 font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border rounded-md h-10 px-3 focus:outline-none w-full focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="border rounded-md h-10 px-3 focus:outline-none w-full focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md h-10 px-3 focus:outline-none w-full focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="border rounded-md h-10 px-3 focus:outline-none w-full focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="confirmpwd" className="block mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpwd"
              className="border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="grid grid-cols-1">
            <input
              type="submit"
              value="Submit"
              className="border rounded-md bg-[#c8e6c9] font-bold text-md  h-11 hover:bg-[#b5ddb6] transition-colors"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
