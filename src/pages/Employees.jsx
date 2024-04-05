// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
// import { Header } from '../components';

// const Employees = () => {
//   const editing = { allowDeleting: true, allowEditing: true, mode: 'Normal',
//   allowEditOnDblClick: true  };
//   const toolbarOptions = ['Search'];
//   const [employeesData, setEmployeesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
       
//         const response = await axios.get('https://random-data-api.com/api/v3/projects/d3859df6-33d6-4678-b3ee-65e1c17b4f64?api_key=oXWzSReObHyJQYq87qLEbg');
//        console.log(response)
//         setEmployeesData([response.data]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);
  
//   // const ImageCellRenderer = ({ data }) => {
//   //   return <img src={data.image_url} alt="Employee" />
//   // };

//   // const ImageCellRenderer = ({ data }) => (
//   //   <div className="flex items-center gap-2">
//   //     <img
//   //       className="rounded-full w-10 h-10"
//   //       src={data.image_url} 
//   //       alt="Employee"
//   //     />
//   //     <p>{data.first_name}</p>
//   //   </div>
//   // );

//   const employeesGrid = [
//     // {
//     //   field: "image_url",
//     //   headerText: 'Image',
//     //   textAlign: 'Center',
//     //   width: '150',
//     //    template: ImageCellRenderer, 
//     //   },
    
//     { field: 'first_name', headerText: 'First Name', textAlign: 'Center', width: '150' },
//     { field: 'last_name', headerText: 'Last Name', textAlign: 'Center', width: '150' },
//     { field: 'company_name', headerText: 'Company', textAlign: 'Center', width: '150' },
//     { field: 'random_date', headerText: 'Date of join', textAlign: 'Center', width: '150' },
//     { field: 'job_title', headerText: 'Degination', textAlign: 'Center', width: '150' },

//   ];

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Employees" />
//       <GridComponent
//         dataSource={employeesData}
//         width="auto"
//         allowPaging
//         allowSorting
//         pageSettings={{ pageCount: 5 }}
//         editSettings={editing}
//     toolbar={toolbarOptions}
//       >
//         <ColumnsDirective>
//           {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Search, Page]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default Employees;

// {HERE WE BEGIN SECONDE CODE OF THE EMPLOYEE}

import React, { useState } from 'react';

const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      dateOfJoining: '2022-01-01',
      image: 'https://via.placeholder.com/150',
      email: 'john.doe@example.com',
      mobileNumber: '1234567890',
      employeid:"001"
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      dateOfJoining: '2022-02-01',
      image: 'https://via.placeholder.com/150',
      email: 'jane.smith@example.com',
      mobileNumber: '9876543210',
      employeid:"002"
    },
    {
      id: 3,
      name: 'Tom Brown',
      position: 'UI/UX Designer',
      dateOfJoining: '2022-03-01',
      image: 'https://via.placeholder.com/150',
      email: 'tom.brown@example.com',
      mobileNumber: '5551234567',
      employeid:"003"
    },
  ]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    position: '',
    dateOfJoining: '',
    image: '',
    email: '',
    mobileNumber: '',
    employeid:'',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber' && value.length > 10) {
      return; 
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedEmployees = employees.map((employee) =>
        employee.id === formData.id ? formData : employee
      );
      setEmployees(updatedEmployees);
    } else {
      setEmployees([...employees, { ...formData, id: Date.now() }]);
    }
    setFormData({
      id: '',
      name: '',
      position: '',
      dateOfJoining: '',
      image: '',
      email: '',
      mobileNumber: '',
      employeid:'',
    });
    setIsEditing(false);
  };

  const handleEdit = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);
    setFormData(employeeToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Table</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleInputChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          required
        />
        <input
          type="date"
          name="dateOfJoining"
          placeholder="Date of Joining"
          value={formData.dateOfJoining}
          onChange={handleInputChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          accept="image/*"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          required
        />
        <input
          type="tel"
          name="mobileNumber"
          placeholder="+91 Mobile Number"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          required
        />
        <input
          type="tel"
          name="employeid"
          placeholder=" Employeeid Number"
          value={formData.employeid}
          onChange={handleInputChange}
          className="border border-gray-400 rounded px-2 py-1 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Image</th>
          <th className="border border-gray-400 px-4 py-2">Employee id</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Position</th>
            <th className="border border-gray-400 px-4 py-2">Date of Joining</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Mobile Number</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-400 px-4 py-2">
                <img src={employee.image} alt={employee.name} className="h-10 w-10 rounded-full" />
              </td>
              <td className="border border-gray-400 px-4 py-2">{employee.employeid}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.name}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.position}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.dateOfJoining}</td>
              
              <td className="border border-gray-400 px-4 py-2">{employee.email}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.mobileNumber}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;





