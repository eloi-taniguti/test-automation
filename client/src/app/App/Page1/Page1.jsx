import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';

import classes from './Page1.module.scss';
import endPoints from '../../../configs/endpoints';
import backgroundImg from '../../../assets/img/home.svg';
 
const columns = [
  {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['descend', 'ascend'],  },
  {
      title: 'Borrow',
      dataIndex: 'borrow',
  },
  {
      title: 'Repayment',
      dataIndex: 'repayment',
  }
];

function Page1() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        endPoints.page1
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  return (
        <div>
            <div className={classes.BackGroundImg} aria-hidden='true'>
                <img src={backgroundImg} alt=''></img>
            </div>
            <h1 className={classes.Title}>Table</h1>                
            <Table
                dataSource={data}
                columns={columns}
                bordered
            />
        </div>
  );
}
 
export default Page1;