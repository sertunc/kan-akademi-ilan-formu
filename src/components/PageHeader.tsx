import { useTranslation } from "react-i18next";

export default function PageHeader() {
  const { t } = useTranslation();
  return (
    <div style={{ marginBottom: "2rem", textAlign: "center" }}>
      <h1>{t("headerTitle")}</h1>
      <p>{t("headerDesc")}</p>
    </div>
  );
}
