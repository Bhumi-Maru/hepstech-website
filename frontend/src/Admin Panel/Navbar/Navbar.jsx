import React from "react";

export default function Navbar() {
  return (
    <>
      {/* <!-- START HEADER --> */}
      <header className="relative z-10 flex-shrink-0 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex items-center h-16 lg:h-14">
            <button
              className="-ml-2 btn-circle lg:hidden"
              data-toggle="drawer"
              data-target="#mobileNavigation"
            >
              <span className="sr-only"> Open sidebar </span>
              <svg
                className="w-8 h-8"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center justify-between flex-1 ml-4 lg:ml-0">
              <a
                href="dashboard.html"
                title="Dashboard"
                className="flex items-center lg:hidden"
              >
                <svg
                  className="w-10 h-10 text-skin-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 34 32"
                  fill="currentColor"
                >
                  <path d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z" />
                  <path d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z" />
                </svg>
                <p className="ml-3 text-2xl font-extrabold leading-none tracking-tight truncate">
                  Hepstech
                </p>
              </a>

              <ol className="items-center hidden space-x-2 lg:flex">
                <li>
                  <div>
                    <a
                      href="dashboard.html"
                      title="Dashboard"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      <span className="sr-only"> Dashboard </span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                    </svg>
                    <a
                      href="all-media.html"
                      title="All Media"
                      className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      All Media
                    </a>
                  </div>
                </li>
              </ol>

              <div className="flex items-center ml-4 md:ml-6">
                <div className="ml-5 dropdown">
                  <button
                    type="button"
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-primary"
                    data-toggle="dropdown"
                    id="userMenuButton"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full lg:w-9 lg:h-9">
                      <span className="font-medium leading-none text-white">
                        EB
                      </span>
                    </span>
                    <span className="hidden ml-2 text-sm font-semibold text-gray-700 md:block">
                      <span className="sr-only">Open user menu for </span>
                      Emilia Birch
                    </span>
                    <svg
                      className="flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 md:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className="w-56 dropdown-menu right"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div className="divide-y divide-gray-100">
                      <div className="px-4 py-3" role="none">
                        <p className="text-sm" role="none">
                          Signed in as
                        </p>
                        <p
                          className="mt-1 text-sm font-medium text-gray-900 truncate"
                          role="none"
                        >
                          emiliabirch@example.com
                        </p>
                      </div>
                      <div className="py-1" role="none">
                        <p
                          className="dropdown-item"
                          role="menuitem"
                          tabindex="-1"
                        >
                          Customer ID: #156282085
                        </p>
                      </div>

                      <div className="py-1" role="none">
                        <a
                          href="profile.html"
                          title="Profile"
                          className="dropdown-item"
                          role="menuitem"
                          tabindex="-1"
                        >
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Profile
                        </a>
                        <a
                          href="#"
                          title=""
                          className="dropdown-item"
                          role="menuitem"
                          tabindex="-1"
                        >
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Help
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <form role="none">
                          <button
                            type="submit"
                            className="w-full dropdown-item"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                          >
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                            Logout
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- END HEADER --> */}
    </>
  );
}
