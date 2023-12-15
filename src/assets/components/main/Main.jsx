import { Search } from "../search/Search";
import { Countries } from "../countries/Countries";

export const Main = () => {
	return (
		<>
			<main className="site-main">
				<Search />
				<Countries />
			</main>
		</>
	);
};
