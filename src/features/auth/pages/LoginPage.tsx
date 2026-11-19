const LoginPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
      <div className="mx-auto max-w-md">
        <form className="grid gap-8">
          <div className="grid grid-cols-1">
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

export default LoginPage;
