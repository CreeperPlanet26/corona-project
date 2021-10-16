import { GetServerSideProps } from "next";
import { DashboardPage } from "../modules/dashboard/DashboardPage";
import { getTotalData } from "../modules/pie-chart/getTotalData";

export default function Dashboard(props) {
    return (
        <DashboardPage {...props} />
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log(process.env.API_KEY)
    const total = await getTotalData();
    console.log(process.env.API_KEY)
    return {
        props: { total }
    }
}