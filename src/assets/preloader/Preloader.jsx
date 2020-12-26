import s from './Preloader.module.css'
import loader from '../../assets/images/loader.gif'

let Preloader = (props) => {
    return (
        <div>
            <div>
                <img src={loader} className={s.img}/>
            </div>
        </div>
    )
}

export default Preloader