/* eslint-disable no-sequences */
import React, { useContext, useEffect } from 'react';
import {Button, Select, InputNumber, Form } from 'antd';
import {multiStepContext} from '../StepContext';

const {Option}= Select;

const StepOne = () =>{
	const {setStep, data, setData} = useContext(multiStepContext);
	console.log('aa', data);
	const [form] = Form.useForm();
    const handleChangeMeal = (e) => {
        setData({...data, 'meal': e })
    }
    const handleChangeNumber = (e) =>{
        setData({...data, 'numberPeople': e})
    }
    const onFinish = (user) => {
	  setStep(1);
    };
  
    const onFinishFailed = (errorInfo) => {
     
	}; 
	useEffect(() => {
        setData(data);
        form.setFieldsValue({ user: data })
    }, [data, form, setData])
    return(
        <div className='body'>
			<Form form={form}
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Please Select a meal"
					name= {['user', 'meal']}
					rules={[
					{
						required: true,
						message: 'Please Select a meal',
					},
					]}
				>
					<Select
						labelInValue='meal'
						placeholder='Select a meal'
						style={{width:400}}
						value={data['meal']}
						onChange={handleChangeMeal}
					>
						<Option value='breakfast'>breakfast</Option>
						<Option value='lunch'>lunch</Option>
						<Option value='dinner'>dinner</Option>
					</Select>
				</Form.Item>
				<Form.Item 
					label="Please Enter Number of people"
					name={['user', 'numberPeople']}
					rules={[
						{
						required: true,
						message: 'Please input your number',
						},
					]}
				>
					<InputNumber 
					labelInValue='numberPeople' 
					min={1} 
					max={10} 
					value={data['numberPeople']}
					onChange={handleChangeNumber}></InputNumber>
				</Form.Item>
				<Form.Item >
					<Button type="primary" htmlType="submit">
						Next
					</Button>
				</Form.Item>
			</Form>
        </div>
    )
}
export default  StepOne;
