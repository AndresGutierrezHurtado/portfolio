"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { ContactIcon, PaperPlaneIcon } from "./icons";
import { validateForm } from "@/hooks/useValidateForm";
import Swal from "sweetalert2";

export default function ContactForm() {
    const t = useTranslations("Index");
    const tv = useTranslations("Validations");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));
        const validation = validateForm(data, "contact-form", tv);

        if (validation.success) {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            const response = await res.json();

            if (response.success) {
                Swal.fire({
                    icon: "success",
                    title: t("contact__success--title"),
                    text: t("contact__success--text", { email: data.user_email }),
                    confirmButtonText: t("contact__success--button"),
                });
                e.target.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: t("contact__error--title"),
                    text: t("contact__error--text", { error: response.message }),
                });
            }
        }
    };
    return (
        <section className="w-full px-3 mb-[100px]">
            <div className="w-full max-w-[1200px] mx-auto py-10">
                <div className="flex flex-col gap-2 py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight flex items-center gap-2">
                        <ContactIcon size={50} />
                        {t("contact__title")}
                    </h1>
                    <p className="text-xl text-pretty">{t("contact__description")}</p>
                </div>

                <div className="card bg-white/80 backdrop-blur-[2px] shadow-xl h-fit w-full">
                    <div className="card-body [&_p]:grow-0 px-8 py-10">
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <fieldset className="fieldset">
                                <label className="fieldset-label font-medium text-base">
                                    {t("contact__label--email")}:
                                </label>
                                <input
                                    className="input w-full focus:outline-0 focus:border-primary bg-transparent"
                                    placeholder={t("contact__placeholder--email")}
                                    name="user_email"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="fieldset-label font-medium text-base">
                                    {t("contact__label--subject")}:
                                </label>
                                <input
                                    className="input w-full focus:outline-0 focus:border-primary bg-transparent"
                                    placeholder={t("contact__placeholder--subject")}
                                    name="email_subject"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="fieldset-label font-medium text-base">
                                    {t("contact__label--message")}:
                                </label>
                                <textarea
                                    className="textarea w-full focus:outline-0 focus:border-primary bg-transparent resize-none h-32"
                                    placeholder={t("contact__placeholder--message")}
                                    name="email_message"
                                ></textarea>
                            </fieldset>

                            <div className="form-control flex flex-col gap-1 w-full pt-5">
                                <button className="btn w-full btn-primary">
                                    <PaperPlaneIcon size={20} />
                                    <span>{t("contact__submit")}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
