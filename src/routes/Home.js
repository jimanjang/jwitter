import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";
import Jweet from "components/Jweet";

const Home = ({ userObj }) => {
    const [jweet, setJweet] = useState("");
    const [jweets, setJweets] = useState([]);
    const [attachment, setAttachment] = useState();
    useEffect(() => {
        dbService.collection("jweets").onSnapshot(snapshot => {
            const jweetArray = snapshot.docs.map(doc => ({
                id:doc.id, 
                ...doc.data(),
            }));
            setJweets(jweetArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment != ""){
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const jweetObj = {
            text : jweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        };
        await dbService.collection("jweets").add(jweetObj);
        setJweet("");
        setAttachment("");
    };
    const onChange = (event) => {
        const { 
            target:{value}, 
        } = event;
        setJweet(value);
    };
    const onFileChange = (event) => {
        const {
            target:{files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget : { result },
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => setAttachment(null)
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                value={jweet} 
                onChange={onChange} 
                type="text" 
                placeholder="What's on your mind?" 
                maxLength={120} 
            />
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Jweet" />
            {attachment && (
                <div>
                    <img src = {attachment} width = "50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
        <div>
            {jweets.map((jweet) => (
                <Jweet 
                key = {jweet.id} 
                jweetObj={jweet} 
                isOwner={jweet.creatorId === userObj.uid} 
                />
        ))}
        </div>
    </div>
    );
};
export default Home;