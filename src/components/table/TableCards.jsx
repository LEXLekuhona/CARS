const TableCards = () => {
	return (
		<table class='table table-dark table-striped'>
			<thead>
				<tr>
					<th>Бренд</th>
					<th>Модель</th>
					<th>Поколение</th>
					<th>Годы выпуска</th>
					<th>Операции</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>BMW</td>
					<td>X5</td>
					<td>G05</td>
					<td>2018 - 2023</td>
					<td>
						<button className='btn btn-success'>Edit</button>
						<button className='btn btn-danger ms-3'>Delet</button>
						<button className='btn btn-warning ms-3'>Copy</button>
					</td>
				</tr>
				<tr>
					<td>BMW</td>
					<td>X5</td>
					<td>F15</td>
					<td>2013 - 2018</td>
					<td>
						<button className='btn btn-success'>Edit</button>
						<button className='btn btn-danger ms-3'>Delet</button>
						<button className='btn btn-warning ms-3'>Copy</button>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
export default TableCards
