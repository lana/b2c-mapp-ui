import CSS from './styles.css'
import Heading from '../../typography/Heading'

export default ({ className, title }) => (
	<header className={`${CSS.topbar} ${className}`}>
		<Heading type={`headline`} className={CSS.title}>{title}</Heading>
	</header>
)
