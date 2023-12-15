import "./countries.css";
import { Card } from "../card/Card";

export const Countries = () => {
	return (
		<>
			<section className="site-main__countries countries">
				<div className="container">
					<ul className="countries__list">
						<Card />
					</ul>
				</div>
			</section>
		</>
	);
};
