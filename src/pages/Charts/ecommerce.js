import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
// import { BiColorFill } from 'react-icons/bi';
// import { IoMdContacts } from 'react-icons/io';
// import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import avatar from "../../data/avatar.jpg"
import avatar2 from '../../data/avatar2.jpg';
import avatar3 from '../../data/avatar3.png';
import avatar4 from '../../data/avatar4.jpg';
// import product1 from '../../data/product1.jpg';
// import product2 from '../../data/product2.jpg';
// import product3 from './product3.jpg';
// import product4 from './product4.jpg';
// import product5 from './product5.jpg';
// import product6 from './product6.jpg';
// import product7 from './product7.jpg';
// import product8 from './product8.jpg';




export const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
  ];


  export const medicalproBranding = {
    data: [
      {
        title: 'Due Date',
        desc: 'Oct 23, 2021',
      },
      {
        title: 'Budget',
        desc: '$98,500',
      },
      {
        title: 'Expense',
        desc: '$63,000',
      },
    ],
    teams: [
      {
        name: 'Bootstrap',
        color: 'orange',
      },
      {
        name: 'Angular',
        color: '#FB9678',
      },
    ],
    leaders: [
      {
        image:
          avatar2,
      },
      {
        image:
          avatar3,
      },
      {
        image:
          avatar2,
      },
      {
        image:
          avatar4,
      },
      {
        image:
          avatar,
      },
    ],
  };



  export const recentTransactions = [
    {
      icon: <BsCurrencyDollar />,
      amount: '+$350',
      title: 'Paypal Transfer',
      desc: 'Money Added',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
    {
      icon: <BsShield />,
      amount: '-$560',
      desc: 'Bill Payment',
      title: 'Wallet',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
    {
      icon: <FiCreditCard />,
      amount: '+$350',
      title: 'Credit Card',
      desc: 'Money reversed',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
  
      pcColor: 'green-600',
    },
    {
      icon: <TiTick />,
      amount: '+$350',
      title: 'Bank Transfer',
      desc: 'Money Added',
  
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'green-600',
    },
    {
      icon: <BsCurrencyDollar />,
      amount: '-$50',
      percentage: '+38%',
      title: 'Refund',
      desc: 'Payment Sent',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
  ];


  export const weeklyStats = [
    {
      icon: <FiShoppingCart />,
      amount: '-$560',
      title: 'Top Sales',
      desc: 'Johnathan Doe',
      iconBg: '#FB9678',
      pcColor: 'red-600',
    },
    {
      icon: <FiStar />,
      amount: '-$560',
      title: 'Best Seller',
      desc: 'MaterialPro Admin',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'red-600',
    },
    {
      icon: <BsChatLeft />,
      amount: '+$560',
      title: 'Most Commented',
      desc: 'Ample Admin',
      iconBg: '#00C292',
      pcColor: 'green-600',
    },
  ];



  export const dropdownData = [
    {
      Id: '1',
      Time: 'March 2021',
    },
    {
      Id: '2',
      Time: 'April 2021',
    }, {
      Id: '3',
      Time: 'May 2021',
    },
  ];


  export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
  
  ];



  export const ecomPieChartData = [
    { x: '2018', y: 18, text: '35%' },
    { x: '2019', y: 18, text: '15%' },
    { x: '2020', y: 18, text: '25%' },
    { x: '2021', y: 18, text: '25%' },
  ];