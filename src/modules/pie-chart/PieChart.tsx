import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { coronaClient } from '../../corona-client';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export const PieChart = ({ total }) => {
    const [today, setToday] = useState<{ names: string[]; cases: number[]; }>(null);
    // const [total, setTotal] = useState<{ names: string[]; cases: number[]; }>(null);

    useEffect(() => {
        coronaClient.getTodayCountryCases().then(t => setToday(t));
        // getTotalData().then(t => setTotal(t));
    }, [])

    return (
        (typeof window !== 'undefined' && today && total) && (
            <>
                <Chart
                    type="pie"
                    width="2000px"
                    height="2000px"
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
                <Chart
                    type="pie"
                    width="2000px"
                    height="2000px"
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
            </>
        )
    )
}

