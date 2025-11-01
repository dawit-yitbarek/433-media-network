import { useEffect, useState } from "react";
import AdminAuth from "../components/AdminAuth";
import AdminDashboard from "../components/AdminDashboard";

const AdminPage = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminData");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false); // ✅ finished checking
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C] text-[#00E0FF] text-xl font-['Bebas Neue']">
        Checking admin session...
      </div>
    );
  }

  return <>{admin ? <AdminDashboard /> : <AdminAuth />}</>;
};

export default AdminPage;