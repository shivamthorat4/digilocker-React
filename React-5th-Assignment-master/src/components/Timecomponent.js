import React,{useState} from "react";
import './Timecomponent.css';

const Timecomponent = props =>{

    let time= new Date().toLocaleTimeString();
    let date= new Date().getDate();
    let day= new Date().getDay();
    let month= new Date().getMonth();
    let year= new Date().getFullYear();

    const daylist=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthlist=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [ctime,setCtime] = useState(time);
    const [cdate,setCdate] = useState(date);
    const [cmonth,setCmonth] = useState(month);
    const [cday,setCday] = useState(day);
    const [cyear,setCyear] = useState(year);
  
    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
      if(props.switch){
        date = new Date().getDate();
        setCdate(date);
        day = new Date().getDay();
        setCday(day);
        month = new Date().getMonth();
        setCmonth(month);
        year = new Date().getFullYear();
        setCyear(year);
      }
    };

    setInterval(UpdateTime,1000);
    return(
        
        <div class="circle">
        <div class="circle__inner">
          <div class="circle__wrapper">
            <div class="circle__content">
                <p>{ctime}</p>
                <p>{props.switch? daylist[cday]:""}{" "}{props.switch? cdate:""}{" "}{props.switch? monthlist[cmonth]:""}{" "}{props.switch? cyear:""}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Timecomponent;