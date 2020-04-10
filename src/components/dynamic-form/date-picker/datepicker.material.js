import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";
import createPalette from '@material-ui/core/styles/createPalette';
import DateFnsUtils from "@date-io/date-fns";
import userHandleDate from "../handleDateChange";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4e3b80"
    }
  }
});

export default function DatePickerMaterialComponent() {
  const id = "materialDatePicker";
  const dateHandler = userHandleDate(new Date(), id);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} theme={theme}>
      <MuiThemeProvider theme={theme}>
        <DatePicker theme={theme} {...dateHandler} orientation="landscape" variant="static" />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

