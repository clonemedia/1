class CustomFooter extends HTMLElement {
  connectedCallback() {
    const social = (window.SITE_DATA && window.SITE_DATA.social) || {};
    this.innerHTML = `
      <footer class="bg-black border-t border-slate-800 pt-10 pb-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-[1.6fr_1.2fr] gap-8 items-start mb-8">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-neon-blue/70 mb-2">iletişim</p>
              <h2 class="text-2xl font-bold mb-2">Hadi işini neon moda alalım.</h2>
              <p class="text-sm text-slate-400 max-w-md">
                Ne istediğini uzun uzun yazmana gerek yok. Kısaca anlat, gerisini birlikte çözeriz.
                Telegram’dan yazabilir ya da direkt sosyal medya üzerinden ulaşabilirsin.
              </p>
              <div class="flex flex-wrap gap-3 mt-4 text-sm">
                ${
                  social.telegram
                    ? `
                <a href="${social.telegram}" target="_blank"
                   class="inline-flex items-center px-3 py-1.5 rounded-xl bg-neon-blue text-black font-semibold text-xs hover:shadow-[0_0_25px_rgba(0,245,255,0.7)] transition">
                  <i data-feather="send" class="w-4 h-4 mr-1.5"></i>
                  Telegram
                </a>
                `
                    : ""
                }
                ${
                  social.instagram
                    ? `
                <a href="${social.instagram}" target="_blank"
                   class="inline-flex items-center px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200 text-xs hover:border-neon-purple hover:text-neon-purple transition">
                  <i data-feather="instagram" class="w-4 h-4 mr-1.5"></i>
                  Instagram
                </a>
                `
                    : ""
                }
                ${
                  social.discord
                    ? `
                <a href="${social.discord}" target="_blank"
                   class="inline-flex items-center px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200 text-xs hover:border-neon-blue hover:text-neon-blue transition">
                  <i data-feather="message-square" class="w-4 h-4 mr-1.5"></i>
                  Discord
                </a>
                `
                    : ""
                }
                ${
                  social.mail
                    ? `
                <a href="${social.mail}"
                   class="inline-flex items-center px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200 text-xs hover:border-neon-blue hover:text-neon-blue transition">
                  <i data-feather="mail" class="w-4 h-4 mr-1.5"></i>
                  Mail
                </a>
                `
                    : ""
                }
              </div>
            </div>

            <div class="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300">
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] text-slate-400">Proje notu</span>
                <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                  <span>Yeni bot / tasarım için açık</span>
                </span>
              </div>
              <p class="text-[11px] leading-relaxed">
                Telegram botu, site veya sosyal medya paketine karar veremiyorsan sorun değil.
                Mevcut kanal / sayfana göre sana uygun, sade ama ölçeklenebilir bir set çıkarıyoruz.
              </p>
            </div>
          </div>

          <div class="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <span>© ${new Date().getFullYear()} Kodflys · Neon Rüyası</span>
            <span class="flex items-center gap-1">
              <i data-feather="code" class="w-3 h-3"></i>
              <span>Kullanımınız boyunca teknik, bütün konullarda destek sağlıyoruz.</span>
            </span>
          </div>
        </div>
      </footer>
    `;

    if (typeof feather !== "undefined") {
      feather.replace();
    }
  }
}

customElements.define("custom-footer", CustomFooter);
