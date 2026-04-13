import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
// Import the song from the assets folder directly
import MUSIC_FILE from "@/assets/Gehra Hua.mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // We create the audio element once and store it in ref
    const audio = new Audio(MUSIC_FILE);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // By the time this component mounts, the user has already clicked 
    // the envelope intro, satisfying the browser's autoplay policy.
    const playAudio = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.warn("Autoplay blocked or failed:", err);
        setPlaying(false);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(e => console.warn(e));
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-foreground" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default MusicPlayer;
