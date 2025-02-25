import React from "react";

export default function All_Products_4({ products }) {
  return (
    <>
      {/* ALL PRODUCTS SECTION 4 [TABLE FOR PRODUCT] */}
      <div class="mt-4" id="productsView">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 rounded-lg shadow">
                <table class="min-w-full divide-y divide-gray-200 custom-table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input type="checkbox" name="" id="" />
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Inventory</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 list">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <tr key={product.id}>
                          {" "}
                          {/* Ensure a unique key */}
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td className="nowrap">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center flex-none w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                                <svg
                                  className="w-6 h-6 text-gray-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                              <span className="font-medium product-name">
                                {product.name}
                              </span>
                            </div>
                          </td>
                          <td>₹{product.price}</td>
                          <td className="nowrap">
                            <span className="!px-2 badge badge-info">
                              {product.inventory}
                            </span>
                            <span className="ml-1 text-gray-600">in stock</span>
                          </td>
                          <td>{product.type}</td>
                          <td>
                            <span className="badge badge-success">
                              {product.status}
                            </span>
                          </td>
                          <td>
                            <div className="flex items-center -ml-2 space-x-3">
                              <a
                                href="#"
                                className="btn-circle"
                                aria-label="Edit"
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="btn-circle"
                                aria-label="Delete"
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colspan="7"
                          className="px-4 py-3 text-center bg-white rounded-b-lg"
                        >
                          <div class="flex items-center justify-center text-sm font-medium text-gray-500">
                            <svg
                              className="w-6 h-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              ></path>
                            </svg>
                            No Data Found
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>

                  <tfoot class="hidden not-found">
                    <tr>
                      <td
                        colspan="7"
                        class="px-4 py-3 text-center bg-white rounded-b-lg"
                      >
                        <div class="flex items-center justify-center text-sm font-medium text-gray-500">
                          <svg
                            class="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                          No Data Found
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
          <p className="text-gray-700 showing">
            Showing <span id="page-first-item-number">1</span> -{" "}
            <span id="page-last-item-number">5</span> of{" "}
            <span id="totalProducts">40</span> products
          </p>

          <ul className="mt-5 pagination sm:mt-0">
            <li className="active">
              <a className="page" href="#" data-i="1" data-page="10">
                1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
