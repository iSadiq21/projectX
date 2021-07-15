import styles from '../../styles/EOM.module.css'

export const EOM = ({ employee }) => {
    console.log(employee) 
    return(
        <div className='page-container'>
            <div className={styles.main}> 
                <h1>Employee Of The Month</h1>
            </div>
            <div className={styles.employeeOfTheMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image} />
                <h5>{employee.description   }</h5>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext =>{
    const res = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')
    const employee = await res.json()
    

    return {
        props: {
            employee: employee
        }
    }
}

export default EOM 