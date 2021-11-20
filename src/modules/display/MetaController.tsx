import React from "react";
import Head from "next/head";
import { NextPage } from "next";

export interface MetaControllerProps {
    title?: string;
    embed?: { hexColor?: string; image?: string };
    owner?: string;
    additionalKeywords?: string[];
    description?: string;
}

export const MetaController: NextPage<MetaControllerProps> = ({
    title = "Corona Project",
    description = "Corona Project shows daily cases from all countries in a pie chart!",
    owner = "Creeper",
    additionalKeywords = [],
    embed = {
        hexColor: "#ff3f3f",
        // image: "https://ttsclan.vercel.app/assets/preview.png",
    },
}) => {
    return (
        <Head>
            <meta property="og:locale" content="en-US" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://corona-project.vercel.app/" />

            <title>{title}</title>
            <meta name="og:title" content={title} />

            <meta name="description" content={description} />
            <meta name="og:description" content={description} />

            <meta name="author" content={owner} />
            <meta
                name="keywords"
                content={`Corona${additionalKeywords?.map(
                    (k) => `,${k}`
                )}`}
            />
            <meta name="theme-color" content={embed.hexColor || "#ff3f3f"} />

            <meta name="og:type" content="website" />
            <meta name="og:site_name" content="Corona Project" />
            {embed.image && <meta name="og:image" content={embed.image} />}
            {embed.image && <meta property="twitter:image" content={embed.image} />}

        </Head>
    );
};
