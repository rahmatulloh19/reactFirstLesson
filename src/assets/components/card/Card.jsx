import Img from "../../images/1280px-Flag_of_Germany.svg.svg";
import "./card.css";

const countOfCountries = Array(8).fill(1);

export const Card = () => {
	return countOfCountries.map((item) => {
		return (
			<>
				<li className="countries__item">
					<img className="countries__img" src={Img} height={160} alt="" />
					<div className="countries__item-inner">
						<h3 className="countries__subtitle">Germany</h3>
						<p className="countries__desc">
							<strong>Population:</strong> 81,770,900
						</p>
						<p className="countries__desc">
							<strong>Region:</strong> Europe
						</p>
						<p className="countries__desc">
							<strong>Capital:</strong> Berlin
						</p>
					</div>
				</li>
			</>
		);
	});
};
