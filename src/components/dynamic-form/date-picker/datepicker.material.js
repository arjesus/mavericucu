import React, { useState } from "react";
import PropTypes from "prop-types";
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4e3b80"
    }
  }
});

const DatePickerMaterialComponent = props => {
  const { setFormStep, setTime, answers } = props;
  const [value, setDateValue] = useState(new Date());
  const [date, setTimeValue] = useState(new Date());
  const [blockToRender, changeBlock] = useState(1);
  const updateDateValue = newState => {
    setDateValue(newState);
    changeBlock(2);
  };

  const updateTimeValue = newState => {
    setTimeValue(newState);
  };

  const sendTime = () => {
    setTime( value + date);
    setFormStep(8);
  };

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils} theme={theme}>
        <MuiThemeProvider theme={theme}>
          {blockToRender === 1 && (
            <DatePicker
              theme={theme}
              value={value}
              onChange={updateDateValue}
              format={"dd/MM/yyy"}
              id={"materialDatePicker"}
              orientation="landscape"
              variant="static"
            />
          )}
          {blockToRender === 2 && (
            <div className="timer-container">
              <TimePicker
                autoOk
                ampm={false}
                variant="static"
                orientation="landscape"
                openTo="minutes"
                value={date}
                onChange={updateTimeValue}
              />
              <button className="submit-btn" href="#" onClick={sendTime}>
                <span>Continuar</span>
              </button>
            </div>
          )}
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
      {/* --- STYLES --- */}
      <style jsx>{`
        .timer-container {
          display: flex;
          flex-direction: column;
        }
        .submit-btn {
          padding: 15px 50px;
          background-color: #4e3b80;
          color: #fff;
          font-size: 20px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .submit-btn {
            padding: 15px 14px;
            font-size: 18px;
            padding: 15px 15px !important;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

DatePickerMaterialComponent.propTypes = {
  datePicker: PropTypes.object
};

export default DatePickerMaterialComponent;
