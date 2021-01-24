import React from "react";

const Jweet = ({ jweetObj, isOwner }) => {
    const onDeleteClick = () => {
        const ok = window.confirm("Are you sure you wnat to delete this jweet?");
        console.log(ok);
        if(ok){
            deService.doc(`jweets/${jweetObj.id})
        }
    }
    return (
    <div>
        <h4>{jweetObj.text}</h4>
        {isOwner && (
        <>
        <button onClick={onDeleteClick}>Delete Jweet</button>
        <button>Edit Jweet</button>
        </>
        )}
    </div>
    );
};

export default Jweet;