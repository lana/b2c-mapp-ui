import CSS from './Toggle.css'

export default function Toggle({ onChange, checked }) {
	const checkedClass = checked ? CSS.checked : null
	return (
		<div className={`${CSS.checkbox} ${checkedClass}`}>
			<label>
				<span className={CSS.track} />
				<span className={CSS.knob} />
				<input
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
