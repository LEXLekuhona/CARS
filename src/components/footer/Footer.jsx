const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className='fixed-bottom bg-dark p-3 border-top'>
			<div className='d-flex justify-content-center container-fluid'>
				<strong className='text-sm navbar-brand text-secondary '>
					Copyright © 2021 - {year} <a href="https://bumm-shop.ru/">cardan.shop</a>. All rights reserved.
				</strong>
			</div>
		</footer>
	)
}
export default Footer
