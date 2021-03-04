const grayScale = {
	lightGray: '#e1e8ed',
	superLightGray: '#f4f8fa',
	darkGray: '#657786',
	superDarkGray: '#1e1f21'
};

const blue = {
	primary: '#1b31a8',
	primaryHover: '#162575',
	secondary: '#0079ff',
	success: '#4fda68',
	danger: '#fe5722',
	...grayScale
};

const fonts = {
	primary: {
		family: 'Work Sans'
	}
};

const sizes = {
	container: {
		desktop: '1170px'
	}
};

export const COLOR_TYPES = Object.keys(blue);

export default { fonts, sizes, colors: blue };
