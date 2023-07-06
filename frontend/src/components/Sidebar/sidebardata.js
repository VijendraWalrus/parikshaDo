import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Master',
    path: '/master',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      // {
      //   title: ' Client',
      //   path: '/master/createClient',
      //   icon: <IoIcons.IoIosPaper />,
      //   cName: 'sub-nav'
      // },
      {
        title: 'Category',
        path: '/master/category',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Sub Category',
        path: '/master/subCategory',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Create Exam',
        path: '/master/createExam',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Section',
        path: '/master/createSection',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Topic',
        path: '/master/createTopic',
        icon: <IoIcons.IoIosPaper />
      }
      ,
      {
        title: 'Create Subject',
        path: '/master/createSubject',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  
 
];
