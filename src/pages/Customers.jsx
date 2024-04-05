import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
  // import {  customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  const [customersData, setCustomersData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://random-data-api.com/api/v3/projects/0a5935bc-e4cf-4f95-8ac8-736faf3d48d7?api_key=hpVBgQgXHMWr5zIRQFY1kw');
        console.log("hii222..",response)
        setCustomersData([response.data]);
        // console.log("hii..",setCustomersData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


  // const customerGridImage = (props) => (
  //   <div className="image flex gap-4">
  //     <img
  //       className="rounded-full w-10 h-10"
  //       src={props.CustomerImage}
  //       alt="employee"
  //     />
  //     <div>
  //       <p>{props.CustomerName}</p>
  //       <p>{props.CustomerEmail}</p>
  //     </div>
  //   </div>
  // );
  
  // const customerGridStatus = (props) => (
  //   <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
  //     <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
  //     <p>{props.Status}</p>
  //   </div>
  // );

   const customersGrid = [
    { type: 'checkbox', width: '50' },
    { field: 'first_name', headerText: 'First Name', textAlign: 'Center', width: '150' },
    // { field: 'avatar', headerText: 'Avatar', textAlign: 'Center', width: '150' },
    { field: 'gender', headerText: 'Gender', textAlign: 'Center', width: '150' },
    { field: 'ethnicity', headerText: 'Ethicity', textAlign: 'Center', width: '150' },
    { field: 'bank_account_number', headerText: 'Account Number', textAlign: 'Center', width: '150' },
    //  { field: 'image_url', headerText: 'image', textAlign: 'Center', width: '150' },
  ];

  const handleToolbarClick = (args) => {
    if (args.item.id === 'grid_delete') {
      const selectedRecords = gridInstance.getSelectedRecords();
      if (selectedRecords.length > 0) {
        gridInstance.deleteRecord(selectedRecords[0]);
      }
    }
  };

  let gridInstance;

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"/>
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        toolbarClick={handleToolbarClick}
        ref={(grid) => { gridInstance = grid; }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
