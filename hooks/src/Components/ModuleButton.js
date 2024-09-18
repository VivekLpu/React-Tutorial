import Styles from './button.module.css';
const ModuleButton = () =>{
    return (
        <div>
            <button className={Styles.button}> Module button</button>
            <button className={Styles.secondButton}> Module button</button>
        </div>
    )
}
export default ModuleButton;