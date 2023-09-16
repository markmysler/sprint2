import "./sideBar.css";

function MenuItem({ icon, title, onClick, disabled }) {
	return (
		<button
			type="button"
			className="item"
			onClick={() => onClick()}
			disabled={disabled}
		>
			<div className="a">
				<div className="icon">
					<img src={icon} alt={`Icono de ${title}`} />
				</div>
				<div className="title">
					<span>{title}</span>
				</div>
			</div>
		</button>
	);
}

export default MenuItem;
