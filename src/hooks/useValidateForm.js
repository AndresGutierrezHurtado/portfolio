import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import {
    email,
    maxValue,
    minLength,
    minValue,
    nonEmpty,
    object,
    parse,
    pipe,
    regex,
    string,
    ValiError,
} from "valibot";

export const validateForm = (data = {}, form = "", t) => {

    try {
        let schema;

        switch (form) {
            case "contact-form":
                schema = object({
                    user_email: pipe(
                        nonEmpty(t("required")),
                        string(t("required")),
                        email(t("email"))
                    ),
                    email_subject: pipe(
                        nonEmpty(t("required")),
                        string(t("required")),
                        minLength(5, t("min", { min: 5 }))
                    ),
                    email_message: pipe(
                        nonEmpty(t("required")),
                        string(t("required")),
                        minLength(10, t("min", { min: 10 }))
                    ),
                });
                break;
            default:
                return { success: false, message: "Formulario no encontrado", data: null };
                break;
        }

        document
            .querySelectorAll(`.input-error, .select-error, .textarea-error`)
            .forEach((input) => {
                input
                    .closest(".fieldset")
                    .querySelectorAll(".label-error")
                    .forEach((element) => element.remove());
                input.classList.remove("input-error");
                input.classList.remove("focus:input-error");
                input.classList.remove("select-error");
                input.classList.remove("focus:select-error");
                input.classList.remove("textarea-error");
                input.classList.remove("focus:textarea-error");
            });

        const finalData = parse(schema, data);
        if (form === "reset-password-form" && data.user_password !== data.user_password_confirm) {
            if (data.user_password !== data.user_password_confirm) {
                throw new ValiError([
                    {
                        path: [{ key: "user_password" }],
                        message: "Las contraseñas no coinciden",
                    },
                    {
                        path: [{ key: "user_password_confirm" }],
                        message: "Las contraseñas no coinciden",
                    },
                ]);
            }
        }

        return { success: true, message: "Formulario valido", data: finalData };
    } catch (error) {
        let fieldErrors = [];

        console.log("error", error);

        error.issues.forEach((issue) => {
            fieldErrors.push({
                field: issue.path[0].key,
                message: issue.message,
            });

            console.log(toast.error(issue.message, { theme: "colored" }));
            toast.error(issue.message, {
                theme: "colored",
                position: "bottom-right",
                autoClose: 3000,
                pauseOnHover: false,
            });

            document.querySelectorAll(`[name="${issue.path[0].key}"]`).forEach((input) => {
                input.classList.add("input-error");
                input.classList.add("focus:input-error");
                input.classList.add("select-error");
                input.classList.add("focus:select-error");
                input.classList.add("textarea-error");
                input.classList.add("focus:textarea-error");

                const errorLabel = document.createElement("label");
                errorLabel.className = "label-error text-red-500";
                errorLabel.textContent = issue.message;
                input.closest(".fieldset").appendChild(errorLabel);
            });
        });

        return { success: false, message: "Formulario no valido", errors: fieldErrors };
    }
};
