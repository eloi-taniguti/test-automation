import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'antd';

import classes from './Dashboard.module.scss';
import backgroundImg from '../../../assets/img/home.svg';

function Dashboard({ currentUser }) {
    const { name, role } = currentUser || '';

    const entryData = [
        'Write as many tests as possible.',
        'Organize them in the best way you see fit.',
        'In case you have found any Bugs, create a BUG report for them separately and attach to HackerRank',
        'When ready, compact your tests and upload it to HackerRank',
        'And send an e-mail to RH.'
    ];

    const midData = [
        'Choose any framework of your preference to develop the automated UI tests.',
        'Organize them in the best way you see fit.',
        'NOTE: Unit tests are not required.',
        'When ready, create a new branch with your name and, then push to this repository.',
        'Or compact your tests and upload it to HackerRank',
        'In case you have found any Bugs, create a BUG report for them separately and attach to HackerRank',
        'Finally send an e-mail to RH.'
    ];

    const seniorData = [
        'Choose any framework of your preference to develop the automated UI tests.',
        'Organize them in the best way you see fit.',
        'Integrate the automated tests to this project.',
        'Create an example file to run the automated tests in any CI tool',
        'Optional: Include a component that generates a Test Report',
        'NOTE: Unit tests are not required.',
        'When ready, create a new branch with your name and, then push to this repository.',
        'Or compact your tests and upload it to HackerRank',
        'In case you have found any Bugs, create a BUG report for them separately and attach to HackerRank',
        'Finally send an e-mail to RH.'
    ];

    let dataSource;
    if (role === 'entry') {
        dataSource = entryData;
    } else if (role === 'mid') {
        dataSource = midData;
    } else if (role === 'senior') {
        dataSource = seniorData;
    };

    return (
        <div className={classes.DashboardContainer}>
            <div className={classes.BackGroundImg} aria-hidden='true'>
                <img src={backgroundImg} alt=''></img>
            </div>
            <div className={classes.Welcome}>
                <h1>Hi, {name}</h1>
            </div>
            <h1>Good Luck !!!</h1>
                <div className={classes.Text}>
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
