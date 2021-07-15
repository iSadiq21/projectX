import { useRouter } from "next/router";
import styles from '../styles/Toolbar.module.css'

export const Toolbar = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed')}>Feed</div>
            <div onClick={() => router.push('/EOM')}>EOM</div>
            <div onClick={() => window.location.href='https://instagram.com/skeng_wes'}>Instagram</div>
        </div>
    )
}