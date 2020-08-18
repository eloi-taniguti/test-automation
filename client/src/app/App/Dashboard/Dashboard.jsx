import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'antd';

import './Dashboard.css';
import backgroundImg from '../../../assets/img/home.svg';

function Dashboard({ currentUser }) {
    const { name, role } = currentUser || '';

    const entryData = [
        'Write as many tests as possible.',
        'Organize them in the best way you see fit.',
        'In case you have found any Bugs, create a BUG report for them separately'
    ];

    const midData = [
        'Choose any framework of your preference to develop the automated UI tests.',
        'Organize them in the best way you see fit.',
        'NOTE: Unit tests are not required.',
        'Optional: Include a component that generates a Test Report',
        'In case you have found any Bugs, create a BUG report for them separately and add it to your repository',
        'When ready, share your repository link to the answer in Kenoby'
    ];

    const seniorData = [
        'Choose any framework of your preference to develop the automated UI tests.',
        'Organize them in the best way you see fit.',
        'Integrate the automated tests to this project.',
        'Include a component that generates a Test Report',
        'NOTE: Unit tests are not required.',
        'Optional: Create an example file to run the automated tests in any CI tool',
        'In case you have found any Bugs, create a BUG report for them separately and add it to your repository',
        'When ready, share your repository link to the answer in Kenoby'
    ];

    const adminData = [
        'Automate the Form Items',
        'Automate Table',
        'Page Object',
        'Stub JSON response'
    ];

    let dataSource;
    if (role === 'entry') {
        dataSource = entryData;
    } else if (role === 'mid') {
        dataSource = midData;
    } else if (role === 'senior') {
        dataSource = seniorData;
    } else if (role === 'admin') {
        dataSource = adminData;
    };;

    return (
        <div className='dashboard-container'>
            <div className='background-img' aria-hidden='true'>
                <img src={backgroundImg} alt=''></img>
            </div>
            <div className='welcome'>
                <h1>Hi, {name}</h1>
            </div>
            <h2>Good Luck !!!</h2>
                <div className='text'>
                    <List
                        header={<div>Your challenge is:</div>}
                        bordered
                        dataSource={dataSource}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </div>

        </div>
    );
}


function mapStateToProps({ user: { currentUser } }) {
    return {
        currentUser
    };
}

export default connect(
    mapStateToProps
)(withRouter(Dashboard));
