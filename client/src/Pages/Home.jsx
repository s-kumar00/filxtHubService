import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="w-full">
      <div className="flex z-10 justify-center relative">
        <div className="flex items-center justify-between p-4 bg-white border-2 shadow-xl rounded-md absolute -bottom-10 w-full max-w-[1024px]">
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-gray-400" />
            <input
              type="text"
              placeholder="What is your location ?"
              className="border-none outline-none bg-transparent"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 relative">
            <FaCalendarAlt className="text-gray-400" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="text-gray-400 cursor-pointer"
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="absolute top-12 z-20 border shadow-md"
                minDate={new Date()}
              />
            )}
          </div>

          <div className="bg-transparent text-gray-400">
            <select className="outline-none focus:outline-none px-2">
              <option>Carpenter</option>
              <option>Electrician</option>
              <option>Barber</option>
              <option>Painter</option>
              <option>Fisher</option>
              <option>Roader</option>
            </select>
          </div>

          <div className="w-[20vh]">
            <button className="w-full bg-transparent text-gray-400 border rounded-lg text-sm font-medium p-4 cursor-pointer hover:bg-secondary">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
