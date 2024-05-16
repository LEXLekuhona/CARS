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
			className='d-flex align-items-center flex-column justify-content-center'
			style={{ backgroundColor: '#e9ecef', height: '100vh' }}
		>
			<div style={{ width: '360px' }}>
				<div
					className='fw-light mb-3 text-center'
					style={{ fontSize: '2.1rem' }}
				>
					<b>Cars</b>DB
				</div>

				<div
					className='position-relative d-flex flex-column bg-white text-break mb-0 '
					style={{
						border: '0 solid rgba(0, 0, 0, 0.125)',
						borderRadius: '0.25rem',
						boxShadow:
							'0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2)',
					}}
				>
					<div style={{ flex: '1 1 auto', padding: '20px' }}>
						<p
							className='m-0 text-center'
							style={{ padding: '0 20px 20px', color: '#666' }}
						>
							Авторизуйтесь для доступа к БД
						</p>

						<form method='post' onSubmit={handleSubmit}>
							<input type='hidden' name='' value='' />
							<div className='position-relative mb-3 '>
								<input
									name='username'
									type='text'
									className='form-control m-0'
									style={{ fontFamily: 'inherit' }}
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
									className='form-control m-0'
									style={{ fontFamily: 'inherit' }}
									placeholder='Пароль'
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>

								<FaLock className='icon' />
							</div>
							<div className='row' style={{ margin: '0 -7.5px  0  -7.5px' }}>
								<div className='col-4' style={{ padding: '0 7.5px 0 7.5px' }}>
									<button
										type='submit'
										className='btn btn-primary d-block'
										style={{ width: '100%' }}
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
