import React,{Component} from 'react';
import { Calendar,DatePicker,TimePicker } from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;


function onPanelChange(value, mode) {
    console.log(value, mode);
}

function onChange(date, dateString) {
    console.log(date, dateString);
}

function onTimeChange(time, timeString) {
    console.log(time, timeString);
}

class DatepickerDemo extends Component{
    render(){
        return(
            <div>
                <h1>Datepicker</h1>
                <div>
                    <DatePicker onChange={onChange} />
                    <br />
                    <MonthPicker onChange={onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={onChange} />
                </div>
                <h1>Timepicker</h1>
                <TimePicker onChange={onTimeChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
                <h1>Calender</h1>
                <div style={{ width: 240, border: '1px solid #000000', padding: 8 ,backgroundColor: '#4a4a52'}}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>

        );
    }
}

export default DatepickerDemo;