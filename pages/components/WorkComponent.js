import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const WorkComponent=(props)=>{
    return(
        <div className={styles.work}>
            
           <a href={props.link} target="_blank" rel="noopener noreferrer"><Image src={props.image} alt={props.name}/></a> 

        </div>
    )

}
export default WorkComponent;