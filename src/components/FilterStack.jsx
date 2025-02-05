import { Select } from 'antd'
import React from 'react'
import getRequest from '../service'
const FilterStack = ({setStackrd, stackId}) => {
const stack = getRequest("/stack")
const options = stack.map(item => ({label:item.name,value:item.id}))

return(
    <Select
    value={stackId}
    onChange={(value) => setStackrd(value)}
    allowClear
    className='w-[350px]'
    size='large'
    showSearch
    placeholder="Choose Stack"
    optionFilterProp='lable'
    options={options}
    />
)
}
export default FilterStack