import React from 'react';

export const Button = ({
	children,
	isBold,
	isPrimary,
	isSuccess,
	isInfo,
	isWarning,
	isDanger,
	textLower,
	isBig,
	isHuge,
	isCircle,
	isRounded,
	isLight,
	isOutlined,
	isLoading,
	elevated,
	isRaised,
	icon,
	iconSmall,
	isWhite,
	isDisabled,
	isFullWidth,
	iconType,
	hModalClose,
	mlAuto,
	onClick,
	...rest
}) => {
	const getButtonClasses = () => {
		const classes = [];

		isCircle && classes.push('is-circle');
		isRounded && classes.push('is-rounded');

		// Color Options
		isPrimary && classes.push('is-primary');
		isSuccess && classes.push('is-success');
		isInfo && classes.push('is-info');
		isWarning && classes.push('is-warning');
		isDanger && classes.push('is-danger');
		isWhite && classes.push('is-white');
		isLight && classes.push('is-light');

		isRaised && classes.push('is-raised');
		elevated && classes.push('is-elevated');

		textLower && classes.push('is-lower');
		isBold && classes.push('is-bold');

		isBig && classes.push('is-big');
		isHuge && classes.push('is-huge');

		isOutlined && classes.push('is-outlined');

		isLoading && classes.push('is-loading');

		isDisabled && classes.push('is-disabled');

		isFullWidth && classes.push('is-fullwidth');
		hModalClose && classes.push('h-modal-close');
		mlAuto && classes.push('ml-auto');


		return classes.join(' ');
	};

	return (
		<>
			<button {...rest} className={`button h-button ${getButtonClasses()}`} onClick={onClick}>
				{icon && (
					<span className={`icon ${iconSmall && 'is-small'}`}>
						<i className={`fas fa-${iconType}`}></i>
					</span>
				)}

				<span>{children}</span>

			</button>
		</>
	);
};
