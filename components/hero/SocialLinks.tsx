import { FaFacebookF, FaGithub } from "react-icons/fa";
import { SiZalo, SiTiktok } from "react-icons/si";

const ICON_SIZE = "h-5 w-5";

const FACEBOOK_URL =
  "https://www.facebook.com/share/1Hkukq5zck/?mibextid=wwXIfr";
const GITHUB_URL = "https://github.com/dangvanphucnghia";
const PHONE = "0368285760";
const ZALO_URL = `https://zalo.me/${PHONE}`;
const TIKTOK_URL = "https://www.tiktok.com/@userj86039obka";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {/* Facebook */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#ffbd3e] text-white"
      >
        <FaFacebookF className={ICON_SIZE} />
      </a>

      {/* Zalo */}
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Zalo"
        className="grid h-14 w-14 place-items-center rounded-full border border-white/55 bg-black/10 text-white"
      >
        <SiZalo className={ICON_SIZE} />
      </a>

      {/* TikTok */}
      <a
        href={TIKTOK_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        className="grid h-14 w-14 place-items-center rounded-full border border-white/55 bg-black/10 text-white transition hover:bg-black/20"
      >
        <SiTiktok className={ICON_SIZE} />
      </a>

      {/* GitHub */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="grid h-14 w-14 place-items-center"
      >
        <div className="grid h-14 w-14 place-items-center rotate-45 rounded-2xl border border-white/55 bg-black/10">
          <div className="-rotate-45 text-white">
            <FaGithub className="h-6 w-6" />
          </div>
        </div>
      </a>
    </div>
  );
}
