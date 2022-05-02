const PropsChildrenComponent = ( props ) => {
	return (
		<>
			<h1>props.children</h1>
			<h2>{ props.name }</h2>
			{ props.children }
		</>
	);
};


export default PropsChildrenComponent;
