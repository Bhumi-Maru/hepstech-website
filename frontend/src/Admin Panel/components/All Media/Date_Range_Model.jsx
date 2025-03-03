import React from "react";
import moment from "moment";

export default function Date_Range_Model({ onDateSelect }) {
  const handleRangeClick = (rangeKey) => {
    let startDate, endDate;

    switch (rangeKey) {
      case "Today":
        startDate = endDate = moment().format("DD/MM/YYYY");
        break;
      case "Yesterday":
        startDate = endDate = moment().subtract(1, "days").format("DD/MM/YYYY");
        break;
      case "Last 7 Days":
        startDate = moment().subtract(6, "days").format("DD/MM/YYYY");
        endDate = moment().format("DD/MM/YYYY");
        break;
      case "Last 30 Days":
        startDate = moment().subtract(29, "days").format("DD/MM/YYYY");
        endDate = moment().format("DD/MM/YYYY");
        break;
      case "This Month":
        startDate = moment().startOf("month").format("DD/MM/YYYY");
        endDate = moment().format("DD/MM/YYYY");
        break;
      case "Last Month":
        startDate = moment()
          .subtract(1, "months")
          .startOf("month")
          .format("DD/MM/YYYY");
        endDate = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("DD/MM/YYYY");
        break;
      case "Custom Range":
        return; // Handle custom range separately
      default:
        return;
    }

    onDateSelect(`${startDate} - ${endDate}`);
  };
  return (
    <>
      {/* DATE RANGE MODEL IN ALL MEDIA PAGE */}
      <div
        className="daterangepicker ltr show-ranges opensright"
        style={{
          display: "block",
          top: "35px",
          left: "28.5px",
          right: "auto",
        }}
      >
        <div className="ranges">
          <ul>
            {[
              "Today",
              "Yesterday",
              "Last 7 Days",
              "Last 30 Days",
              "This Month",
              "Last Month",
              "Custom Range",
            ].map((range) => (
              <li key={range} onClick={() => handleRangeClick(range)}>
                {range}
              </li>
            ))}
          </ul>
        </div>
        <div className="drp-calendar left">
          <div className="calendar-table">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th className="prev available">
                    <span></span>
                  </th>
                  <th colspan="5" className="month">
                    Feb 2025
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="weekend off ends available" data-title="r0c0">
                    26
                  </td>
                  <td className="off ends available" data-title="r0c1">
                    27
                  </td>
                  <td className="off ends available" data-title="r0c2">
                    28
                  </td>
                  <td className="off ends available" data-title="r0c3">
                    29
                  </td>
                  <td className="off ends available" data-title="r0c4">
                    30
                  </td>
                  <td className="off ends available" data-title="r0c5">
                    31
                  </td>
                  <td className="weekend available" data-title="r0c6">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r1c0">
                    2
                  </td>
                  <td className="available" data-title="r1c1">
                    3
                  </td>
                  <td className="available" data-title="r1c2">
                    4
                  </td>
                  <td className="available" data-title="r1c3">
                    5
                  </td>
                  <td className="available" data-title="r1c4">
                    6
                  </td>
                  <td className="available" data-title="r1c5">
                    7
                  </td>
                  <td className="weekend available" data-title="r1c6">
                    8
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r2c0">
                    9
                  </td>
                  <td className="available" data-title="r2c1">
                    10
                  </td>
                  <td className="available" data-title="r2c2">
                    11
                  </td>
                  <td className="available" data-title="r2c3">
                    12
                  </td>
                  <td className="available" data-title="r2c4">
                    13
                  </td>
                  <td className="available" data-title="r2c5">
                    14
                  </td>
                  <td className="weekend available" data-title="r2c6">
                    15
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r3c0">
                    16
                  </td>
                  <td className="available" data-title="r3c1">
                    17
                  </td>
                  <td className="available" data-title="r3c2">
                    18
                  </td>
                  <td className="available" data-title="r3c3">
                    19
                  </td>
                  <td className="available" data-title="r3c4">
                    20
                  </td>
                  <td className="available" data-title="r3c5">
                    21
                  </td>
                  <td className="weekend available" data-title="r3c6">
                    22
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r4c0">
                    23
                  </td>
                  <td className="available" data-title="r4c1">
                    24
                  </td>
                  <td className="available" data-title="r4c2">
                    25
                  </td>
                  <td className="available" data-title="r4c3">
                    26
                  </td>
                  <td className="available" data-title="r4c4">
                    27
                  </td>
                  <td
                    className="today active start-date active end-date available"
                    data-title="r4c5"
                  >
                    28
                  </td>
                  <td className="weekend off ends available" data-title="r4c6">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="weekend off ends available" data-title="r5c0">
                    2
                  </td>
                  <td className="off ends available" data-title="r5c1">
                    3
                  </td>
                  <td className="off ends available" data-title="r5c2">
                    4
                  </td>
                  <td className="off ends available" data-title="r5c3">
                    5
                  </td>
                  <td className="off ends available" data-title="r5c4">
                    6
                  </td>
                  <td className="off ends available" data-title="r5c5">
                    7
                  </td>
                  <td className="weekend off ends available" data-title="r5c6">
                    8
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="calendar-time" style={{ display: "none" }}></div>
        </div>
        <div className="drp-calendar right">
          <div className="calendar-table">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th></th>
                  <th colspan="5" className="month">
                    Mar 2025
                  </th>
                  <th className="next available">
                    <span></span>
                  </th>
                </tr>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="weekend off ends available" data-title="r0c0">
                    23
                  </td>
                  <td className="off ends available" data-title="r0c1">
                    24
                  </td>
                  <td className="off ends available" data-title="r0c2">
                    25
                  </td>
                  <td className="off ends available" data-title="r0c3">
                    26
                  </td>
                  <td className="off ends available" data-title="r0c4">
                    27
                  </td>
                  <td
                    className="today off ends active start-date active end-date available"
                    data-title="r0c5"
                  >
                    28
                  </td>
                  <td className="weekend available" data-title="r0c6">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r1c0">
                    2
                  </td>
                  <td className="available" data-title="r1c1">
                    3
                  </td>
                  <td className="available" data-title="r1c2">
                    4
                  </td>
                  <td className="available" data-title="r1c3">
                    5
                  </td>
                  <td className="available" data-title="r1c4">
                    6
                  </td>
                  <td className="available" data-title="r1c5">
                    7
                  </td>
                  <td className="weekend available" data-title="r1c6">
                    8
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r2c0">
                    9
                  </td>
                  <td className="available" data-title="r2c1">
                    10
                  </td>
                  <td className="available" data-title="r2c2">
                    11
                  </td>
                  <td className="available" data-title="r2c3">
                    12
                  </td>
                  <td className="available" data-title="r2c4">
                    13
                  </td>
                  <td className="available" data-title="r2c5">
                    14
                  </td>
                  <td className="weekend available" data-title="r2c6">
                    15
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r3c0">
                    16
                  </td>
                  <td className="available" data-title="r3c1">
                    17
                  </td>
                  <td className="available" data-title="r3c2">
                    18
                  </td>
                  <td className="available" data-title="r3c3">
                    19
                  </td>
                  <td className="available" data-title="r3c4">
                    20
                  </td>
                  <td className="available" data-title="r3c5">
                    21
                  </td>
                  <td className="weekend available" data-title="r3c6">
                    22
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r4c0">
                    23
                  </td>
                  <td className="available" data-title="r4c1">
                    24
                  </td>
                  <td className="available" data-title="r4c2">
                    25
                  </td>
                  <td className="available" data-title="r4c3">
                    26
                  </td>
                  <td className="available" data-title="r4c4">
                    27
                  </td>
                  <td className="available" data-title="r4c5">
                    28
                  </td>
                  <td className="weekend available" data-title="r4c6">
                    29
                  </td>
                </tr>
                <tr>
                  <td className="weekend available" data-title="r5c0">
                    30
                  </td>
                  <td className="available" data-title="r5c1">
                    31
                  </td>
                  <td className="off ends available" data-title="r5c2">
                    1
                  </td>
                  <td className="off ends available" data-title="r5c3">
                    2
                  </td>
                  <td className="off ends available" data-title="r5c4">
                    3
                  </td>
                  <td className="off ends available" data-title="r5c5">
                    4
                  </td>
                  <td className="weekend off ends available" data-title="r5c6">
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="calendar-time" style={{ display: "none" }}></div>
        </div>
        <div className="drp-buttons">
          <span className="drp-selected">02/28/2025 - 02/28/2025</span>
          <button className="cancelBtn btn btn-sm btn-white" type="button">
            Clear
          </button>
          <button className="applyBtn btn btn-sm btn-primary" type="button">
            Apply
          </button>{" "}
        </div>
      </div>
    </>
  );
}
