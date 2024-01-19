
import styles from "./_buttonp.module.scss"

const ButtonPrimary = ({children}) => {
    return ( 
        <>
            <button className={`${styles.default}`}>{children}</button>
        </>
     );
}
 
export default ButtonPrimary;