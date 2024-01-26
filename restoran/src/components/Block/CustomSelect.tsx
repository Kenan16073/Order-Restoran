import { useDispatch } from "react-redux";
import { eatsDetail } from "../../store/Order/orderSlice";

export const CustomSelect = ({ data, defaultOptions, setValue }: { data: any, defaultOptions: string, setValue: any }) => {

    const dispatch = useDispatch();

    function handleChange(e: any) {
        setValue(e.target.value);
        if (defaultOptions === 'Select Eats') {
            //@ts-ignore
            dispatch(eatsDetail(e.target.value))
        }
    }
    return (
        <>
            <select className="form-select my-3" aria-label="Default select example" onChange={(e) => { handleChange(e) }}>
                <option selected> {defaultOptions} </option>
                {data.map((item: any) => {
                    return <option key={item.id} value={item.id}> {item.name} </option>
                })}
            </select>
        </>
    )
}
