import { Presentation } from "@/components/Presentation";
import PasswordGate from "@/components/PasswordGate";
import { useUnlocked } from "@/hooks/use-unlocked";

const Index = () => {
  const { unlocked, unlock } = useUnlocked();
  if (!unlocked) return <PasswordGate onUnlock={unlock} />;
  return <Presentation />;
};

export default Index;
