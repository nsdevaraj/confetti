import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Confetti } from '@/components/ui/confetti';
import { Sparkles } from 'lucide-react';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">✨ Confetti Demo ✨</h1>
        
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg transform transition hover:scale-105"
          onClick={handleClick}
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Celebrate!
        </Button>

        <Confetti
          active={showConfetti}
          duration={3000}
          onComplete={() => setShowConfetti(false)}
        />
      </div>
    </div>
  );
}

export default App;