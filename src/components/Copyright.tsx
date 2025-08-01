const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.95rem", color: "#888", }}>
            © {year} Kan Akademi. Tüm hakları saklıdır.
        </div>
    );
};

export default Copyright;
