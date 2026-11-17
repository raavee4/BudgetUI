import { useState } from "react";
import type { SubmitEvent } from "react";

const inputClasses =
  "w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 placeholder:text-black/40 focus:border-brand-pink-dark focus:ring-4 focus:ring-brand-pink/40 focus:outline-none";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: call the login service with { email, password, remember }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10"
      >
        <div className="bg-black px-8 py-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink text-2xl font-bold text-black">
            $
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="mt-1 text-sm text-brand-green">
            Sign in to your BudgetUI account
          </p>
        </div>

        <div className="space-y-5 border-t-4 border-brand-green-dark px-8 py-8">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-black"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-black"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={inputClasses}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-black">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-brand-pink-dark"
              />
              Remember me
            </label>
            <a
              href="#"
              className="font-semibold text-brand-pink-dark hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-brand-pink py-3 font-bold text-black transition-colors hover:bg-brand-pink-dark hover:text-white focus:ring-4 focus:ring-brand-pink/40 focus:outline-none"
          >
            Log in
          </button>

          <p className="text-center text-sm text-black">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="font-semibold text-brand-green-dark hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
