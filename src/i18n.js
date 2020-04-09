import i18n from "i18next";

import Backend from "i18next-xhr-backend";
import { getItem } from "app/utils";
const backendOpts = {
  loadPath: `/locales/{{lng}}/{{ns}}.json`
};
i18n
  .use(Backend)
  // .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: getItem("lang") ? getItem("lang") : "en",
    backend: backendOpts,
    ns: ["general", "auth", "welcome", "biodata"],
    defaultNS: "general"
  });
export default i18n;
