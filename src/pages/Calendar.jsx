import React, { useState, useEffect } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to keep track of the selected date
  const [scheduleObj, setScheduleObj] = useState(null);

  useEffect(() => {
    // Ensure that whenever selectedDate changes, we update the schedule component's selectedDate as well
    if (scheduleObj) {
      scheduleObj.selectedDate = selectedDate;
      scheduleObj.dataBind();
    }
  }, [selectedDate, scheduleObj]);

  const change = (args) => {
    setSelectedDate(args.value); // Update state when date is changed
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={selectedDate}
        // eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={selectedDate}
                  showClearButton={false}
                  placeholder="Select Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;
