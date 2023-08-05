import React, { useState } from "react";
import classes from "../css/BusList.module.css";
import BookSeat from "./BookSeat";
import { BusCardLeft } from "./BusCardLeft";

// export const BusList = () => {
//   const [view, setView] = useState(false);
//   const handleClick = () => {
//     setView(!view);
//   };
//   return (
//     <>
//       <div className={classes.card}>
//         <div className={classes.bus}>
//           <div>
//             <div className={classes.name}>
//               <h2>Volvo Buses</h2>
//               <p>A/C Sleeper</p>
//               <p>17:45 PM --- 12hrs --- 8:00 AM </p>
//             </div>
//             <div className={classes.facilities}>
//               <h4>
//                 <span>Live Tracking</span>
//                 <span>Amenities</span>
//                 <span>Bus Photos</span>
//                 <span>Booking Policies</span>
//                 <span>Review</span>
//                 <span>Rest Stop</span>
//               </h4>
//             </div>
//           </div>
//           <div className={classes.booking}>
//             <div className={classes.price}>
//               <h2>Trip Cost</h2>
//               <h3>Rs. 899/-</h3>
//             </div>
//             <button className={classes.btn} onClick={handleClick}>
//               View Seats
//             </button>
//           </div>
//         </div>
//         {view && <BookSeat />}
//       </div>
//     </>
//   );
// };

export const BusList = () => {
  return (
    <>
      <div className={classes.busCard}>
        <div className={classes["bus-card-content"]}>
          <BusCardLeft />
          <div className={classes["bus-card-right"]}>
            <div className={classes["bus-right-text"]}>
              <p className={classes["bus-cost"]}>Trip Cost</p>
              <h3>Starts From</h3>
              <p className={classes.fare}>$800</p>
            </div>
            <div>
              <button className={classes.btn}>View Seats</button>
            </div>
          </div>
        </div>
        <BookSeat />
      </div>
    </>
  );
};
