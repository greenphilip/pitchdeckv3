import { useState, useRef, FormEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import { Lock } from "lucide-react";
import { Input } from "@/components/ui/input";

const PASSWORD = "GLACIER_2026";
const STORAGE_KEY = "glacier.unlocked";

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate = ({ onUnlock }: PasswordGateProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // ignore
      }
      onUnlock();
    } else {
      setError(true);
      controls.start({
        x: [0, -10, 10, -8, 8, -4, 4, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      });
      setValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#143560" }}
    >
      <motion.div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 720,
          height: 720,
          background: "radial-gradient(circle, #6DD4AD 0%, transparent 65%)",
          opacity: 0.18,
          filter: "blur(40px)",
          top: "-10%",
          right: "-10%",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 560,
          height: 560,
          background: "radial-gradient(circle, #539ADB 0%, transparent 65%)",
          opacity: 0.12,
          filter: "blur(40px)",
          bottom: "-15%",
          left: "-10%",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-auto px-8"
      >
        <div className="flex items-center gap-3 mb-12">
          <motion.div
            className="rounded-full"
            style={{ width: 10, height: 10, backgroundColor: "#6DD4AD" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ color: "#F1F1F1", fontFamily: "Inter, sans-serif" }}
          >
            Glacier
          </span>
        </div>

        <motion.div
          animate={controls}
          className="rounded-2xl p-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(83, 154, 219, 0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="inline-flex items-center justify-center rounded-full mb-6"
            style={{
              width: 44,
              height: 44,
              backgroundColor: "rgba(109, 212, 173, 0.12)",
              border: "1px solid rgba(109, 212, 173, 0.3)",
            }}
          >
            <Lock size={20} strokeWidth={1.5} style={{ color: "#6DD4AD" }} />
          </div>

          <h1
            className="text-3xl font-bold tracking-tight mb-2"
            style={{ color: "#F1F1F1", fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
          >
            Investor preview
          </h1>
          <p
            className="text-base mb-8"
            style={{ color: "#F1F1F1", opacity: 0.7, fontFamily: "Inter, sans-serif" }}
          >
            Enter passcode to view the deck.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              ref={inputRef}
              type="password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Passcode"
              className="h-12 text-base border-0 focus-visible:ring-2 focus-visible:ring-offset-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                color: "#F1F1F1",
                // @ts-expect-error css var
                "--tw-ring-color": "#6DD4AD",
              }}
              aria-invalid={error}
            />

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm"
                style={{ color: "#6DD4AD", fontFamily: "Inter, sans-serif" }}
              >
                Incorrect passcode
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-md font-semibold text-base transition-all hover:opacity-90 active:scale-[0.99]"
              style={{
                backgroundColor: "#6DD4AD",
                color: "#143560",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Unlock deck
            </button>
          </form>
        </motion.div>

        <p
          className="text-xs mt-8 text-center"
          style={{ color: "#F1F1F1", opacity: 0.4, fontFamily: "Inter, sans-serif" }}
        >
          April 2026 · Bridge round
        </p>
      </motion.div>
    </div>
  );
};

export default PasswordGate;
