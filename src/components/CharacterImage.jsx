import styles from './CharacterImage.module.css';

const CharacterImage = (props) => {
    const { borderColor, alt, ...remainingProps } = props;


    return (
        <div >
            <img {...remainingProps} alt={alt} className={styles.character_picture} style={{ border: `3px solid ${borderColor}` }} />
        </div>
    )
}

export default CharacterImage;