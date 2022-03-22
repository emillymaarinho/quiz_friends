import styles from './CharacterImage.module.css';

const CharacterImage = (props) => {
    const { borderColor, alt, ...remainingProps } = props;


    return (
        <div >
            <img {...remainingProps} alt={alt} className={styles.character_picture} style={{ border: `2px solid ${borderColor}` }} />
        </div>
    )
}

export default CharacterImage;