class ProjectModal extends HTMLElement {
  static get observedAttributes() {
    return ["active", "project-id"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", this.handleOutsideClick);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener("click", this.handleOutsideClick);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
  }

  get active() {
    return this.getAttribute("active") === "true";
  }

  get projectId() {
    return this.getAttribute("project-id");
  }

  /* ⭐ ARTIK HEM projects HEM projectsWeb DİZİSİNİ OKUYOR ⭐ */
  get project() {
    const data = window.SITE_DATA || {};

    let p = (data.projects || []).find(pr => pr.id === this.projectId);

    if (!p) {
      p = (data.projectsWeb || []).find(pr => pr.id === this.projectId);
    }

    return p || null;
  }

  close() {
    this.setAttribute("active", "false");
    this.removeAttribute("project-id");
  }

  handleOutsideClick(e) {
    const modal = this.shadowRoot.querySelector(".modal");
    if (!modal) return;

    if (
      e.target.classList.contains("overlay") ||
      e.target.getAttribute("data-close") === "true"
    ) {
      this.close();
    }
  }

  render() {
    if (!this.active || !this.project) {
      this.shadowRoot.innerHTML = "";
      return;
    }

    const p = this.project;
    const works = p.works || [];
    const tech = p.tech || [];
    const stats = p.stats || {};
    const images = p.images || [];

    this.shadowRoot.innerHTML = `
      <style>
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .modal {
          width: 100%;
          max-width: 880px;
          max-height: 85vh;
          background: #020617;
          border-radius: 1.2rem;
          border: 1px solid rgba(30,64,175,0.7);
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* SLIDER */
        .slider-wrapper {
          position: relative;
          width: 100%;
          height: 210px;
        }

        .image-slider {
          width: 100%;
          height: 210px;
          border-radius: 12px;
          overflow: hidden;
          white-space: nowrap;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          background: #000;
        }

        .slide {
          width: 100%;
          height: 210px;
          display: inline-block;
          scroll-snap-align: start;
        }

        .slide img {
          width: 100%;
          height: 210px;
          object-fit: contain;
          background: #000;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,0,0,0.45);
          border: 1px solid rgba(56,189,248,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
        }

        .slider-btn.left { left: 8px; }
        .slider-btn.right { right: 8px; }

        .modal-header {
          display: flex;
          justify-content: space-between;
        }

        .badge {
          padding: .2rem .6rem;
          border-radius: 999px;
          background: rgba(15,23,42,0.9);
          border: 1px solid rgba(56,189,248,0.6);
          font-size: .7rem;
          color: #22d3ee;
        }

        .close-btn {
          width: 2rem;
          height: 2rem;
          border-radius: 999px;
          border: 1px solid rgba(148,163,184,0.7);
          background: rgba(15,23,42,0.9);
          cursor:pointer;
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.25rem;
        }

        @media(max-width:768px){
          .modal-body { grid-template-columns:1fr; }
        }

        .section-title {
          font-size:.8rem;
          color:rgba(148,163,184,0.9);
          margin-bottom:.5rem;
        }

        ul{list-style:none;margin:0;padding:0;}
        li{display:flex;gap:.45rem;margin-bottom:.3rem;}

        .bullet{
          width:.32rem;height:.32rem;
          background:#22d3ee;
          border-radius:999px;
          margin-top:.4rem;
        }

        .stat-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:.5rem;
        }
      </style>

      <div class="overlay" data-close="true">
        <div class="modal" data-close="false">

          <div class="modal-header">
            <div>
              <div class="badge">${p.category}</div>
              <h2 style="margin-top:.4rem;font-size:1.2rem;font-weight:700;">${p.title}</h2>
              <p>${p.highlight || p.shortDescription}</p>
            </div>

            <button class="close-btn" data-close="true">
              <i data-feather="x"></i>
            </button>
          </div>

          ${images.length > 0 ? `
          <div class="slider-wrapper">
            <button class="slider-btn left" id="slider-left"><i data-feather="chevron-left"></i></button>
            <div class="image-slider" id="slider-track">
              ${images.map(img => `<div class="slide"><img src="${img}"></div>`).join("")}
            </div>
            <button class="slider-btn right" id="slider-right"><i data-feather="chevron-right"></i></button>
          </div>` : ""}

          <div class="modal-body">

            <div>
              <div class="section-title">Yaptığımız işler</div>
              <ul>
                ${works.map(w => `
                  <li><span class="bullet"></span>${w}</li>
                `).join("")}
              </ul>
            </div>

            <div>
              <div class="section-title">Teknik taraf & süreç</div>

              <div class="stat-grid">
                <div>
                  <span class="text-xs text-slate-400">Teslim süresi</span><br>
                  <span class="text-sm font-semibold">${stats.time}</span>
                </div>
                <div>
                  <span class="text-xs text-slate-400">Platform</span><br>
                  <span class="text-sm font-semibold">${stats.platform}</span>
                </div>
                <div>
                  <span class="text-xs text-slate-400">Durum</span><br>
                  <span class="text-sm font-semibold">${stats.status}</span>
                </div>
                <div>
                  <span class="text-xs text-slate-400">Teknolojiler</span><br>
                  <span class="text-sm font-semibold">${tech.join(", ")}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;

    /* Slider JS */
    const track = this.shadowRoot.querySelector("#slider-track");
    const btnLeft = this.shadowRoot.querySelector("#slider-left");
    const btnRight = this.shadowRoot.querySelector("#slider-right");

    if (track) {
      btnLeft?.addEventListener("click", () => {
        track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
      });

      btnRight?.addEventListener("click", () => {
        track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
      });
    }

    feather.replace({
      elements: this.shadowRoot.querySelectorAll("[data-feather]")
    });
  }
}

customElements.define("project-modal", ProjectModal);
