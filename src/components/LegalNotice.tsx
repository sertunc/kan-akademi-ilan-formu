import { useTranslation } from "react-i18next";

function LegalNotice() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        marginTop: "1rem",
        textAlign: "center",
        fontSize: "0.95rem",
        color: "#888",
      }}
    >
      <p>{t("legalNotice")}</p>
    </div>
  );
}

export default LegalNotice;
