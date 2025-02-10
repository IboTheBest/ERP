import React, { useContext, useState } from 'react'
import Caption from "../../components/Caption"
import { UserAddOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import FilterStack from '../../components/FilterStack'
import CustomTable from '../../components/CustomTable'
import { Context } from '../../context/Contex'
import { getTeachers } from '../../service/getTeachers'
const Teachers = () => {
const [stackId, setStackīd] = useState(null)
const [teachers, setTeachers] = useState([])
const [isLoading, setIsLoading] = useState(false)
const {refresh, setRefresh} = useContext(Context)    



const columns = [
  {
    title: 'ID',
    dataIndex: "key",
  },
  {
    title: 'Ustoz ismi',
    dataIndex: 'name',
  },
  {
    title: 'ustoz yoshi',
    dataIndex: 'age',
  },
  {
    title: 'Yonalishi',
    dataIndex: 'stack',
  },
  {
    title: 'Ustoz lavozimi',
    dataIndex: 'status',
  },
  {
    title: 'Usto raqami',
    dataIndex: 'phone',
  },
  {
    title: 'Batafsil',
    dataIndex: 'action',
  },
]

function handleSearchByName(e){
  setIsLoading(true)
  const FilterByName = teachers.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  
  if(e.target.value){
    setTimeout(() => {
      setIsLoading(false)
    setTeachers(FilterByName)
  }, 1000)
  setRefresh(!refresh)
}
else{
    setRefresh(!refresh)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  
}

getTeachers(setTeachers, stackId, refresh)



return (
  <div className='p-5'>
    <Caption path={"add"} BtnTitle={"Qo'shish"} title={'Ustozlar'} icon={<UserAddOutlined/>} count={5} />
    <div className='my-5 flex gap-10'>
      <label className='flex flex-col'>
        <span className='text-[15px] text-slate-400 pl-1 mb-1'>Qidirish</span>
        <Input onChange={handleSearchByName} className='!w-[350px]' placeholder='Qidirish' size='large' />
      </label>
      <label className='flex flex-col'>
        <span className='text-[15px] text-slate-400 pl-1 mb-1'>Choose stack</span>
        <FilterStack placeholder={"Choose stack"} api={"/stack"} stackId={stackId} setStackId={setStackīd} />
      </label>
    </div>
    <CustomTable isLoading={isLoading} columns={columns} data={teachers} />
  </div>
)
}

export default Teachers
