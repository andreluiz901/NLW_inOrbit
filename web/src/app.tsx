import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goals";
import { Summary } from "./components/summary";
// import { EmptyGoals } from "./components/empty-goals";

export function App() {
	return (
		<Dialog>
			{/* <EmptyGoals /> */}
			<Summary />
			<CreateGoal />
		</Dialog>
	);
}
