import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, Mail, Eye, EyeOff, Loader2 } from "lucide-react";
import { publicApi } from "./Api";
const BackEndUrl = import.meta.env.VITE_BACKEND_URL;

// ---------------- Reusable Input Field ----------------
const InputField = ({ icon: Icon, type, name, placeholder, value, onChange, showToggle, showPassword, setShowPassword, required }) => (
  <div className="flex items-center gap-3 bg-[#0A0F1C] rounded-xl px-4 py-3 border border-[#1C2541] focus-within:border-[#00E0FF]">
    {Icon && <Icon size={18} className="text-[#00E0FF]" />}
    <input
      type={type === "password" && showPassword ? "text" : type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-transparent text-white outline-none w-full"
      required={required}
    />
    {showToggle && (
      <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[#00E0FF]">
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    )}
  </div>
);

// ---------------- SignIn Form ----------------
const SignInForm = ({ formData, handleChange, handleSubmit, showPassword, setShowPassword, loading }) => (
  <motion.form
    key="signin"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.4 }}
    onSubmit={handleSubmit}
    className="flex flex-col gap-6"
  >
    <InputField icon={Mail} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required={true} />
    <InputField
      icon={Lock}
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      showToggle
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      required
    />
    <button
      type="submit"
      disabled={loading}
      className="bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl py-3 font-semibold hover:shadow-[0_0_20px_#00E0FF80] transition disabled:opacity-50 flex justify-center items-center"
    >
      {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
    </button>
  </motion.form>
);

// ---------------- SignUp Form ----------------
const SignUpForm = ({
  formData,
  handleChange,
  handleSubmit,
  handleToggleField,
  activeFields,
  handleFieldPasswordChange,
  showPassword,
  setShowPassword,
  loading,
}) => {
  const fields = ["sport", "forex", "crypto", "news", "film", "game"];

  return (
    <motion.form
      key="signup"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <InputField icon={User} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <InputField icon={Mail} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <InputField
        icon={Lock}
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        showToggle
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        required
      />

      {/* Field Toggles */}
      <div>
        <p className="text-[#A5A9B8] mb-2 text-sm">Access Sections:</p>
        <div className="flex flex-wrap gap-3">
          {fields.map((field) => (
            <div key={field} className="flex flex-col items-start">
              <label className="flex items-center gap-2 text-sm text-white">
                <input
                  type="checkbox"
                  checked={activeFields[field] || false}
                  onChange={() => handleToggleField(field)}
                  className="accent-[#00E0FF] w-4 h-4"
                />
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {activeFields[field] && (
                <input
                  type="password"
                  placeholder={`Enter ${field} access key`}
                  required
                  onChange={(e) => handleFieldPasswordChange(field, e.target.value)}
                  className="mt-2 px-3 py-2 text-sm bg-[#0A0F1C] border border-[#1C2541] rounded-lg text-white focus:border-[#00E0FF] outline-none"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl py-3 font-semibold hover:shadow-[0_0_20px_#00E0FF80] transition disabled:opacity-50 flex justify-center items-center"
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign Up"}
      </button>
    </motion.form>
  );
};

// ---------------- Main Component ----------------
const AdminAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeFields, setActiveFields] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", password: "", fieldPasswords: {} });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleToggleField = (field) => {
    setActiveFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFieldPasswordChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      fieldPasswords: { ...prev.fieldPasswords, [field]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const endpoint = isSignup ? "/api/admin/signup" : "/api/admin/signin";
      const payload = isSignup
        ? formData
        : { email: formData.email, password: formData.password };

      const res = await publicApi.post(`${BackEndUrl}${endpoint}`, payload);

      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("adminData", JSON.stringify(res.data.admin));
        setSuccessMsg(isSignup ? "Signup successful!" : "Signin successful!");
      }
      
      setFormData({ name: "", email: "", password: "", fieldPasswords: {} })
      window.location.reload();
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#141A29] rounded-2xl shadow-[0_0_25px_#00E0FF20] p-8 relative overflow-hidden"
      >
        {/* Toggle */}
        <div className="flex justify-between mb-8">
          <h2
            onClick={() => setIsSignup(false)}
            className={`cursor-pointer font-['Bebas Neue'] text-2xl md:text-3xl ${!isSignup ? "text-[#00E0FF]" : "text-gray-400"}`}
          >
            Sign In
          </h2>
          <h2
            onClick={() => setIsSignup(true)}
            className={`cursor-pointer font-['Bebas Neue'] text-2xl md:text-3xl ${isSignup ? "text-[#00E0FF]" : "text-gray-400"}`}
          >
            Sign Up
          </h2>
        </div>

        {errorMsg && <p className="text-red-400 text-sm mb-3">{errorMsg}</p>}
        {successMsg && <p className="text-green-400 text-sm mb-3">{successMsg}</p>}

        <AnimatePresence mode="wait">
          {!isSignup ? (
            <SignInForm {...{ formData, handleChange, handleSubmit, showPassword, setShowPassword, loading }} />
          ) : (
            <SignUpForm
              {...{
                formData,
                handleChange,
                handleSubmit,
                handleToggleField,
                activeFields,
                handleFieldPasswordChange,
                showPassword,
                setShowPassword,
                loading,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AdminAuth;