/* eslint-disable no-sequences */
import React, { useContext, useEffect, Fragment, useState } from 'react';
import {Button, Select, InputNumber, Form, Space } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {multiStepContext} from '../StepContext';
import DataRestaurant from '../data/dishes.json';

const {Option}= Select;

const StepThree = () =>{
	const {setStep, data, setData} = useContext(multiStepContext);
	const [form] = Form.useForm(); 
	const [add, setAdd] =useState(false);
	const [dataAdd, setDataAdd] = useState()
	const Data3 = DataRestaurant.dishes;
	
	const handleAdd = () => {
		setAdd(true);
	}

    const handleChangeDish = (e) => {
        setData({...data, 'dish': e })
    }
    const handleChangeNumberDish = (e) =>{
        setData({...data, 'numberDish': e})
    }
    console.log('data 3', data);
    const onFinish = (values) => {
        setStep(3);
       
    };	
	const onFinishFailed = (errorInfo) => {
	   
    };
	useEffect(() => {
        setData(data);
        form.setFieldsValue({ user: data })
    }, [data, form, setData]);
    
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
					label="Please Select a Dish"
					name= {['user', 'dish']}
					rules={[
					{
						required: true,
						message: 'Please Select a dish',
					},
					]}
				>
					<Select
						labelInValue='dish'
						placeholder='Select a dish'
						style={{width:400}}
						value={data['dish']}
						onChange={handleChangeDish}
					>
						{ Data3 ? (
                        Data3.map((item, index) =>
                        <Fragment key = {index}>
                            { item.availableMeals.includes(data.meal.value) === true && item.restaurant.includes(data.restaurant.value) ? <Option key={index} value={item.name}>{item.name}</Option> : ('')
                            }
                            </Fragment>
                    )) : ('')}
					</Select>
				</Form.Item>
				<Form.Item 
					label="Please Enter Number of Dish <=10"
					name={['user', 'numberDish']}
					rules={[
						{
						required: true,
						message: 'Please input your number Dish max <=10',
						},
					]}
				>
					<InputNumber 
					labelInValue='numberDish' 
					min={1} 
					max={10} 
					value={data['numberDish']}
					onChange={handleChangeNumberDish}></InputNumber>
				</Form.Item>
				<Form.List name="user">
				{(fields, {add, remove}) => (
						<div>
						{fields.map(field => (
							<Space key={field.key}
							 		style={{ display: "flex", marginBottom: 8 }}
                                    align="start"
							>
								<Form.Item
									label="Please Select a Dish"
									{...field}
									name= {[field.name, 'dishAdd']}
									rules={[
									{
										required: true,
										message: 'Please Select a dish',
									},
									]}
								>
									<Select
										labelInValue='dishAdd'
										placeholder='Select a dishAdd'
										style={{width:400}}
										value={data['dishAdd']}
									>
										{ Data3 ? (
										Data3.map((item, index) =>
										<Fragment key = {index}>
											{ item.availableMeals.includes(data.meal.value) === true && item.restaurant.includes(data.restaurant.value) ? <Option key={index} value={item.name}>{item.name}</Option> : ('')
											}
											</Fragment>
									)) : ('')}
									</Select>
								</Form.Item>
								<Form.Item 
									label="Please Enter Number of Dish <=10"
									{...field}
									name={[field.name, 'numberDishAdd']}
									rules={[
										{
										required: true,
										message: 'Please input your number Dish max <=10',
										},
									]}
								>
									<InputNumber 
									labelInValue='numberDishAdd' 
									min={1} 
									max={10} 
									value={data['numberDishAdd']}
									></InputNumber>
								</Form.Item>
								<Form.Item>
									<MinusCircleOutlined
										style={{
											marginTop: "16px",
											marginLeft: "16px",
											boxSizing: "border",
										}}
										onClick={() => {
											remove(field.name);
										}}
									/>
								</Form.Item>
							</Space>
						))}
						<Form.Item>
							<PlusCircleOutlined onClick={() => add()} />
						</Form.Item>
					</div>
				)}
				</Form.List>
				<Form.Item >
					<Button type="primary" htmlType="submit">
						Next
					</Button>
				</Form.Item>
			</Form>
            <div>
                <Button onClick={()=> setStep(1)} >Previous</Button>
            </div>
        </div>
    )
}
export default StepThree;
