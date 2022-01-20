import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Box, Image, Button, Columns, Container, Form } from 'react-bulma-components';
import DatePicker from 'react-date-picker';

function DateForm(props: any) {

    const [date1, onDate1Change] = React.useState(new Date());
    const [date2, onDate2Change] = React.useState(new Date());

    React.useEffect(() => {
        let initialDate = new Date()
        initialDate.setMonth(initialDate.getMonth() - 1);
        onDate1Change(initialDate);
    }, []);

    return (
        <Form.Field id="form">
            <Form.Field kind="group">
                <Form.Control >
                    <p>From:</p>
                </Form.Control>
                <Form.Control >
                    <DatePicker
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date"
                        onChange={onDate1Change}
                        value={date1}
                        yearAriaLabel="Year"
                    />
                </Form.Control>
                <Form.Control >
                    <p>To:</p>
                </Form.Control>
                <Form.Control>
                    <DatePicker
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date"
                        onChange={onDate2Change}
                        value={date2}
                        yearAriaLabel="Year"
                    />
                </Form.Control>
                <Form.Control>
                    <Button style={{ marginTop: -5, marginLeft: 10 }} onClick={() => props.getPictures(date1, date2)} color="">
                        Search
                    </Button>
                </Form.Control>
            </Form.Field>
        </Form.Field>

    );
}

export default DateForm;

