const Modal = () => {
	return (
		<div className='d-flex flex-rap align-items-center justify-content-center align-content-center'>
			<div className='d-flex align-items-center pe-5'>
				<img src='public\user.jpg' alt='Logo' width={34} height={34} />
				<p className='ps-2'>Andrew</p>
			</div>
			<button className='btn btn-danger'>Выйти</button>
		</div>
	)
}
export default Modal
