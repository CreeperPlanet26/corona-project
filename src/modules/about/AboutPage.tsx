import { DashboardNavBar } from "../../ui/DashboardNavBar";
import { PieChart } from "../pie-chart/PieChart";

export const AboutPage = () => {
    return (
        <DashboardNavBar>
            <div className="about-page">
                <h1>About</h1>
                <video width="320" height="240" controls>
                    <source src="assets/Corona_Video.mp4" type="video/mp4" />
                </video>
            </div>
        </DashboardNavBar>
    );
};
