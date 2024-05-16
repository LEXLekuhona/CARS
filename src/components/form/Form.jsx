import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import './form.css'
const Form = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDegault
	}

	return (
		<div
			className='login-page d-flex align-items-center flex-column justify-content-center'
		>
			<div className='login-box'>
				<div
					className='fw-light mb-3 text-center login-logo'
				>
					<b>Cars</b>DB
				</div>

				<div
					className='card position-relative d-flex flex-column bg-white text-break mb-0 '
				>
					<div className='card-body'>
						<p
							className='login-box-msg m-0 text-center'
							
						>
							Авторизуйтесь для доступа к БД
						</p>

						<form method='post' onSubmit={handleSubmit}>
							<input type='hidden' name='' value='' />
							<div className='position-relative mb-3 '>
								<input
									name='username'
									type='text'
									className='input-login form-control m-0'
									placeholder='Логин'
									required
									value={login}
									onChange={e => setLogin(e.target.value)}
								/>

								<FaEnvelope className='icon' />
							</div>

							<div className='position-relative mb-3'>
								<input
									name='password'
									type='password'
									className='input-login form-control m-0'
									placeholder='Пароль'
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>

								<FaLock className='icon' />
							</div>
							<div className='row row-footer' >
								<div className='col-4 col-footer'>
									<button
										type='submit'
										className='btn button btn-primary d-block'
									>
										Войти
									</button>
									<input type='hidden' name='text' value='/' />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Form
