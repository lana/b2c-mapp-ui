import CSS from './styles.css'

export default function Toggle({ onChange, checked, dataTestId }) {
	const checkedClass = checked ? CSS.checked : null
	const testId = dataTestId || 'toggle'
	return (
		<div className={`${CSS.checkbox} ${checkedClass}`} data-testid={testId}>
			<label>
				<span className={CSS.track} />
				<span className={CSS.knob} />
				<input
					data-testid={`${testId}-input`}
					type="checkbox"
					checked={checked}
					onChange={e => {
						onChange ? onChange(e) : null
					}}
				></input>
			</label>
		</div>
	)
}
