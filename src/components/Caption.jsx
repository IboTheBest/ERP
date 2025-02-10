import React from "react";
import { Button } from "antd"
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Caption = ({ title, icon, count, BtnTitle, path, isBack, setLoading }) => {
    const navigate = useNavigate()
    function onClick() {
        navigate(path)
    }
    function handleBack(){
        navigate(-1)
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-7">
               {isBack &&  <ArrowLeftOutlined onClick={handleBack} />}
                <div>
                    <h2 className="font-bold text-[25px]">{title}</h2>
                   {isBack ? "" :  <p className='text-[15px] text-slate-400 lowercase'>{title} {count}ta</p>}
                </div>
            </div>
            {isBack ?
                <Button loading={setLoading} htmlType='submit' size='large' type='primary' icon={icon}>{BtnTitle}</Button>
                :
                <Button loading={setLoading} onClick={onClick} htmlType='button' size='large' type='primary' icon={icon}>{BtnTitle}</Button>
            }
        </div>
    )
}
export default Caption