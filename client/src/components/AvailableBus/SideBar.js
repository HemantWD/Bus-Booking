import React from "react";

const departureSessions = [
  "Morning Session",
  "Afternoon Session",
  "Evening Session",
];

const arrivalSessions = [
  "Morning Session",
  "Afternoon Session",
  "Evening Session",
];

const pickupPoints = [
  { id: "Kolkata", label: "Kolkata" },
  { id: "Mumbai", label: "Mumbai" },
  { id: "Banglore", label: "Banglore" },
];

const dropPoints = [
  { id: "Kolkata", label: "Kolkata" },
  { id: "Mumbai", label: "Mumbai" },
  { id: "Banglore", label: "Banglore" },
];

const busRatings = ["4 Star or more", "3 Star", "2 Star"];

const busOperators = [
  "IntrCity Smart Bus",
  "Tata Motors - Marcopolo",
  "Eicher Motors",
  "BharatBenz",
  "Volvo Buses",
  "Mahindra & Mahindra",
  "Ashok Leyland",
  "Jabbar Travels",
  "Jeppiaar Travels",
  "Neeta Travels",
];
function renderCheckbox(label) {
  return (
    <>
      <input type="checkbox" name={label} />
      <label className="ml-4" htmlFor={label}>
        {label}
      </label>
      <br />
    </>
  );
}
function renderRadio(id, label) {
  return (
    <div key={id}>
      <input type="radio" name={id} />
      <label className="ml-4" htmlFor={id}>
        {label}
      </label>
      <br />
    </div>
  );
}

export const SideBar = () => {
  return (
    <>
      <div className="m-auto py-5 px-8 w-72">
        <div className="font-bold text-orange-400 border-2 border-gray-500 rounded-lg flex justify-between p-5 mb-5">
          <h4 className="cursor-pointer font-serif text-lg font-bold mb-2.5">
            Filter
          </h4>
          <h4 className="cursor-pointer font-serif text-lg font-bold mb-2.5">
            Clear All
          </h4>
        </div>
        <div className="border-2 border-gray-500 rounded-lg p-5">
          <form>
            <h2 className="font-serif text-center text-lg font-bold">
              Departure Time
            </h2>
            {departureSessions.map((value, index) =>
              renderCheckbox(value, index)
            )}
            <hr />
            <h2 className="font-serif text-center text-lg font-bold">
              Arrival Time
            </h2>
            {arrivalSessions.map((value, index) =>
              renderCheckbox(value, index)
            )}
            <hr />
            <h2 className="font-serif text-center text-lg font-bold">
              Pickup Point
            </h2>
            <input
              type="text"
              className="border-2 rounded-lg border-gray-400"
            />
            {pickupPoints.map((value) => renderRadio(value.id, value.label))}
            <hr />
            <h2 className="font-serif text-center text-lg font-bold">
              Drop Point
            </h2>
            {dropPoints.map((value) => renderRadio(value.id, value.label))}
            <hr />
            <h2 className="font-serif text-center text-lg font-bold">
              Bus Rating
            </h2>
            {busRatings.map((value, index) => renderCheckbox(value, index))}
            <hr />
            <h2 className="font-serif text-center text-lg font-bold">
              Bus Operator
            </h2>
            {busOperators.map((value, index) => renderCheckbox(value, index))}
          </form>
        </div>
      </div>
    </>
  );
};
