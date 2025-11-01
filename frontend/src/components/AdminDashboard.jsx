import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Film, Gamepad2, Send, Image, Type, List, Link, Star, Loader2 } from "lucide-react";
import { publicApi } from "./Api";
const BackEndUrl = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image_url: "",
    genre: "",
    rating: "",
    link: "",
    badges: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem("adminData"));
    if (storedAdmin) {
      setAdmin(storedAdmin);
      setActiveTab(storedAdmin.fields[0]); // default to first field
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e, field) => {
    e.preventDefault();
    setMessage("");
    setLoading(true)
    try {
      const res = await publicApi.post(`${BackEndUrl}/api/posts/${field}`, {
        ...postData,
        category: activeTab,
        admin_id: admin?.id,
      });
      setMessage(`✅ Successfully posted to ${activeTab?.toUpperCase()}!`);
      setPostData({
        title: "",
        content: "",
        image_url: "",
        genre: "",
        rating: "",
        link: "",
        badges: "",
      });
    } catch (err) {
      console.error(err);
      setMessage(`❌ Failed to post to ${activeTab?.toUpperCase()}`);
    }finally{
      setLoading(false)
    }
  };

  if (!admin) return <p className="text-center text-white mt-20">Please sign in as an admin.</p>;

  const iconMap = {
    sport: <FileText size={18} />,
    forex: <FileText size={18} />,
    crypto: <FileText size={18} />,
    news: <FileText size={18} />,
    film: <Film size={18} />,
    game: <Gamepad2 size={18} />,
  };

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-['Bebas Neue'] text-center mb-10 text-[#00E0FF]">
          Admin Dashboard – Post Manager
        </h1>

        <p className="text-center text-sm text-gray-400 mb-8">
          Logged in as <span className="text-[#00E0FF]">{admin.name}</span> | Accessible Fields:{" "}
          {admin.fields.join(", ")}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {admin.fields.map((field) => (
            <button
              disabled={loading}
              key={field}
              onClick={() => {
                setActiveTab(field)
                setMessage("")
                if(activeTab !== field){
                  setPostData(
                {
                 title: "",
                 content: "",
                 image_url: "",
                 genre: "",
                 rating: "",
                 link: "",
                 badges: ""
                }
                )
                }
              }}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeTab === field
                  ? "bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white shadow-[0_0_15px_#00E0FF70]"
                  : "bg-[#141A29] text-gray-400 hover:text-white border border-[#1C2541]"
              }`}
            >
              <div className="flex items-center gap-2 capitalize">
                {iconMap[field]} {field}
              </div>
            </button>
          ))}
        </div>


        {/* Forms */}
        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-[#141A29] p-8 rounded-2xl shadow-[0_0_25px_#00E0FF20]"
            >
              {["sport", "forex", "crypto", "news"].includes(activeTab) && (
                <form onSubmit={(e) => handleSubmit(e, "post")} className="space-y-4">
                  <SectionHeader icon={<FileText size={22} />} title={`Post to ${activeTab.toUpperCase()}`} />
                  <Input label="Title" name="title" icon={<Type size={18} />} value={postData.title} onChange={handleChange} required />
                  <Input label="Content" name="content" icon={<FileText size={18} />} textarea value={postData.content} onChange={handleChange} required />
                  <Input label="Image URL" name="image_url" icon={<Image size={18} />} value={postData.image_url} onChange={handleChange} required />
                  
                  {/* Message */}
                  {message && (
                   <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 text-white"
                   >
                       {message}
                    </motion.div>
                  )}
                  <SubmitButton loading={loading}/>
                </form>
              )}

              {activeTab === "film" && (
                <form onSubmit={(e) => handleSubmit(e, "film")} className="space-y-4">
                  <SectionHeader icon={<Film size={22} />} title="Post a Film" />
                  <Input label="Title" name="title" icon={<Type size={18} />} value={postData.title} onChange={handleChange} required />
                  <Input label="Genre (comma separated)" name="genre" icon={<List size={18} />} value={postData.genre} onChange={handleChange} />
                  <Input label="Rating" name="rating" icon={<Star size={18} />} value={postData.rating} onChange={handleChange} />
                  <Input label="Image URL" name="image_url" icon={<Image size={18} />} value={postData.image_url} onChange={handleChange} required />
                  <Input label="Telegram Link" name="link" icon={<Link size={18} />} value={postData.link} onChange={handleChange} required />
                  
                  {/* Message */}
                  {message && (
                   <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 text-white"
                   >
                      {message}
                   </motion.div>
                  )}
                  <SubmitButton loading={loading}/>
                </form>
              )}

              {activeTab === "game" && (
                <form onSubmit={(e) => handleSubmit(e, "game")} className="space-y-4">
                  <SectionHeader icon={<Gamepad2 size={22} />} title="Post a Game" />
                  <Input label="Title" name="title" icon={<Type size={18} />} value={postData.title} onChange={handleChange} required />
                  <Input label="Badges (comma separated)" name="badges" icon={<List size={18} />} value={postData.badges} onChange={handleChange} />
                  <Input label="Image URL" name="image_url" icon={<Image size={18} />} value={postData.image_url} onChange={handleChange} required />
                  <Input label="Telegram Link" name="link" icon={<Link size={18} />} value={postData.link} onChange={handleChange} required />
                  
                  {/* Message */}
                  {message && (
                   <motion.div
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-center mb-8 text-white"
                   >
                     {message}
                   </motion.div>
                  )}
                  <SubmitButton loading={loading}/>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ---------------- REUSABLE COMPONENTS ---------------- */

const SectionHeader = ({ icon, title }) => (
  <h2 className="flex items-center gap-2 text-2xl font-['Bebas Neue'] mb-4">
    {icon} {title}
  </h2>
);

const Input = ({ label, icon, textarea, ...props }) => (
  <div>
    <label className="block text-sm text-[#A5A9B8] mb-2">{label}</label>
    <div className="flex items-start gap-3 bg-[#0A0F1C] rounded-xl px-4 py-3 border border-[#1C2541] focus-within:border-[#00E0FF]">
      <span className="mt-1 text-[#00E0FF]">{icon}</span>
      {textarea ? (
        <textarea {...props} rows={5} className="bg-transparent text-white outline-none w-full resize-none" />
      ) : (
        <input {...props} className="bg-transparent text-white outline-none w-full" />
      )}
    </div>
  </div>
);

const SubmitButton = ({loading}) => (
 <button
  disabled={loading}
  type="submit"
  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl py-3 px-6 font-semibold hover:shadow-[0_0_20px_#00E0FF80] transition"
>
  {loading ? (
    <Loader2 className="animate-spin text-[#FFFFFF]" size={25} />
  ) : (
    <>
      <Send size={16} /> Post
    </>
  )}
</button>
);

export default AdminDashboard;