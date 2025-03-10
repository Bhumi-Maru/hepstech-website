import React, { useState } from "react";
import moment from "moment";

export default function Date_Range_Model({ onDateSelect }) {
  const [showCustomRange, setShowCustomRange] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        setShowCustomRange(true);
        return;
      default:
        return;
    }

    onDateSelect(`${startDate} - ${endDate}`);
  };

  const handleCustomRangeSelect = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setShowCustomRange(false);
  };

  const handleApply = () => {
    if (startDate && endDate) {
      onDateSelect(
        `${startDate.format("DD/MM/YYYY")} - ${endDate.format("DD/MM/YYYY")}`
      );
      setShowCustomRange(false);
    }
  };

  return (
    <div
      className="daterangepicker ltr show-ranges opensright"
      style={{
        display: "grid",
        top: "35px",
        left: showCustomRange ? "-146px" : "auto",
        right: "auto",
        gridTemplateColumns: showCustomRange ? "repeat(3, 1fr)" : "",
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

      {showCustomRange && (
        <>
          {/* Left calendar (current month) */}
          <div className="drp-calendar left" style={{ display: "block" }}>
            <div className="calendar-table">
              <table className="table-condensed">
                <thead>
                  <tr>
                    <th colSpan="5" className="month">
                      {moment().format("MMM YYYY")}
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
                  {[...Array(6)].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                      {[...Array(7)].map((_, dayIndex) => {
                        const date = moment()
                          .startOf("month")
                          .add(weekIndex * 7 + dayIndex, "days");
                        const isSelected =
                          date.isSame(startDate, "day") ||
                          date.isSame(endDate, "day");
                        const isInRange =
                          startDate &&
                          endDate &&
                          date.isBetween(startDate, endDate, "day", "[]");
                        return (
                          <td
                            key={dayIndex}
                            className={`${isSelected ? "active" : ""} ${
                              isInRange ? "in-range" : ""
                            }`}
                            onClick={() => handleCustomRangeSelect(date)}
                          >
                            {date.format("D")}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right calendar (next month) */}
          <div className="drp-calendar right" style={{ display: "block" }}>
            <div className="calendar-table">
              <table className="table-condensed">
                <thead>
                  <tr>
                    <th colSpan="5" className="month">
                      {moment().add(1, "month").format("MMM YYYY")}
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
                  {[...Array(6)].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                      {[...Array(7)].map((_, dayIndex) => {
                        const date = moment()
                          .add(1, "month")
                          .startOf("month")
                          .add(weekIndex * 7 + dayIndex, "days");
                        const isSelected =
                          date.isSame(startDate, "day") ||
                          date.isSame(endDate, "day");
                        const isInRange =
                          startDate &&
                          endDate &&
                          date.isBetween(startDate, endDate, "day", "[]");
                        return (
                          <td
                            key={dayIndex}
                            className={`${isSelected ? "active" : ""} ${
                              isInRange ? "in-range" : ""
                            }`}
                            onClick={() => handleCustomRangeSelect(date)}
                          >
                            {date.format("D")}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="drp-buttons"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10px",
              gap: "10px",
              // gridColumn: "3",
              width: "317%",
            }}
          >
            <span className="drp-selected" style={{ flex: 1 }}>
              {startDate
                ? `${startDate.format("DD/MM/YYYY")} ${
                    endDate ? ` - ${endDate.format("DD/MM/YYYY")}` : ""
                  }`
                : "Select a date range"}
            </span>

            <button
              className="cancelBtn btn btn-sm btn-white"
              type="button"
              onClick={handleClear}
              style={{ flex: "none" }}
            >
              Clear
            </button>
            <button
              className="applyBtn btn btn-sm btn-primary"
              type="button"
              onClick={handleApply}
              style={{ flex: "none" }}
            >
              Apply
            </button>
          </div>
        </>
      )}
    </div>
  );
}
