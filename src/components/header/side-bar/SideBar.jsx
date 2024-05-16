const SideBar = () => {
	return (
		<nav
		className='navbar navbar-expand-lg bg-dark border-bottom  border-body'
			data-bs-theme='dark'
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					Главная страница
				</a>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#'>
								Все автомобили
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Бренды
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Модели
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Поколения
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Справочники
							</a>
							<ul className='dropdown-menu'>
								<li>
									<a className='dropdown-item' href='#'>
										Диамерт шин
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Связь шин
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Шины (метрические)
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Шины (метровые)
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Диски
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Масла
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Дворники
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Аккумуляторы
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default SideBar
