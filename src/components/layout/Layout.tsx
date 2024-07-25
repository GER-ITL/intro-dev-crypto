import { FC } from 'react'
import Header from './header/Header'
import { IProps } from './layout.interface'
import styles from './Layout.module.scss'
const Layout: FC<IProps> = ({ children, heading }) => {
	return (
		<section className={styles.wrapper}>
			<Header />
			<h1>{heading}</h1>
			{children}
		</section>
	)
}
export default Layout
