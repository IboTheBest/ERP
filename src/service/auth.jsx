import { instance } from "../hooks/instance";

export const Create = (data, API, setIsLoading, toast, navigate) => instance().post(API, data).then(() => {
    setTimeout(() => {
        setIsLoading(false)
        navigate(-1)
        toast.success("Qoshildi")
    },1000)
})

export const Edit = (data, API, setIsLoading, toast, navigate) => instance().put(API, data).then(() => {
    setTimeout(() => {
        setIsLoading(false)
        navigate(-1)
        toast.success("Yangilandi")
    },1000)
})