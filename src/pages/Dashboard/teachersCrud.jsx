import React, { useEffect, useState } from 'react'
import Caption from '../../components/Caption'
import { Input, Select } from 'antd'
import FilterCustom from '../../components/FilterCostum'
import { Create, Edit } from '../../service/auth'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import getRequest from '../../service/index'
const TeachersCrud = () => {
    const { id } = useParams()
    const singleData = id && getRequest(`/teachers/${id}`, true)

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [age, setAge] = useState(null)
    const [experience, setExperience] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState("+998")
    const [study, setStudy] = useState(null)


    const [stack, setStack] = useState(null)
    const [stackId, setStackId] = useState(null)
    const [region, setRegion] = useState(null)
    const [regionId, setRegionId] = useState(null)
    const [district, setDistrict] = useState(null)
    const [statusId, setStatusId] = useState(null)
    const [status, setStatus] = useState(null)
    const [gender, setGender] = useState(null)
    const [isMerried, setIsMerried] = useState(null)
    const [workCompanyId, setWorkConpanyId] = useState(null)
    const [workCompany, setWorkCompany] = useState(null)

    function handleAddTeacher(e) {
        e.preventDefault()
        setIsLoading(true)
        const data = { name, surname, age, stackId, stack, region, regionId, district, status, statusId, experience, gender, email, phone, isMerried, study, workCompany, workCompanyId }
        if (id) {
            data.id = id
            Edit(data, `/teachers/${id}`, setIsLoading, toast, navigate)
        }
        else {
            Create(data, `/teachers`, setIsLoading, toast, navigate)
        }
    }

    useEffect(() => {
        if (singleData) {
            setName(singleData?.name)
            setSurname(singleData.surname)
            setAge(singleData.age)
            setExperience(singleData.experience)
            setEmail(singleData.email)
            setPhone(singleData.phone)
            setStudy(singleData.study)
            setStack(singleData.stack)
            setStackId(singleData.stackId)
            setRegion(singleData.region)
            setRegionId(singleData.regionId)
            setDistrict(singleData.district)
            setStatus(singleData.status)
            setStatusId(singleData.statusId)
            setGender(singleData.gender)
            setIsMerried(singleData.isMerried)
            setWorkCompany(singleData.workCompany)
            setWorkConpanyId(singleData.workCompanyId)
        }
    }, [singleData])

    return (
        <>
            <form onSubmit={handleAddTeacher} autoComplete='off' className='p-5'>
                <Caption setLoading={isLoading} isBack={true} BtnTitle={"Qo'shish"} title={"Qo'shish"} />
                <Toaster position='top-center' reverseOrder={false} />
                <div className='flex justify-evenly mt-10'>
                    <div className='w-[40%] space-y-3'>
                        <Input value={name} onChange={(e) => setName(e.target.value)} allowClear required size='large' placeholder='Ism kiriting' />
                        <Input value={surname} onChange={(e) => setSurname(e.target.value)} allowClear required size='large' placeholder='Familiya kiriting' />
                        <Input value={age} onChange={(e) => setAge(e.target.value)} type='number' allowClear required size='large' placeholder='Yosh kiriting' />
                        <Input value={experience} onChange={(e) => setExperience(e.target.value)} allowClear required size='large' placeholder='Tajriba kiriting' />
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' allowClear required size='large' placeholder='Email kiriting' />
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' allowClear required size='large' placeholder='Telefon kiriting' />
                        <Input value={study} onChange={(e) => setStudy(e.target.value)} type='tel' allowClear required size='large' placeholder='Oqish joyini kiriting' />
                    </div>
                    <div className='w-[40%] flex flex-col gap-3'>
                        <FilterCustom api={"/stack"} filterId={stackId} setFilterId={setStackId} setFilterName={setStack} placeholder={'Stack tanlang'} extraClass={'!w-full'} />
                        <FilterCustom api={"/regions"} filterId={regionId} setFilterId={setRegionId} setFilterName={setRegion} placeholder={'Viloyat tanlang'} extraClass={'!w-full'} />
                        <Input value={district} onChange={(e) => setDistrict(e.target.value)} allowClear required size='large' placeholder='Tuman kiriting' />
                        <FilterCustom api={"/status"} filterId={statusId} setFilterId={setStatusId} setFilterName={setStatus} placeholder={'Lavozim tanlang'} extraClass={'!w-full'} />
                        <Select value={gender} onChange={(value) => setGender(value)} allowClear size='large' showSearch placeholder={'Jins tanlang'} optionFilterProp='label' options={[{ label: "Erkak", value: "Erkak" }, { label: "Ayol", value: "Ayol" }]} />
                        <Input value={isMerried} onChange={(e) => setIsMerried(e.target.value)} allowClear required size='large' placeholder='Turmush qurganmisiz' />
                        <FilterCustom api={"/workList"} filterId={workCompanyId} setFilterId={setWorkConpanyId} setFilterName={setWorkCompany} placeholder={'Ish joyinggizni tanlang'} extraClass={'!w-full'} mode={"multiple"} />
                    </div>
                </div>
            </form>


        </>
    )
}

export default TeachersCrud;