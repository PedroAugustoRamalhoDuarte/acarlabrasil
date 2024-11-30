import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#f0e8db] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            <Link
              href="https://www.youtube.com/@acarlabrasil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cc1300] hover:text-[#a81000] transition-colors duration-200 flex items-center gap-2"
            >
              <Youtube className="h-6 w-6" />
              <span className="font-medium">YouTube</span>
            </Link>
            <Link
              href="https://www.instagram.com/acarlabrasil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cc1300] hover:text-[#a81000] transition-colors duration-200 flex items-center gap-2"
            >
              <Instagram className="h-6 w-6" />
              <span className="font-medium">Instagram</span>
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} A Carla Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
