import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MyOrders_1() {
  const [orders, setOrders] = useState([
    {
      id: "334902461",
      date: "20-05-2021",
      amount: "$305.98",
      status: "Received",
    },
    {
      id: "334902462",
      date: "21-05-2021",
      amount: "$150.50",
      status: "Process",
    },
    {
      id: "334902463",
      date: "22-05-2021",
      amount: "$99.99",
      status: "Shipped",
    },
    {
      id: "334902464",
      date: "23-05-2021",
      amount: "$220.75",
      status: "Delivered",
    },
    {
      id: "334902465",
      date: "24-05-2021",
      amount: "$180.60",
      status: "Cancel",
    },
    {
      id: "334902466",
      date: "25-05-2021",
      amount: "$120.30",
      status: "Return",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = orders.filter((order) => {
    return (
      (filterStatus === "" || order.status === filterStatus) &&
      (searchQuery === "" || order.id.includes(searchQuery))
    );
  });

  return (
    <div className="md:col-span-3">
      {/* Header Section */}
      <div className="lg:flex lg:items-center lg:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        <div className="mt-3 sm:flex sm:items-center sm:space-x-5 lg:mt-0">
          {/* Filter by Status */}
          <div className="sm:flex sm:items-center sm:space-x-2">
            <label>Filter by Status:</label>
            <div className="relative mt-1 sm:mt-0">
              <select onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="">All</option>
                <option value="Received">Received</option>
                <option value="Process">Process</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancel">Cancel</option>
                <option value="Return">Return</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mt-4 sm:mt-0">
            <label className="sr-only">Search Orders</label>
            <div className="relative">
              <button
                type="button"
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <input
                type="search"
                placeholder="Search by Order ID..."
                className="!pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex flex-col mt-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 custom-table">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="nowrap">Order ID</th>
                    <th className="nowrap">Date</th>
                    <th className="nowrap">Amount</th>
                    <th className="nowrap">Status</th>
                    <th className=""></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="font-semibold nowrap">{order.id}</td>
                        <td className="nowrap">{order.date}</td>
                        <td className="nowrap">{order.amount}</td>
                        <td className="nowrap">
                          <span
                            className={`badge badge-${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-4">
                            <Link
                              to="/order-details"
                              title="View Order Details"
                              className="btn-circle"
                              aria-label="View"
                              data-microtip-position="top"
                              data-target="tooltip"
                              role="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </Link>
                            <button
                              className="btn-circle"
                              title="Download Invoice"
                              aria-label="Download Invoice"
                              data-microtip-position="top"
                              data-target="tooltip"
                              role="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Function to determine badge color based on status
function getStatusColor(status) {
  switch (status) {
    case "Received":
      return "warning";
    case "Process":
      return "info";
    case "Shipped":
      return "purple";
    case "Delivered":
      return "success";
    case "Cancel":
      return "danger";
    case "Return":
      return "orange";
    default:
      return "gray";
  }
}
