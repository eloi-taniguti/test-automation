import React, { useState } from 'react';
import {
  Form,
  Input,
  Radio,
  Select,
  Slider,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

import classes from './Page2.module.scss';
import backgroundImg from '../../../assets/img/home.svg';

const { Option } = Select;
const { TextArea } = Input;

function Page2() {

  const [formLayout, setFormLayout] = useState('horizontal');
  const onChange = (e) => {
    setFormLayout(e.target.value);
  };

  const [sliderValue, setSlider] = useState(1);
  const onChangeSlider = (value) => {
    setSlider(value);
  };

  return (
    <div>
      <div className={classes.BackgroundImg} aria-hidden='true'>
        <img src={backgroundImg} alt=''></img>
      </div>
      <h1 className={classes.Title}>Form Items</h1>    
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout={formLayout}
      >
        <Form.Item label="Radio Button">
          <Radio.Group onChange={onChange} defaultValue="horizontal">
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
            <Radio.Button value="inline">In line</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input allowClear />
        </Form.Item>
        <Form.Item label="Select">
          <Select
              allowClear
              showSearch
              placeholder="Select a country"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
          >
              <Option value="aus">Australia</Option>
              <Option value="bra">Brazil</Option>
              <Option value="can">Canada</Option>
              <Option value="den">Denmark</Option>
              <Option value="egp">Egypt</Option>
              <Option value="fra">France</Option>
              <Option value="ger">Germany</Option>
              <Option value="hun">Hungary</Option>
              <Option value="ita">Italy</Option>
              <Option value="jap">Japan</Option>
              <Option value="mex">Mexico</Option>
              <Option value="nzl">New Zeland</Option>
              <Option value="por">Portugal</Option>
              <Option value="rus">Russia</Option>
              <Option value="soa">South Africa</Option>
              <Option value="tha">Thailand</Option>
              <Option value="usa">United States</Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Color',
                value: 'color',
                children: [
                  {
                    title: 'Red',
                    value: 'red',
                  },
                  {
                    title: 'Green',
                    value: 'green',
                  },
                  {
                    title: 'Blue',
                    value: 'blue',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'sp',
                label: 'Sao Paulo',
                children: [
                  {
                    value: 'city_cps',
                    label: 'Campinas',
                  },
                  {
                    value: 'city_sp',
                    label: 'Sao Paulo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Slider with InputNumber">
          <Slider
              min={1}
              max={20}
              onChange={onChangeSlider}
              value={typeof sliderValue === 'number' ? sliderValue : 0}
          />
          <InputNumber
              min={1}
              max={20}
              value={sliderValue}
              onChange={onChangeSlider}
          />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea placeholder="write a comment" className={classes.TextArea}/>
        </Form.Item>
      </Form>
    </div>
  );
} 
export default Page2;