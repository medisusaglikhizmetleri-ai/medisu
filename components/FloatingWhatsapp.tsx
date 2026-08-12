import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/905396952989"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden iletişime geç"
      className="
        fixed
        bottom-4 right-3
        z-50
        flex h-12 w-12
        items-center justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-xl
        transition
        hover:scale-110
        hover:bg-green-600
        sm:bottom-6 sm:right-6
        sm:h-14 sm:w-14
      "
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
