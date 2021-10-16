import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { getTodayData } from './getTodayData';
import { getTotalData } from './getTotalData';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export const PieChart = ({ total }) => {
    const [today, setToday] = useState<{ names: string[]; cases: number[]; }>(null);
    // const [total, setTotal] = useState<{ names: string[]; cases: number[]; }>(null);

    useEffect(() => {
        getTodayData().then(t => setToday(t));
        // getTotalData().then(t => setTotal(t));
    }, [])

    return (
        (typeof window !== 'undefined' && today && total) && (
            <>
                {/* <Chart
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
                /> */}
                <Chart
                    type="bar"
                    series={[{
                        data: today.cases
                    }]}
                    options={{
                        labels: total.names,
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        plotOptions: {
                            bar: {
                                borderRadius: 4,
                                horizontal: true,
                            }
                        },

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

