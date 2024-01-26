import { useEffect, useState } from "react";
import { CustomSelect } from "../components/Block/CustomSelect";
import { Spinner } from "../components/Block/Spinner";
import { useGetTablesQuery, useGetEmployeeQuery, useGetEatsQuery } from "../store/Order/orderApi"
import { useSelector } from "react-redux";

export const Add = () => {

    //@ts-ignore
    const {view} = useSelector((state)=>state.orderSlice);
    const [count, setCount] = useState<number>(0);
    const [price, setPrice] = useState<number>(0)
    

    const tablesRequest = useGetTablesQuery('');
    const employeeRequest = useGetEmployeeQuery('');
    const eatsRequest = useGetEatsQuery("");
    const [optionsValue, setOptionsValue] = useState<String[]>([]);


    function setValue(value : string){
        setOptionsValue([...optionsValue, value]);
    }

    useEffect(()=>{
        let view_price = view?.price ? view.price : 0
        let total = count * view_price;
        setPrice(total);
    }, [view])

    function handleInput(e:any){
        setCount(e.target.value);
        let total = Number(e.target.value) * view?.price;
        setPrice(total);
    }

    console.log(optionsValue);
    
    


    return (
        <div className="row">
            <h2 className="my-3 text-center"> Sifaris yarat </h2>
            <div className="col-6 offset-3">
                <form action="" className="my-3">
                    {
                        tablesRequest.isSuccess ? <CustomSelect data={tablesRequest.data} defaultOptions="Select Tables" setValue={setValue} /> : <Spinner />
                    }

                    {
                        employeeRequest.isSuccess ? <CustomSelect data={employeeRequest.data} defaultOptions="Select Employee" setValue={setValue} /> : <Spinner />
                    }

                    {
                        eatsRequest.isSuccess ? <CustomSelect data={eatsRequest.data} defaultOptions="Select Eats" setValue={setValue} /> : <Spinner />
                    }
                    <input type="text" onKeyUp={(e)=>{handleInput(e)}} className="form-control my-3" placeholder="Miqadar" />
                    <span> {price} AZN </span>

                  <div className="my-5 d-flex justify-content-end">
                  <button className="btn btn-success"> Add </button>
                  </div>
                </form>
            </div>
        </div>
    )
}
