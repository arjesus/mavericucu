import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
  DateTimePicker
} from '@material-ui/pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4e3b80'
    }
  }
});

const DatePickerMaterialComponent = props => {
  const { onChange, value } = props;

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils} theme={theme}>
        <MuiThemeProvider theme={theme}>
          <DateTimePicker
            renderinput={props => <TextField variant="outlined" {...props} />}
            label="DateTimePicker"
            theme={theme}
            value={value}
            onChange={onChange}
          />
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
