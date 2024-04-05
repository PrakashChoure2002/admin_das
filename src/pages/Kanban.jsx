import React, { useState } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

// Assuming these are your imports
// import { kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {

  const [data, setData] = useState([]); // Initially empty, user will add data
  const [editItem, setEditItem] = useState(null); // For editing items
  const [visible, setVisible] = useState(false); // Dialog visibility
  const [newItem, setNewItem] = useState({ Summary: '', Status: 'Open' }); // For adding new items

  // Handle adding new items
  const addNewItem = () => {
    setData([...data, { ...newItem, Id: data.length + 1 }]); // Add new item with a new Id
    setNewItem({ Summary: '', Status: 'Open' }); // Reset form
  };

  // Functions for editing and deleting remain similar to the previous example

  // Handle change for new items
  const handleNewItemChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };


   const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Done',
      allowToggle: true },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="Summary"
          placeholder="Task summary"
          value={newItem.Summary}
          onChange={handleNewItemChange}
        />
        <select name="Status" value={newItem.Status} onChange={handleNewItemChange}>
          <option value="Open">open</option>
          <option value="InProgress">In Progress</option>
          <option value="Testing">Testing</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={addNewItem}>Add Task</button>
      </div>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={data}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
      {/* Edit/Delete Dialog or functionality here as in the previous example */}
    </div>
  );
};

export default Kanban;
