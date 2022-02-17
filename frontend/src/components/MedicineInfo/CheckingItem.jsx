import React from "react";
import { useSelector } from "react-redux";
import MedicineInfo from "./MedicineInfo";
import {Medicineapi} from "../api/Medicineapi";

const medicinePassing = () => {
    const item = Medicineapi;
    const filter = item.filter((data)=>{
      data.id != id
      return data;
    }
    )
    
  return (
    <>
    <div>
      {
        filter.map((ele,index)=>{
          return <MedicineInfo key={ele.id} {...ele}/>
        })
      }
    </div>
    </>
  );
};

export default medicinePassing;
