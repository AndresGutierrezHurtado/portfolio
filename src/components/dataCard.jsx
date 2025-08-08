"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import data from "@/lib/data";

export default function DataCard() {
    const t = useTranslations("Index");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="w-full border-[1.5px] border-secondary p-5 rounded-lg grid-cols-4 text-center bg-white/30 backdrop-blur-[5px] hidden lg:grid">
            <div className="">
                <h1 className="text-5xl font-extrabold tracking-tight">
                    {isLoaded ? <CountUp end={data.stats.yearsOfExperience} duration={2.7} /> : 0}
                </h1>
                <p>{t("hero__stat--years")}</p>
            </div>
            <div className="">
                <h1 className="text-5xl font-extrabold tracking-tight">
                    +
                    {isLoaded ? <CountUp end={data.stats.certificationsCount} duration={2.7} /> : 0}
                </h1>
                <p>{t("hero__stat--certifications")}</p>
            </div>
            <div className="">
                <h1 className="text-5xl font-extrabold tracking-tight">
                    +{isLoaded ? <CountUp end={data.stats.websitesBuilt} duration={2.7} /> : 0}
                </h1>
                <p>{t("hero__stat--projects")}</p>
            </div>
            <div className="">
                <h1 className="text-5xl font-extrabold tracking-tight">
                    +{isLoaded ? <CountUp end={data.stats.commitsCount} duration={2.7} /> : 0}
                </h1>
                <p>{t("hero__stat--commits")}</p>
            </div>
        </div>
    );
}
