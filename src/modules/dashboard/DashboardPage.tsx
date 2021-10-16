import { DashboardNavBar } from "../../ui/DashboardNavBar";
import { PieChart } from "../pie-chart/PieChart";

export const DashboardPage = (props) => {
    return (
        <DashboardNavBar>
            <PieChart {...props} />
            <p style={{ margin: "2rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia! Expedita, vero!
                Consectetur incidunt facere omnis molestiae eligendi necessitatibus facilis ullam libero et accusantium
                officiis at quod veniam voluptatibus ipsa, suscipit dolorem laborum repudiandae eius obcaecati magnam
                vero qui! Reiciendis animi consectetur dolor perferendis. Dolores aliquam nam pariatur eligendi
                necessitatibus?
            </p>
        </DashboardNavBar>
    );
};
