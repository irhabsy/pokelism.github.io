import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Gamepad2, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function PokelismDashboard() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex h-screen bg-gradient-to-br from-sky-100 to-blue-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 backdrop-blur-lg border-r border-white/30 flex flex-col p-4">
        <h1 className="text-2xl font-bold text-sky-700 mb-8">Pokelism</h1>
        <nav className="flex flex-col gap-3">
          <Button variant={activeTab === "home" ? "default" : "ghost"} className="justify-start" onClick={() => setActiveTab("home")}>
            <Home className="mr-2" /> Home
          </Button>
          <Button variant={activeTab === "game" ? "default" : "ghost"} className="justify-start" onClick={() => setActiveTab("game")}>
            <Gamepad2 className="mr-2" /> Game
          </Button>
          <Button variant={activeTab === "contact" ? "default" : "ghost"} className="justify-start" onClick={() => setActiveTab("contact")}>
            <Phone className="mr-2" /> Contact
          </Button>
        </nav>
        <div className="mt-auto text-xs text-gray-500 text-center">© 2025 Pokelism</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "home" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Selamat datang di Pokelism 👋</h2>
            <p className="text-gray-600 max-w-2xl mb-6">
              Pokelism adalah platform jual beli item Roblox yang aman dan cepat. Saat ini kami fokus pada game <strong>Fisch</strong>, namun ke depannya akan mendukung berbagai game Roblox lainnya.
            </p>
            <Card className="max-w-md bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Kenapa Pokelism?</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>Transaksi cepat dan aman</li>
                  <li>Harga item yang kompetitif</li>
                  <li>Dukungan untuk berbagai game Roblox</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "game" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Game yang Tersedia 🎮</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-md">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <img src="https://tr.rbxcdn.com/edb7278cce0d1b37b648a3c5c9a23b0d/420/420/GameIcon/Png" alt="Fisch" className="w-24 h-24 rounded-xl mb-4" />
                  <h3 className="font-semibold text-lg">Fisch</h3>
                  <p className="text-gray-600 text-sm mb-3">Jual beli item langka, rod, dan bait di game Fisch!</p>
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white w-full">Lihat Item</Button>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-md flex items-center justify-center h-48">
                <p className="text-gray-400 text-center">Segera hadir game lain...</p>
              </Card>
            </div>
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Kami 📞</h2>
            <p className="text-gray-600 mb-6">Kami siap membantu melalui platform berikut:</p>
            <div className="space-y-4">
              <Card className="bg-white/80">
                <CardContent className="p-4">
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890" className="text-sky-600">+62 812 3456 7890</a></p>
                  <p><strong>Instagram:</strong> <a href="https://instagram.com/pokelism" className="text-sky-600">@pokelism</a></p>
                  <p><strong>Discord:</strong> <a href="https://discord.gg/pokelism" className="text-sky-600">discord.gg/pokelism</a></p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
