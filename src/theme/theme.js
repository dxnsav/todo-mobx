import { extendTheme } from '@chakra-ui/react'

const theme =  extendTheme({
	colors: {
		red: {
			500: '#bc4749',
		},
		green: {
			500: '#588157',
		},
		gray: {
			100: '#fefae0',
			200: '#b6ad90',
			400: '#a4ac86',
		}
	},
});

export default theme;