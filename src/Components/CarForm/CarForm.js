import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValid} from "../../validators/CarValid";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars,updateCar}) => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} =
        useForm({mode:'all',resolver:joiResolver(carValid)})

    useEffect(()=>{
      if (updateCar) {
          setValue('brand',updateCar.brand)
          setValue('price',updateCar.price)
          setValue('year',updateCar.year)
      }
    },[updateCar])

    const submit = async (car) =>{
        const {data} = await carService.create(car);
        setCars(prev=>[...prev,data])
        reset()
    }

    const update=async (car)=>{
        const {data}=await carService.updateByid(updateCar.id, car)
        if(Object.keys(data).length){
            const {data}= await carService.getAll();
            setCars(data)
        }
    };

    return (
        <form onSubmit={handleSubmit (updateCar ? update : submit)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export {CarForm};