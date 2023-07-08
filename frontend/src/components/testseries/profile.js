import React from "react";
import QMediaControlCard from "./profilecard"
function ProfilMain(props){
    const { testData, handelClick } = props;
    return(
        <div>
             <QMediaControlCard handelClick={handelClick} questions={testData}/>   
        </div>
    );
}
export default ProfilMain;