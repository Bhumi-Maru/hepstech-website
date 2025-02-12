import React from "react";

export default function Login({ setLoginModalOpen }) {
  return (
    <>
      {/* <!-- START LOGIN MODAL --> */}
      <div className="modal" role="dialog" aria-hidden="false" tabindex="-1">
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog sm:max-w-lg">
          <div className="modal-content" role="document">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setLoginModalOpen(false)}
            >
              <span className="sr-only"> Close </span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content goes here (login form) */}
            <div className="px-4 py-8 modal-body sm:px-10">
              <h2 className="text-2xl font-bold text-center text-gray-900">
                Login
              </h2>
              <form className="mt-6 space-y-4" action="#" method="POST">
                <div>
                  <label htmlFor="email"> Enter Email / Mobile Number </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password"> Enter Password </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full mt-1 btn btn-primary">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END LOGIN MODAL --> */}
    </>
  );
}
