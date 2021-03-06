import { GetServerSideProps } from "next";
import { coronaClient } from "../corona-client";
import { DashboardPage } from "../modules/dashboard/DashboardPage";

export default function Dashboard(props) {
    return (
        <DashboardPage {...props} />
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const total = await coronaClient.getTotalCountryCases();
    const sVac = await coronaClient.getStatesVaccinations();
    return {
        props: { total, sVac }
    }
}