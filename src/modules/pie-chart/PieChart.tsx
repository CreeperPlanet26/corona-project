import dynamic from 'next/dynamic'
import { CSSProperties, useEffect, useState } from 'react';
import { coronaClient } from '../../corona-client';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const s: CSSProperties = { marginLeft: "4rem", marginTop: "1rem", };

export const PieChart = ({ total, sVac }) => {
    const [today, setToday] = useState<{ names: string[]; cases: number[]; }>(null);
    // const [total, setTotal] = useState<{ names: string[]; cases: number[]; }>(null);

    useEffect(() => {
        coronaClient.getTodayCountryCases().then(t => setToday(t));
        // getTotalData().then(t => setTotal(t));
    }, [])

    return (
        (typeof window !== 'undefined' && today && total) && (
            <>
                <h1 style={s}>Cases Today per Country</h1>
                <Chart
                    type="pie"
                    // width="2000px"
                    // height="2000px"
                    series={today.cases}
                    options={{
                        labels: today.names,
                        tooltip: {
                            y: {
                                formatter: (v) => `${v} Cases Today`
                            }
                        }
                    }}
                />
                <h1 style={s}>Total Cases per Country</h1>
                <Chart
                    type="pie"
                    // width="2000px"
                    // height="2000px"
                    series={total.cases}
                    options={{
                        labels: total.names,
                        tooltip: {
                            y: {
                                formatter: (v) => `${v} Cases Total`
                            }
                        }
                    }}
                />

                <h1 style={s}>Percent Vaccinated of Population per State</h1>
                <Chart
                    type="pie"
                    // width="2000px"
                    // height="2000px"
                    series={sVac.vaccinations}
                    options={{
                        labels: sVac.names,
                        tooltip: {
                            y: {
                                formatter: (v) => `${v}% of people are vaccinated`
                            }
                        }
                    }}
                />
            </>
        )
    )
}

