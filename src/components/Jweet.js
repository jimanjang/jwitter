import {useState} from "react";
import { dbService, storageService } from 'fbase';

const Jweet = ({ jweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newJweet, setNewJweet] = useState(jweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you wnat to delete this jweet?");
        if(ok){
            await dbService.doc(`jweets/${jweetObj.id}`).delete();
            await storageService.refFromURL(jweetObj.attachmentUrl).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`jweets/${jweetObj.id}`).update({
          text: newJweet,
        });
        setEditing(false);
      };
      const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNewJweet(value);
      };
    return (
        <div>
          {editing ? (
            <>
              {isOwner && 
              <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your Jweet"
                  value={newJweet}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="Update Jweet" />
              </form>
              <button onClick={toggleEditing}>Cancel</button> </>}
            </>
          ) : (
            <>
              <h4>{jweetObj.text}</h4>
              {jweetObj.attachmentUrl && (
                <img src={jweetObj.attachmentUrl} width="50px" height="50px" />
              )}
              {isOwner && (
                <>
                  <button onClick={onDeleteClick}>Delete Jweet</button>
                  <button onClick={toggleEditing}>Edit Jweet</button>
                </>
              )}
            </>
          )}
        </div>
    );
};

export default Jweet;