import Modal from './modal/Modal'
import SideBar from './side-bar/SideBar'

const Header = () => {
	return (
		<div className="d-flex justify-content-around fixed-top border-bottom bg-dark ">
			<SideBar />
			<Modal />
		</div>
	)
}
export default Header
