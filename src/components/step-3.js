import React, { useContext, Fragment, useEffect } from 'react';
import {Button, Select, InputNumber, Form } from 'antd';
import {multiStepContext} from '../StepContext';
import DataRestaurant from '../data/dishes.json';


const {Option} = Select;
const StepThree = () =>{
    const {setStep, data, setData} = useContext(multiStepContext);
    const Data3 = DataRestaurant.dishes;
    const [form] = Form.useForm();
    // const handleChangeDish = (e) => {
    //     setData({...data, 'Dish': e })
    // }
    // const handleChangeNumberDish = (e) =>{
    //     setData({...data, 'numberDish': e})
    // }
    const onFinish = (values) => {
        setStep(3);
        console.log('data 3', values);
    };	
	const onFinishFailed = (errorInfo) => {
	   
    };
    useEffect(() => {
        setData(data);
        form.setFieldsValue({ user: data })
    }, [data, form, setData])
    
    return (
        <div className='body'>
            <Form from = {form}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Please Select a Dish"
                    name= "basic"
                    rules={[
                    {
                        required: true,
                        message: 'Please Select a dish',
                    },
                    ]}
                >
                    <Select
                        labelInValue='Dish'
                        placeholder='Select a Dish'
                        name= {['user', 'Dish']}
                        style={{width:400}}
                        value={data['Dish']}
                        
                    >
                    { Data3 ? (
                        Data3.map((item, index) =>
                        <Fragment key = {index}>
                            { item.availableMeals.includes(data.meal.value) === true && item.restaurant.includes(data.Restaurant.value) ? <Option key={index} value={item.name}>{item.name}</Option> : ('')
                            }
                            </Fragment>
                    )) : ('')}
                    </Select>
        
                </Form.Item>
                <Form.Item
                    label="Please Enter Number of servings"
                    name={['user', 'numberDish']}
                    rules={[
                        {
                        required: true,
                        message: 'Please input your servings',
                        },
                    ]}
                >
                    <InputNumber labelInValue='numberDish' value={data['numberDish']}  min={1} max={10} ></InputNumber>
                </Form.Item>
                <Form.Item>
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