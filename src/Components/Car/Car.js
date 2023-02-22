import {carService} from "../../services";

const Car = ({car,setUpdateCar,setCars}) => {
    const{id,brand,price,year} = car

    const deleteCar = async ()=>{
        await carService.deleteByid(id);
        const {data} = await carService.getAll();
        setCars([...data])
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>
        </div>
    );
};

export {Car};