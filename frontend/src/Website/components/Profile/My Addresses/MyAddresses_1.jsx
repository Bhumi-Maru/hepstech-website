import React from "react";

export default function MyAddresses_1({ setIsOpenAddressModal }) {
  return (
    <>
      {/* My Addresses 1 */}
      <div className="md:col-span-3">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">My Addresses</h1>

          <button
            title="Add New Address"
            className="hidden btn btn-primary sm:inline-flex"
            data-toggle="modal"
            data-target="#addNewAddressModal"
            onClick={() => setIsOpenAddressModal(true)}
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add New Address
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 px-4 py-5">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <div className="flex-1 ml-5">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-default"> Work </span>

                    <a href="#" title="" className="btn-link">
                      {" "}
                      Edit{" "}
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    3 Park Heath Cottages, Park Heath, Cheswardine, TF9 2NR
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 px-4 py-5">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <div className="flex-1 ml-5">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-default"> Home </span>

                    <a href="#" title="" className="btn-link">
                      {" "}
                      Edit{" "}
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Arkle Lodge Nursing Home, Sprents Lane, Overton, RG25 3HX
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 px-4 py-5">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="flex-1 ml-5">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-default"> Other </span>

                    <a href="#" title="" className="btn-link">
                      {" "}
                      Edit{" "}
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Wednesday House, High Street, Caerleon, NP18 1AZ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="h-full border-2 border-gray-200 border-dashed rounded-lg">
            <div className="grid h-full max-w-lg mx-auto text-center place-items-center">
              <div className="px-8 py-10">
                <svg
                  className="w-32 h-32 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <h1 className="mt-5 text-2xl font-bold text-gray-900">
                  You don't have any address.
                </h1>
                <p className="mt-2 text-gray-600">
                  Donec fringilla, ante nec consectetur placerat, velit libero
                  cursus risus, sit amet hendrerit velit enim non leo.
                </p>

                <button
                  title="Add New Address"
                  className="mt-5 btn btn-primary"
                  data-toggle="modal"
                  data-target="#addNewAddressModal"
                  onClick={() => setIsOpenAddressModal(true)}
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add New Address
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          title="Add New Address"
          className="mt-5 btn btn-primary sm:hidden"
          data-toggle="modal"
          data-target="#addNewAddressModal"
          onClick={() => setIsOpenAddressModal(true)}
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add New Address
        </button>
      </div>
    </>
  );
}
