import React, { useContext, useEffect, Fragment } from 'react';
import {Button, Select, Form} from 'antd';
import {multiStepContext} from '../StepContext';
import DataRestaurant from '../data/dishes.json';


const {Option} = Select;

const StepTwo = () =>{
	const {setStep, data, setData} = useContext(multiStepContext);
	const [form] = Form.useForm();
	const Data2 = DataRestaurant.dishes;

    const handleChangRestaurant = (e) => {
		setData({...data, 'Restaurant': e, })
        
	}
	const onFinish = (user) => {
		setStep(2);
	};
	
	const onFinishFailed = (errorInfo) => {
	
	};
	useEffect(() => {
        setData(data);
        form.setFieldsValue({ user: data })
	}, [data, form, setData]);
	// const arrFilter = Data2.availableMeals.includes(data.meal.value) === true;
	// const a = arrFilter.filter((item, index) => arrFilter.indexOf(item) === index);

	// var arrReduce = Data2.map((item, index) => {item.})
	// );

    return (
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
					label="Please Select a Restaurant"
					name= {['user', 'restaurant']}
					rules={[
					{
						required: true,
						message: 'Please Select a meal',
					},
					]}
				>
					<Select
						labelInValue='restaurant'
						placeholder='Select a Restaurant'
						style={{width:400}}
						value={data['restaurant']}
						onChange={handleChangRestaurant}
					>
						{ Data2 ? (
							Data2.map((item, index) =>
							<Fragment key = {index}>
								{ item.availableMeals.includes(data.meal.value) === true ? <Option key={index} value={item.restaurant}>{item.restaurant}</Option> : ('')
								}
								</Fragment>
						)) : ('')}
					</Select>
                </Form.Item>
				<Form.Item >
					<Button type="primary" htmlType="submit">
						Next
					</Button>
				</Form.Item>
            </Form>
			<div><Button onClick={()=> setStep(0)} >Previous</Button></div>
        </div>
    )
}

export default StepTwo;