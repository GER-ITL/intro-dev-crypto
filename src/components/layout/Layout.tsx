import { FC } from 'react'
import Header from './header/Header'
import { IProps } from './layout.interface'

const Layout: FC<IProps> = ({ children, heading }) => {
	return (
		<section>
			<Header />
			<h1>{heading}</h1>
			{children}
		</section>
	)
}
export default Layout
