import { Component } from 'preact'

import Heading from '../../typography/Heading'
import CSS from './styles.css'

export default class SelectionList extends Component {
	state = {
		checked: null,
	}

	value = ''
	selection = null
	delayCallback = 250

	componentWillReceiveProps(props) {
		let initialValue = props.options.reduce(
			(buffer, option) => (option.selected ? buffer + option.value : buffer),
			'',
		)
		if (initialValue != '') this.value = initialValue
	}

	onClick(option, index) {
		if (option.onClick) setTimeout(() => option.onClick(option.value, index), this.delayCallback)
		if (this.value != option.value && this.props.onChange) {
			setTimeout(() => this.props.onChange(option.value, index), this.delayCallback)
		}

		this.selection = index
		this.value = option.value
		this.setState({ checked: this.selection })
	}

	render(props) {
		return (
			<section className={`${CSS.wrapper} ${props.className || ''}`}>
				{props.title && (
					<Heading className={CSS.title} type="callout">
						{props.title}
					</Heading>
				)}
				<ul>
					{props.options.map((option, index) => {
						let id = `${props.id}-${index}`

						// Check default selection, then use consumer selection
						let checked
						if (!this.state.checked && option.selected) {
							checked = true
						} else if (this.state.checked == index) {
							checked = true
						} else {
							checked = false
						}

						return (
							<li
								key={index}
								className={`${CSS.item} ${checked ? CSS.checked : ''}`}
								onClick={e => this.onClick(option, index)}
							>
								<input
									type="radio"
									className={CSS.radio}
									id={id}
									checked={checked}
									name={props.id}
									value={option.value}
								/>
								<div className={CSS.content}>
									{option.label ? (
										<label className={CSS.label} htmlFor={id}>
											{option.label}
										</label>
									) : (
										option.children
									)}
								</div>
							</li>
						)
					})}
				</ul>
			</section>
		)
	}
}
