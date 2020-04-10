import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import userHandleDate from "../handleDateChange";

export default function DatePickerMaterialComponent() {
  const id = "materialDatePicker";
  const dateHandler = userHandleDate(new Date(), id);
  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker {...dateHandler} orientation="landscape" variant="static" />
        <style jsx>{`
          .MuiToolbar-root {
            background-color: red;
          }
          .picker__weekday-display {
            background-color: red;
          }
          .picker__day--selected,
          .picker__day--selected:hover,
          .picker--focused .picker__day--selected {
            background-color: blue;
          }
        `}</style>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
