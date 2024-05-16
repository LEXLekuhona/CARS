const Home = () => {
	return (
		<div
			className='sidebar bg-dark fixed-top navbar-expand-lg fixed-bottom'
			style={{ height: 'auto' }}
		>
			<div className='container'>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a
									className='nav-link'
									data-bs-toggle='offcanvas'
									href='/'
									role='button'
									aria-controls='offcanvasExample'
								>
									<i className='fas fa-bars'></i>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Главная страница
								</a>
							</li>
						</ul>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a href='/accounts/logout/?next=/accounts/login/'>
									<button type='button' className='btn btn-outline-danger'>
										Выйти
									</button>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	)
}
export default Home

{
	/* <aside className="main-sidebar sidebar-dark-primary elevation-4">
       
        <a href="/" className="brand-link active">
            <img src="/db_manager/static/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style="opacity: .8">
            <span className="brand-text font-weight-light">Cars DB</span>
        </a>

      
        <div className="sidebar" style="overflow-y: auto;">
            <!-- Sidebar user panel (optional) -->
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="/db_manager/static/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image">
                </div>
                <div className="info">
                    <a href="/" className="d-block active">Andrew</a>
										</div>
            </div>
           
            <nav className="mt-2">
						<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li className="nav-item">
                        <a href="/" className="nav-link menu_button active">
                            <i className="nav-icon fas fa-car"></i>
                            <p>Все автомобили</p>
														</a>
                    </li>
                    <li className="nav-item">
                        <a href="/brand/" className="nav-link menu_button">
                            <i className="nav-icon fas fa-cog"></i>
                            <p>Бренды</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/model/" className="nav-link menu_button">
                            <i className="nav-icon fas fa-wrench"></i>
                            <p>Модели</p>
                        </a>
                    </li>
                    <li className="nav-item">
										<a href="/generation/" className="nav-link menu_button">
                            <i className="nav-icon fas fa-star"></i>
                            <p>Поколения</p>
                        </a>
												</li>
                    <li className="nav-header">Справочники</li>
                    <li className="nav-item">
                        <a href="/tire_diameter/" className="nav-link">
                            <i className="nav-icon far fa-image"></i>
                            <p>
                                Диаметр шин
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/tire_dependencies/" className="nav-link">
                            <i className="nav-icon far fa-image"></i>
                            <p>Связь шин</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit"></i>
                            <p>
                                Шины (метрическая)
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview" style="display: none;">
                            <li className="nav-item">
                                <a href="/tire_metric_profile/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Профиль</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/tire_metric_width/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Ширина</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit"></i>
                            <p>
                                Шины (дюймовая)
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview" style="display: none;">
                            <li className="nav-item">
                                <a href="/tire_inch_height/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Высота</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/tire_inch_width/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Ширина</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit"></i>
                            <p>
                                Диски
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview" style="display: none;">
                            <li className="nav-item">
                                <a href="/wheel_width/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Ширина</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/wheel_diameter/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Диаметр</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/wheel_drilling/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Сверловка</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/wheel_departure/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Вылет</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/wheel_ch_diameter/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Диаметр ЦО</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/wheel_dependencies/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Связь</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit"></i>
                            <p>
                                Масла
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview" style="display: none;">
                            <li className="nav-item">
                                <a href="/oil_type/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Типы</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/oil_viscosity/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Вязкость</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/wipers_length/" className="nav-link">
                            <i className="nav-icon far fa-image"></i>
                            <p>
                                Дворники
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit"></i>
                            <p>
                                Аккумуляторы
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview" style="display: none;">
                            <li className="nav-item">
                                <a href="/battery_capacity/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Емкость</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/battery_starting_current/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Пусковой ток</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/battery_dimensions/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Габариты</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/battery_polarity/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Полярность</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/year/" className="nav-link">
                            <i className="nav-icon far fa-image"></i>
                            <p>
                                Годы
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    </aside> */
}
