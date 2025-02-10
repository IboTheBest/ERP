import { Select } from 'antd'
import React from 'react'
import getRequest from "../service/index"
const FilterStack = ({setFilterId, filterId, extraClass, api , placeholder, mode , setFilterName}) => {
const data = getRequest(api)
const options = data.map(item => ({label:item.name,value:item.id}))

function onChange(value, data){ 
    setFilterId(value)
    if(setFilterName){
        if(mode == "multiple"){
            setFilterName(data.map(item => item.label))
        }
        else{
            setFilterName(data.label)
        }
    }
}

return(
    <Select
    mode={mode}
    value={filterId}
    onChange={onChange}
    allowClear
    className={`w-[350px] ${extraClass}`}
    size='large'
    showSearch
    placeholder={placeholder}
    optionFilterProp='lable'
    options={options}
    />
)
}
export default FilterStack