import React from 'react';

import { Link, Typography } from '@mui/material';

const Footer = () => {
	return (
		<div>
			<Typography
				align="center"
				color="GrayText"
				variant="body2"
			>
				Copyright &copy; { new Date().getFullYear() } &nbsp;
				<Link
					color="inherit"
					href="https://github.com/jcarlosj"
				>jcarlosj</Link>
			</Typography>
		</div>
	);
};


export default Footer;
