
import { useHistory } from 'react-router';
import styles from './FriendsCharacters.module.css';
import CharacterImage from "./CharacterImage";

import Monica from './../assets/monicagif.gif';
import Rachel from './../assets/rachelgif.gif';
import Joey from './../assets/joeygif.gif';
import Chandler from './../assets/chandlergif.webp';
import Phoebe from './../assets/phoebegif.gif';
import Ross from './../assets/rossgif.webp';

const FriendsCharacters = (props) => {

    const history = useHistory()

    const onClickPicture = (pictureElement) => {
        history.push(`/quiz?character=${pictureElement.target.id}`)
    }

    return (
        <div className={styles.characters_container}>
            <CharacterImage id="monica" alt={"Mônica"} src={Monica} borderColor="#fbb70e" onClick={onClickPicture} />
            <CharacterImage id="rachel" alt={"Rachel"} src={Rachel} borderColor="#699ee7" onClick={onClickPicture} />
            <CharacterImage id="joey" alt={"Joey"} src={Joey} borderColor="#cc2124" onClick={onClickPicture} />
            <CharacterImage id="chandler" alt={"Chandler"} src={Chandler} borderColor="#65a1ed" onClick={onClickPicture} />
            <CharacterImage id="phoebe" alt={"Phoebe"} src={Phoebe} borderColor="#fbb70e" onClick={onClickPicture} />
            <CharacterImage id="ross" alt={"Ross"} src={Ross} borderColor="#cc2124" onClick={onClickPicture} />
        </div>
    )
}

export default FriendsCharacters;